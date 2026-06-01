import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Resumen profesional",
  description:
    "Resumen profesional de ISRA: habilidades técnicas, formación, experiencia y certificaciones en desarrollo web, sistemas y software.",
  path: "/resume"
});

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return children;
}

