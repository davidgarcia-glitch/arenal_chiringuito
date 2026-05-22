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
    reviewsTitle: "Déjanos una Reseña",
    reviewsSub: "Tu opinión en Google nos ayuda a mejorar",
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

    // SEO
    seoTitle: "Arenal El Chiringuito - Restaurante en Blanca, Murcia",
    seoDescription: "Descubre Arenal El Chiringuito, tu restaurante favorito en Blanca (Murcia) junto al río. Disfruta de nuestras tapas, hamburguesas y raciones. Ver carta y ubicación.",
  },
  en: {
    // Index page
    welcome: "Welcome",
    discoverMenu: "Your favorite spot by the river",
    viewMenu: "View Digital Menu",
    viewMenuSub: "Tapas, sandwiches, drinks and more",
    reviewsTitle: "Leave us a Review",
    reviewsSub: "Your feedback on Google helps us improve",
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

    // SEO
    seoTitle: "Arenal El Chiringuito - Restaurant in Blanca, Murcia",
    seoDescription: "Discover Arenal El Chiringuito, your favorite restaurant in Blanca (Murcia) by the river. Enjoy our tapas, burgers and portions. View menu and location.",
  },
  fr: {
    // Index page
    welcome: "Bienvenue",
    discoverMenu: "Votre coin préféré au bord de la rivière",
    viewMenu: "Voir la Carte Digitale",
    viewMenuSub: "Tapas, sandwichs, boissons et plus",
    reviewsTitle: "Laissez-nous un Avis",
    reviewsSub: "Votre avis sur Google nous aide à nous améliorer",
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

    // SEO
    seoTitle: "Arenal El Chiringuito - Restaurant à Blanca, Murcie",
    seoDescription: "Découvrez Arenal El Chiringuito, votre restaurant préféré à Blanca (Murcie) au bord de la rivière. Profitez de nos tapas, hamburgers et portions. Voir menu et emplacement.",
  },
} as const;

export function t(lang: Lang) {
  return translations[lang] || translations[defaultLang];
}

export function getStaticLangPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}
