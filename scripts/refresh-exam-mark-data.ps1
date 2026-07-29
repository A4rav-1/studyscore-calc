$ErrorActionPreference = "Stop"

$sourceUrl = "https://www.vcaa.vic.edu.au/administration/school-administration/performance-senior-secondary/2025-grade-distributions-vce-graded-assessments"
$html = (Invoke-WebRequest -Uri $sourceUrl -UseBasicParsing -TimeoutSec 45).Content
$subjectMatches = [regex]::Matches(
  $html,
  '<h3>(?<name>[^<]+)</h3>(?<body>[\s\S]*?)(?=<h3>|$)',
  [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
)

$records = [ordered]@{}
foreach ($subjectMatch in $subjectMatches) {
  $assessmentMatches = [regex]::Matches(
    $subjectMatch.Groups["body"].Value,
    '<h4>Graded Assessment\s+\d+</h4><p>(?<type>[^<]+)</p><table[^>]*>(?<table>[\s\S]*?)</table>',
    [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
  )
  $examMaximumMarks = @()

  foreach ($assessmentMatch in $assessmentMatches) {
    $assessmentType = [System.Net.WebUtility]::HtmlDecode($assessmentMatch.Groups["type"].Value)
    if ($assessmentType -notmatch "EXAMINATION") {
      continue
    }

    $maximumMark = [regex]::Match(
      $assessmentMatch.Groups["table"].Value,
      'Max\s+(\d+)',
      [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
    ).Groups[1].Value
    if ($maximumMark) {
      $examMaximumMarks += [int]$maximumMark
    }
  }

  if ($examMaximumMarks.Count -gt 0) {
    $subjectName = [System.Net.WebUtility]::HtmlDecode($subjectMatch.Groups["name"].Value).Trim()
    $records[$subjectName] = $examMaximumMarks
  }
}

if ($records.Count -lt 80) {
  throw "Only $($records.Count) VCAA exam mark records were parsed."
}

$outputDirectory = Join-Path $PSScriptRoot "..\app\data"
New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null
$outputPath = Join-Path $outputDirectory "exam-marks.json"
$json = $records | ConvertTo-Json -Depth 3
$utf8WithoutBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($outputPath, $json, $utf8WithoutBom)

Write-Output "Saved $($records.Count) VCAA exam mark records to $outputPath"
