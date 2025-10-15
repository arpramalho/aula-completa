# Backlog Priorizado — Aula Completa SaaS

Prioridades: P0 (essencial), P1 (importante), P2 (incremental)

## P0 — Essencial (Fase 1)
- Auth/Onboarding com Supabase (login, reset, perfis docentes)
- Fluxo IA Planejamento v1 (geração, histórico, ajustes)
- Pagamentos e Planos (Stripe checkout, webhooks, portal)
- RLS/Policies e Segurança (schemas, roles, rate limits básicos)
- Observabilidade (logs, métricas, monitoramento erros)
- Landing/SEO/Performance (conteúdo, meta tags, Lighthouse)

## P1 — Importante (Fase 2)
- Marketplace CRUD/Publicação (licenças/termos, busca e indexação)
- Transações/Comissões (cálculo de taxas, faturas/recibos, reconciliação)
- Avaliações/Feedback (ratings, reviews, respostas, reporting)
- Gamificação v1 (pontos, níveis, progressão; eventos padronizados)
- Painéis Admin (transações, comissões, moderação; relatórios)

## P2 — Incremental (Fase 2–3)
- Badges e Ranking (catálogo, regras, leaderboard por disciplina)
- Comunidade v1 (feed, perfis, seguir/favoritar)
- Colaboração (comentários, threads, grupos temáticos)
- Benefícios por Assinatura (perks por plano, upgrade in-app)
- Notificações e Assincronismo (fila, email, in-app)
- Analytics Avançado (funis, A/B, cohort)

## Critérios de Aceite (exemplos)
- Auth: login e reset funcionais; políticas de segurança ativas.
- IA v1: geração < 10s; logging de prompts; histórico persistido.
- Stripe: cobrança recorrente com idempotência; webhooks auditáveis.
- Marketplace: publicação validada por política; busca retorna resultados relevantes.
- Gamificação: pontos persistidos, níveis atualizados, ranking consistente.
- Admin: filtros, export, auditoria mínima; RLS correta.

## Dependências e Sequenciamento
- Stripe/Webhooks antes de marketplace transacional.
- RLS/Policies antes de avaliações/comunidade.
- Eventos de gamificação dependem de ações (publicar, vender, avaliar).

## Métricas de Validação
- Conversão landing→cadastro; churn; DAU/MAU; tempo de geração; transações; engajamento.
