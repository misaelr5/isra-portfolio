import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentProps } from "react";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "children" | "className">;

export function CtaLink({ href, children, variant = "primary", external, className = "", ...rest }: CtaLinkProps) {
  const classes = `${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`.trim();

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a className={classes} href={href} rel={href.startsWith("http") ? "noreferrer" : undefined} target={href.startsWith("http") ? "_blank" : undefined} {...rest}>
        {children}
        <ArrowRight size={18} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...rest}>
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}
