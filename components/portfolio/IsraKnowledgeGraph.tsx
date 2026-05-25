"use client";

import { useMemo, useState } from "react";

type NodeKind = "center" | "main" | "sub";

type GraphNode = {
  id: string;
  label: string;
  description: string;
  kind: NodeKind;
  x: number;
  y: number;
};

type GraphLink = {
  source: string;
  target: string;
};

const nodes: GraphNode[] = [
  {
    id: "isra",
    label: "ISRA",
    description: "Conectamos tecnologia, diseno y estrategia para crear soluciones digitales reales.",
    kind: "center",
    x: 500,
    y: 380
  },
  {
    id: "web",
    label: "Desarrollo Web",
    description: "Construccion de sitios modernos, rapidos y adaptados a cada proyecto.",
    kind: "main",
    x: 300,
    y: 170
  },
  {
    id: "apps",
    label: "Apps Web",
    description: "Interfaces dinamicas, escalables y orientadas a la experiencia del usuario.",
    kind: "main",
    x: 520,
    y: 120
  },
  {
    id: "systems",
    label: "Sistemas",
    description: "Herramientas internas, paneles y automatizaciones para ordenar procesos.",
    kind: "main",
    x: 735,
    y: 190
  },
  {
    id: "networks",
    label: "Redes",
    description: "Base tecnica para conectar servicios, infraestructura y soluciones digitales.",
    kind: "main",
    x: 800,
    y: 400
  },
  {
    id: "security",
    label: "Ciberseguridad",
    description: "Buenas practicas y formacion continua para construir soluciones mas robustas.",
    kind: "main",
    x: 680,
    y: 600
  },
  {
    id: "cms",
    label: "CMS",
    description: "Implementacion y personalizacion de plataformas como WordPress, WooCommerce, Webflow y Shopify.",
    kind: "main",
    x: 440,
    y: 655
  },
  {
    id: "uiux",
    label: "UI/UX",
    description: "Diseno claro, responsive y pensado para conversion.",
    kind: "main",
    x: 210,
    y: 535
  },
  {
    id: "ai",
    label: "IA",
    description: "Exploracion de inteligencia artificial, automatizacion y nuevas tecnologias.",
    kind: "main",
    x: 180,
    y: 320
  },
  { id: "html", label: "HTML", description: "Estructura semantica para interfaces web.", kind: "sub", x: 120, y: 105 },
  { id: "css", label: "CSS", description: "Estilos visuales, responsive y experiencia de marca.", kind: "sub", x: 220, y: 65 },
  { id: "javascript", label: "JavaScript", description: "Interactividad y logica en el navegador.", kind: "sub", x: 355, y: 55 },
  { id: "php", label: "PHP", description: "Backend y personalizacion de plataformas web.", kind: "sub", x: 190, y: 205 },
  { id: "python", label: "Python", description: "Automatizacion, logica y exploracion tecnica.", kind: "sub", x: 390, y: 245 },
  { id: "react", label: "React", description: "Interfaces modernas basadas en componentes.", kind: "sub", x: 500, y: 30 },
  { id: "next", label: "Next.js", description: "Aplicaciones web performantes con React.", kind: "sub", x: 620, y: 45 },
  { id: "tailwind", label: "Tailwind", description: "Sistema visual rapido, consistente y responsive.", kind: "sub", x: 700, y: 110 },
  { id: "frontend", label: "Frontend", description: "Capa visual e interactiva del producto.", kind: "sub", x: 440, y: 200 },
  { id: "backend", label: "Backend", description: "Logica, datos e integraciones del sistema.", kind: "sub", x: 610, y: 210 },
  { id: "dashboards", label: "Dashboards", description: "Visualizacion clara de datos y procesos.", kind: "sub", x: 850, y: 105 },
  { id: "apis", label: "APIs", description: "Puentes ordenados entre sistemas y servicios.", kind: "sub", x: 925, y: 215 },
  { id: "automation", label: "Automatizacion", description: "Flujos que reducen tareas repetitivas.", kind: "sub", x: 835, y: 285 },
  { id: "internal", label: "Paneles internos", description: "Herramientas privadas para equipos y operaciones.", kind: "sub", x: 690, y: 300 },
  { id: "connectivity", label: "Conectividad", description: "Servicios conectados con criterio tecnico.", kind: "sub", x: 915, y: 360 },
  { id: "infra", label: "Infraestructura", description: "Base estable para productos digitales.", kind: "sub", x: 925, y: 475 },
  { id: "monitoring", label: "Monitoreo", description: "Observacion de servicios, estado y continuidad.", kind: "sub", x: 805, y: 520 },
  { id: "hardening", label: "Hardening", description: "Ajustes para reducir superficie de riesgo.", kind: "sub", x: 830, y: 650 },
  { id: "best", label: "Buenas practicas", description: "Criterios tecnicos para software mas robusto.", kind: "sub", x: 720, y: 725 },
  { id: "testing", label: "Testing", description: "Validacion para detectar problemas temprano.", kind: "sub", x: 610, y: 700 },
  { id: "websec", label: "Seguridad web", description: "Proteccion aplicada a sitios y aplicaciones.", kind: "sub", x: 760, y: 560 },
  { id: "wordpress", label: "WordPress", description: "Sitios administrables y extensibles.", kind: "sub", x: 330, y: 715 },
  { id: "woocommerce", label: "WooCommerce", description: "Comercio electronico sobre WordPress.", kind: "sub", x: 460, y: 735 },
  { id: "webflow", label: "Webflow", description: "Web visual con control de diseno.", kind: "sub", x: 550, y: 720 },
  { id: "shopify", label: "Shopify", description: "Tiendas online escalables.", kind: "sub", x: 300, y: 635 },
  { id: "prestashop", label: "PrestaShop", description: "Ecommerce flexible para catalogos complejos.", kind: "sub", x: 555, y: 620 },
  { id: "responsive", label: "Responsive", description: "Interfaces adaptadas a mobile, tablet y desktop.", kind: "sub", x: 70, y: 590 },
  { id: "conversion", label: "Conversion", description: "Diseno orientado a acciones y resultados.", kind: "sub", x: 125, y: 690 },
  { id: "ux", label: "Experiencia de usuario", description: "Flujos claros, simples y usables.", kind: "sub", x: 245, y: 680 },
  { id: "aiauto", label: "Automatizacion IA", description: "IA aplicada a procesos y asistentes.", kind: "sub", x: 60, y: 270 },
  { id: "exploration", label: "Exploracion", description: "Prueba continua de nuevas capacidades.", kind: "sub", x: 70, y: 390 },
  { id: "newtech", label: "Nuevas tecnologias", description: "Investigacion tecnica para ampliar soluciones.", kind: "sub", x: 150, y: 455 }
];

