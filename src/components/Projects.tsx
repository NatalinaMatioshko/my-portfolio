"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/contact";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.53 2.865 8.37 6.839 9.723.5.094.682-.222.682-.482 0-.237-.009-.866-.014-1.7-2.782.617-3.369-1.37-3.369-1.37-.454-1.18-1.11-1.495-1.11-1.495-.908-.635.069-.622.069-.622 1.004.072 1.532 1.055 1.532 1.055.892 1.563 2.341 1.111 2.91.85.091-.662.35-1.111.636-1.367-2.22-.258-4.555-1.138-4.555-5.066 0-1.119.39-2.034 1.029-2.752-.103-.258-.446-1.3.098-2.71 0 0 .84-.275 2.75 1.05A9.36 9.36 0 0 1 12 6.844a9.36 9.36 0 0 1 2.504.345c1.909-1.325 2.748-1.05 2.748-1.05.546 1.41.203 2.452.1 2.71.64.718 1.028 1.633 1.028 2.752 0 3.938-2.339 4.806-4.566 5.058.359.316.679.94.679 1.895 0 1.368-.012 2.471-.012 2.807 0 .263.18.58.688.481A10.02 10.02 0 0 0 22 12.253C22 6.586 17.523 2 12 2Z" />
    </svg>
  );
}

export function Projects() {
  const { t, locale } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.projects.title} lead={t.projects.lead} />

        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((project, index) => {
            const featured = Boolean(project.featured);
            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.24) }}
                className={`glass-card relative overflow-hidden rounded-2xl p-6 sm:p-7 ${
                  featured ? "md:col-span-2 lg:grid lg:grid-cols-[1.35fr_1fr] lg:gap-8" : ""
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

                  <h3 className="text-xl font-semibold tracking-tight text-[var(--fg)] sm:text-2xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    {project.desc[locale]}
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

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_24px_color-mix(in_srgb,var(--accent)_35%,transparent)]"
                      >
                        {t.projects.demo}
                        <ExternalLink size={14} />
                      </a>
                    ) : null}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--fg)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      <GithubIcon />
                      GitHub
                    </a>
                  </div>
                </div>

                {featured && project.name === "English Simple Trainer" ? (
                  <div className="mt-6 hidden items-end lg:mt-0 lg:flex">
                    <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)]/50 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                        EdTech Platform
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                        Roadmaps · Vocabulary · Interactive lessons · Homework ·
                        Teacher review
                      </p>
                    </div>
                  </div>
                ) : null}

                {featured && project.name === "Coffee Explorer" ? (
                  <div className="mt-6 hidden items-end lg:mt-0 lg:flex">
                    <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)]/50 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                        Live demo
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                        coffee-explorer-delta.vercel.app
                      </p>
                    </div>
                  </div>
                ) : null}
              </motion.article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--muted)]">
          <a
            href={`${SITE.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            {SITE.github.replace("https://", "")}
          </a>
        </p>
      </div>
    </section>
  );
}
