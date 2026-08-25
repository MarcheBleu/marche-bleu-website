/**
 * Single source of truth for business info.
 * Sourced from the existing (password-gated) Shopify site and the live
 * DoorDash listing on 2026-08-24. Items marked CONFIRM should get a quick
 * owner sign-off before DNS cutover.
 */

// The site's single order link — DoorDash only, per scope.
export const DOORDASH_URL =
  "https://www.doordash.com/store/marche-bleu-fort-worth-38476430/";

export const SITE = {
  name: "Le Marché Bleu",
  shortName: "Marché Bleu",
  domain: "https://marchebleutx.com",
  tagline: "Café · Market · Wine Bar · Fort Worth, TX",
  description:
    "Le Marché Bleu is Fort Worth's French-inspired café, market, and wine bar at 5256 Marathon Ave. Coffee and lunch to order ahead, a curated market to browse, and a wine bar with daily happy hour.",
};

export const CONTACT = {
  addressLine1: "5256 Marathon Ave",
  addressLine2: "Fort Worth, TX 76109",
  phone: "(817) 782-9353",
  phoneHref: "tel:+18177829353",
  email: "marchebleutx@gmail.com",
};

// Confirmed by owner 2026-08-24 (Fri/Sat close at 10:00 pm).
export const HOURS: { days: string; time: string }[] = [
  { days: "Monday – Thursday", time: "7:00 am – 9:00 pm" },
  { days: "Friday – Saturday", time: "8:00 am – 10:00 pm" },
  { days: "Sunday", time: "8:00 am – 8:00 pm" },
];

export const HAPPY_HOUR = {
  when: "Monday – Friday, 3 – 6 pm",
  deal: "$9 wine · $5 draft beer",
};

export const SOCIAL = {
  instagram: "https://www.instagram.com/marchebleu",
  linkedin: "https://www.linkedin.com/company/marche-bleu-tx/",
  yelp: "https://www.yelp.com/biz/march%C3%A9-bleu-fort-worth",
};

export const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Marche+Bleu+5256+Marathon+Ave+Fort+Worth+TX+76109&output=embed";

// Clickable address target — opens the business on Google Maps for directions.
export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Marche+Bleu+5256+Marathon+Ave+Fort+Worth+TX+76109";

// Optional announcement bar shown at the very top of every page. Set to ""
// to hide it. (Old site example: "Try our Spooky Seasonals!")
export const ANNOUNCEMENT = "";

// Catering submissions are handled by Netlify Forms; the recipient email is
// configured in the Netlify dashboard (Forms → Notifications), not in code.
// Recipient (per owner): marchebleutx@gmail.com — set this up on first deploy.
