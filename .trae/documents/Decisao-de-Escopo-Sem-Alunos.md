# Decisão de Escopo — Plataforma Exclusiva para Professores (Sem Alunos)

## Declaração
A Aula Completa é uma plataforma SaaS exclusiva para professores. Não há contas, fluxos ou funcionalidades para alunos.

## Implicações de Produto
- Personae: Professor (usuário), Super Admin (administração). Não existe persona aluno.
- Funcionalidades: Planejamento de aulas, comunidade entre professores, marketplace B2B (professor↔professor), gamificação docente.
- Proibido: Gestão de turmas/alunos, acompanhamento individual de estudantes, emissão de notas/alunos.

## Implicações Técnicas
- Modelo de usuário: `user_role in {teacher, super_admin}`; não suportar `student`.
- Banco/Schemas: Nenhuma tabela que armazene dados pessoais de alunos.
- RLS/Policies: Políticas focadas em isolamento de dados entre professores e moderação pelo super_admin.
- Gamificação: Eventos e rankings apenas para professores.
- Marketplace: Compradores e vendedores são professores; contratos/licenças docente‑docente.

## UI/UX
- Copy e navegação deixam explícito: “Plataforma exclusiva para professores”.
- Onboarding captura preferências docentes (disciplina, nível de ensino, objetivos), sem referências a alunos.

## Governança
- Políticas e termos reforçam a ausência de coletagem de dados de alunos.
- Moderação e compliance (LGPD) focadas somente em dados de professores e conteúdo publicado.

Aprovado e aplicável a todos os documentos e implementações futuras.
