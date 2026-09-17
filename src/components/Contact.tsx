"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/contact";

function GithubIcon({ size = 18 }: { size?: number }) {
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

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Contact() {
  const { t } = useLanguage();

  const contacts = [
    {
      icon: Mail,
      label: t.contact.email,
      value: SITE.email,
      href: `mailto:${SITE.email}`,
    },
    {
      icon: Send,
      label: t.contact.telegram,
      value: SITE.telegramHandle,
      href: SITE.telegram,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: SITE.phone,
      href: SITE.phoneHref,
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: SITE.location,
      href: "https://maps.google.com/?q=Kyiv,+Ukraine",
    },
    {
      icon: GithubIcon,
      label: t.contact.github,
      value: "NatalinaMatioshko",
      href: SITE.github,
    },
    {
      icon: LinkedinIcon,
      label: t.contact.linkedin,
      value: "natalia-matioshko",
      href: SITE.linkedin,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.contact.title} lead={t.contact.lead} />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="glass-card overflow-hidden rounded-3xl"
        >
          <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
            <div className="relative min-h-[280px] border-b border-[var(--border)] lg:min-h-full lg:border-b-0 lg:border-r">
              <Image
                src="/portrait-pro.jpg"
                alt={SITE.name}
                width={747}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {contacts.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http") ||
                      item.href.startsWith("mailto")
                        ? item.href.startsWith("mailto")
                          ? undefined
                          : "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="hover-lift group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg)]/40 p-4 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
                  >
                    <span className="rounded-xl bg-[var(--accent-soft)] p-2.5 text-[var(--accent)] transition group-hover:scale-105">
                      <item.icon size={18} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-[var(--fg)]">
                        {item.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <a
                href={`mailto:${SITE.email}`}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_24px_color-mix(in_srgb,var(--accent)_35%,transparent)]"
              >
                {t.contact.cta}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
