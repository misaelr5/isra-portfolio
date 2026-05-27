"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Badge } from "./Badge";
import { fadeUp, letterLift, subtitleBlockVariants, wordBlocks } from "@/components/portfolio/motion";

type SectionIntroProps = {
  badge?: string;
  title: string;
  subtitle?: ReactNode;
  as?: "h1" | "h2";
  tone?: "light" | "dark";
};

function chunkWords(text: string, chunkSize = 6) {
  const words = text.split(/\s+/).filter(Boolean);
  const chunks: string[] = [];

  for (let index = 0; index < words.length; index += chunkSize) {
    chunks.push(words.slice(index, index + chunkSize).join(" "));
  }

  return chunks;
}

export function SectionIntro({ badge, title, subtitle, as = "h1", tone = "light" }: SectionIntroProps) {
  const headingColor = tone === "dark" ? "text-white" : "text-navy";
  const subtitleColor = tone === "dark" ? "text-white/75" : "text-muted";
  const Heading = as === "h1" ? motion.h1 : motion.h2;
  const subtitleChunks = typeof subtitle === "string" ? chunkWords(subtitle) : null;

  return (
    <div className="mx-auto max-w-3xl text-center">
      {badge ? (
        <motion.div
          initial="hidden"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.8 }}
          whileInView="visible"
        >
          <Badge>{badge}</Badge>
        </motion.div>
      ) : null}
      <Heading
        aria-label={title}
        className={`mt-4 overflow-visible text-4xl font-bold leading-tight tracking-normal md:text-5xl ${headingColor}`}
        initial="hidden"
        variants={wordBlocks}
        viewport={{ once: true, amount: 0.8 }}
        whileInView="visible"
      >
        {Array.from(title).map((letter, index) => (
          <motion.span
            aria-hidden="true"
            className="inline-block overflow-visible"
            key={`${title}-${letter}-${index}`}
            style={{ transformOrigin: "50% 72%" }}
            variants={letterLift}
          >
            {letter === " " ? "\u00a0" : letter}
          </motion.span>
        ))}
      </Heading>
      {subtitle ? (
        <motion.p
          className={`mt-4 text-base leading-8 md:text-lg ${subtitleColor}`}
          initial="hidden"
          variants={wordBlocks}
          viewport={{ once: true, amount: 0.7 }}
          whileInView="visible"
        >
          {subtitleChunks
            ? subtitleChunks.map((chunk, index) => (
                <motion.span className="inline-block" key={`${chunk}-${index}`} variants={subtitleBlockVariants}>
                  {chunk}
                  {index < subtitleChunks.length - 1 ? "\u00a0" : ""}
                </motion.span>
              ))
            : subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
