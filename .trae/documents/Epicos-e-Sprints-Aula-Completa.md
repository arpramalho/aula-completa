# Épicos e Sprints — Aula Completa SaaS

## Épicos
- EP-001: Autenticação e Onboarding
  - Objetivo: Permitir login e onboarding docente com coleta de preferências.
  - Critérios de aceite: Fluxo completo; políticas de segurança e RLS ativas.
- EP-002: IA Planejamento v1
  - Objetivo: Gerar planos de aula com IA em <10s e armazenar histórico.
  - Critérios de aceite: Latência dentro da meta; prompts logados; edições básicas.
- EP-003: Pagamentos e Assinaturas
  - Objetivo: Cobrança recorrente via Stripe com webhooks idempotentes.
  - Critérios de aceite: Planos ativos, portal do cliente, faturas geradas.
- EP-004: Marketplace
  - Objetivo: Publicação, busca e transações de planos de aula com comissões.
  - Critérios de aceite: Transações auditáveis; políticas de licenciamento ativas.
- EP-005: Gamificação
  - Objetivo: Pontos, níveis, badges e ranking para engajamento docente.
  - Critérios de aceite: Regras claras; leaderboard consistente e auditável.
- EP-006: Painéis Admin
  - Objetivo: Supervisão de transações, comissões e moderação.
  - Critérios de aceite: Relatórios; ações administrativas com trilha de auditoria.
- EP-007: Comunidade e Colaboração
  - Objetivo: Feed, perfis, seguir/favoritar, comentários e grupos temáticos.
  - Critérios de aceite: Interações moderadas; rate limits; métricas de engajamento.

## Sprints (2 semanas cada)

### Sprint 1 — Setup/Arquitetura/DS
- Tarefas: Repositório, DS/Tailwind, Supabase base, Stripe sandbox, CI mínima.
- Saída: Ambiente dev pronto; layout e navegação base.

### Sprint 2 — Auth/Onboarding
- Tarefas: Rotas de login e onboarding; perfis docentes; RLS/Policies iniciais.
- Saída: Fluxo de acesso completo; coleta de preferências.

### Sprint 3 — IA Planejamento v1
- Tarefas: Geração de plano; histórico; análises de latência; logs de prompts.
- Saída: Geração < 10s; histórico persistido.

### Sprint 4 — Pagamentos/Planos
- Tarefas: Checkout Stripe; webhooks; portal do cliente; planos.
- Saída: Cobrança recorrente funcional (sandbox).

### Sprint 5 — Observabilidade/Qualidade
- Tarefas: Logs, métricas, monitoramento; testes; performance.
- Saída: Painel mínimo de métricas; bugs críticos rastreados.

### Sprint 6 — Landing/SEO/Beta
- Tarefas: Finalização landing; SEO; política de privacidade; performance.
- Saída: Beta aberto com lista de espera/convites.

(Continuar conforme Roadmap para Sprints 7–16)
