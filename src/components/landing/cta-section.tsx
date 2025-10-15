import Link from "next/link";

export default function CTASection() {
  return (
    <section id="cta" aria-labelledby="cta-title" aria-describedby="cta-desc" className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h2 id="cta-title" className="text-xl font-bold md:text-3xl">Comece agora, grátis</h2>
            <p id="cta-desc" className="mt-2 text-primary-100">
              Cadastre-se em segundos e experimente a IA para criar seu primeiro plano de aula.
            </p>
          </div>
          <div className="on-dark flex items-center gap-3 md:justify-end">
            <Link href="#" className="btn btn-outline bg-white text-primary-700 hover:bg-primary-50">
              Ver planos
            </Link>
            <Link href="#" className="btn btn-accent">
              Criar conta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}