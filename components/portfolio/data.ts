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
};

export const heroSkills: Skill[] = [
  { name: "Desarrollo Web", description: "Sitios y landings modernas", icon: Globe, wide: true },
  { name: "Apps Web", description: "Aplicaciones para negocios", icon: Code2 },
  { name: "Backend & Sistemas", description: "Paneles, lógica y módulos", icon: Server },
  { name: "Bases de Datos", description: "Gestión de información", icon: Database },
  { name: "UI/UX Design", description: "Interfaces claras y usables", icon: Layout },
  { name: "CMS & E-commerce", description: "WordPress y tiendas online", icon: ShoppingCart },
  { name: "Automatización", description: "Procesos más eficientes", icon: Sparkles },
  { name: "Ciberseguridad", description: "Seguridad web en formación", icon: Lock },
  { name: "Infraestructura de Datos", description: "Datos, orden y escalabilidad", icon: Cpu }
];

export const skillBars = [
  { name: "Python", percent: 80 },
  { name: "PHP", percent: 90 },
  { name: "HTML", percent: 90 },
  { name: "React", percent: 70 },
  { name: "Next.js", percent: 65 },
  { name: "Laravel", percent: 85 }
];

export const featuredProjects: Project[] = [
  {
    title: "Detección de fraude en impuestos",
    category: "AI & ML",
    tags: ["Python", "Machine Learning", "AI"],
    description: "Sistema para detectar actividades fraudulentas en declaraciones impositivas usando AI y machine learning.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
  }
];

export const projects: Project[] = [
  ...featuredProjects,
  {
    title: "Plataforma de e-commerce",
    category: "Tiendas",
    tags: ["JavaScript", "Node.js", "React", "MongoDB"],
    description: "Plataforma full-stack de e-commerce con autenticación, catálogo de productos y procesamiento de pagos.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Portfolio personal",
    category: "Web",
    tags: ["React", "Node", "HTML", "CSS"],
    description: "Portfolio personal responsive para mostrar proyectos y habilidades.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
  }
];

export const aboutCards = [
  {
    title: "Desarrollo web",
    text: "Experiencia construyendo aplicaciones web modernas y responsive usando React.js, Next.js y Node.js.",
    icon: Code2
  },
  {
    title: "Ciencias computacionales",
    text: "Base sólida en algoritmos, estructuras de datos y principios de programación.",
    icon: GraduationCap
  },
  {
    title: "Apps & Systems",
    text: "Construcción de aplicaciones web a medida, dashboards, CRMs y herramientas internas para flujos reales de negocio.",
    icon: Brain
  }
];

export const courses = [
  "Estructuras de datos y algoritmos",
  "Fundamentos computacionales",
  "Desarrollo web",
  "Backend y sistemas web",
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

export const moreAbout = [
  {
    title: "Personal Interests",
    icon: "user",
    items: [
      "Exploring new technologies",
      "Solving algorithmic challenges",
      "Open-source contributions",
      "Web development projects"
    ]
  },
  {
    title: "Coding Philosophy",
    icon: "code",
    items: [
      "Clean and maintainable code",
      "Focus on user experience",
      "Continuous learning and improvement",
      "Building with scalability in mind"
    ]
  },
  {
    title: "Education Journey",
    icon: "education",
    items: [
      "Computer Science fundamentals",
      "Data structures and algorithms",
      "Machine learning and AI",
      "Self-taught web development"
    ]
  },
  {
    title: "Future Goals",
    icon: "book",
    items: [
      "Mastering advanced AI techniques",
      "Building impactful web applications",
      "Contributing to open-source projects",
      "Exploring blockchain development"
    ]
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
  ["Python", "Advanced", "purple"],
  ["JavaScript", "Advanced", "purple"],
  ["React.js", "Intermediate", "blue"],
  ["Node.js", "Intermediate", "blue"],
  ["Next.js", "Intermediate", "blue"],
  ["C++", "Intermediate", "blue"],
  ["Machine Learning", "Intermediate", "blue"],
  ["CSS", "Intermediate", "blue"],
  ["Blockchain", "Beginner", "green"],
  ["AI", "Intermediate", "blue"]
];
