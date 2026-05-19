Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$Domain = "idigdata.com"

Write-Host "Current Vercel alias for $Domain:"
vercel inspect $Domain

