# Documento Técnico — Sistema de Gamificação e Marketplace (Professores)

## 1. Visão Geral

- Objetivo: Gamificar a jornada do professor (não alunos), reconhecendo criação, vendas e colaboração, integrado ao marketplace e às assinaturas.
- Escopo: Pontuação, níveis, badges, ranking; marketplace com licenciamento e avaliações; gestão administrativa por `super_admin`; incentivos atrelados a planos.
- Referências: PRD Aula Completa SaaS, Arquitetura Técnica, Especificação da Landing, Design System Moderno e Guia de Implementação.

## 2. Especificações do Sistema

### 2.1 Gamificação (Professores)
- Pontuação (eventos ponderados):
  - Criação de plano com IA: +5 pontos (limite diário/anti-spam).
  - Publicação de plano no marketplace: +10 pontos.
  - Venda realizada: +20 pontos por venda (peso maior).
  - Avaliação positiva (≥4 estrelas) recebida: +5 pontos.
  - Feedback útil publicado (marcado como “útil” por ≥2 compradores): +2 pontos.
  - Contribuição na comunidade (post/resposta aprovada): +2 pontos.
  - Penalidades: conteúdo removido por violação: −30 pontos; avaliações falsas detectadas: −10 pontos.
- Níveis de progressão (thresholds sugeridos):
  - Nível 1: 0; Nível 2: 100; N3: 250; N4: 500; N5: 1.000; N6: 2.000; N7: 4.000; N8: 7.000; N9: 11.000; N10: 16.000.
  - Fórmula alternativa: nível = floor(log2(pontos/100 + 1)) com limites superiores.
- Badges (com raridade):
  - Criador (common), 10 planos publicados.
  - Vendedor (rare), 50 vendas totais.
  - Mentor (rare), 30 respostas úteis na comunidade.
  - Especialista (epic), avaliação média ≥4.8 em 100+ vendas.
  - Top Colaborador (epic), contribuição consistente por 6 meses.
  - Legendário (legendary), 1.000 vendas e avaliação média ≥4.9.
- Leaderboards:
  - Mensal: reseta a cada mês; ranking por pontos do período.
  - All-time: cumulativo; usado para badges de legado.
  - Colaboração: sub-ranking por contribuições na comunidade (peso menor que vendas).
- Anti-gaming e qualidade:
  - Rate limiting por tipo de evento (p.ex., máximo 10 publicações/dia).
  - Peso de avaliações apenas de “compradores verificados”.
  - Monitoramento de outliers (fraudes, auto-compras, reviews coordenadas).
  - Moderação automática (palavras proibidas, plágio) + revisão humana.

### 2.2 Marketplace Integrado
- Publicação de planos:
  - Metadados obrigatórios: título, disciplina, série/ano, descrição, objetivos BNCC, duração, conteúdo estruturado.
  - Preço e licenciamento (ver abaixo).
  - Revisão de qualidade automática (checklist) antes de publicar.
- Formatos de licenciamento:
  - Uso Pessoal: licença não transferível para um professor.
  - Uso Comercial (Professor): permite uso em suas turmas e materiais derivados sem revenda do arquivo original.
  - Institucional (Escola): multiusuário sob uma instituição, redistribuição interna permitida.
- Transações seguras:
  - Pagamentos com Stripe (`card`, `pix`) usando `Checkout Session` e `Payment Intents`.
  - Comissão configurável pelo `super_admin` (default: 10% Premium Mensal, 5% Premium Anual).
  - Repasses: Fase 1 (MVP) — payout mensal manual; Fase 2 — Stripe Connect para repasses automáticos.
- Avaliações e feedback:
  - Reviews de 1–5 estrelas com comentário, somente “compra verificada”.
  - “Útil?” (upvotes) para valorizar feedbacks.
  - Média ponderada com decaimento temporal (mais peso a avaliações recentes).