const links: GraphLink[] = [
  ...["web", "apps", "systems", "networks", "security", "cms", "uiux", "ai"].map((target) => ({ source: "isra", target })),
  ...["html", "css", "javascript", "php", "python"].map((target) => ({ source: "web", target })),
  ...["react", "next", "tailwind", "frontend", "backend"].map((target) => ({ source: "apps", target })),
  ...["dashboards", "apis", "automation", "internal"].map((target) => ({ source: "systems", target })),
  ...["connectivity", "infra", "monitoring"].map((target) => ({ source: "networks", target })),
  ...["hardening", "best", "testing", "websec"].map((target) => ({ source: "security", target })),
  ...["wordpress", "woocommerce", "webflow", "shopify", "prestashop"].map((target) => ({ source: "cms", target })),
  ...["responsive", "conversion", "ux"].map((target) => ({ source: "uiux", target })),
  ...["aiauto", "exploration", "newtech"].map((target) => ({ source: "ai", target }))
];

const nodeById = new Map(nodes.map((node) => [node.id, node]));

function isConnectedToActive(nodeId: string, activeId: string | null) {
  if (!activeId || nodeId === activeId) {
    return true;
  }

  return links.some(
    (link) => (link.source === activeId && link.target === nodeId) || (link.target === activeId && link.source === nodeId)
  );
}

