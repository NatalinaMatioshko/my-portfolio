export type Locale = "en" | "uk" | "it";

export type Messages = {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    certificates: string;
    contact: string;
  };
  hero: {
    role: string;
    secondaryRole: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    lead: string;
    p1: string;
    p2: string;
    highlights: {
      certified: string;
      tech: string;
      focus: string;
    };
    interests: {
      title: string;
      items: { tag: string; desc: string }[];
    };
  };
  experience: {
    title: string;
    lead: string;
    items: { title: string; desc: string }[];
  };
  projects: {
    title: string;
    lead: string;
    featured: string;
    demo: string;
    view: string;
  };
  skills: {
    title: string;
    lead: string;
    categories: { title: string; items: string[] }[];
  };
  certificates: {
    title: string;
    lead: string;
    viewPdf: string;
    educationTitle: string;
    featured: string;
    items: { title: string; org: string; meta: string; featured?: boolean }[];
    education: { title: string; org: string; meta: string }[];
  };
  contact: {
    title: string;
    lead: string;
    email: string;
    telegram: string;
    phone: string;
    github: string;
    linkedin: string;
    location: string;
    cta: string;
  };
  footer: {
    rights: string;
  };
};
