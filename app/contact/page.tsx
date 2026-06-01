import { ArrowRight } from "lucide-react";
import { AnimatedSubtitle } from "@/components/portfolio/AnimatedSubtitle";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { pageMetadata } from "@/lib/metadata";
import { defaultWhatsAppHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contacto",
  description:
    "Contactá a ISRA para cotizar tu sitio web, e-commerce o sistema a medida. Respuesta rápida por formulario o WhatsApp desde Córdoba, Argentina.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-page text-navy">
      <section className="section-top section-padding">
        <Reveal className="container-shell">
          <SectionIntro
            badge="Contacto"
            title="Hablemos de tu proyecto"
            subtitle="¿Tenés una idea, una web para mejorar o necesitás una solución digital? Escribinos y contanos qué querés construir."
          />
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <AnimatedSubtitle
              className="service-text-pop service-text-pop-2 text-lg font-semibold text-navy"
              text="Tu mensaje es el primer paso para una presencia digital con más claridad y resultados."
            />
          </div>
          <div className="service-text-pop service-text-pop-3 mt-8 flex justify-center">
            <a
              className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 font-semibold text-white transition hover:bg-[#e04a10]"
              href={defaultWhatsAppHref}
              rel="noreferrer"
              target="_blank"
            >
              Cotizar por WhatsApp ahora
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </section>

      <section className="container-shell pb-24">
        <Reveal>
          <div className="service-panel-card">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </main>
  );
}

