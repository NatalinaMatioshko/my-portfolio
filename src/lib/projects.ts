import type { Locale } from "@/lib/types";

export type Project = {
  name: string;
  featured?: boolean;
  tech: string[];
  demo?: string;
  github: string;
  desc: Record<Locale, string>;
};

export const PROJECTS: Project[] = [
  {
    name: "English Simple Trainer",
    featured: true,
    tech: ["React", "TypeScript", "Firebase", "Vite"],
    demo: "https://english-simple-trainer.vercel.app",
    github: "https://github.com/NatalinaMatioshko/english-simple-trainer",
    desc: {
      en: "A1 English teaching SPA for one-to-one lessons: roadmap, interactive lessons, vocabulary, trainer, homework, and teacher review.",
      uk: "SPA для індивідуальних уроків англійської A1: роадмап, інтерактивні уроки, словник, тренажер, ДЗ і перевірка викладачем.",
      it: "SPA per lezioni individuali di inglese A1: roadmap, lezioni interattive, vocabolario, trainer, compiti e revisione del docente.",
    },
  },
  {
    name: "Coffee Explorer",
    featured: true,
    tech: ["TypeScript", "Next.js", "Vercel"],
    demo: "https://coffee-explorer-delta.vercel.app/",
    github: "https://github.com/NatalinaMatioshko/Coffee-explorer",
    desc: {
      en: "Every bean tells a story — interactive coffee exploration experience.",
      uk: "Кожне зерно має історію — інтерактивний досвід дослідження кави.",
      it: "Ogni chicco racconta una storia — esperienza interattiva sul caffè.",
    },
  },
  {
    name: "The Hall of Zero Limits",
    tech: ["TypeScript", "GSAP", "3D"],
    demo: "https://the-hall-of-zero-limits-sepia.vercel.app",
    github: "https://github.com/NatalinaMatioshko/the-hall-of-zero-limits",
    desc: {
      en: "Cinematic web experience with GSAP animations and 3D parallax.",
      uk: "Кінематографічний веб-досвід з анімаціями GSAP і 3D-паралаксом.",
      it: "Esperienza web cinematografica con animazioni GSAP e parallasse 3D.",
    },
  },
  {
    name: "Stat Data Dashboard",
    tech: ["React", "Charts", "JavaScript"],
    demo: "https://stat-data-dashboard.vercel.app/",
    github: "https://github.com/NatalinaMatioshko/stat-data-dashboard",
    desc: {
      en: "React dashboard MVP for exploring mock public statistics with filters, charts, and tabular insights.",
      uk: "React dashboard MVP для публічної статистики: фільтри, чарти та таблиці.",
      it: "Dashboard React MVP per esplorare statistiche pubbliche con filtri, grafici e tabelle.",
    },
  },
  {
    name: "RentalCar",
    tech: ["React", "JavaScript"],
    demo: "https://rental-car-tech-task.vercel.app",
    github: "https://github.com/NatalinaMatioshko/RentalCar",
    desc: {
      en: "Car rental web app with browsing and booking-focused UI.",
      uk: "Веб-додаток оренди авто з каталогом і зручним UI бронювання.",
      it: "App web di noleggio auto con catalogo e UI orientata alla prenotazione.",
    },
  },
  {
    name: "NannyServices",
    tech: ["React", "JavaScript"],
    demo: "https://nanny-services-chi.vercel.app",
    github: "https://github.com/NatalinaMatioshko/NannyServices",
    desc: {
      en: "Service platform UI for finding and exploring nanny profiles.",
      uk: "Сервісна платформа для пошуку та перегляду профілів нянь.",
      it: "Piattaforma di servizi per trovare ed esplorare profili di babysitter.",
    },
  },
  {
    name: "Household Tracker",
    tech: ["TypeScript"],
    demo: "https://natalinamatioshko.github.io/household-tracker/",
    github: "https://github.com/NatalinaMatioshko/household-tracker",
    desc: {
      en: "Household tracking app for everyday domestic organization.",
      uk: "Додаток для обліку домашнього господарства.",
      it: "App per organizzare e tracciare le attività domestiche.",
    },
  },
  {
    name: "Engen",
    tech: ["JavaScript"],
    demo: "https://natalinamatioshko.github.io/engen/",
    github: "https://github.com/NatalinaMatioshko/engen",
    desc: {
      en: "Interactive web project focused on language and learning practice.",
      uk: "Інтерактивний веб-проєкт для мовної та навчальної практики.",
      it: "Progetto web interattivo orientato alla pratica linguistica e all'apprendimento.",
    },
  },
  {
    name: "Drinks App",
    tech: ["TypeScript"],
    demo: "https://natalinamatioshko.github.io/drinks-app/",
    github: "https://github.com/NatalinaMatioshko/drinks-app",
    desc: {
      en: "Web app for browsing and exploring drink recipes.",
      uk: "Веб-додаток для перегляду та дослідження напоїв.",
      it: "App web per esplorare e consultare ricette di drink.",
    },
  },
  {
    name: "Frontend Practice Hub",
    tech: ["JavaScript"],
    demo: "https://natalinamatioshko.github.io/frontend-practice-hub/",
    github: "https://github.com/NatalinaMatioshko/frontend-practice-hub",
    desc: {
      en: "Collection of frontend practice tasks and UI experiments.",
      uk: "Збірка frontend-практик і UI-експериментів.",
      it: "Raccolta di esercizi frontend ed esperimenti UI.",
    },
  },
  {
    name: "Solis Project",
    tech: ["HTML", "SCSS"],
    demo: "https://natalinamatioshko.github.io/Solis-project/",
    github: "https://github.com/NatalinaMatioshko/Solis-project",
    desc: {
      en: "Responsive landing page built with modern HTML and SCSS.",
      uk: "Адаптивний лендінг на сучасному HTML і SCSS.",
      it: "Landing page responsive realizzata con HTML e SCSS moderni.",
    },
  },
  {
    name: "Montichello Coffee",
    tech: ["HTML", "CSS"],
    demo: "https://natalinamatioshko.github.io/Montichello-Coffee/",
    github: "https://github.com/NatalinaMatioshko/Montichello-Coffee",
    desc: {
      en: "Coffee brand landing page with a warm, product-focused design.",
      uk: "Лендінг кавового бренду з теплим, product-focused дизайном.",
      it: "Landing page per un brand di caffè con design caldo e product-focused.",
    },
  },
];
