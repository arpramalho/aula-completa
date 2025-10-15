"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getTemplateForStage } from "@/lib/bncc";

export default function AIDemoSection() {
  const [subject, setSubject] = useState("Matemática");
  const [grade, setGrade] = useState("6º ano");
  const [topic, setTopic] = useState("Frações");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const onGenerate = async () => {
    setLoading(true);
    setResult(null);
    try {
      // Demonstração ilustrativa: gera um exemplo local sem chamar API.
      const template = getTemplateForStage("fundamental_II");
      const lines = [
        `Plano de Aula — Exemplo Ilustrativo (BNCC)`,
        `Disciplina: ${subject}`,
        `Série/Ano: ${grade}`,
        `Tema: ${topic}`,
        `Duração: ${template.durationMinutes} minutos`,
        "",
        "Objetivos e habilidades BNCC:",
        "- Desenvolver compreensão do tema com atividades progressivas.",
        "- Promover participação ativa e resolução de problemas.",
        "",
        "Estrutura sugerida:",
        ...template.sections.map((s) => `- ${s}`),
        "",
        "Avaliação:",
        template.assessment === "rubricas"
          ? "- Rubricas simples para produção final."
          : template.assessment === "formativa"
          ? "- Observações e checklists formativos."
          : "- Observação e registro descritivo.",
        "",
        "Observação: Conteúdo demonstra o conceito e não representa a funcionalidade completa do produto.",
      ];
      setResult(lines.join("\n"));
    } catch (e: any) {
      setResult("Falha ao gerar exemplo local: " + (e?.message ?? ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" aria-labelledby="demo-title" aria-describedby="demo-desc" className="bg-neutral-50">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="demo-title" className="text-2xl font-bold md:text-4xl">Demonstração da IA</h2>
          <p id="demo-desc" className="mt-2 text-neutral-600">Exemplo ilustrativo para mostrar o conceito — não é a versão completa.</p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl card p-5 space-y-4" aria-busy={loading}>
          <p className="text-xs text-neutral-500">Campos ilustrativos e bloqueados — apenas demonstração.</p>
          <div className="grid gap-3 md:grid-cols-3">
            <Input value={subject} readOnly disabled placeholder="Disciplina" />
            <Input value={grade} readOnly disabled placeholder="Série/Ano" />
            <Input value={topic} readOnly disabled placeholder="Tema" />
          </div>
          <div className="flex items-center justify-end">
            <Button onClick={onGenerate} disabled={loading}>
              {loading ? "Gerando..." : "Gerar exemplo"}
            </Button>
          </div>
          <div role="status" aria-live="polite" aria-atomic="true" className="rounded-lg bg-neutral-100 p-4 text-sm whitespace-pre-wrap min-h-[1.5rem]">
            {result ?? ""}
          </div>
          <p className="text-xs text-neutral-500">Esta demonstração não reflete as capacidades completas da plataforma Aula Completa.</p>
        </div>
      </div>
    </section>
  );
}