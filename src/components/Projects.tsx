"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/contact";

const projectLinks = [
  SITE.projects.englishSimpleTrainer,
  SITE.projects.tugonn,
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.projects.title} lead={t.projects.lead} />

        <div className="grid gap-5 lg:grid-cols-2">
          {t.projects.items.map((project, index) => {
            const featured = index === 0;
            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card relative overflow-hidden rounded-2xl p-6 sm:p-7 ${
                  featured ? "lg:col-span-2 lg:grid lg:grid-cols-[1.4fr_1fr] lg:gap-8" : ""
                }`}
              >
                {featured ? (
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--accent-soft)] blur-2xl" />
                ) : null}

                <div>
                  {featured ? (
                    <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                      <Sparkles size={12} />
                      {t.projects.featured}
                    </span>
                  ) : null}

                  <h3 className="text-2xl font-semibold tracking-tight text-[var(--fg)]">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    {project.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--border)] bg-[var(--bg)]/60 px-3 py-1 text-xs font-medium text-[var(--muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={projectLinks[index]}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                  >
                    {featured ? t.projects.demo : t.projects.view}
                    <ExternalLink size={14} />
                  </a>
                </div>

                {featured ? (
                  <div className="mt-6 hidden items-end lg:mt-0 lg:flex">
                    <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)]/50 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                        EdTech Platform
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                        Roadmaps · Vocabulary + IPA · Grammar drills · Homework ·
                        Progress tracking
                      </p>
                    </div>
                  </div>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
