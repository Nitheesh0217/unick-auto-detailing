# Project Structure Overview

## Complete File Organization

```
unick-auto-detailing/
│
├── pages/                           # ⭐ New: Page-level components
│   ├── HomePage.tsx                 # / - Landing page
│   ├── ServicesPage.tsx             # /services - Services detail
│   ├── GalleryPage.tsx              # /gallery - Before/after showcase
│   ├── ServiceAreaPage.tsx          # /service-area - Coverage map
│   ├── FaqPage.tsx                  # /faq - Q&A section
│   └── AdminPage.tsx                # /admin - Dashboard wrapper
│
├── components/                      # Reusable UI components
│   ├── Navbar.tsx                   # Navigation (updated: React Router)
│   ├── MobileNav.tsx                # Mobile nav (updated: React Router)
│   ├── Hero.tsx                     # Hero section
│   ├── ServicesGrid.tsx             # Service cards grid
│   ├── ServiceDeepDives.tsx         # Detailed service info
│   ├── ServiceAreas.tsx             # Service coverage areas
│   ├── BeforeAfterWall.tsx          # Before/after gallery
│   ├── ReviewsSection.tsx           # Customer testimonials
│   ├── AIAssistant.tsx              # AI recommendation engine
│   ├── QuoteForm.tsx                # 6-step quote form
│   ├── AdminDashboard.tsx           # Lead management
│   ├── Login.tsx                    # Admin login
│   ├── Footer.tsx                   # Footer section
│   ├── HowItWorks.tsx               # Process explanation
│   ├── FinalCTA.tsx                 # Call-to-action
│   └── FAQSection.tsx               # Q&A component
│
├── lib/
│   └── store.ts                     # Lead store management
│
├── App.tsx                          # Main app (updated: routing)
├── index.tsx                        # React entry point
├── types.ts                         # TypeScript definitions
├── constants.tsx                    # Constants & business info
├── index.html                       # HTML template
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript config
├── package.json                     # Dependencies
├── package-lock.json                # Lock file
├── .env.local                       # Environment variables
├── .gitignore                       # Git ignore rules
├── README.md                        # Project documentation
├── REFACTORING_SUMMARY.md           # This summary
└── STRUCTURE.md                     # This file
```

---

## Component Dependency Tree

### **App.tsx** (Root)
```
App
├── Router (HashRouter)
├── Navbar (all pages)
│   ├── Links: Home, Services, Gallery, Service Area, FAQ
│   └── Active route highlighting
├── Routes
│   ├── / → HomePage
│   │   ├── Hero
│   │   ├── ServicesGrid
│   │   ├── AIAssistant
│   │   ├── BeforeAfterWall
│   │   ├── ReviewsSection
│   │   ├── HowItWorks
│   │   ├── QuoteForm
│   │   └── FinalCTA
│   │
│   ├── /services → ServicesPage
│   │   ├── ServicesGrid
│   │   ├── ServiceDeepDives
│   │   ├── ReviewsSection
│   │   └── QuoteForm
│   │
│   ├── /gallery → GalleryPage
│   │   ├── BeforeAfterWall
│   │   ├── ReviewsSection
│   │   └── QuoteForm
│   │
│   ├── /service-area → ServiceAreaPage
│   │   ├── ServiceAreas
│   │   ├── Benefits cards
│   │   ├── ReviewsSection
│   │   └── QuoteForm
│   │
│   ├── /faq → FaqPage
│   │   ├── FAQSection
│   │   ├── ReviewsSection
│   │   └── QuoteForm
│   │
│   └── /admin → AdminRoute
│       ├── AdminDashboard (if isAdmin)
│       └── Login (if not isAdmin)
│
├── Footer (all pages)
├── MobileNav (all pages)
│   ├── Links: Home, Services, Quote, Call
│   └── Active route highlighting
│
└── Floating Action Button (FAB)
    └── Scroll to quote
```

---

## Data Flow

### **Authentication State**
```
App Component
├── State: isAdmin (from localStorage)
├── handleLogin() → sets isAdmin = true
├── handleLogout() → sets isAdmin = false
└── AdminRoute Component
    ├── If isAdmin: Show AdminDashboard
    └── If not: Show Login
```

### **Quote Form Flow**
```
QuoteForm Component
├── Step 0: Intent Selection
├── Step 1: Service Selection
├── Step 2: Vehicle Profiling
├── Step 3: Contact Information
├── Step 4: Logistics (Date/Time)
├── Step 5: Confirmation
└── On Submit: Store in leadStore via localStorage
```

