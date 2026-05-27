"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Preloader } from "@/components/portfolio/Preloader";

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

export function AppMotion() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const hasMountedRoute = useRef(false);
  const lastPathname = useRef<string | null>(null);
  const [preloaderVisible, setPreloaderVisible] = useState(false);
  const [preloaderLabel, setPreloaderLabel] = useState("Cargando experiencia");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("motion-ready");

    const firstVisit = window.sessionStorage.getItem("isra-preloader-seen") !== "true";
    const preloadDelay = reduceMotion ? 80 : firstVisit ? 1800 : 800;

    if (!reduceMotion && firstVisit) {
      document.body.classList.add("is-preloading");
      setPreloaderVisible(true);
      setPreloaderLabel("Cargando experiencia");
    } else if (!reduceMotion) {
      setPreloaderVisible(true);
      setPreloaderLabel("Cargando página");
    } else {
      setPreloaderVisible(false);
      document.body.classList.add("page-loaded", "preloader-seen");
    }

    const preloadTimer = window.setTimeout(() => {
      document.body.classList.add("page-loaded");
      document.body.classList.remove("is-preloading");
      document.body.classList.add("preloader-seen");
      window.sessionStorage.setItem("isra-preloader-seen", "true");
      setPreloaderVisible(false);
    }, preloadDelay);

    if (reduceMotion) {
      return () => window.clearTimeout(preloadTimer);
    }

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame = 0;

    function onPointerMove(event: PointerEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    function animateCursor() {
      cursorX = lerp(cursorX, mouseX, 0.18);
      cursorY = lerp(cursorY, mouseY, 0.18);
      ringX = lerp(ringX, mouseX, 0.1);
      ringY = lerp(ringY, mouseY, 0.1);

      if (cursor) cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      if (ring) ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(animateCursor);
    }

    function setHovering(isHovering: boolean) {
      document.body.classList.toggle("cursor-hovering", isHovering);
    }

    function onPointerOver(event: PointerEvent) {
      if ((event.target as Element | null)?.closest("a, button, .brand-card, [role='button']")) {
        setHovering(true);
      }
    }

    function onPointerOut(event: PointerEvent) {
      if ((event.target as Element | null)?.closest("a, button, .brand-card, [role='button']")) {
        setHovering(false);
      }
    }

    const magneticItems = Array.from(document.querySelectorAll<HTMLElement>("a, button, .social-icon")).filter(
      (item) => !item.classList.contains("no-magnetic") && !item.closest(".no-magnetic")
    );

    const cleanups = magneticItems.map((item) => {
      const move = (event: PointerEvent) => {
        const bounds = item.getBoundingClientRect();
        const x = event.clientX - (bounds.left + bounds.width / 2);
        const y = event.clientY - (bounds.top + bounds.height / 2);
        item.style.transition = "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
        item.style.transform = `translate3d(${x * 0.055}px, ${y * 0.055}px, 0)`;
      };
      const leave = () => {
        item.style.transition = "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)";
        item.style.transform = "";
      };
      item.addEventListener("pointermove", move);
      item.addEventListener("pointerleave", leave);
      return () => {
        item.removeEventListener("pointermove", move);
        item.removeEventListener("pointerleave", leave);
      };
    });

    window.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    frame = requestAnimationFrame(animateCursor);

    return () => {
      window.clearTimeout(preloadTimer);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      window.cancelAnimationFrame(frame);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    if (!hasMountedRoute.current || lastPathname.current === pathname) {
      hasMountedRoute.current = true;
      lastPathname.current = pathname;
      document.body.classList.add("route-loaded");
      return;
    }

    lastPathname.current = pathname;
    document.body.classList.remove("route-loaded");
    document.body.classList.add("route-transitioning");

    setPreloaderLabel("Cargando página");
    setPreloaderVisible(true);

    window.scrollTo({ top: 0, behavior: "auto" });

    const routeTimer = window.setTimeout(() => {
      document.body.classList.remove("route-transitioning");
      document.body.classList.add("route-loaded");
      setPreloaderVisible(false);
    }, 700);

    return () => {
      window.clearTimeout(routeTimer);
    };
  }, [pathname]);

  return (
    <>
      <Preloader visible={preloaderVisible} label={preloaderLabel} />
      <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
