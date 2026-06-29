# Fix double-encoded UTF-8: Read as Windows-1252, then encode back to get the original UTF-8 bytes
$bytes = [System.IO.File]::ReadAllBytes('c:\web programming\nanographics\app\package-course\page.tsx')

# Decode as Latin-1/ISO-8859-1 to get the raw character values 
$latin1 = [System.Text.Encoding]::GetEncoding(28591)
$text = $latin1.GetString($bytes)

# Now re-encode as UTF-8 - this should give us the actual intended text
$utf8Bytes = [System.Text.Encoding]::UTF8.GetBytes($text)

# Decode those UTF-8 bytes as UTF-8 to see if it makes sense
$result = [System.Text.Encoding]::UTF8.GetString($utf8Bytes)
$lines = $result.Split("`n")
Write-Host "After single re-encode:"
for ($i = 12; $i -lt [Math]::Min(30, $lines.Length); $i++) {
    Write-Host "$($i+1): $($lines[$i])"
}
