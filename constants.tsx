
import React from 'react';
import { Service } from './types';

export const BUSINESS_INFO = {
  name: "Unick Auto Detailing",
  phone: "(786) 622-7620",
  email: "Info@UnickAutoDetailing.com",
  instagram: "@unickdetailing",
  tiktok: "@unickdetailing",
  youtube: "@UnickDetailing",
  avgResponse: "Under 10 minutes",
  address: "Miami, FL (Mobile Concierge)",
};

export const SERVICES: Service[] = [
  {
    id: 'ceramic-coating',
    name: "Elite Ceramic Shield",
    description: "Multi-year aerospace-grade protection and depth.",
    price: "From $450",
    basePrice: 450,
    popular: true,
    benefits: [
      "9H Diamond Hardness Protection",
      "Liquid-mirror gloss enhancement",
      "Self-cleaning hydrophobic properties"
    ],
    idealFor: "New cars and owners who refuse to settle for anything less than perfection."
  },
  {
    id: 'paint-correction',
    name: "Precision Paint Correction",
    description: "Surgical removal of defects to reveal true paint clarity.",
    price: "From $350",
    basePrice: 350,
    benefits: [
      "95% Swirl & Scratch removal",
      "Restores factory depth and color",
      "Eliminates heavy oxidation"
    ],
    idealFor: "Enthusiasts who want their vehicle to look better than the day it left the showroom."
  },
  {
    id: 'premium-interior',
    name: "Concierge Interior",
    description: "Museum-level sanitization and surface restoration.",
    price: "From $180",
    basePrice: 180,
    popular: true,
    benefits: [
      "Medical-grade steam sanitization",
      "Stain extraction & leather feeding",
      "Total cabin DNA-level clean"
    ],
    idealFor: "Family cars, luxury commuters, or anyone who values a pristine, healthy cabin."
  },
  {
    id: 'wash-wax',
    name: "Signature Wash & Wax",
    description: "The ultimate maintenance treatment with 6mo protection.",
    price: "From $120",
    basePrice: 120,
    benefits: [
      "Micro-fiber hand wash process",
      "Chemical decontamination",
      "High-grade polymer sealant"
    ],
    idealFor: "Routine maintenance for already well-kept vehicles."
  },
  {
    id: 'full-detail',
    name: "Total Transformation",
    description: "The complete Unick experience: Interior + Exterior.",
    price: "From $280",
    basePrice: 280,
    benefits: [
      "Complete interior/exterior overhaul",
      "Engine bay surgical dusting",
      "Comprehensive UV shielding"
    ],
    idealFor: "Maximizing resale value or seasonal deep-cleaning."
  }
];

export const SERVICE_AREAS = [
  "Miami", "Doral", "Kendall", "Tamiami", "Pembroke Pines", "North Miami", 
  "Miami Beach", "Coral Springs", "Cutler Bay", "Miami Shores", "Miramar", 
  "Miami Lakes", "Coral Gables", "The Hammocks"
];

export const FAQS = [
  {
    q: "Why choose Unick over a standard car wash?",
    a: "Standard car washes use recycled water and abrasive brushes that cause swirl marks. We use a multi-stage, scratch-free hand wash process with premium chemicals and filtered water to preserve and enhance your vehicle's value."
  },
  {
    q: "How often should I detail my vehicle in Miami?",
    a: "Due to Miami's high humidity, salt air, and intense UV rays, we recommend a full detail every 4-6 months, with maintenance washes in between."
  },
  {
    q: "Do you really bring your own water and power?",
    a: "Yes. Our bespoke mobile units are fully self-contained. We don't need to hook up to your home's water or electricity, allowing us to detail anywhere—your office, home, or garage."
  },
  {
    q: "Is Ceramic Coating worth the investment?",
    a: "Absolutely. It's a permanent (or multi-year) chemical bond that acts as a second skin. It protects against bird droppings, acid rain, and UV damage while making your car incredibly easy to wash."
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
];
