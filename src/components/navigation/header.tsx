"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]")
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-64px 0px -40% 0px",
        threshold: 0.4,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-aula-completa.svg"
            alt="Aula Completa"
            width={192}
            height={192}
            className="h-[192px] w-[192px]"
            priority
          />
        </Link>

        <nav aria-label="Navegação principal" className={cn("hidden items-center gap-6 md:flex")}> 
          <Link
            href="#beneficios"
            aria-current={activeSection === "beneficios" ? "page" : undefined}
            className={cn(
              "text-sm text-neutral-700 hover:text-neutral-900",
              activeSection === "beneficios" && "text-primary-700 font-semibold"
            )}
          >
            Benefícios
          </Link>
          <Link
            href="#demo"
            aria-current={activeSection === "demo" ? "page" : undefined}
            className={cn(
              "text-sm text-neutral-700 hover:text-neutral-900",
              activeSection === "demo" && "text-primary-700 font-semibold"
            )}
          >
            Demo IA
          </Link>
          <Link
            href="#depoimentos"
            aria-current={activeSection === "depoimentos" ? "page" : undefined}
            className={cn(
              "text-sm text-neutral-700 hover:text-neutral-900",
              activeSection === "depoimentos" && "text-primary-700 font-semibold"
            )}
          >
            Depoimentos
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#cta"
            aria-current={activeSection === "cta" ? "page" : undefined}
            className="btn btn-primary"
          >
            Começar Grátis
          </Link>
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="md:hidden btn btn-outline"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="menu-mobile" className="md:hidden border-t border-neutral-200 bg-white">
          <div className="container py-3 space-y-2">
            <Link
              href="#beneficios"
              aria-current={activeSection === "beneficios" ? "page" : undefined}
              className={cn("block text-sm", activeSection === "beneficios" && "font-semibold text-primary-700")}
              onClick={() => setOpen(false)}
            >
              Benefícios
            </Link>
            <Link
              href="#demo"
              aria-current={activeSection === "demo" ? "page" : undefined}
              className={cn("block text-sm", activeSection === "demo" && "font-semibold text-primary-700")}
              onClick={() => setOpen(false)}
            >
              Demo IA
            </Link>
            <Link
              href="#depoimentos"
              aria-current={activeSection === "depoimentos" ? "page" : undefined}
              className={cn("block text-sm", activeSection === "depoimentos" && "font-semibold text-primary-700")}
              onClick={() => setOpen(false)}
            >
              Depoimentos
            </Link>
            <Link
              href="#cta"
              aria-current={activeSection === "cta" ? "page" : undefined}
              className="btn btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              Começar Grátis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}