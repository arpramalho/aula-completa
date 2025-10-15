import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Aula Completa. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4 text-sm">
          <Link href="#" className="hover:underline">Privacidade</Link>
          <Link href="#" className="hover:underline">Termos</Link>
          <Link href="#" className="hover:underline">Contato</Link>
        </div>
      </div>
    </footer>
  );
}