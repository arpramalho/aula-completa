import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";

export const metadata: Metadata = {
  title: "Aula Completa — Educação Fluida e Moderna",
  description: "Plataforma SaaS para professores autônomos no Brasil.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Skip link para acesso rápido ao conteúdo principal */}
        <a href="#conteudo-principal" className="sr-only focus:not-sr-only fixed left-2 top-2 z-[1000] rounded-md bg-primary-700 px-3 py-2 text-white shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info-500 focus-visible:ring-offset-2">
          Ir para o conteúdo principal
        </a>
        <Header />
        <main id="conteudo-principal" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}