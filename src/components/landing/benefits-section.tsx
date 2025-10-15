import { Brain, BookOpen, TrendingUp, Sparkles, Users, Zap } from "lucide-react";

const benefits = [
  {
    title: "Assistente IA",
    description:
      "Sugestões inteligentes e personalizadas para cada etapa do seu plano de aula",
    icon: Brain,
    iconClass: "bg-info-100 text-info-700",
  },
  {
    title: "Templates BNCC",
    description:
      "200+ templates alinhados com a Base Nacional Comum Curricular",
    icon: BookOpen,
    iconClass: "bg-success-100 text-success-700",
  },
  {
    title: "Gamificação",
    description:
      "Sistema de conquistas, badges e rankings para motivar sua jornada",
    icon: TrendingUp,
    iconClass: "bg-warning-100 text-warning-700",
  },
  {
    title: "Marketplace",
    description:
      "Compre e venda materiais didáticos de qualidade com outros educadores",
    icon: Sparkles,
    iconClass: "bg-accent-100 text-accent-700",
  },
  {
    title: "Comunidade",
    description:
      "Conecte-se com milhares de educadores e compartilhe experiências",
    icon: Users,
    iconClass: "bg-info-100 text-info-700",
  },
  {
    title: "Produtividade",
    description:
      "Economize até 80% do tempo na criação de planos de aula",
    icon: Zap,
    iconClass: "bg-success-100 text-success-700",
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" aria-labelledby="beneficios-title" className="bg-primary-50">
      <div className="container py-16 md:py-24">
        {/* Título apenas para leitores de tela, rotula semanticamente a seção */}
        <h2 id="beneficios-title" className="sr-only">Benefícios da plataforma</h2>
        <ul className="mt-0 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {benefits.map((b) => (
            <li key={b.title} className="h-full">
              <div className="card p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className={`icon h-12 w-12 rounded-xl flex items-center justify-center ${b.iconClass}`}>
                    <b.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">{b.title}</h3>
                    <p className="mt-1 text-neutral-600">{b.description}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}