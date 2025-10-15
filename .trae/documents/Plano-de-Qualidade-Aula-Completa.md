# Plano de Qualidade — Aula Completa SaaS

## Metas de Qualidade
- Confiabilidade: Falhas críticas < 0.5%/mês; SLO de disponibilidade 99.5%.
- Segurança: RLS/Policies ativas; rate limits; backups; LGPD.
- Performance: Tempo de geração IA < 10s; Core Web Vitals ≥ good.
- UX: Acessibilidade mínima (WCAG AA); consistência com Design System.

## Estratégia de Testes
- Unitários: Módulos core (IA planner, marketplace, gamificação) — cobertura ≥ 70%.
- Integração: Webhooks (Stripe), Supabase RLS, APIs — cobertura ≥ 60%.
- E2E: Fluxos críticos (login, geração, compra) — cenários felizes e falhas.
- Segurança: Análises de RLS, SQL injection, auth flows; scanner básico.
- Performance: Benchmarks e tracing em geração e rotas quentes.

## Gates por Fase
- Fase 1 (MVP): testes unitários e integração básicos; smoke E2E; RLS validadas.
- Fase 2: testes E2E transacionais; simulação de fraude; auditoria de gamificação.
- Fase 3: testes de comunidade; moderação; carga em notificações.

## Observabilidade
- Logs estruturados, métricas de uso, tracing (server/API), alertas.
- Painel interno de métricas e erros por módulo.

## Processos
- Code Review 2+ aprovadores em P0/P1; linters e formatters no CI.
- Release checklist com políticas e verificação de envs.
- Postmortem e correções dentro de 48h para P0.
