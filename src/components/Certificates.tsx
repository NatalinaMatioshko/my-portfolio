"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink, GraduationCap, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { CERTIFICATE_PDFS } from "@/lib/contact";

export function Certificates() {
  const { t } = useLanguage();
  const featured = t.certificates.items.filter((item) => item.featured);
  const others = t.certificates.items.filter((item) => !item.featured);

  const pdfFor = (item: (typeof t.certificates.items)[number]) => {
    const index = t.certificates.items.findIndex(
      (c) => c.title === item.title && c.org === item.org
    );
    return CERTIFICATE_PDFS[index] ?? "#";
  };

  return (
    <section id="certificates" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.certificates.title}
          lead={t.certificates.lead}
        />

        <div className="mb-6 grid gap-4 md:grid-cols-2">
          {featured.map((item, index) => (
            <motion.article
              key={`${item.org}-${item.title}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card relative overflow-hidden rounded-2xl p-6"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--accent-soft)] blur-2xl" />
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                <Sparkles size={12} />
                {t.certificates.featured}
              </span>
              <div className="flex items-start gap-4">
                <span className="rounded-xl bg-[var(--accent-soft)] p-2.5 text-[var(--accent)]">
                  <BadgeCheck size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-[var(--fg)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                    {item.org}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.meta}</p>
                  <a
                    href={pdfFor(item)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition hover:gap-2.5 hover:underline"
                  >
                    {t.certificates.viewPdf}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((item, index) => (
            <motion.article
              key={`${item.org}-${item.title}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card flex flex-col rounded-2xl p-5"
            >
              <div className="mb-3 inline-flex w-fit rounded-xl bg-[var(--accent-soft)] p-2 text-[var(--accent)]">
                <BadgeCheck size={18} />
              </div>
              <h3 className="text-base font-semibold text-[var(--fg)]">
                {item.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                {item.org}
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">{item.meta}</p>
              <a
                href={pdfFor(item)}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-[var(--accent)] transition hover:gap-2.5 hover:underline"
              >
                {t.certificates.viewPdf}
                <ExternalLink size={14} />
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="mt-10"
        >
          <h3 className="mb-4 text-xl font-semibold tracking-tight text-[var(--fg)]">
            {t.certificates.educationTitle}
          </h3>
          <div className="grid gap-4">
            {t.certificates.education.map((item) => (
              <article
                key={`${item.org}-${item.title}`}
                className="glass-card flex items-start gap-4 rounded-2xl p-6"
              >
                <span className="rounded-xl bg-[var(--accent-soft)] p-2.5 text-[var(--accent)]">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <h4 className="text-base font-semibold text-[var(--fg)] sm:text-lg">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                    {item.org}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
