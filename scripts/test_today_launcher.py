import importlib.util
import json
from pathlib import Path
import sqlite3
import tempfile
import unittest
from unittest.mock import Mock
from datetime import datetime, timezone
from urllib.parse import unquote, urlsplit

spec = importlib.util.spec_from_file_location("today_launcher", Path(__file__).with_name("today-launcher.py"))
launcher = importlib.util.module_from_spec(spec)
spec.loader.exec_module(launcher)


class TodayLauncherTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.manifest = self.root / "manifest.json"
        self.db = self.root / "state.sqlite3"
        self.manifest.write_text(json.dumps({"documents": {"2026-11-13": {"id": "manifest"}},
                                            "folder_id": "folder"}))
        with sqlite3.connect(self.db) as connection:
            connection.execute("CREATE TABLE kv(key TEXT PRIMARY KEY,value TEXT NOT NULL)")

    def handoff(self, owner, documents):
        with sqlite3.connect(self.db) as connection:
            connection.execute("INSERT OR REPLACE INTO kv VALUES (?,?)",
                               (owner + "_handoff", json.dumps({"documents": documents})))

    def test_current_context_precedence_and_read_only_database(self):
        self.handoff("codex", {"2026-11-13": {"id": "codex"}})
        self.handoff("gemini", {"2026-11-13": {"id": "gemini"}})
        before = self.db.read_bytes()
        self.assertEqual(launcher.resolve_target("2026-11-13", self.manifest, self.db),
                         "https://docs.google.com/document/d/gemini/edit")
        self.assertEqual(before, self.db.read_bytes())

    def test_manifest_and_folder_fallback(self):
        self.assertIn("/manifest/edit", launcher.resolve_target("2026-11-13", self.manifest, self.db))
        self.assertEqual(launcher.resolve_target("2026-11-14", self.manifest, self.db),
                         "https://docs.google.com/document/")

    def test_corrupt_and_missing_files_and_invalid_ids(self):
        self.manifest.write_text("broken")
        self.db.unlink()
        target = launcher.resolve_target("2026-11-13", self.manifest, self.db)
        self.assertEqual(target, "https://docs.google.com/document/")
        self.assertFalse(self.db.exists())
        self.manifest.write_text(json.dumps({"documents": {"2026-11-13": {"id": "bad/evil"}},
                                            "folder_id": "../evil"}))
        self.assertEqual(target, launcher.resolve_target("2026-11-13", self.manifest, self.db))

    def test_invalid_handoff_does_not_hide_other_valid_owner(self):
        self.handoff("codex", {"2026-11-13": {"id": "codex"}})
        with sqlite3.connect(self.db) as connection:
            connection.execute("INSERT INTO kv VALUES ('gemini_handoff', 'broken')")
        self.assertIn("/codex/edit", launcher.resolve_target("2026-11-13", self.manifest, self.db))

    def test_session_transitions_midnight_and_no_duplicate_polls(self):
        detect = Mock(side_effect=[None, "chrome.exe", "chrome.exe", "chrome.exe", None, "chrome.exe"])
        opening = Mock()
        watcher = launcher.Watcher(self.manifest, self.db, "https://mcgowen.works/today/", detect, opening)
        for day in ["2026-11-13"] * 3 + ["2026-11-14"] * 3:
            watcher.poll(day)
        self.assertEqual(opening.call_count, 3)
        self.assertEqual(opening.call_args_list[0].args[1],
                         "https://docs.google.com/document/d/manifest/edit")

    def test_failed_launch_is_retried_and_dry_run_never_opens(self):
        opening = Mock(side_effect=OSError("failed"))
        watcher = launcher.Watcher(self.manifest, self.db, "https://mcgowen.works/today/",
                                   lambda: "chrome.exe", opening)
        with self.assertRaises(OSError):
            watcher.poll("2026-11-13")
        self.assertFalse(watcher.was_open)
        self.assertIsNotNone(watcher.poll("2026-11-13", dry_run=True))
        self.assertIsNone(watcher.poll("2026-11-13", dry_run=True))
        self.assertEqual(opening.call_count, 1)

    def test_plan_becoming_available_opens_without_restarting_chrome(self):
        opening = Mock()
        watcher = launcher.Watcher(self.manifest, self.db, "https://mcgowen.works/today/",
                                   lambda: "chrome.exe", opening)
        watcher.poll("2026-11-14")
        self.handoff("gemini", {"2026-11-14": {"id": "new_document"}})
        watcher.poll("2026-11-14")
        watcher.poll("2026-11-14")
        self.assertEqual(opening.call_count, 2)
        self.assertIn("new_document", opening.call_args.args[1])

    def test_shortcut_launch_suppresses_delayed_duplicate(self):
        import time
        (self.root / "today-opened.json").write_text(json.dumps({
            "day": "2026-11-13", "target": "https://docs.google.com/document/d/manifest/edit",
            "time": time.time()}))
        opening = Mock()
        watcher = launcher.Watcher(self.manifest, self.db, "", lambda: "chrome.exe", opening)
        self.assertIsNone(watcher.poll("2026-11-13"))
        self.assertIsNone(watcher.poll("2026-11-13"))
        opening.assert_not_called()

    def test_chicago_midnight_and_dst_boundaries(self):
        for instant, expected in [("2026-11-13T05:59:00", "2026-11-12"),
                                  ("2026-11-13T06:00:00", "2026-11-13"),
                                  ("2026-07-01T04:59:00", "2026-06-30"),
                                  ("2026-07-01T05:00:00", "2026-07-01"),
                                  ("2026-03-08T08:00:00", "2026-03-08"),
                                  ("2026-11-01T07:00:00", "2026-11-01")]:
            with self.subTest(instant=instant):
                self.assertEqual(launcher.chicago_day(datetime.fromisoformat(instant).replace(tzinfo=timezone.utc)), expected)


if __name__ == "__main__":
    unittest.main()
