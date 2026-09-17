"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/lib/contact";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center text-sm text-[var(--muted)] sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p>
          © {year} {SITE.name}. {t.footer.rights}
        </p>
        <p className="text-xs text-[var(--muted-2)]">
          English Trainer · EdTech · Full-Stack
        </p>
      </div>
    </footer>
  );
}
