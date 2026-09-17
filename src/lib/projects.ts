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
    name: "Coffee Shop Supplies",
    tech: ["React", "Vite", "JavaScript"],
    demo: "https://natalinamatioshko.github.io/coffee-shop-supplies/",
    github: "https://github.com/NatalinaMatioshko/coffee-shop-supplies",
    desc: {
      en: "Two-week café procurement calculator: cups, lids, coffee, and milk from real supplier pack sizes and prices.",
      uk: "Калькулятор закупівель для кавʼярні на 2 тижні: стакани, кришки, кава та молоко за реальними пакуваннями й цінами.",
      it: "Calcolatore di approvvigionamento per caffetteria: bicchieri, coperchi, caffè e latte da formati e prezzi reali.",
    },
  },
  {
    name: "Lexi Learn",
    tech: ["MERN", "AI Agents"],
    github: "https://github.com/NatalinaMatioshko/lexi-learn",
    desc: {
      en: "English learning platform for private tutoring — lessons, homework, vocabulary & progress tracking.",
      uk: "Платформа для приватного викладання англійської — уроки, ДЗ, словник і трекінг прогресу.",
      it: "Piattaforma di inglese per tutoring privato — lezioni, compiti, vocabolario e tracking dei progressi.",
    },
  },
  {
    name: "Quiz Builder",
    tech: ["React", "Node.js", "TypeScript", "SQLite"],
    demo: "https://natalinamatioshko.github.io/quiz-builder/",
    github: "https://github.com/NatalinaMatioshko/quiz-builder",
    desc: {
      en: "Full-stack quiz builder for creating, listing, viewing, and deleting quizzes.",
      uk: "Full-stack конструктор квізів: створення, список, перегляд і видалення.",
      it: "Quiz builder full-stack: crea, elenca, visualizza ed elimina quiz.",
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
    name: "SQL / Node / React Trainer",
    tech: ["HTML", "JavaScript"],
    demo: "https://natalinamatioshko.github.io/sql-node-react-trainer/",
    github: "https://github.com/NatalinaMatioshko/sql-node-react-trainer",
    desc: {
      en: "Interview trainer for SQL, Node.js, and React practice.",
      uk: "Тренажер для співбесід: SQL, Node.js і React.",
      it: "Trainer per colloqui su SQL, Node.js e React.",
    },
  },
  {
    name: "Music Track App",
    tech: ["React", "TypeScript"],
    demo: "https://natalinamatioshko.github.io/music-track-app/",
    github: "https://github.com/NatalinaMatioshko/music-track-app",
    desc: {
      en: "React application for managing music tracks.",
      uk: "React-додаток для керування музичними треками.",
      it: "Applicazione React per gestire tracce musicali.",
    },
  },
];
