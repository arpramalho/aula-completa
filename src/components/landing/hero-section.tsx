"use client";
import { motion, useReducedMotion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import Link from "next/link";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section aria-labelledby="hero-title" aria-describedby="hero-desc" className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      <div className="container py-16 md:py-24">
        <motion.div
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true }}
          variants={reduceMotion ? undefined : fadeIn}
          className="mx-auto max-w-3xl text-center space-y-4"
        >
          <h1 id="hero-title" className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Revolucione seus <span className="text-info-500">Planos de</span>
            <br />
            <span className="text-info-500">Aula</span> com IA
          </h1>
          <p id="hero-desc" className="text-neutral-600 md:text-lg">
            Crie planos de aula com IA, participe da comunidade, venda materiais e gamifique o aprendizado —
            tudo em uma plataforma única.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="#cta" aria-describedby="cta-title" className="btn btn-primary">Começar Grátis</Link>
            <Link href="#demo" aria-describedby="demo-title" className="btn btn-outline">Ver Demo de IA</Link>
          </div>
          <p className="text-xs text-neutral-500">Sem cartão de crédito. Cancelamento a qualquer momento.</p>
        </motion.div>
      </div>
    </section>
  );
}