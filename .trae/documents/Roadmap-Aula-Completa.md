# Roadmap de Desenvolvimento — Aula Completa SaaS

## 1) Visão Geral: Objetivos e Metas

- Objetivo do produto: Plataforma SaaS para planejamento de aulas com IA, comunidade docente e marketplace de planos de aula.
- Módulos foco (por fases):
  - Fase 1 — MVP: Planejamento de aulas com IA, autenticação, pagamentos, landing e onboarding.
  - Fase 2 — Crescimento: Marketplace e Gamificação exclusiva para professores.
  - Fase 3 — Comunidade: Engajamento e colaboração com rotas sociais.
- Metas de negócio (12 meses):
  - Aquisição: 5k professores cadastrados, 2k usuários ativos mensais.
  - Receita: MRR consistente via assinatura; marketplace com take rate definido.
  - Produto: Tempo de geração de plano < 10s; NPS > 45; DAU/MAU > 40%.
  - Qualidade: Taxa de falhas críticas < 0.5% por mês; P0 bugs resolvidos < 48h.
- Princípios:
  - Segurança e conformidade (LGPD, RLS/Policy, anonimização)
  - DX/UX consistentes no Design System Moderno
  - Observabilidade desde o MVP (telemetria, tracing, logs, métricas de uso)

## 2) Cronograma com Marcos e Prazos

- Estrutura de sprints: ciclos de 2 semanas.
- Duração estimada: 8 meses (F1: 3m, F2: 3m, F3: 2m)

### Fase 1 — MVP (Sprints 1–6)
- Sprint 1: Setup, Arquitetura e DS
  - Entregáveis: Repositório, CI mínima, Tailwind/DS, Supabase base, Stripe sandbox.
  - Marcos: Ambiente dev pronto, rota básica e layout.
- Sprint 2: Autenticação e Onboarding
  - Entregáveis: Auth com Supabase, fluxo onboarding, guardar preferências docentes.
  - Marcos: Acesso funcional e onboarding completo.
- Sprint 3: IA Planejamento v1
  - Entregáveis: Fluxo de geração de plano, histórico, ajuste de parâmetros.
  - Marcos: Geração de plano em <10s com logging de prompts.
- Sprint 4: Pagamentos e Planos
  - Entregáveis: Checkout Stripe, webhooks, planos de assinatura, portal do cliente.
  - Marcos: Cobrança recorrente funcionando em sandbox.
- Sprint 5: Observabilidade e Qualidade
  - Entregáveis: Logs, métricas de uso, monitoramento erros, testes E2E básicos.
  - Marcos: Painel interno mínimo de métricas.
- Sprint 6: Landing, SEO e Lançamento Beta
  - Entregáveis: Landing final, SEO, performance, política de privacidade.
  - Marcos: Beta aberto com lista de espera/convite.

### Fase 2 — Crescimento (Sprints 7–12)
- Sprint 7: Marketplace v1 — Publicação
  - Entregáveis: CRUD de planos de aula, licenças/terms, indexação, busca.
  - Marcos: Primeiras publicações com políticas de uso.
- Sprint 8: Marketplace v2 — Transações
  - Entregáveis: Compra/venda, comissões, taxas; webhooks; fatura/recibo.
  - Marcos: Transações completas em sandbox com testes.
- Sprint 9: Avaliações e Feedback
  - Entregáveis: Ratings, reviews, feedback estruturado; moderação mínima.
  - Marcos: Página de avaliações com RLS e rate limits.
- Sprint 10: Gamificação v1 — Pontuação e Níveis
  - Entregáveis: Modelo de pontos, níveis, progressão; eventos de jogo.
  - Marcos: Regras aplicadas e refletidas em perfis.
- Sprint 11: Gamificação v2 — Badges e Ranking
  - Entregáveis: Catálogo de badges, regras de concessão, leaderboard por categoria.
  - Marcos: Rankings visíveis e auditáveis.
- Sprint 12: Painéis Admin
  - Entregáveis: Controles super_admin, comissão, moderação; relatórios.
  - Marcos: Operação do marketplace sob governança.

### Fase 3 — Comunidade (Sprints 13–16)
- Sprint 13: Página Comunidade e Perfis
  - Entregáveis: Feed, perfis, seguir/favoritar, políticas básicas.
  - Marcos: Engajamento inicial com métricas.
- Sprint 14: Colaboração e Grupos
  - Entregáveis: Comentários, threads, grupos/temas, notificações internas.
  - Marcos: Colaboração funcional com rate limits.
