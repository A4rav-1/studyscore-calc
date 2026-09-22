$ErrorActionPreference = "Stop"

$pythonCommand = Get-Command python -ErrorAction Stop
$scriptPath = Join-Path $PSScriptRoot "build-school-data.py"

& $pythonCommand.Source $scriptPath
if ($LASTEXITCODE -ne 0) {
  throw "School data refresh failed with exit code $LASTEXITCODE."
}
