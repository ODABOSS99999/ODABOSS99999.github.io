param([switch]$Uninstall)
$ErrorActionPreference = 'Stop'
$launcherScript = Join-Path $PSScriptRoot 'today-launcher.py'
$pythonConsole = (Get-Command python.exe).Source
$pythonHidden = Join-Path (Split-Path $pythonConsole) 'pythonw.exe'
if (-not (Test-Path -LiteralPath $pythonHidden)) { throw 'pythonw.exe is required for the hidden launcher.' }
$startupKey = 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Run'
$startupName = 'McGowenTodayLauncher'
if ($Uninstall) {
    Remove-ItemProperty -LiteralPath $startupKey -Name $startupName -ErrorAction SilentlyContinue
    Write-Output 'Removed login startup. The running helper ends at sign-out.'
    return
}
if (-not (Test-Path -LiteralPath $launcherScript)) { throw 'Launcher script is missing.' }
$startupCommand = '"' + $pythonHidden + '" "' + $launcherScript + '"'
New-Item -Path $startupKey -Force | Out-Null
New-ItemProperty -LiteralPath $startupKey -Name $startupName -Value $startupCommand -PropertyType String -Force | Out-Null
# Resolve the current day's Doc before Chrome starts, instead of loading an uncached web redirect.
$shortcutShell = New-Object -ComObject WScript.Shell
$shortcutPaths = @(
    (Join-Path ([Environment]::GetFolderPath('Desktop')) 'Google Chrome.lnk'),
    (Join-Path ([Environment]::GetFolderPath('Desktop')) 'Owen - Chrome.lnk'),
    (Join-Path ([Environment]::GetFolderPath('Desktop')) 'Google Docs.lnk'),
    (Join-Path $env:APPDATA 'Microsoft\Windows\Start Menu\Programs\Google Chrome.lnk'),
    (Join-Path $env:APPDATA 'Microsoft\Internet Explorer\Quick Launch\Google Chrome.lnk'),
    (Join-Path $env:APPDATA 'Microsoft\Internet Explorer\Quick Launch\User Pinned\TaskBar\Google Chrome.lnk')
)
$backupDirectory = Join-Path $env:USERPROFILE 'Documents\ChatGPT\personal assistant\.assistant\shortcut-backups'
New-Item -ItemType Directory -Path $backupDirectory -Force | Out-Null
for ($shortcutIndex = 0; $shortcutIndex -lt $shortcutPaths.Count; $shortcutIndex++) {
    $shortcutPath = $shortcutPaths[$shortcutIndex]
    if (-not (Test-Path -LiteralPath $shortcutPath)) { continue }
    $backupPath = Join-Path $backupDirectory ($shortcutIndex.ToString() + '.lnk')
    if (-not (Test-Path -LiteralPath $backupPath)) { Copy-Item -LiteralPath $shortcutPath -Destination $backupPath }
    $shortcutItem = $shortcutShell.CreateShortcut($shortcutPath)
    $shortcutItem.TargetPath = $pythonHidden
    $shortcutItem.Arguments = '"' + $launcherScript + '" --open'
    $shortcutItem.WorkingDirectory = $PSScriptRoot
    $shortcutItem.Save()
    $verifiedShortcut = $shortcutShell.CreateShortcut($shortcutPath)
    if ($verifiedShortcut.TargetPath -ne $pythonHidden -or $verifiedShortcut.Arguments -ne ('"' + $launcherScript + '" --open')) { throw 'Shortcut did not verify.' }
}
Start-Process -FilePath $pythonHidden -ArgumentList ('"' + $launcherScript + '"') -WindowStyle Hidden
$verified = Get-ItemPropertyValue -LiteralPath $startupKey -Name $startupName
if ($verified -ne $startupCommand) { throw 'Startup registration did not verify.' }
Write-Output 'Installed the hidden Chrome watcher for this Windows account and started it.'
