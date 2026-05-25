import { Badge } from "./Badge";

type SectionIntroProps = {
  badge?: string;
  title: string;
  subtitle?: React.ReactNode;
  as?: "h1" | "h2";
  tone?: "light" | "dark";
};

export function SectionIntro({ badge, title, subtitle, as = "h1", tone = "light" }: SectionIntroProps) {
  const Heading = as;
  const headingColor = tone === "dark" ? "text-white" : "text-navy";
  const subtitleColor = tone === "dark" ? "text-white/75" : "text-muted";

  return (
    <div className="mx-auto max-w-3xl text-center">
      {badge ? <Badge>{badge}</Badge> : null}
      <Heading className={`mt-4 text-4xl font-bold tracking-normal entrance-title md:text-5xl ${headingColor}`}>{title}</Heading>
      {subtitle ? <p className={`mt-4 text-base leading-8 entrance-fade-slide md:text-lg ${subtitleColor}`}>{subtitle}</p> : null}
    </div>
  );
}