### 2.3 Gestão Administrativa (`super_admin`)
- Controle de marketplace:
  - Configurar comissões e regras (licenças disponíveis, preços mínimos/máximos).
  - Moderação e curadoria: aprovar/reprovar conteúdos, destacar materiais, remover itens.
  - Gestão de disputas/reembolsos, reversão de pontos quando aplicável.
- Políticas e auditoria:
  - Logs de ações administrativas e mudanças de políticas.
  - Painel de métricas: vendas, taxas de conversão, top vendedores, qualidade média.

### 2.4 Integração com Assinaturas
- Benefícios por plano:
  - Free: 5 planos IA/mês, acesso leitura ao marketplace e comunidade.
  - Premium Mensal: IA ilimitada, venda no marketplace (10% comissão), badges exclusivos, boost leve no ranking.
  - Premium Anual: IA ilimitada, venda (5% comissão), prioridade de destaque, badges exclusivos, boost maior no ranking.
- Incentivos de upgrade:
  - Cap de pontos mensal para Free (p.ex., 300) com aviso de upgrade.
  - Redução de comissão e desbloqueio de badges/leaderboard premium.
  - Acesso antecipado a funcionalidades e curadoria/featured.

## 3. Fluxos de Usuário e Administração

### 3.1 Fluxo — Professor
- Criar plano com IA → revisar → publicar no marketplace com licenciamento e preço.
- Receber vendas e avaliações → acumular pontos → progredir em níveis e conquistar badges.
- Participar da comunidade (posts/respostas) → ganhar pontos de colaboração.
- Gerir assinatura → ver benefícios, considerar upgrade.

### 3.2 Fluxo — Compra no Marketplace
- Visitante/professor navega no catálogo → seleciona plano → checkout (Stripe) → acesso ao material.
- Após uso, comprador deixa avaliação e feedback (verificado) → impacto em ranking do autor.

### 3.3 Fluxo — `super_admin`
- Configurar comissões e políticas → monitorar métricas e disputas.
- Moderar conteúdo (pré e pós-publicação) → curadoria (destaques e remoções).
- Operar payouts (MVP manual; fase 2 Connect), emitir relatórios.

## 4. Requisitos Técnicos de Implementação

- Frontend: Next.js 14 (App Router) + TypeScript + Tailwind + Zustand + React Query.
- Backend (BaaS): Supabase (PostgreSQL + Auth + Storage + Realtime).
- Pagamentos: Stripe (cartão e Pix) via Checkout/Payment Intents; Webhooks para confirmação.
- AI: OpenAI para geração de planos; logs de tokens por request.
- Emails: Resend para notificações transacionais.

### 4.1 Modelagem de Dados (Supabase)
- Tabelas principais:
  - `profiles` (id, email, name, role, subscription, created_at).
  - `lesson_plans` (id, author_id, title, subject, grade, duration, objectives[], content JSON, price, license_type, is_public, created_at).
  - `marketplace_items` (id, lesson_plan_id, status, featured, sales_count, rating_avg, reviews_count, created_at).
  - `transactions` (id, buyer_id, item_id, amount, currency, payment_method, status, commission_rate, net_amount, created_at).
  - `reviews` (id, transaction_id, rating, comment, helpful_votes, created_at).
  - `game_events` (id, user_id, type, points_delta, metadata JSON, created_at).
  - `game_profiles` (user_id, points_total, level, badges[], monthly_points, updated_at).
  - `badges_catalog` (id, name, description, rarity, criteria JSON).
  - `moderation_flags` (id, item_id, reason, status, reviewer_id, created_at, resolved_at).
  - `commissions` (id, plan_type, rate_percent, effective_at, created_at).
  - `audit_logs` (id, actor_id, action, entity, diff JSON, created_at).
- Índices e FKs adequados; Storage para arquivos (docs/exportações) em buckets com ACL.

### 4.2 Políticas de Segurança (RLS)
- `profiles`: `user_id = auth.uid()` leitura/escrita básica; `role='super_admin'` bypass.
- `lesson_plans`: leitura pública se `is_public=true`; escrita somente `author_id=auth.uid()`.
- `marketplace_items`: leitura pública; escrita do autor e admin; alteração `status` apenas admin.
- `transactions`: visível ao comprador, autor e admin; dados sensíveis protegidos.
- `reviews`: somente “comprador verificado”; edição limitada; remoção por admin.
- `game_events`/`game_profiles`: leitura do próprio; admin total.

