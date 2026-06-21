# 🚗 Unick Auto Detailing

> **Elite Mobile Auto Detailing — Miami, Florida**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-unick--auto--detailing.vercel.app-black?style=for-the-badge&logo=vercel)](https://unick-auto-detailing.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=flat)](./LICENSE)

A production-deployed, full-featured business web application for **Unick Auto Detailing** — a premium mobile car detailing concierge serving Miami, FL. Built with React 19, TypeScript, and Vite, this app handles the entire customer lifecycle from service discovery to quote submission to admin lead management.

**🔗 Live:** [unick-auto-detailing.vercel.app](https://unick-auto-detailing.vercel.app)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Key Features Deep Dive](#-key-features-deep-dive)
- [Design System](#-design-system)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)

---

## ✨ Features

- **Hero Section** — Cinematic landing experience with immediate call-to-action
- **Services Grid** — 5+ elite detailing packages with live pricing
- **Before/After Gallery** — Visual proof of transformation quality
- **AI Assistant** — Smart service recommendation engine based on customer needs
- **6-Step Quote Form** — Multi-intent wizard with real-time price estimation
- **Service Deep Dives** — Detailed breakdowns of each service offering
- **How It Works** — Step-by-step process walkthrough
- **Service Areas** — Coverage map for Miami and surrounding regions
- **Reviews Section** — Customer testimonials and star ratings
- **FAQ Section** — Comprehensive Q&A for customer support
- **Admin Dashboard** — Password-protected lead management panel
- **Mobile Action Bar** — Persistent mobile CTA (call, WhatsApp, quote)
- **WhatsApp Integration** — Direct priority messaging for customers
- **Glassmorphism UI** — Modern design with blur effects and gradient overlays
- **Fully Responsive** — Optimized for mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.2.3 | UI Framework |
| **TypeScript** | 5+ | Type-safe development |
| **Vite** | 6.4 | Build tool & dev server |
| **React Router** | 7.12 | Client-side routing (hash-based) |
| **Tailwind CSS** | 3 | Utility-first styling |
| **Lucide React** | latest | Icon library |
| **Custom Store** | — | In-memory lead management |

---

## 📁 Project Structure

```
unick-auto-detailing/
├── components/
│   ├── AdminDashboard.tsx    # Password-protected lead management panel
│   ├── AIAssistant.tsx       # Service recommendation engine
│   ├── BeforeAfterWall.tsx   # Before/after transformation gallery
│   ├── FAQSection.tsx        # Customer FAQ accordion
│   ├── FinalCTA.tsx          # Bottom conversion section
│   ├── Footer.tsx            # Site footer with contact info
│   ├── Hero.tsx              # Landing hero with CTA
│   ├── HowItWorks.tsx        # Process walkthrough
│   ├── Login.tsx             # Admin authentication screen
│   ├── MobileActionBar.tsx   # Sticky mobile call/WhatsApp/quote bar
│   ├── MobileNav.tsx         # Mobile hamburger navigation
│   ├── Navbar.tsx            # Desktop navigation
│   ├── QuoteForm.tsx         # 6-step multi-intent quote wizard
│   ├── ReviewsSection.tsx    # Customer testimonials
│   ├── ServiceAreas.tsx      # Miami coverage map
│   ├── ServiceDeepDives.tsx  # Per-service detail pages
│   └── ServicesGrid.tsx      # Service cards with pricing
├── lib/
│   └── store.ts              # In-memory lead store
├── pages/                    # Page-level route components
├── public/                   # Static assets
├── App.tsx                   # Root app with routing
├── constants.tsx             # Business data, services, pricing
├── index.tsx                 # React entry point
├── types.ts                  # Shared TypeScript types
├── vite.config.ts            # Vite configuration
└── tsconfig.json             # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.17.0+
- npm 11.0.0+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Nitheesh0217/unick-auto-detailing.git
cd unick-auto-detailing

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your VITE_GEMINI_API_KEY if using AI features

# 4. Start the development server
npm run dev
# → http://localhost:3000
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |

---

## 🎯 Key Features Deep Dive

### 6-Step Quote Wizard (`QuoteForm.tsx`)

A multi-step, conversion-optimized booking flow:

1. **Intent Selection** — Identify goal: selling, protection, repair, or maintenance
2. **Service Selection** — Choose from available detailing packages
3. **Vehicle Profiling** — Year, make, model input
4. **Contact Info** — Name, email, phone, WhatsApp preference
5. **Logistics** — Preferred appointment date and time slot
6. **Confirmation** — Summary with WhatsApp priority chat option

> Real-time price estimation updates as selections change throughout the flow.

### Admin Dashboard (`AdminDashboard.tsx`)

Password-protected lead management panel accessible at [`/#/admin`](https://unick-auto-detailing.vercel.app/#/admin):

- View all incoming quote requests with full contact and service details
- Filter leads by status: **New → Contacted → Quoted → Scheduled → Completed**
- Real-time in-memory lead updates (persists per session)

> **Note:** Admin uses localStorage-based session auth. For production, replace with a proper backend authentication system.

### AI Assistant (`AIAssistant.tsx`)

- Analyzes customer natural-language queries for service matching
- Returns ranked service recommendations with pricing anchors
- Bundle psychology built into recommendation scoring
- Ready for Gemini API upgrade (see `.env.example`)

---

## 🎨 Design System

**Color Palette**

| Name | Hex | Usage |
|---|---|---|
| Gold | `#FFB84D` | Primary brand, CTAs |
| Deep Space | `#0A1628` | Dark backgrounds |
| Miami Cyan | `#00E5FF` | Accents, highlights |
| Platinum | `#F8F9FA` | Light text |
| Success | `#10B981` | Confirmation states |

**Typography**
- Headings: `Outfit` (600–900 weight)
- Body: `Inter` (400–700 weight)

**UI Patterns**
- Glassmorphism cards (`backdrop-blur` + semi-transparent backgrounds)
- Smooth CSS transitions and entrance animations
- Mobile-first responsive layout
- Accessible color contrast ratios

**Breakpoints**
- Mobile: `< 768px`
- Tablet: `768px – 1024px`
- Desktop: `> 1024px`

---

## ☁️ Deployment

### Vercel (Live)

This app is deployed on Vercel with automatic deployments on every push to `main`.

**Manual deploy:**
```bash
npm run build
npx vercel --prod
```

> The app uses **hash-based routing** (`/#/admin`, `/#/quote`) so no special Vercel rewrite rules are needed.

### Netlify

Connect your GitHub repository to Netlify. Set build command to `npm run build` and publish directory to `dist`.

---

## 🗺️ Roadmap

- [ ] Gemini API integration for advanced AI service recommendations
- [ ] Photo upload in quote form
- [ ] Email/SMS notifications for new quote submissions
- [ ] Stripe payment integration for deposits
- [ ] Google Calendar sync for appointments
- [ ] Customer portal for tracking service status
- [ ] Backend persistence (replace in-memory store with Supabase)
- [ ] Google Reviews API integration

---

## 📞 Business Contact

**Unick Auto Detailing — Miami, FL**

- 📱 Phone: [(786) 622-7620](tel:7866227620)
- 📧 Email: [Info@UnickAutoDetailing.com](mailto:Info@UnickAutoDetailing.com)
- 📍 Service Area: Miami, FL (Mobile Concierge — we come to you)
- 📱 WhatsApp: Available
- 🎬 Social: [@unickdetailing](https://instagram.com/unickdetailing) on Instagram, TikTok & YouTube

---

## 📄 License

Private project — All rights reserved © 2026 Unick Auto Detailing.
Developed by [Nitheesh Donepudi](https://github.com/Nitheesh0217).

<div align="center">

---

**Built for elite auto care. Deployed and live.**

[🌐 Visit Live Site](https://unick-auto-detailing.vercel.app) &nbsp;·&nbsp; [⚙️ Admin Panel](https://unick-auto-detailing.vercel.app/#/admin) &nbsp;·&nbsp; [👨‍💻 Developer](https://github.com/Nitheesh0217)

</div>
