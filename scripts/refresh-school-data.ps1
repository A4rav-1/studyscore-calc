$ErrorActionPreference = "Stop"

$sourceUrl = "https://bettereducation.com.au/Results/vce.aspx"
$response = Invoke-WebRequest -Uri $sourceUrl -UseBasicParsing -TimeoutSec 30
$tableMatch = [regex]::Match(
  $response.Content,
  '<table[^>]+GridView1[\s\S]*?</table>',
  [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
)

if (-not $tableMatch.Success) {
  throw "Better Education school table was not found."
}

$schools = @()
$rows = [regex]::Matches(
  $tableMatch.Value,
  '<tr[^>]*>([\s\S]*?)</tr>',
  [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
)

foreach ($row in $rows) {
  $cells = [regex]::Matches(
    $row.Groups[1].Value,
    '<td[^>]*>([\s\S]*?)</td>',
    [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
  )

  if ($cells.Count -lt 9) {
    continue
  }

  $values = foreach ($cell in $cells) {
    $withoutTags = [regex]::Replace($cell.Groups[1].Value, '<[^>]+>', ' ')
    $decoded = [System.Net.WebUtility]::HtmlDecode($withoutTags)
    ($decoded -replace '\s+', ' ').Trim()
  }

  $schools += [ordered]@{
    name = $values[2]
    locality = $values[6]
    medianStudyScore = [int]$values[4]
    scoresAbove40Percent = [double]$values[3]
    cohortSize = [int]$values[8]
  }
}

if ($schools.Count -lt 50) {
  throw "Only $($schools.Count) school records were parsed."
}

$outputDirectory = Join-Path $PSScriptRoot "..\app\data"
New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null
$outputPath = Join-Path $outputDirectory "schools.json"
$schools | ConvertTo-Json -Depth 3 | Set-Content -Path $outputPath -Encoding utf8

Write-Output "Saved $($schools.Count) schools to $outputPath"
