# Backup e Restauração — Aula Completa

Este guia descreve como gerar e restaurar backups completos do projeto.

## Backup Manual

- Execute o script de backup para gerar um ZIP com hash e retenção:
- Comando:
  - `pwsh -NoProfile -ExecutionPolicy Bypass -File .\scripts\backup.ps1`

O arquivo será criado em `backups\aula-completa-YYYYMMDD-HHMMSS.zip` e um registro será adicionado em `backups\backup-log.txt` com tamanho e SHA256.

## Configuração Atual (Sob Demanda)

- Não há gatilhos automáticos ativos (nem ao logon, nem tarefa diária).
- O backup só é criado quando você executa o comando manualmente.
- Se quiser voltar a habilitar execução automática, veja as seções "Agendamento Automático (Opcional)" e "Backup ao iniciar sessão (Opcional)".

## Agendamento Automático (Opcional)

- Estado atual: desativado (não configurado por padrão).

- Uma tarefa agendada diária pode executar o backup automaticamente às 02:00.
- Caso precise criar/atualizar manualmente:
  - `schtasks /create /tn "AulaCompletaBackupDaily" /tr "powershell.exe -NoProfile -ExecutionPolicy Bypass -File \"C:\\aula-completa\\scripts\\backup.ps1\"" /sc DAILY /st 02:00 /f`
- A tarefa gravará os backups no diretório `C:\aula-completa\backups\`.

### Backup ao iniciar sessão (Opcional)

- Estado atual: desativado (não configurado por padrão).

- Algumas instalações exigem privilégios elevados para registrar tarefas "on logon".
- Alternativa simples: usar a Pasta de Inicialização (Startup) do usuário.
  - Já foi criado um launcher: `scripts\backup-onlogon.cmd`.
  - Copie-o para a pasta Startup do usuário (executado ao logon):
    - PowerShell: `Copy-Item .\scripts\backup-onlogon.cmd -Destination (Join-Path ([Environment]::GetFolderPath('Startup')) 'backup-onlogon.cmd') -Force`
  - Para remover, basta deletar o arquivo `backup-onlogon.cmd` dessa pasta.

Observação: o script `backup.ps1` inclui fallback para SHA256 se o cmdlet `Get-FileHash` não estiver disponível.

### Método Registro (HKCU\...\Run) (Opcional)

- Estado atual: desativado (não configurado por padrão).

- Para executar o backup automaticamente ao logon via Registro (sem privilégios elevados):
  - PowerShell:
    - `New-ItemProperty -Path HKCU:\Software\Microsoft\Windows\CurrentVersion\Run -Name AulaCompletaBackupOnLogon -Value "powershell.exe -NoProfile -ExecutionPolicy Bypass -File \"C:\\aula-completa\\scripts\\backup.ps1\"" -PropertyType String -Force`
  - Para remover:
    - `Remove-ItemProperty -Path HKCU:\Software\Microsoft\Windows\CurrentVersion\Run -Name AulaCompletaBackupOnLogon -Force`

Este método é uma alternativa ao Task Scheduler quando há restrições de permissão. O script de backup já trata o cálculo de SHA256 mesmo em ambientes sem `Get-FileHash`.

## Retenção e Destino Externo

- Retenção padrão: mantém os 10 backups mais recentes.
- Para alterar a retenção, defina `BACKUPS_MAX` (ex.: 20):
  - `setx BACKUPS_MAX 20`
- Para copiar automaticamente para um destino externo, defina `BACKUP_EXTERNAL_DIR`:
  - `setx BACKUP_EXTERNAL_DIR "D:\BackupsSeguros"`

Observação: após definir variáveis com `setx`, reinicie o terminal para que entrem em vigor.

### Exclusões de pastas (reduzir tamanho do ZIP)

- Por padrão, o backup exclui as pastas `.next` e `node_modules`.
- Personalize as exclusões definindo `BACKUP_EXCLUDES` (separador `,` ou `;`):
  - `setx BACKUP_EXCLUDES ".next,node_modules"`
- O log (`backups\backup-log.txt`) registra a lista aplicada como `Excludes=...`.

Exemplo para executar um backup “completo” (sem exclusões) apenas na sessão atual:

```
Remove-Item Env:BACKUP_EXCLUDES
```

## Restauração

- Descompacte o ZIP em um diretório limpo.
- Revise o conteúdo sensível (por exemplo, `.env.local`) antes de executar em outro ambiente.
- Se houver dependências geradas (`node_modules`, `.next`), considere reinstalar/gerar novamente para garantir compatibilidade:
  - `npm ci`
  - `npm run build`

## Boas Práticas

- Armazene backups em local seguro e privado (criptografado, acesso restrito).
- Faça testes de restauração periodicamente para validar a integridade e completude.

Este guia descreve como restaurar o projeto para um estado anterior usando os arquivos de backup gerados em `backups/`.

## Último backup gerado

Consulte os arquivos em `backups/` para os nomes com carimbo de data/hora (ex.: `aula-completa-YYYYMMDD-HHMM.zip`).

## Como restaurar a partir de um backup (Windows/PowerShell)

- Pare o servidor de desenvolvimento se estiver rodando.
- No diretório raiz do projeto (`c:\aula-completa`), execute:

```powershell
# Substitui o conteúdo do projeto pelo backup selecionado
Expand-Archive -Path .\backups\aula-completa-YYYYMMDD-HHMM.zip -DestinationPath . -Force

# Reinstala dependências (node_modules não é incluído no backup)
npm ci
```

## Notas importantes

- O backup exclui `.next/` e `node_modules/` para reduzir tamanho. Ambos serão reconstruídos ao rodar `npm ci` e `npm run dev`.
- Caso queira preservar o estado atual antes de restaurar, crie uma cópia do diretório ou gere um novo backup com:

```powershell
$timestamp = Get-Date -Format 'yyyyMMdd-HHmm'
$dest = "./backups/aula-completa-$timestamp.zip"
$exclude = @('.next','node_modules','backups')
$paths = Get-ChildItem -Force | Where-Object { $_.Name -notin $exclude } | ForEach-Object { $_.FullName }
Compress-Archive -Path $paths -DestinationPath $dest -Force
```

## Executar o projeto após restaurar

```powershell
npm ci
npm run dev
```