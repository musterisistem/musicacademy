$apiKey = "8586ad2f-37bb-417e-b09461e4f76e-6954-4f50"
$storageZone = "elenacekic"
$publicPath = "d:\ELENA 2\elena-academy\public"
$baseUrl = "https://storage.bunnycdn.com/$storageZone"

$extensions = @('.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.mp4', '.ico', '.jfif')
$files = Get-ChildItem -Recurse "$publicPath" -File | Where-Object { $extensions -contains $_.Extension.ToLower() }

$total = $files.Count
Write-Host "Toplam dosya: $total - yukleme basliyor..."

$i = 0
foreach ($file in $files) {
    $i++
    $relativePath = $file.FullName.Substring($publicPath.Length).Replace('\', '/').TrimStart('/')
    $uploadUrl = "$baseUrl/$relativePath"
    try {
        $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
        Invoke-RestMethod -Uri $uploadUrl -Method Put -Headers @{ "AccessKey" = $apiKey; "Content-Type" = "application/octet-stream" } -Body $bytes | Out-Null
        Write-Host "[$i/$total] OK: $relativePath"
    } catch {
        Write-Host "[$i/$total] FAIL: $relativePath - $($_.Exception.Message)"
    }
}

Write-Host ""
Write-Host "=== TUM DOSYALAR YUKLENDI ==="
