# ISRA — Sitio web oficial

Sitio de **ISRA** (Innovación en Sistemas, Redes y Apps): estudio digital en Córdoba, Argentina. Presenta servicios, portfolio, formación y contacto.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Configuración

1. Copiá `.env.example` a `.env.local` y definí tu dominio:

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

2. Editá contacto y redes en `lib/site.ts` (email, WhatsApp, LinkedIn, GitHub).

3. Configurá el formulario con [Resend](https://resend.com):
   - `RESEND_API_KEY` — API key
   - `RESEND_FROM_EMAIL` — remitente verificado (ej. `ISRA <contacto@tudominio.com>`)
   - `CONTACT_TO_EMAIL` — destino de las consultas  
   Sin estas variables, el formulario abre el cliente de correo (`mailto`) como respaldo.

4. Ajustá precios orientativos en `lib/services.ts` si cambian tus tarifas.

5. Reemplazá los SVG de marca en `public/images/` si tenés logo final en PNG/SVG propio.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm run start
```

## Estructura

- `app/` — rutas y metadata SEO
- `components/portfolio/` — UI del sitio
- `lib/site.ts` — datos de contacto y WhatsApp
- `lib/metadata.ts` — Open Graph y plantillas SEO
- `public/images/` — logo, favicon y OG
