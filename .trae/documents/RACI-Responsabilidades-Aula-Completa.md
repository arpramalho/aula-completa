# Matriz RACI — Aula Completa SaaS

Papéis:
- PM: Product Manager
- TL: Tech Lead
- FE: Frontend Engineer
- BE: Backend Engineer
- QA: Quality Assurance
- DS: Designer
- SA: Super Admin (Operações/Políticas)

Legenda:
- R: Responsible (executa)
- A: Accountable (responde pelo resultado)
- C: Consulted (contribui/valida)
- I: Informed (mantido informado)

## Entregáveis por Fase (RACI)

### Fase 1 — MVP
- Setup, Arquitetura, DS: PM(C), TL(A/R), FE(R), BE(R), QA(C), DS(R), SA(I)
- Autenticação e Onboarding: PM(A), TL(R), FE(R), BE(R), QA(C), DS(C), SA(I)
- IA Planejamento v1: PM(A), TL(R), BE(R), FE(C), QA(C), DS(C), SA(I)
- Pagamentos (Stripe, webhooks): PM(C), TL(R), BE(R), FE(C), QA(C), DS(I), SA(C)
- Observabilidade/Qualidade: PM(C), TL(A/R), BE(R), FE(R), QA(A/R), DS(I), SA(I)
- Landing, SEO, Lançamento Beta: PM(A), TL(C), FE(R), DS(A/R), QA(C), BE(C), SA(I)

### Fase 2 — Crescimento
- Marketplace CRUD/Publicação: PM(A), TL(R), BE(R), FE(R), QA(C), DS(C), SA(C)
- Transações/Comissões: PM(C), TL(R), BE(A/R), FE(C), QA(C), DS(I), SA(C)
- Avaliações/Feedback: PM(A), TL(R), BE(R), FE(R), QA(C), DS(C), SA(C)
- Gamificação (pontos/níveis): PM(A), TL(R), BE(R), FE(R), QA(C), DS(C), SA(I)
- Badges/Ranking: PM(A), TL(R), BE(R), FE(R), QA(C), DS(C), SA(I)
- Painéis Admin: PM(C), TL(R), BE(R), FE(C), QA(C), DS(I), SA(A)

### Fase 3 — Comunidade
- Comunidade v1 (feed, perfis): PM(A), TL(R), FE(R), BE(C), QA(C), DS(R), SA(I)
- Colaboração (comentários, grupos): PM(A), TL(R), FE(R), BE(R), QA(C), DS(C), SA(C)
- Benefícios por Assinatura: PM(A), TL(C), FE(R), BE(R), QA(C), DS(C), SA(I)
- Políticas e Hardening: PM(C), TL(R), BE(R), FE(C), QA(A/R), DS(I), SA(A)

## Comunicação e Rituais
- Planejamento de sprint: PM e TL (co-lideram), todos informados.
- Daily: Equipes FE/BE/QA/TL; PM e DS consultados conforme necessidade.
- Review/Retro: PM/TL (A), FE/BE/QA/DS (R/C), SA (I).
- Relatórios mensais: PM (A), TL/QA (C), SA (I).