export function IsraKnowledgeGraph() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const activeId = hoveredId ?? selectedId;
  const activeNode = activeId ? nodeById.get(activeId) : null;

  const connectedIds = useMemo(() => {
    return new Set(nodes.filter((node) => isConnectedToActive(node.id, activeId)).map((node) => node.id));
  }, [activeId]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
      y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
    });
  }

  function handleNodeClick(nodeId: string) {
    setSelectedId((current) => (current === nodeId ? null : nodeId));
  }

  return (
    <div
      className="group relative min-h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-[#1f1f1f] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:min-h-[500px] lg:min-h-[560px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        setHoveredId(null);
        setPointer({ x: 0, y: 0 });
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,0.06),transparent_34%)]" />
      <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 backdrop-blur">
        ISRA graph
      </div>

      <svg
        className="relative z-[1] h-full min-h-[404px] w-full sm:min-h-[474px] lg:min-h-[534px]"
        viewBox="0 0 1000 760"
        role="img"
        aria-label="Grafo de conocimiento de ISRA"
        style={{
          transform: `translate3d(${pointer.x * 6}px, ${pointer.y * 6}px, 0)`,
          transition: hoveredId ? "transform 120ms ease-out" : "transform 450ms ease"
        }}
      >
        <defs>
          <filter id="isra-node-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g>
          {links.map((link) => {
            const source = nodeById.get(link.source);
            const target = nodeById.get(link.target);

            if (!source || !target) {
              return null;
            }

            const isDirect = activeId ? link.source === activeId || link.target === activeId : false;
            const isParentBranch = !activeId && link.source === "isra";

            return (
              <line
                key={`${link.source}-${link.target}`}
                className={isDirect ? "isra-graph-link isra-graph-link-active" : "isra-graph-link"}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                opacity={isDirect ? 0.86 : isParentBranch ? 0.12 : 0.04}
              />
            );
          })}
        </g>

        <g>
          {nodes.map((node) => {
            const isActive = activeId === node.id;
            const isConnected = connectedIds.has(node.id);
            const isDimmed = activeId ? !isConnected : node.kind === "sub";
            const shouldShowLabel = node.kind === "center" || isActive || (activeId && isConnected);
            const radius = node.kind === "center" ? 16 : node.kind === "main" ? 11 : 8;
            const labelOffset = node.kind === "sub" ? 27 : 34;

            return (
              <g
                key={node.id}
                className="cursor-pointer outline-none transition-opacity duration-300"
                opacity={isDimmed ? 0.34 : 1}
                onPointerEnter={() => setHoveredId(node.id)}
                onFocus={() => setHoveredId(node.id)}
                onBlur={() => setHoveredId(null)}
                onClick={() => handleNodeClick(node.id)}
                tabIndex={0}
                role="button"
                aria-label={node.label}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius + (isActive ? 16 : 10)}
                  className={isActive ? "fill-white/10" : "fill-transparent"}
                  filter={isActive ? "url(#isra-node-glow)" : undefined}
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius}
                  className={
                    node.kind === "center"
                      ? "fill-white stroke-white"
                      : node.kind === "main"
                        ? "fill-slate-300 stroke-slate-300"
                        : "fill-slate-400 stroke-slate-400"
                  }
                  strokeWidth={node.kind === "center" ? 2 : 1}
                />
                <text
                  x={node.x}
                  y={node.y + labelOffset}
                  textAnchor="middle"
                  className={node.kind === "sub" ? "fill-slate-300 text-[19px] font-medium" : "fill-white text-[22px] font-semibold"}
                  opacity={shouldShowLabel ? 1 : 0}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {activeNode ? (
        <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-10 rounded-lg border border-white/10 bg-black/35 p-3 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">{activeNode.label}</p>
          <p className="mt-1 text-xs leading-5 text-white/55">{activeNode.description}</p>
        </div>
      ) : null}
    </div>
  );
}