### **Navigation Flow**
```
User Click
├── Navbar Link / MobileNav Button
│   ├── useLocation() detects path
│   ├── isActive(path) highlights current route
│   └── Routes component renders matching page
│
└── Internal Scroll (Quote button)
    ├── document.getElementById('quote')
    ├── scrollIntoView({ behavior: 'smooth' })
    └── Smooth scroll to form
```

---

## Routing Details

### **Route Configuration**
```typescript
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/gallery" element={<GalleryPage />} />
  <Route path="/service-area" element={<ServiceAreaPage />} />
  <Route path="/faq" element={<FaqPage />} />
  <Route path="/admin" element={<AdminRoute />} />
  <Route path="*" element={<Navigate to="/" />} />
</Routes>
```

### **Active Route Detection**
```typescript
const location = useLocation();
const isActive = (path: string) => location.pathname === path;

// Usage in Navbar/MobileNav
className={isActive('/services') ? 'text-accent' : 'hover:text-accent'}
```

---

## Component Reuse Strategy

### **Shared Across Multiple Pages**
| Component | Pages | Purpose |
|-----------|-------|---------|
| Navbar | All | Main navigation |
| MobileNav | All | Mobile navigation |
| Footer | All | Footer content |
| ReviewsSection | 4 pages | Social proof |
| QuoteForm | 5 pages | Lead capture |
| ServicesGrid | 2 pages | Service showcase |

### **Unique to Specific Pages**
| Component | Page | Purpose |
|-----------|------|---------|
| Hero | HomePage | Landing experience |
| AIAssistant | HomePage | Recommendation engine |
| ServiceDeepDives | ServicesPage | Detailed info |
| BeforeAfterWall | GalleryPage | Visual transformation |
| ServiceAreas | ServiceAreaPage | Coverage map |
| FAQSection | FaqPage | Q&A content |

---

## State Management

### **App-Level State**
- `isAdmin`: boolean (localStorage persistence)
- Passed to AdminRoute for conditional rendering

### **Component-Level State**
Each page/component manages its own local state:
- Form inputs in QuoteForm
- Scroll position detection in Navbar
- Mobile menu toggle in Navbar/MobileNav

### **Persistent Data**
- Quote leads stored in `leadStore` (localStorage)
- Admin session in localStorage
- Accessible across all pages

---

## Styling Architecture

### **CSS Framework**
- Tailwind CSS (configuration via index.html)
- Custom CSS variables for branding

### **Design Tokens**
```css
--gold: #FFB84D              /* Primary brand color */
--gold-shimmer: gradient     /* Shimmer effect */
--deep-space: #0A1628        /* Dark background */
--miami-cyan: #00E5FF        /* Accent cyan */
--platinum: #F8F9FA          /* Light text */
--success: #10B981           /* Confirmation */
```

### **Component Classes**
- `glass-card`: Glassmorphic card with blur
- `liquid-gold-btn`: Gold button with transitions
- `fab-pulse`: Floating button animation
- Container queries for responsive design

---

## Performance Considerations

### **Code Splitting**
Each page is a separate component file, enabling:
- Dynamic imports (future enhancement)
- Reduced initial bundle
- Faster page transitions

### **Component Rendering**
- Only visible components render
- Routes prevent off-page components from rendering
- Navbar/Footer render once at app level

### **Images & Media**
- Before/after images lazy-loaded
- Mobile-optimized responsive images
- CDN-ready for deployment

---

## Testing Strategy

### **Unit Test Areas**
- [ ] Route navigation
- [ ] Active link highlighting
- [ ] Authentication flow
- [ ] Quote form steps
- [ ] Mobile/desktop responsiveness

### **Integration Tests**
- [ ] Page transitions
- [ ] Component reuse across pages
- [ ] State persistence
- [ ] Quote submission

### **E2E Tests**
- [ ] Full user journey
- [ ] Quote form completion
- [ ] Admin dashboard access
- [ ] Mobile navigation

---

## Deployment Ready

### **Build Process**
```bash
npm run build
# Outputs optimized dist/ folder
```

### **Deployment Targets**
- ✅ Vercel (recommended)
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Any static hosting

### **Environment Variables**
```env
GEMINI_API_KEY=your_key_here
# Currently unused, but ready for future AI integration
```

---

## SEO & Accessibility

### **Current Implementation**
- ✅ Semantic HTML
- ✅ Page-level organization
- ✅ Alt text for images (in components)
- ✅ Keyboard navigation
- ✅ Color contrast

### **Future Enhancements**
- [ ] Dynamic meta tags per page
- [ ] Open Graph tags
- [ ] Structured data (schema.org)
- [ ] Sitemap generation
- [ ] SEO header tags

---

## Browser Support

- ✅ Modern browsers (ES2022)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Responsive from 320px (mobile) to 4K+

---

**Last Updated:** January 15, 2026
**Version:** 2.0 (Multi-page structure)
