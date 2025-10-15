export type Stage = "educacao_infantil" | "fundamental_I" | "fundamental_II" | "medio";

export interface LessonPlanTemplate {
  stage: Stage;
  durationMinutes: number;
  sections: string[]; // names of sections to be generated
  tone: "ludico" | "equilibrado" | "rigoroso";
  assessment: "observacao" | "formativa" | "rubricas";
}

export const BNCC_TEMPLATES: Record<Stage, LessonPlanTemplate> = {
  educacao_infantil: {
    stage: "educacao_infantil",
    durationMinutes: 40,
    sections: [
      "Objetivos",
      "Campos de experiências",
      "Propostas lúdicas",
      "Materiais",
      "Observação/Registro",
    ],
    tone: "ludico",
    assessment: "observacao",
  },
  fundamental_I: {
    stage: "fundamental_I",
    durationMinutes: 45,
    sections: [
      "Objetivos e habilidades BNCC",
      "Conteúdos",
      "Atividades estruturadas",
      "Recursos",
      "Avaliação formativa",
    ],
    tone: "equilibrado",
    assessment: "formativa",
  },
  fundamental_II: {
    stage: "fundamental_II",
    durationMinutes: 55,
    sections: [
      "Objetivos e habilidades BNCC",
      "Conteúdos",
      "Sequência didática",
      "Recursos",
      "Rubricas",
    ],
    tone: "rigoroso",
    assessment: "rubricas",
  },
  medio: {
    stage: "medio",
    durationMinutes: 55,
    sections: [
      "Competências e objetivos",
      "Conteúdos",
      "Metodologias ativas",
      "Atividades",
      "Rubricas e autoavaliação",
    ],
    tone: "rigoroso",
    assessment: "rubricas",
  },
};

export function getTemplateForStage(stage: Stage): LessonPlanTemplate {
  return BNCC_TEMPLATES[stage] ?? BNCC_TEMPLATES.fundamental_I;
}