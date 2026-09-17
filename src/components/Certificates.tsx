"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";

export function Certificates() {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.certificates.title} />

        <div className="grid gap-4 md:grid-cols-2">
          {t.certificates.items.map((item, index) => (
            <motion.article
              key={`${item.org}-${item.title}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card flex items-start gap-4 rounded-2xl p-6"
            >
              <span className="rounded-xl bg-[var(--accent-soft)] p-2.5 text-[var(--accent)]">
                <BadgeCheck size={20} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--fg)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                  {item.org}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.meta}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
