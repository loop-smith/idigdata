Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$Domain = "idigdata.com"
$LiveDeployment = "https://idigdata-735gaac04-loop-smith.vercel.app"

Write-Host "Putting $Domain into live-site mode..."
vercel alias set $LiveDeployment $Domain

Write-Host ""
Write-Host "Current alias:"
vercel inspect $Domain

