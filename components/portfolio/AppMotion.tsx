"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

const cardSelector = "article, aside, form, .bg-card, .bg-card-alt, .rounded-2xl, .card";

export function AppMotion() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hasMountedRoute = useRef(false);
  const lastPathname = useRef<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("motion-ready");
    const preloaderSeen = window.sessionStorage.getItem("isra-preloader-seen") === "true";
    const preloadDelay = reduceMotion || preloaderSeen ? 60 : 1750;

    if (!preloaderSeen && !reduceMotion) {
      document.body.classList.add("is-preloading");
    } else {
      document.body.classList.add("preloader-seen");
    }

    const preloadTimer = window.setTimeout(() => {
      document.body.classList.add("page-loaded");
      document.body.classList.remove("is-preloading");
      document.body.classList.add("preloader-seen");
      window.sessionStorage.setItem("isra-preloader-seen", "true");
    }, preloadDelay);

    function markCards(root: ParentNode = document) {
      const cards = Array.from(root.querySelectorAll<HTMLElement>(cardSelector));

      cards.forEach((card, index) => {
        if (!card.closest("nav") && !card.matches("input, textarea, select") && !card.closest(".no-brand-card") && !card.classList.contains("no-brand-card")) {
          card.classList.add("brand-card");
          card.style.setProperty("--card-pop-delay", `${Math.min(index * 70, 700)}ms`);
        }
      });
    }

    markCards();

    const cardObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          if (
            node.matches(cardSelector) &&
            !node.closest("nav") &&
            !node.matches("input, textarea, select") &&
            !node.closest(".no-brand-card") &&
            !node.classList.contains("no-brand-card")
          ) {
            node.classList.add("brand-card");
            node.style.setProperty("--card-pop-delay", "0ms");
          }

          markCards(node);
          prepareTextReveals(node);
          prepareReveals(node);
          node.querySelectorAll<HTMLElement>(".motion-section").forEach((section) => {
            sectionObserver.observe(section);
          });
        });
      });
    });

    cardObserver.observe(document.body, { childList: true, subtree: true });

    function prepareTextReveals(root: ParentNode = document) {
      Array.from(root.querySelectorAll<HTMLElement>("h1, h2, h3, .section-title")).forEach((element) => {
        if (
          element.dataset.textReveal === "true" ||
          element.closest("nav, .preloader, button, a") ||
          element.children.length > 0
        ) {
          return;
        }

        const text = element.textContent?.trim();

        if (!text || text.length > 90) {
          return;
        }

        element.dataset.textReveal = "true";
        element.setAttribute("aria-label", text);
        element.textContent = "";

        text.split(/(\s+)/).forEach((part, index) => {
          if (/^\s+$/.test(part)) {
            element.append(document.createTextNode(part));
            return;
          }

          const span = document.createElement("span");
          span.className = "text-reveal-word";
          span.setAttribute("aria-hidden", "true");
          span.style.setProperty("--word-delay", `${Math.min(index * 26, 420)}ms`);
          span.textContent = part;
          element.append(span);
        });
      });
    }

    function prepareRevealGroup(group: HTMLElement, groupIndex = 0) {
      group.classList.add("motion-section");
      group.style.setProperty("--section-delay", `${Math.min(groupIndex * 28, 180)}ms`);

      Array.from(group.querySelectorAll<HTMLElement>("article, aside, form, .brand-card, .bg-card, .bg-card-alt, .rounded-2xl, li")).forEach((item, index) => {
        item.style.setProperty("--stagger-delay", `${Math.min(index * 52, 420)}ms`);
        item.classList.add("stagger-item");
      });

      prepareTextReveals(group);
    }

    function prepareReveals(root: ParentNode = document) {
      const groups =
        root instanceof HTMLElement && root.matches("main > section, .fade-in")
          ? [root, ...Array.from(root.querySelectorAll<HTMLElement>("main > section, .fade-in"))]
          : Array.from(root.querySelectorAll<HTMLElement>("main > section, .fade-in"));

      groups.forEach((group, index) => {
        prepareRevealGroup(group, index);
      });
    }

    prepareTextReveals();
    prepareReveals();

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          sectionObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll<HTMLElement>(".motion-section").forEach((section) => {
      sectionObserver.observe(section);
    });

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

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target as HTMLElement;
          const target = Number(node.dataset.countTo ?? 0);
          const start = performance.now();

          function tick(now: number) {
            const progress = Math.min((now - start) / 1200, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            node.textContent = Math.round(target * eased).toString();
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          counterObserver.unobserve(node);
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll<HTMLElement>("[data-count-to]").forEach((node) => counterObserver.observe(node));

    if (reduceMotion) {
      return () => {
        window.clearTimeout(preloadTimer);
        cardObserver.disconnect();
        sectionObserver.disconnect();
        counterObserver.disconnect();
        cleanups.forEach((cleanup) => cleanup());
      };
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

    function onCardClick(event: MouseEvent) {
      const card = (event.target as Element | null)?.closest<HTMLElement>(".brand-card, .card");

      if (!card || card.closest("nav")) {
        return;
      }

      card.classList.remove("is-selected");
      window.requestAnimationFrame(() => {
        card.classList.add("is-selected");
        window.setTimeout(() => card.classList.remove("is-selected"), 920);
      });
    }

    window.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    document.addEventListener("click", onCardClick);
    frame = requestAnimationFrame(animateCursor);

    return () => {
      window.clearTimeout(preloadTimer);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      document.removeEventListener("click", onCardClick);
      window.cancelAnimationFrame(frame);
      cardObserver.disconnect();
      sectionObserver.disconnect();
      counterObserver.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    if (!hasMountedRoute.current || lastPathname.current === pathname) {
      hasMountedRoute.current = true;
      lastPathname.current = pathname;
      document.body.classList.add("route-loaded");
      return;
    }

    lastPathname.current = pathname;
    document.body.classList.remove("route-loaded");
    document.body.classList.add("route-transitioning");

    const routeTimer = window.setTimeout(() => {
      document.body.classList.remove("route-transitioning");
      document.body.classList.add("route-loaded");
    }, 820);

    return () => window.clearTimeout(routeTimer);
  }, [pathname]);

  return (
    <>
      <div className="preloader" aria-hidden="true">
        <div className="preloader-panel">
          <span className="brand-star preloader-star" />
          <p className="preloader-brand">ISRA</p>
          <p className="preloader-copy">Preparando experiencia</p>
        </div>
      </div>
      <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
