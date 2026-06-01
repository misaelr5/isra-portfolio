# ISRA Portfolio Web

Portfolio oficial de **ISRA** (Innovación en Sistemas, Redes y Apps), enfocado en presentar servicios, proyectos, trayectoria y canales de contacto con una experiencia visual moderna y orientada a conversión.

## Finalidad del portfolio
- Mostrar autoridad técnica y comercial.
- Convertir visitas en consultas (WhatsApp y formulario).
- Exponer proyectos reales con contexto, stack y enlaces.
- Comunicar propuesta de valor, servicios y formación de forma clara.

## Qué se trabajó en esta iteración
- Rediseño y simplificación de secciones clave de `Nosotros`.
- Mejora de microinteracciones y animaciones de entrada.
- Optimización fuerte para mobile (espaciado, jerarquía, densidad visual, interacción táctil).
- Optimización SEO técnica:
  - metadata global y por página,
  - Open Graph/Twitter,
  - canonicales,
  - `robots`,
  - `sitemap`,
  - `manifest`,
  - datos estructurados (`Schema.org`).
- Mejora de búsqueda de proyectos con input fluido (`useDeferredValue`).
- Limpieza general de contenido y consistencia textual.
- Actualización del portfolio de proyectos:
  - agregado de proyecto “Landing para Profesional”,
  - ajuste de títulos para coherencia,
  - proyecto “Portfolio Web de ISRA” linkeado al repo y sin botón de demo.

## Stack
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion

## Ejecutar en local
```bash
npm install
npm run dev
```

Abrir en: `http://localhost:3000`

## Variables recomendadas
Crear `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
RESEND_API_KEY=...
RESEND_FROM_EMAIL=...
CONTACT_TO_EMAIL=...
```

## Estructura rápida
- `app/`: rutas, metadata, SEO técnico.
- `components/portfolio/`: UI y secciones.
- `lib/site.ts`: datos de marca, contacto y redes.
- `lib/metadata.ts`: plantilla SEO y social.
- `public/images/`: assets visuales.

