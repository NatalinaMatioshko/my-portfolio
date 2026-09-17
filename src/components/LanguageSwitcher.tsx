"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/lib/types";

const options: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "uk", label: "UK" },
  { code: "it", label: "IT" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-1"
      role="group"
      aria-label="Language switcher"
    >
      {options.map((option) => {
        const active = locale === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLocale(option.code)}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition ${
              active
                ? "bg-[var(--accent)] text-white shadow-sm"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
            aria-pressed={active}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
