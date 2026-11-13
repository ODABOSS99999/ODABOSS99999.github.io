"""Open the private daily planning link when a visible Chrome session starts.

No profile access or network reads. Run with pythonw for a background watcher.
"""
import argparse
import ctypes
from ctypes import wintypes
from datetime import date, datetime, timedelta, timezone
import json
import logging
from logging.handlers import RotatingFileHandler
import os
from pathlib import Path
import re
import sqlite3
import subprocess
import time
from urllib.parse import quote

DEFAULT_WORKSPACE = Path(r"C:\Users\owenm\Documents\ChatGPT\personal assistant")
DEFAULT_FOLDER = "1Bq5s-ha_tr4K_i6r2LxLMa3WzXFX2Lrq"
ID = re.compile(r"^[A-Za-z0-9_-]+$")
LOG = logging.getLogger("today-launcher")


def chicago_day(now=None):
    """Chicago calendar day, including DST, without a Windows tzdata dependency."""
    now = (now or datetime.now(timezone.utc)).astimezone(timezone.utc)
    # US Central DST rules since 2007. The launcher is for present-day planning.
    march = date(now.year, 3, 8)
    november = date(now.year, 11, 1)
    start = datetime.combine(march + timedelta(days=(6 - march.weekday()) % 7),
                             datetime.min.time(), timezone.utc).replace(hour=8)
    end = datetime.combine(november + timedelta(days=(6 - november.weekday()) % 7),
                           datetime.min.time(), timezone.utc).replace(hour=7)
    return (now + timedelta(hours=-5 if start <= now < end else -6)).date().isoformat()


def read_documents(db_path):
    """Mirror assistant.py context precedence without mutating its database."""
    result = {}
    uri = Path(db_path).resolve().as_uri() + "?mode=ro"
    try:
        with sqlite3.connect(uri, uri=True, timeout=2) as connection:
            for key in ("codex_handoff", "gemini_handoff"):
                row = connection.execute("SELECT value FROM kv WHERE key=?", (key,)).fetchone()
                if row:
                    try:
                        value = json.loads(row[0]).get("documents", {})
                        if isinstance(value, dict):
                            result.update(value)
                    except (ValueError, AttributeError, TypeError):
                        LOG.warning("Invalid document handoff: %s", key)
    except (sqlite3.Error, OSError, ValueError):
        LOG.warning("Assistant database unavailable")
    return result


def resolve_target(day, manifest_path, db_path):
    manifest = {}
    try:
        manifest = json.loads(Path(manifest_path).read_text(encoding="utf-8-sig"))
        if not isinstance(manifest, dict):
            manifest = {}
    except (OSError, ValueError):
        LOG.warning("Daily document manifest unavailable")
    documents = manifest.get("documents", {})
    documents = dict(documents) if isinstance(documents, dict) else {}
    documents.update(read_documents(db_path))
    entry = documents.get(day, {})
    doc_id = entry.get("id") if isinstance(entry, dict) else None
    if isinstance(doc_id, str) and ID.fullmatch(doc_id):
        return f"https://docs.google.com/document/d/{doc_id}/edit"
    folder = manifest.get("folder_id", DEFAULT_FOLDER)
    if not isinstance(folder, str) or not ID.fullmatch(folder):
        folder = DEFAULT_FOLDER
    return f"https://drive.google.com/drive/folders/{folder}"


def launcher_url(day, target, base="https://mcgowen.works/today/"):
    return base.rstrip("/") + "/#" + quote(json.dumps({"date": day, "url": target},
                                                     separators=(",", ":")), safe="")


