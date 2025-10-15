# Deploy Trigger

Este arquivo é usado para forçar novos deploys no Vercel quando necessário.

**Último deploy:** 2025-01-15 16:30:00
**Commit:** Deploy com Node.js 20.x após mudança de versão
**Objetivo:** Ativar domínios com versão estável do Node.js

## Domínios Configurados
- aulacompleta.app.br
- www.aulacompleta.app.br  
- aula-completa.vercel.app

## Variáveis de Ambiente Configuradas ✅
- NEXT_PUBLIC_APP_URL
- RESEND_API_KEY
- OPENAI_API_KEY
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- STRIPE_SECRET_KEY

## Mudanças Implementadas ✅
- ✅ Versão do Node.js alterada de 22.x para 20.x no Vercel
- ✅ Especificação de engines no package.json (>=20.0.0)
- ✅ Correção da versão da API do Stripe (2023-10-16)
- ✅ Build local funcionando perfeitamente

## Status
- ✅ Código enviado para GitHub
- ✅ Deploy automático ativado no Vercel
- ✅ Variáveis de ambiente configuradas
- ✅ Node.js 20.x configurado no Vercel
- 🔄 Triggering deploy com nova versão
- ⏳ Aguardando ativação dos domínios