### 4.3 APIs (Next.js App Router)
- `POST /api/marketplace/publish` — publica item com licenciamento e preço.
- `POST /api/stripe/create-checkout-session` — cria sessão de pagamento (`priceId`/montante).
- `POST /api/stripe/webhook` — confirma transações (status succeeded) e gera `game_events` (venda).
- `POST /api/reviews` — cria review de compra verificada.
- `GET /api/gamification/leaderboard` — retorna ranking mensal/all-time.
- `GET /api/gamification/profile` — pontos, nível e badges do usuário.

### 4.4 Processamento e Tarefas Assíncronas
- Event-sourcing em `game_events` e agregação para `game_profiles`.
- Cron mensal (Vercel Cron) para reset de `monthly_points` e snapshot de leaderboard.
- Jobs de moderação e detecção de fraude (signals: auto-compras, picos anormais, reviews coordenadas).

### 4.5 Observabilidade e Performance
- Logs estruturados (API/edge) e auditoria administrativa.
- Core Web Vitals monitorados; caching em páginas públicas (`/marketplace`, `/gamification`).
- Rate limiting por IP/usuário em endpoints críticos.

## 5. Diretrizes de UI/UX

- Design System: cores primárias (`primary` azul), acentos (`accent` verde), neutros; tipografia Geist/Inter; botões (primário/outline/ghost), cards, badges.
- Páginas-chave:
  - `Gamificação` (`/gamification`): cabeçalho com pontos/nível/badges; leaderboard com avatars, posição, pontuação; filtros (mensal/all-time/colaboração).
  - `Marketplace` (`/marketplace`): catálogo com cards, preço, rating, autor; filtros por disciplina/série; página detalhada com objetivos BNCC e avaliações.
  - `Admin` (`/admin`): tabela de itens, moderação (aprovar/reprovar), políticas de comissão, destaque; gráficos de métricas.
  - `Subscription` (`/subscription`): planos e benefícios; mensagens de incentivo baseadas em gamificação.
- Acessibilidade: contraste adequado; navegação por teclado; textos alternativos; feedbacks claros.
- Estados: loading (skeletons), vazios, erros; toasts elegantes.

## 6. Governança e Políticas de Uso

- LGPD: consentimento explícito; direito ao esquecimento; auditoria de acesso; criptografia de dados sensíveis.
- Marketplace:
  - Conteúdos alinhados à BNCC; proibição de plágio/conteúdo inadequado.
  - Licenças claras por item; sem revenda não autorizada.
  - Reembolsos e disputas analisados pelo `super_admin` com logs e comunicação transparente.
- Gamificação:
  - Transparência em cálculos de pontos; combate a manipulação; penalidades por fraude.
  - Reset mensal do ranking; preservação de histórico all-time.
- Assinaturas e Monetização:
  - Comissões por plano conforme PRD (10% mensal; 5% anual), com capacidade de ajuste.
  - Incentivos legítimos para upgrade (benefícios claros e não enganosos).

## 7. Roadmap de Entrega

- Fase 1 (MVP): publicação básica, checkout Stripe, `reviews`, `game_events` e leaderboard mensal, painel admin mínimo.
- Fase 2: Stripe Connect para repasses, curadoria avançada, moderação automática, badges complexos.
- Fase 3: comunidade aprofundada (mentoria), API pública, integrações externas.

## 8. Riscos e Mitigações

- Fraude de avaliações: verificação estrita, peso reduzido de avaliações suspeitas, auditoria.
- Abuso de publicação: limites e moderação; critérios de qualidade.
- Disputas de licenças: textos claros de licenciamento e enforcement técnico.

---
Este documento orienta implementação e operação do sistema de gamificação e marketplace focado em professores, seguindo o PRD e a arquitetura definida.

