# Planejamento do Projeto por Etapas da BNCC

Este documento reestrutura o planejamento do projeto conforme as etapas educacionais da BNCC, garantindo que os planos de aula sejam adequados e específicos para cada fase: Educação Infantil, Ensino Fundamental I (1º ao 5º), Ensino Fundamental II (6º ao 9º) e Ensino Médio.

## Diretrizes por Etapa

### Educação Infantil
- Objetivo: experiências lúdicas e integradas; foco em campos de experiências.
- Estrutura sugerida do plano: objetivos, campos de experiências, propostas lúdicas, materiais, observação/registro.
- Duração: 30–50 min; linguagem simples, centrada em brincadeira.
- Avaliação: observação e registro descritivo; sem provas.

### Ensino Fundamental I (1º ao 5º)
- Objetivo: desenvolvimento de habilidades básicas (leitura, escrita, matemática) com BNCC.
- Estrutura: objetivos/habilidades BNCC (por componente), descrição das atividades, recursos, diferenciação, avaliação formativa simples.
- Duração: 40–50 min.

### Ensino Fundamental II (6º ao 9º)
- Objetivo: aprofundamento conceitual e interdisciplinaridade.
- Estrutura: objetivos/habilidades BNCC, conteúdo, sequência didática (introdução, prática guiada, produção), recursos, avaliação formativa e rubricas.
- Duração: 50–60 min.

### Ensino Médio
- Objetivo: competências gerais, projetos e preparações para ENEM/vestibulares.
- Estrutura: objetivos/competências, conteúdos, metodologias ativas (PBL), atividades, recursos, avaliação (rubricas, autoavaliação).
- Duração: 50–60 min.

## Especificidade do Conteúdo por Etapa
- Vocabulário e tom: ajustados à etapa (lúdico na EI; formal no EM).
- Complexidade: progressiva (EI → EM).
- Tipos de atividades: brincadeiras e exploração (EI), exercícios estruturados (EFI), projetos e investigações (EFII), debates e análises críticas (EM).
- Avaliação: observação (EI); listas e rubricas simples (EFI); rubricas e produtos (EFII/EM).

## Implementação Técnica
- Onboarding: seleção da etapa BNCC (EI, EFI, EFII, EM). [Implementado]
- Tipos e presets: `Stage` e templates por etapa para guiar o gerador.
- Gerador de planos (IA): usar etapa como parâmetro e selecionar template adequado.
- Catálogo/Marketplace: taxonomia por etapa para filtragem de materiais.
- Observabilidade: métricas por etapa (uso do gerador, templates, satisfação).

## Backlog Reestruturado (resumo)
- Criar tipos e presets BNCC por etapa (EI, EFI, EFII, EM).
- Adaptar componente de geração para aceitar `stage` e template.
- Atualizar landing e documentos de produto para refletir etapas BNCC.
- Tag de materiais por etapa e filtros de busca.
- Testes: unitários para seleção de template; E2E para fluxo de onboarding.

## Sprints Propostos
- Sprint 1: Onboarding com etapa BNCC; criação de tipos/presets; ajustes de landing.
- Sprint 2: Templates completos EI e EFI; integração inicial do gerador.
- Sprint 3: Templates EFII e EM; validação pedagógica; ajustes de UI.
- Sprint 4: QA pedagógico, rubricas e observabilidade por etapa; revisão de acessibilidade.

## Observações
- Não há contas de alunos na plataforma; todo o conteúdo e fluxo são focados em professores.
- Habilidades BNCC específicas devem ser associadas por componente e série; este documento define a estrutura e diretrizes, não uma lista exaustiva de códigos.

