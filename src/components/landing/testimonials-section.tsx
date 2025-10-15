export default function TestimonialsSection() {
  const items = [
    {
      name: "Ana Paula",
      role: "Professora de História",
      text: "Economizei horas por semana criando planos com a IA e as atividades ficaram muito mais estruturadas.",
    },
    {
      name: "Carlos Eduardo",
      role: "Professor de Matemática",
      text: "A gamificação trouxe engajamento real. As missões são fáceis de configurar.",
    },
    {
      name: "Mariana Souza",
      role: "Professora de Português",
      text: "Vendi meus materiais no marketplace sem complicação. Excelente plataforma!",
    },
  ];

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-title" className="bg-white">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="depoimentos-title" className="text-2xl font-bold md:text-4xl">O que professores dizem</h2>
          <p className="mt-2 text-neutral-600">Relatos de quem já usa a plataforma.</p>
        </div>
        <ul className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-3" role="list">
          {items.map((t) => (
            <li key={t.name} className="h-full">
              <div className="card p-5 h-full">
                <p className="text-neutral-700">“{t.text}”</p>
                <p className="mt-3 text-sm text-neutral-600">
                  <span className="font-medium text-neutral-800">{t.name}</span> — {t.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}