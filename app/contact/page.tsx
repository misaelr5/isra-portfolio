import { ArrowRight } from "lucide-react";
import { AnimatedSubtitle } from "@/components/portfolio/AnimatedSubtitle";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { pageMetadata } from "@/lib/metadata";
import { defaultWhatsAppHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contacto",
  description: "Escribinos para cotizar tu sitio web, app o sistema. ISRA responde desde Cordoba, Argentina.",
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
            subtitle="Tenes una idea, una web para mejorar o necesitas una solucion digital? Escribinos y contanos que queres construir."
          />
          <div className="mt-10 max-w-3xl mx-auto text-center">
            <AnimatedSubtitle
              className="text-lg font-semibold text-navy"
              text="Tu mensaje es el primer paso para una presencia digital con mas claridad y resultados."
            />
          </div>
          <div className="mt-8 flex justify-center">
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
          <ContactForm />
        </Reveal>
      </section>
    </main>
  );
}
