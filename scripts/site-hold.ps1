Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$Domain = "idigdata.com"
$HoldingDeployment = "https://idigdata-holding-ad4cshdqd-loop-smith.vercel.app"

Write-Host "Putting $Domain into under-transformation mode..."
vercel alias set $HoldingDeployment $Domain

Write-Host ""
Write-Host "Current alias:"
vercel inspect $Domain

