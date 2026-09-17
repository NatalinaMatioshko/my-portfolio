"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  lead?: string;
  center?: boolean;
};

export function SectionHeading({
  title,
  lead,
  center = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""}`}
    >
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-3 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          {lead}
        </p>
      ) : null}
    </motion.div>
  );
}
