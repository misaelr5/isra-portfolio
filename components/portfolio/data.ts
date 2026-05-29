import {
  BookOpen,
  Brain,
  Code2,
  Cpu,
  Database,
  Globe,
  GraduationCap,
  Layout,
  Lock,
  ShoppingCart,
  Sparkles,
  Server,
  type LucideIcon
} from "lucide-react";
import { siteConfig } from "@/lib/site";

export type Skill = {
  name: string;
  description: string;
  icon: LucideIcon;
  wide?: boolean;
};

export type Project = {
  title: string;
  category: "Web" | "Modulos" | "AI & ML" | "CiberSeguridad" | "Tiendas" | "Apps";
  tags: string[];
  description: string;
  image: string;
  imageAlt: string;
  repoUrl?: string;
  demoUrl?: string;
};

export type SkillLevel = {
  name: string;
  level: "Avanzado" | "Intermedio" | "En formación";
  progress: number;
};

export const heroSkills: Skill[] = [
  { name: "Desarrollo Web", description: "Sitios y landings modernas", icon: Globe, wide: true },
  { name: "Apps Web", description: "Aplicaciones para negocios", icon: Code2 },
  { name: "Backend & Sistemas", description: "Paneles, lógica y módulos", icon: Server },
  { name: "Bases de Datos", description: "Gestión de información", icon: Database },
  { name: "UI/UX Design", description: "Interfaces claras y usables", icon: Layout },
  { name: "Marketing Digital", description: "Estrategia y crecimiento online", icon: Sparkles },
  { name: "CMS & E-commerce", description: "WordPress y tiendas online", icon: ShoppingCart },
  { name: "Automatización", description: "Procesos más eficientes", icon: Sparkles },
  { name: "Ciberseguridad", description: "Seguridad web en formación", icon: Lock },
  { name: "Infraestructura de Datos", description: "Datos, orden y escalabilidad", icon: Cpu, wide: true }
];

export const skillBars: SkillLevel[] = [
  { name: "Python", level: "Avanzado", progress: 85 },
  { name: "PHP / Laravel", level: "Avanzado", progress: 88 },
  { name: "HTML & CSS", level: "Avanzado", progress: 90 },
  { name: "React", level: "Intermedio", progress: 78 },
  { name: "Next.js", level: "Intermedio", progress: 75 },
  { name: "TypeScript", level: "Intermedio", progress: 72 }
];

export const featuredProjects: Project[] = [
  {
    title: "ISRA Portfolio Web",
    category: "Web",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React", "Webs"],
    description:
      "Presencia digital del estudio con catálogo de servicios, portfolio, formulario de contacto y foco en conversión comercial.",
    image: "/images/projects/isra-portfolio-web.png",
    imageAlt: "Portfolio web de ISRA en vista desktop",
    repoUrl: "https://github.com/misaelr5/isra-portfolio",
    demoUrl: siteConfig.url
  }
];

export const projects: Project[] = [
  ...featuredProjects,
  {
    title: "ISRA Focus Pomodoro",
    category: "Apps",
    tags: ["Electron", "JavaScript", "CSS", "HTML", "Productividad", "Pomodoro"],
    description:
      "App de escritorio para enfoque por bloques con modos de estudio, tareas por sesión, historial diario y estadísticas semanales exportables.",
    image: "/images/projects/isra-focus-pomodoro.png",
    imageAlt: "App ISRA FOCUS de productividad en escritorio",
    repoUrl: "https://github.com/misaelr5/ISRA-FOCUS"
  },
  {
    title: "MyCode CRM",
    category: "Apps",
    tags: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript", "CRM"],
    description:
      "CRM web completo para gestionar clientes, proyectos, tareas, pagos y notas, con importación de leads por CSV/JSON y panel de seguimiento comercial.",
    image: "/images/projects/crm-for-cs50x.png",
    imageAlt: "Dashboard CRM desarrollado para CS50x",
    repoUrl: "https://github.com/misaelr5/CRM-FOR-CS50X"
  },
  {
    title: "Calculadora USD Casa de Cambio",
    category: "Apps",
    tags: ["HTML", "CSS", "JavaScript", "WordPress", "Shortcode", "Finanzas", "Modulo"],
    description:
      "Calculadora de compra/venta de dólares para casa de cambio, con cotizaciones editables manualmente y estructura lista para integrarse en WordPress.",
    image: "/images/projects/calculadora-usd-casa-cambio.png",
    imageAlt: "Calculadora de dólares para casa de cambio",
    repoUrl: "https://github.com/misaelr5/calculadora-usd-casa-cambio"
  },
  {
    title: "Detección de Fraude Fiscal",
    category: "AI & ML",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Data Analysis"],
    description:
      "Proyecto académico de clasificación para detectar patrones sospechosos en declaraciones impositivas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Dashboard de análisis de datos"
  },
  {
    title: "Web de E-commerce",
    category: "Tiendas",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Tiendanube", "Tiendas", "Webs"],
    description:
      "Ecommerce de indumentaria con catálogo, detalle de producto y carrito de compras, preparado para integración con Tiendanube.",
    image: "/images/projects/mi-tienda-ecommerce.png",
    imageAlt: "Ecommerce de indumentaria MYCODE en desktop y mobile",
    repoUrl: "https://github.com/misaelr5/mi-tienda",
    demoUrl: "https://e-commerceisra.netlify.app/"
  },
  {
    title: "Panel Administrativo Modular",
    category: "Modulos",
    tags: ["PHP", "Laravel", "MySQL"],
    description: "Módulo interno con roles, formularios y reportes para operaciones de un negocio local.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Panel de control de negocio"
  }
];

