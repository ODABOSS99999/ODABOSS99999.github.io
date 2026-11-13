# Private daily launcher

`https://mcgowen.works/today/` is a standalone static page, separate from the portfolio. It automatically opens the current Chicago day's Google Doc. Private document IDs are passed in the URL fragment by the local helper, never published in the repository or sent to the website host. The page keeps up to 21 date-specific links in this browser's local storage, allowing a plain `/today/` revisit after that day's first launch. Referrer transmission is disabled, and only canonical Google Docs edit links or the specific To-Do Lists folder are allowed.

The local Windows helper `scripts/today-launcher.py` checks for visible Chrome windows every seven seconds. It opens the launcher once when Chrome becomes visible, at Chicago midnight if Chrome stays open, and when today's document mapping changes. Closing a tab does not reopen it on every poll. Chrome background processes alone do not trigger it. The helper never reads Chrome profiles or credentials and never starts Chrome while it has no visible window.

Document lookup uses the personal assistant's read-only `.assistant/state.sqlite3` handoff maps, with `.assistant/today-documents.json` as a private verified fallback. The initial manifest was populated from folder metadata and includes the combined November 14–15 weekend Doc. Future dates rely on new document IDs reaching the assistant's handoff state through the existing planning/synchronization workflow. This helper does not scan Drive or create plans. Without a matching link, it opens To-Do Lists; if the mapping appears while Chrome is open, it automatically opens the Doc. Google sign-in and document permissions still apply.

Install or restore login startup (no administrator access required):

```powershell
& .\scripts\install-today-launcher.ps1
```

This sets only `McGowenTodayLauncher` under the current user's Windows `Run` key and starts `pythonw.exe` hidden. A named mutex prevents duplicate helpers. The helper's rotating logs are in the personal assistant's `.assistant/today-launcher.log`. To remove login startup, run the installer with `-Uninstall` and sign out to stop the existing helper.

Verification:

```powershell
node --test scripts/today-launcher.test.mjs
python -m unittest discover -s scripts -p test_today_launcher.py
python scripts/today-launcher.py --once --dry-run
```

The launcher's two files in `public/today/` are copied unchanged by Vite. A narrow release can copy only those files into `gh-pages/today/`, preserving all portfolio assets. Verify both live files and the automatic Docs navigation after Pages deployment. No new service, credential, or paid resource is needed.