- Sprint 15: Integração Assinaturas — Benefícios
  - Entregáveis: Benefícios diferenciados por plano; upgrade incentivado.
  - Marcos: Aumento de conversão/upgrade mensurável.
- Sprint 16: Políticas e Hardening
  - Entregáveis: Auditorias, refinamento de moderação, segurança, backups.
  - Marcos: Revisão final de conformidade e estabilidade.

## 3) Divisão por Etapas/Fases do Projeto

- Fase 1 — MVP
  - Foco em valor núcleo (IA planejamento, auth, pagamentos, UX base)
  - Critérios de aceite: fluxo completo de geração e assinatura funcional.
- Fase 2 — Crescimento
  - Consolidação de monetização (marketplace) e engajamento (gamificação)
  - Critérios de aceite: transações e gamificação auditáveis.
- Fase 3 — Comunidade
  - Criação de valor social e colaboração docente
  - Critérios de aceite: interações moderadas e métricas de uso sustentáveis.

## 4) Priorização de Tarefas e Entregáveis

- P0 (essencial / bloqueia valor):
  - Auth/Onboarding; IA Planejamento v1; Stripe + webhooks; RLS/Policies; observabilidade; landing/SEO.
- P1 (importante / acelera crescimento):
  - Marketplace CRUD + transações; avaliações; gamificação pontos/níveis; painéis admin.
- P2 (incremental / diferenciação):
  - Badges avançadas; ranking por disciplina; grupos/comunidade; notificações; analytics avançado.

## 5) Responsáveis por Etapa (RACI resumido)

- Papéis: PM (Produto), Tech Lead (TL), Frontend (FE), Backend (BE), QA, Design (DS), Super Admin (SA).
- Exemplos:
  - Auth/Onboarding: PM(A), TL(R), FE(R), BE(R), QA(C), DS(C)
  - IA Planejamento v1: PM(A), TL(R), BE(R), FE(C), QA(C), DS(C)
  - Stripe/Checkout/Webhooks: PM(C), TL(R), BE(R), FE(C), QA(C), SA(C)
  - Marketplace CRUD/Transações: PM(A), TL(R), BE(R), FE(R), QA(C), DS(C), SA(C)
  - Gamificação pontos/níveis/badges: PM(A), TL(R), BE(R), FE(R), QA(C), DS(C)
  - Painéis Admin: PM(C), TL(R), BE(R), FE(C), QA(C), SA(A)
  - Comunidade: PM(A), TL(R), FE(R), BE(C), QA(C), DS(R)

## 6) Marcos, Dependências e Critérios de Aceite

- Marcos chave:
  - Beta MVP (fim Sprint 6)
  - GA + Marketplace (fim Sprint 12)
  - Comunidade v1 (fim Sprint 16)
- Dependências:
  - Configuração Stripe (prod/sandbox), Supabase (schemas, RLS), Tailwind/DS, envs.
- Critérios gerais de aceite:
  - Testes unitários dos módulos core
  - RLS/Policies corretas; logs auditáveis; latência em metas
  - UX consistente e responsivo; acessibilidade mínima (WCAG AA)

## 7) Riscos e Mitigações

- Risco: Falhas de webhooks de pagamento → Mitigação: fila e reprocessamento idempotente.
- Risco: Abuso no marketplace/comunidade → Mitigação: moderação, rate limits, bloqueios.
- Risco: Drift de esquema Supabase → Mitigação: migrações versionadas, branches de dev.
- Risco: Baixa conversão de planos → Mitigação: benefícios progressivos, upgrade in-app, experimentos A/B.

## 8) Governança e Operação

- Políticas (LGPD, marketplace, gamificação justa) conforme Documento Técnico.
- Rituais: Planejamento por sprint, daily, demo/retro; review de métricas quinzenal.
- Observabilidade: logs, métricas de uso, SLA internos; relatórios admin mensais.

## 9) Métricas de Sucesso por Fase

- Fase 1: Tempo geração < 10s, conversão landing→cadastro > 8%, 500+ planos gerados.
- Fase 2: ≥ 200 publicações marketplace, ≥ 300 transações, ≥ 60% usuários com níveis.
- Fase 3: DAU/MAU > 40%, ≥ 20% posts com interação útil, churn < 5%.

---

Referências: PRD, Arquitetura Técnica, Design System, Guia de Implementação, Documento Técnico Gamificação/Marketplace.
