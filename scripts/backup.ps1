$ErrorActionPreference = 'Stop'

# Diretórios
$scriptDir = $PSScriptRoot
$root = Split-Path -Parent $scriptDir
$backupDir = Join-Path $root 'backups'
if (!(Test-Path $backupDir)) { New-Item -ItemType Directory -Path $backupDir | Out-Null }

# Configurações
$ts = Get-Date -Format 'yyyyMMdd-HHmmss'
$dest = Join-Path $backupDir "aula-completa-$ts.zip"

$maxEnv = [Environment]::GetEnvironmentVariable('BACKUPS_MAX','User')
if ([string]::IsNullOrWhiteSpace($maxEnv)) { $maxEnv = [Environment]::GetEnvironmentVariable('BACKUPS_MAX','Process') }
$max = 10
if ($maxEnv -and [int]::TryParse($maxEnv, [ref]([int]$null))) { $max = [int]$maxEnv }

$external = [Environment]::GetEnvironmentVariable('BACKUP_EXTERNAL_DIR','User')
if ([string]::IsNullOrWhiteSpace($external)) { $external = [Environment]::GetEnvironmentVariable('BACKUP_EXTERNAL_DIR','Process') }

# Exclusões (por padrão exclui .next para reduzir tamanho)
$excludeEnv = [Environment]::GetEnvironmentVariable('BACKUP_EXCLUDES','User')
if ([string]::IsNullOrWhiteSpace($excludeEnv)) { $excludeEnv = [Environment]::GetEnvironmentVariable('BACKUP_EXCLUDES','Process') }
if ([string]::IsNullOrWhiteSpace($excludeEnv)) { $excludeEnv = '.next,node_modules' }
$excludeList = ($excludeEnv -split '[,;]') | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne '' }

# Fallback para SHA256 quando Get-FileHash não estiver disponível
function Get-SHA256Hex([string]$Path) {
    $sha256 = [System.Security.Cryptography.SHA256]::Create()
    $stream = [System.IO.File]::OpenRead($Path)
    try {
        $hashBytes = $sha256.ComputeHash($stream)
        -join ($hashBytes | ForEach-Object { $_.ToString('x2') })
    }
    finally {
        $stream.Dispose(); $sha256.Dispose()
    }
}

# Lista de caminhos a incluir, excluindo a pasta de backups e itens configurados
$paths = Get-ChildItem -Force -LiteralPath $root |
    Where-Object { $_.Name -ne 'backups' -and -not ($excludeList -contains $_.Name) } |
    Select-Object -ExpandProperty FullName

# Criar o arquivo ZIP
Compress-Archive -Path $paths -DestinationPath $dest -CompressionLevel Optimal -Force

# Calcular hash
try {
    $hash = Get-FileHash -Path $dest -Algorithm SHA256
}
catch {
    $hashHex = Get-SHA256Hex -Path $dest
    $hash = [pscustomobject]@{ Hash = $hashHex }
}

# Registrar log
$log = Join-Path $backupDir 'backup-log.txt'
$size = (Get-Item $dest).Length
$entry = "{0} | {1} | {2} bytes | SHA256={3}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $dest, $size, $hash.Hash
Add-Content -Path $log -Value $entry
Add-Content -Path $log -Value ("Excludes={0}" -f ([string]::Join(',', $excludeList)))

# Rotacionar backups antigos (manter apenas os $max mais recentes)
$archives = Get-ChildItem -Path $backupDir -Filter 'aula-completa-*.zip' | Sort-Object LastWriteTime -Descending
$toRemove = $archives | Select-Object -Skip $max
foreach ($f in $toRemove) {
    try { Remove-Item -LiteralPath $f.FullName -Force } catch { Write-Warning "Falha ao remover $($f.FullName): $($_.Exception.Message)" }
}

# Cópia opcional para destino externo
if ($external -and (Test-Path $external)) {
    $dest2 = Join-Path $external (Split-Path -Leaf $dest)
    try {
        Copy-Item -LiteralPath $dest -Destination $dest2 -Force
        Add-Content -Path $log -Value ("{0} | Copiado para {1}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $dest2)
    } catch {
        Write-Warning "Falha ao copiar para destino externo: $($_.Exception.Message)"
    }
}

Write-Host "Backup concluído:"
Write-Host $entry