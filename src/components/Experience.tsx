"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Laptop, Mic2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/contact";

const icons = [Mic2, Laptop, GraduationCap];

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.experience.title} lead={t.experience.lead} />

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-black shadow-[var(--card-shadow)]"
          >
            <Image
              src="/portrait-lifestyle.jpg"
              alt={`${SITE.name} — EdTech lifestyle`}
              width={768}
              height={1024}
              className="h-full min-h-[320px] w-full object-cover object-center lg:min-h-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-1">
            {t.experience.items.map((item, index) => {
              const Icon = icons[index] ?? Mic2;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="glass-card group rounded-2xl p-5 transition hover:-translate-y-0.5 sm:p-6"
                >
                  <span className="inline-flex rounded-xl bg-[var(--accent-soft)] p-2.5 text-[var(--accent)] transition group-hover:scale-105">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-[var(--fg)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {item.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
