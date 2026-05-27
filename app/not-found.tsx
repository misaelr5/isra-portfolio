import Link from "next/link";
import { defaultWhatsAppHref } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="section-top flex min-h-[70vh] items-center justify-center px-4 pb-24 text-navy">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">404</p>
        <h1 className="mt-4 text-4xl font-bold">Página no encontrada</h1>
        <p className="mt-4 leading-8 text-muted">
          La ruta que buscás no existe o fue movida. Volvé al inicio o escribinos por WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link className="btn-primary" href="/">
            Ir al inicio
          </Link>
          <a className="btn-secondary" href={defaultWhatsAppHref} rel="noreferrer" target="_blank">
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
