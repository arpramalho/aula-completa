import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { subject, grade, topic } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          summary: "Configuração de IA ausente",
          objectives: [
            "Definir OPENAI_API_KEY em .env.local para habilitar a geração",
          ],
          activities: [
            "Atividade placeholder: debate sobre o tema e pesquisa guiada",
          ],
        },
        { status: 200 }
      );
    }

    const client = new OpenAI({ apiKey });
    const prompt = `Gere um plano de aula conciso em português do Brasil.
    Disciplina: ${subject}
    Série/Ano: ${grade}
    Tema: ${topic}
    Inclua: Resumo (2 frases), 3 Objetivos alinhados à BNCC, 3 Atividades práticas.`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Você é uma IA pedagógica." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    });

    const text = completion.choices[0]?.message?.content ?? "";
    return NextResponse.json({ text }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Erro ao gerar plano" },
      { status: 500 }
    );
  }
}