export const aboutCards = [
  {
    title: "Desarrollo web",
    text: "Construimos sitios y aplicaciones modernas con React, Next.js y buenas prácticas de rendimiento y SEO.",
    icon: Code2
  },
  {
    title: "Formación técnica",
    text: "Equipo en formación en ciencias computacionales, con base sólida en algoritmos, backend y seguridad.",
    icon: GraduationCap
  },
  {
    title: "Apps y sistemas",
    text: "Dashboards, CRMs y herramientas internas pensadas para procesos reales de negocio.",
    icon: Brain
  }
];

export const courses = [
  "Estructuras de datos y algoritmos",
  "Fundamentos computacionales",
  "Desarrollo web",
  "Backend y sistemas web",
  "Marketing digital & E-commerce",
  "Bases de datos",
  "Infraestructura de datos",
  "Ciberseguridad",
  "Redes y sistemas operativos",
  "Inteligencia artificial aplicada",
  "Arquitectura de software",
  "Diseño UI/UX"
];

export const certifications = [
  {
    title: "Programación con Python",
    platform: "Coursera",
    year: "2022",
    description: "Curso completo sobre conceptos avanzados de Python y sus aplicaciones."
  },
  {
    title: "Desarrollo web con JavaScript",
    platform: "Udemy",
    year: "2022",
    description: "Formación intensiva para construir aplicaciones web modernas usando JavaScript."
  },
  {
    title: "Fundamentos de Machine Learning",
    platform: "edX",
    year: "2025",
    description: "Introducción a algoritmos de machine learning y su implementación."
  },
  {
    title: "Desarrollo backend con PHP Laravel",
    platform: "Udemy",
    year: "2025",
    description:
      "Construcción de aplicaciones backend reales con Laravel, autenticación, seguridad, JWT, middleware, arquitectura de software y lógica de negocio."
  },
  {
    title: "CS50x: Ciencias de la computación",
    platform: "Harvard University",
    year: "2026",
    description:
      "Fundamentos de ciencias de la computación: programación, algoritmos, estructuras de datos, desarrollo web y resolución de problemas."
  }
];

export const education = [
  {
    title: "Educación Secundaria",
    institution: "Secundario con orientación en Economía",
    program: "Formación académica con base en economía, administración, comunicación y pensamiento lógico.",
    date: "Finalizado",
    place: "Presencial",
    grade: "Título secundario",
    bullets: [
      "Base en economía, administración, organización y responsabilidad.",
      "Desarrollo de pensamiento lógico, comunicación y resolución de problemas.",
      "Formación orientada a disciplina, análisis y aprendizaje continuo."
    ]
  },
  {
    title: "Formación Preuniversitaria",
    institution: "Universidad Siglo 21",
    program: "Preparación académica orientada al ingreso universitario, método de estudio y adaptación a entornos de mayor exigencia.",
    date: "Preuniversitario",
    place: "En formación",
    grade: "Siglo 21",
    bullets: [
      "Refuerzo en comprensión, análisis, lógica y pensamiento crítico.",
      "Preparación para exigencia universitaria, organización y rendimiento académico.",
      "Enfoque en método de estudio, disciplina y autonomía progresiva."
    ]
  },
  {
    title: "Ciencias Computacionales",
    institution: "Harvard / CS50x",
    program: "Formación intensiva en computer science, lógica de bajo nivel y desarrollo de software.",
    date: "2026 · Completado",
    place: "Online",
    grade: "Certificado en trámite",
    bullets: [
      "Base en C, Python, SQL, algoritmos, estructuras de datos y programación web.",
      "Resolución de problemas desde lógica, memoria, datos, abstracción y eficiencia.",
      "Desarrollo con Flask, SQLite, autenticación, sesiones y arquitectura inicial.",
      "Proyecto final orientado a app web funcional, autenticación, base de datos y gestión de información."
    ]
  },
  {
    title: "Ciberseguridad",
    institution: "Cyber Israel / INCD",
    program: "Análisis ofensivo y criterio de atacante.",
    date: "2026 · En formación",
    place: "Cybersecurity Trainee",
    grade: "Red Team",
    bullets: [
      "Enfoque en reconocimiento, vulnerabilidades, reportes técnicos de seguridad y OSINT.",
      "Análisis de tráfico, redes, peticiones HTTP, exposición de servicios, vectores de ataque y superficie digital.",
      "Entrenamiento con Kali Linux, Nmap, Burp Suite, Wireshark, curl y SSH.",
      "Orientación a detectar, documentar y fortalecer sistemas reales."
    ]
  }
];

export const professionalSkills = [
  ["Python", "Avanzado", "purple"],
  ["JavaScript", "Avanzado", "purple"],
  ["React.js", "Intermedio", "blue"],
  ["Node.js", "Intermedio", "blue"],
  ["Next.js", "Intermedio", "blue"],
  ["PHP / Laravel", "Avanzado", "purple"],
  ["CSS", "Avanzado", "purple"],
  ["Ciberseguridad", "En formación", "green"],
  ["IA aplicada", "Intermedio", "blue"]
] as const;
