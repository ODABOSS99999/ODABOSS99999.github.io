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
Start-Process -FilePath $pythonHidden -ArgumentList ('"' + $launcherScript + '"') -WindowStyle Hidden
$verified = Get-ItemPropertyValue -LiteralPath $startupKey -Name $startupName
if ($verified -ne $startupCommand) { throw 'Startup registration did not verify.' }
Write-Output 'Installed the hidden Chrome watcher for this Windows account and started it.'
