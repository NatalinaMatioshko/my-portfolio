"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Briefcase, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/contact";

export function About() {
  const { t } = useLanguage();
  const highlights = [
    { icon: Award, text: t.about.highlights.certified },
    { icon: Code2, text: t.about.highlights.tech },
    { icon: Briefcase, text: t.about.highlights.focus },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.about.title} lead={t.about.lead} />

        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--card-shadow)]">
              <Image
                src="/portrait-soft.jpg"
                alt={SITE.name}
                width={768}
                height={1024}
                className="aspect-[3/4] h-auto w-full object-cover object-top"
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="space-y-4 text-base leading-relaxed text-[var(--muted)]"
            >
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </motion.div>

            <div className="space-y-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="glass-card flex items-start gap-3 rounded-2xl p-4"
                >
                  <span className="mt-0.5 rounded-xl bg-[var(--accent-soft)] p-2 text-[var(--accent)]">
                    <item.icon size={18} />
                  </span>
                  <p className="text-sm leading-relaxed text-[var(--fg)]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
