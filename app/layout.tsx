import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { AnimatedNetworkBackground } from "@/components/portfolio/AnimatedNetworkBackground";
import { AppMotion } from "@/components/portfolio/AppMotion";
import { Footer } from "@/components/portfolio/Footer";
import { Navbar } from "@/components/portfolio/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "ISRA | Portfolio personal",
  description:
    "Portfolio de ISRA, equipo enfocado en desarrollo web, software, redes, aplicaciones, CMS, IA y ciberseguridad."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <AppMotion />
        <AnimatedNetworkBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
