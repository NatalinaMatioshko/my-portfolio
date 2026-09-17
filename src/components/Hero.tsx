"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/lib/contact";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[var(--accent-soft)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[var(--accent-soft-2)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_0%,var(--bg)_70%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]"
          >
            {SITE.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--fg)] sm:text-5xl lg:text-[3.35rem]"
          >
            {t.hero.role}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-4 text-sm text-[var(--muted-2)]"
          >
            {t.hero.secondaryRole}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_24px_color-mix(in_srgb,var(--accent)_35%,transparent)]"
            >
              {t.hero.ctaPrimary}
              <ArrowDownRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--fg)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[var(--card-shadow)]"
            >
              <MessageCircle size={16} />
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--accent-soft)] via-transparent to-[var(--accent-soft-2)] blur-xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-black shadow-[var(--card-shadow)]">
            <Image
              src="/nataliia.jpg"
              alt={SITE.name}
              width={800}
              height={800}
              priority
              className="aspect-square h-auto w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
