import { Reveal } from "@/components/portfolio/Reveal";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { AnimatedSubtitle } from "@/components/portfolio/AnimatedSubtitle";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contacto",
  description: "Escribinos para cotizar tu sitio web, app o sistema. ISRA responde desde Córdoba, Argentina.",
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
          <div className="mt-10 max-w-3xl">
            <AnimatedSubtitle
              className="text-lg font-semibold text-navy"
              text="Tu mensaje es el primer paso para una presencia digital con más claridad y resultados."
            />
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
