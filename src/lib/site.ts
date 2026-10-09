export const siteName = "Le Journal de mikeebt";

export const sections = {
  actualites: "Actualités",
  politique: "Politique",
  societe: "Société",
  auto: "Auto",
  gastronomie: "Gastronomie",
  sante: "Santé",
  sports: "Sports",
  "faits-divers": "Faits divers",
  palmares: "Palmarès",
  meteo: "Météo",
} as const;

export type SectionSlug = keyof typeof sections;
export const sectionSlugs = Object.keys(sections) as [SectionSlug, ...SectionSlug[]];

export const breakingNews = [
  "Mike a maintenant un an de plus",
  "Avertissement de cris en vigueur pour tout le secteur",
  "Santé Canada émet un rappel urgent",
  "La République de mikeebt en pleine crise constitutionnelle",
];

export function url(path: string) {
  return import.meta.env.BASE_URL.replace(/\/$/, "") + path;
}

export function formatDate(date: Date) {
  return date.toLocaleString("fr-CA", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Toronto",
  });
}
