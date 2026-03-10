// SEO constants and page metadata configuration

export const SITE_CONFIG = {
  baseUrl: 'https://finnsight.app',
  siteName: 'Finnsight',
  defaultImage: 'https://finnsight.app/og-image.png',
  twitterCard: 'summary',
  locale: 'nl_NL',
  hreflang: 'nl-NL',
};

export const PAGE_SEO = {
  landing: {
    path: '/',
    title: 'Finnsight — Rust en inzicht voor medewerkers',
    description:
      'Finnsight geeft Nederlandse medewerkers helder inzicht in hun financiële toekomst — deterministisch, privacy-first.',
    ogTitle: 'Finnsight — Inzicht in jouw financiële toekomst',
    ogDescription:
      'Deterministische financiële planning voor Nederlandse medewerkers. Geen adviezen, alleen feiten.',
  },
  trust: {
    path: '/trust',
    title: 'Vertrouwen & Compliance — Finnsight',
    description:
      'Hoe Finnsight deterministisch rekent, privacy bewaakt en binnen AFM-kaders blijft.',
    ogTitle: 'Vertrouwen & Compliance — Finnsight',
    ogDescription:
      'Transparant uitgelegd: hoe Finnsight rekent, wat we wel/niet doen, en hoe privacy is geborgd.',
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy en voorwaarden — Finnsight',
    description: 'Hoe Finnsight omgaat met privacy, opslag en gebruiksvoorwaarden.',
    ogTitle: 'Privacy en voorwaarden — Finnsight',
    ogDescription: 'Kernsamenvatting van hoe wij met je gegevens en gebruik omgaan.',
  },
  methodology: {
    path: '/methodology',
    title: 'Methodologie — Finnsight',
    description:
      'Hoe Finnsight rekent: belasting, pensioen, hypotheek en besteedbaar inkomen. Aannames, bronnen en wat Finnsight niet doet.',
    ogTitle: 'Methodologie — Finnsight',
    ogDescription:
      'Transparante uitleg van de deterministische rekenmethodes achter Finnsight. Geen advies, wel inzicht.',
  },
  compliance: {
    path: '/compliance',
    title: 'Compliance — Finnsight',
    description:
      'Hoe Finnsight omgaat met AFM-grenzen, AVG, gegevensbescherming en werkgeversprivacy.',
    ogTitle: 'Compliance — Finnsight',
    ogDescription:
      'Deterministische engine, AVG-rol, AFM ontwerpintentie en werkgever-aggregatiedrempel uitgelegd.',
  },
  notFound: {
    path: null,
    title: 'Pagina niet gevonden — Finnsight',
    description: 'De pagina die je zocht bestaat niet of is verplaatst.',
    noIndex: true,
  },
};
