# 🎓 Aula Completa - Plataforma SaaS para Educadores

Uma plataforma completa para criação de planos de aula com IA, marketplace educacional e sistema de gamificação para educadores brasileiros.

## 🚀 Tecnologias

- **Frontend**: Next.js 14 com App Router, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Pagamentos**: Stripe
- **IA**: OpenAI GPT-4
- **UI**: Radix UI + Framer Motion
- **Deploy**: Vercel

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou pnpm
- Conta no Supabase
- Conta no Stripe
- Chave da API OpenAI

## 🛠️ Instalação Local

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/aula-completa.git
cd aula-completa
```

2. **Instale as dependências**
```bash
npm install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_supabase
SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role_supabase

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=sua_chave_publica_stripe
STRIPE_SECRET_KEY=sua_chave_secreta_stripe

# OpenAI Configuration
OPENAI_API_KEY=sua_chave_openai

# Email (Resend)
RESEND_API_KEY=sua_chave_resend
```

4. **Execute o projeto**
```bash
npm run dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🌐 Deploy no Vercel

### Método 1: Deploy Automático via GitHub

1. **Faça push para o GitHub**
```bash
git remote add origin https://github.com/seu-usuario/aula-completa.git
git branch -M main
git push -u origin main
```

2. **Conecte no Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe seu repositório do GitHub
   - Configure as variáveis de ambiente (veja seção abaixo)
   - Deploy automático será configurado

### Método 2: Deploy via CLI

```bash
# Instale a CLI do Vercel
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel --prod
```

### 📝 Variáveis de Ambiente no Vercel

Configure estas variáveis no painel do Vercel:

| Variável | Tipo | Descrição |
|----------|------|-----------|
| `NEXT_PUBLIC_APP_URL` | Plain Text | URL da aplicação em produção |
| `NEXT_PUBLIC_SUPABASE_URL` | Plain Text | URL do projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Plain Text | Chave anônima do Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Secret | Chave service role do Supabase |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Plain Text | Chave pública do Stripe |
| `STRIPE_SECRET_KEY` | Secret | Chave secreta do Stripe |
| `OPENAI_API_KEY` | Secret | Chave da API OpenAI |
| `RESEND_API_KEY` | Secret | Chave da API Resend |

## 🔧 Configuração dos Serviços

### Supabase
1. Crie um projeto em [supabase.com](https://supabase.com)
2. Configure as tabelas necessárias
3. Ative Row Level Security (RLS)
4. Configure as políticas de acesso

### Stripe
1. Crie uma conta em [stripe.com](https://stripe.com)
2. Configure os produtos e preços
3. Configure webhooks para `/api/stripe/webhook`
4. Use chaves de teste durante desenvolvimento

### OpenAI
1. Crie uma conta em [openai.com](https://openai.com)
2. Gere uma API key
3. Configure limites de uso conforme necessário

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── (auth)/            # Rotas de autenticação
│   ├── api/               # API Routes
│   ├── onboarding/        # Fluxo de onboarding
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── landing/           # Componentes da landing page
│   ├── navigation/        # Header e Footer
│   └── ui/                # Componentes de UI
└── lib/                   # Utilitários e configurações
    ├── supabase.ts        # Cliente Supabase
    ├── stripe.ts          # Cliente Stripe
    └── utils.ts           # Funções utilitárias
```

## 🎯 Funcionalidades

- ✅ Landing page moderna e responsiva
- ✅ Sistema de autenticação com Supabase
- ✅ Integração com OpenAI para geração de conteúdo
- ✅ Sistema de pagamentos com Stripe
- ✅ Interface otimizada para educadores
- 🚧 Dashboard do professor
- 🚧 Criador de planos de aula
- 🚧 Marketplace educacional
- 🚧 Sistema de gamificação

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

- 📧 Email: suporte@aulacompleta.app.br
- 🌐 Website: [aulacompleta.app.br](https://aulacompleta.app.br)
- 📱 WhatsApp: +55 (11) 99999-9999

---

Desenvolvido com ❤️ para educadores brasileiros 🇧🇷