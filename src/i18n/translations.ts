export const languages = {
  es: { label: "Español", flag: "🇪🇸" },
  en: { label: "English", flag: "🇬🇧" },
  fr: { label: "Français", flag: "🇫🇷" },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export const translations = {
  es: {
    // Index page
    welcome: "Bienvenidos",
    discoverMenu: "Tu rincón favorito junto al río",
    viewMenu: "Ver Carta Digital",
    viewMenuSub: "Tapas, montaditos, bebidas y más",
    developedBy: "Desarrollado con ❤️ por David Vasko",

    // Carta page
    ourMenu: "Nuestra Carta",
    chooseCategory: "Elige una categoría",
    aperitivosTitle: "Aperitivos y Fríos",
    aperitivosSub: "Para ir abriendo el apetito",
    calientesTitle: "Raciones Calientes",
    calientesSub: "Las especialidades de la casa",
    montaditosTitle: "Montaditos y Hamburguesas",
    montaditosSub: "Directo a la plancha",
    bebidasTitle: "Bebidas",
    bebidasSub: "Refrescos, cervezas y copas",

    // Subcategory pages
    aperitivosPageTitle: "Aperitivos",
    aperitivosPageSub: "Para empezar con buen pie",
    calientesPageTitle: "Raciones Calientes",
    calientesPageSub: "Del fuego a tu mesa",
    montaditosPageTitle: "Entre Panes",
    montaditosPageSub: "Montaditos y hamburguesas",
    bebidasPageTitle: "Bebidas",
    bebidasPageSub: "Para refrescarse",

    // Location page
    locationTitle: "Dónde Estamos",
    locationSub: "Ven a visitarnos",
    locationCardTitle: "Dónde Estamos",
    locationCardSub: "Ubicación, horario y contacto",
    address: "Dirección",
    getDirections: "Cómo llegar",
    openInMaps: "Abrir en Google Maps",
    schedule: "Horario",
    contact: "Contacto",
    followUs: "Síguenos",

    // Accessibility
    goBack: "Volver",
    selectLanguage: "Seleccionar idioma",
    legalNotice: "Aviso Legal y Privacidad",
  },
  en: {
    // Index page
    welcome: "Welcome",
    discoverMenu: "Your favorite spot by the river",
    viewMenu: "View Digital Menu",
    viewMenuSub: "Tapas, sandwiches, drinks and more",
    developedBy: "Developed with ❤️ by David Vasko",

    // Carta page
    ourMenu: "Our Menu",
    chooseCategory: "Choose a category",
    aperitivosTitle: "Appetizers & Cold Dishes",
    aperitivosSub: "Something to whet your appetite",
    calientesTitle: "Hot Dishes",
    calientesSub: "The house specialties",
    montaditosTitle: "Sandwiches & Burgers",
    montaditosSub: "Straight from the grill",
    bebidasTitle: "Drinks",
    bebidasSub: "Soft drinks, beers and cocktails",

    // Subcategory pages
    aperitivosPageTitle: "Appetizers",
    aperitivosPageSub: "To start on the right foot",
    calientesPageTitle: "Hot Dishes",
    calientesPageSub: "From the fire to your table",
    montaditosPageTitle: "Between Breads",
    montaditosPageSub: "Sandwiches and burgers",
    bebidasPageTitle: "Drinks",
    bebidasPageSub: "Refresh yourself",

    // Location page
    locationTitle: "Find Us",
    locationSub: "Come visit us",
    locationCardTitle: "Find Us",
    locationCardSub: "Location, hours and contact",
    address: "Address",
    getDirections: "Get Directions",
    openInMaps: "Open in Google Maps",
    schedule: "Opening Hours",
    contact: "Contact",
    followUs: "Follow Us",

    // Accessibility
    goBack: "Go back",
    selectLanguage: "Select language",
    legalNotice: "Legal Notice & Privacy",
  },
  fr: {
    // Index page
    welcome: "Bienvenue",
    discoverMenu: "Votre coin préféré au bord de la rivière",
    viewMenu: "Voir la Carte Digitale",
    viewMenuSub: "Tapas, sandwichs, boissons et plus",
    developedBy: "Développé avec ❤️ par David Vasko",

    // Carta page
    ourMenu: "Notre Carte",
    chooseCategory: "Choisissez une catégorie",
    aperitivosTitle: "Apéritifs et Plats Froids",
    aperitivosSub: "Pour vous ouvrir l'appétit",
    calientesTitle: "Plats Chauds",
    calientesSub: "Les spécialités de la maison",
    montaditosTitle: "Petits Sandwichs et Hamburgers",
    montaditosSub: "Directement à la plancha",
    bebidasTitle: "Boissons",
    bebidasSub: "Rafraîchissements, bières et cocktails",

    // Subcategory pages
    aperitivosPageTitle: "Apéritifs",
    aperitivosPageSub: "Pour bien commencer",
    calientesPageTitle: "Plats Chauds",
    calientesPageSub: "Du feu à votre table",
    montaditosPageTitle: "Entre les Pains",
    montaditosPageSub: "Petits sandwichs et hamburgers",
    bebidasPageTitle: "Boissons",
    bebidasPageSub: "Pour se rafraîchir",

    // Location page
    locationTitle: "Où Nous Trouver",
    locationSub: "Venez nous rendre visite",
    locationCardTitle: "Où Nous Trouver",
    locationCardSub: "Localisation, horaires et contact",
    address: "Adresse",
    getDirections: "Itinéraire",
    openInMaps: "Ouvrir dans Google Maps",
    schedule: "Horaires d'ouverture",
    contact: "Contact",
    followUs: "Suivez-nous",

    // Accessibility
    goBack: "Retour",
    selectLanguage: "Sélectionner la langue",
    legalNotice: "Mentions Légales & Confidentialité",
  },
} as const;

export function t(lang: Lang) {
  return translations[lang] || translations[defaultLang];
}

export function getStaticLangPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}
