"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [BookOpen, Code, Languages];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.skills.title} lead={t.skills.lead} />

        <div className="grid gap-4 md:grid-cols-3">
          {t.skills.categories.map((category, index) => {
            const Icon = icons[index] ?? BookOpen;
            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="mb-4 inline-flex rounded-xl bg-[var(--accent-soft)] p-2.5 text-[var(--accent)]">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--fg)]">
                  {category.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--muted)]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