def visible_chrome():
    """Return an executable owning a visible top-level Chrome window, or None."""
    if os.name != "nt":
        return None
    user = ctypes.WinDLL("user32", use_last_error=True)
    kernel = ctypes.WinDLL("kernel32", use_last_error=True)
    callback_type = ctypes.WINFUNCTYPE(wintypes.BOOL, wintypes.HWND, wintypes.LPARAM)
    user.EnumWindows.argtypes = [callback_type, wintypes.LPARAM]
    user.EnumWindows.restype = wintypes.BOOL
    user.IsWindowVisible.argtypes = [wintypes.HWND]
    user.IsWindowVisible.restype = wintypes.BOOL
    user.GetClassNameW.argtypes = [wintypes.HWND, wintypes.LPWSTR, ctypes.c_int]
    user.GetWindowTextLengthW.argtypes = [wintypes.HWND]
    user.GetWindowThreadProcessId.argtypes = [wintypes.HWND, ctypes.POINTER(wintypes.DWORD)]
    kernel.OpenProcess.argtypes = [wintypes.DWORD, wintypes.BOOL, wintypes.DWORD]
    kernel.OpenProcess.restype = wintypes.HANDLE
    kernel.QueryFullProcessImageNameW.argtypes = [wintypes.HANDLE, wintypes.DWORD,
                                                wintypes.LPWSTR, ctypes.POINTER(wintypes.DWORD)]
    kernel.QueryFullProcessImageNameW.restype = wintypes.BOOL
    kernel.CloseHandle.argtypes = [wintypes.HANDLE]
    found = []

    @callback_type
    def visit(hwnd, _):
        if not user.IsWindowVisible(hwnd):
            return True
        window_class = ctypes.create_unicode_buffer(256)
        user.GetClassNameW(hwnd, window_class, len(window_class))
        if window_class.value != "Chrome_WidgetWin_1" or not user.GetWindowTextLengthW(hwnd):
            return True
        pid = wintypes.DWORD()
        user.GetWindowThreadProcessId(hwnd, ctypes.byref(pid))
        handle = kernel.OpenProcess(0x1000, False, pid.value)
        if not handle:
            return True
        try:
            size = wintypes.DWORD(32768)
            buffer = ctypes.create_unicode_buffer(size.value)
            if kernel.QueryFullProcessImageNameW(handle, 0, buffer, ctypes.byref(size)):
                if Path(buffer.value).name.lower() == "chrome.exe":
                    found.append(buffer.value)
                    return False
        finally:
            kernel.CloseHandle(handle)
        return True

    user.EnumWindows(visit, 0)
    return found[0] if found else None


class SingleInstance:
    def __init__(self, name=r"Local\McGowenTodayLauncher"):
        self.handle = None
        self.kernel = None
        self.name = name

    def __enter__(self):
        if os.name != "nt":
            return self
        self.kernel = ctypes.WinDLL("kernel32", use_last_error=True)
        self.kernel.CreateMutexW.argtypes = [ctypes.c_void_p, wintypes.BOOL, wintypes.LPCWSTR]
        self.kernel.CreateMutexW.restype = wintypes.HANDLE
        self.kernel.CloseHandle.argtypes = [wintypes.HANDLE]
        self.handle = self.kernel.CreateMutexW(None, False, self.name)
        error = ctypes.get_last_error()
        if not self.handle:
            raise OSError(error, "Cannot create launcher mutex")
        if error == 183:
            self.kernel.CloseHandle(self.handle)
            self.handle = None
            return None
        return self

    def __exit__(self, *_):
        if self.handle:
            self.kernel.CloseHandle(self.handle)


def open_chrome(executable, url):
    subprocess.Popen([executable, "--new-tab", url], close_fds=True,
                     creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0))


class Watcher:
    def __init__(self, manifest, db, base, detect=visible_chrome, opening=open_chrome):
        self.manifest, self.db, self.base = manifest, db, base
        self.detect, self.opening = detect, opening
        self.was_open = False
        self.opened_day = None
        self.opened_target = None

    def poll(self, day, dry_run=False):
        executable = self.detect()
        if not executable:
            self.was_open = False
            return None
        target = resolve_target(day, self.manifest, self.db)
        if self.was_open and self.opened_day == day and self.opened_target == target:
            return None
        url = launcher_url(day, target, self.base)
        if not dry_run:
            self.opening(executable, url)
        self.was_open, self.opened_day = True, day
        self.opened_target = target
        LOG.info("Daily launcher opened for %s%s", day, " (dry run)" if dry_run else "")
        return url


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--workspace", type=Path, default=DEFAULT_WORKSPACE)
    parser.add_argument("--manifest", type=Path)
    parser.add_argument("--db", type=Path)
    parser.add_argument("--log", type=Path)
    parser.add_argument("--base-url", default="https://mcgowen.works/today/")
    parser.add_argument("--interval", type=float, default=7)
    parser.add_argument("--once", action="store_true")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--day", type=lambda value: date.fromisoformat(value).isoformat())
    args = parser.parse_args(argv)
    if not 5 <= args.interval <= 10:
        parser.error("--interval must be between 5 and 10 seconds")
    private = args.workspace / ".assistant"
    log_path = args.log or private / "today-launcher.log"
    log_path.parent.mkdir(parents=True, exist_ok=True)
    handler = RotatingFileHandler(log_path, maxBytes=64000, backupCount=2, encoding="utf-8")
    handler.setFormatter(logging.Formatter("%(asctime)s %(levelname)s %(message)s"))
    LOG.addHandler(handler)
    LOG.setLevel(logging.INFO)
    watcher = Watcher(args.manifest or private / "today-documents.json",
                      args.db or private / "state.sqlite3", args.base_url)
    with SingleInstance() as instance:
        if instance is None:
            return 0
        while True:
            try:
                result = watcher.poll(args.day or chicago_day(), args.dry_run)
                if args.dry_run and result:
                    print(result)
            except Exception as error:
                LOG.error("Launcher poll failed: %s", type(error).__name__)
            if args.once:
                return 0
            time.sleep(args.interval)


if __name__ == "__main__":
    raise SystemExit(main())
