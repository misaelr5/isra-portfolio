import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Resumen profesional",
  description: "Habilidades, formación, experiencia y certificaciones del equipo ISRA en un solo lugar.",
  path: "/resume"
});

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return children;
}
