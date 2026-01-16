# 🚀 Quick Reference Guide - Multi-Page Structure

## Available Routes

| Route | Page | Components |
|-------|------|-----------|
| **`/`** | **Home** | Hero, Services teaser, AI Assistant, Before/After preview, Reviews, How it Works, Quote form |
| **`/services`** | **Services** | Full services grid, Service deep dives, Reviews, Quote form |
| **`/gallery`** | **Gallery** | Before/after gallery, Reviews, Quote form |
| **`/service-area`** | **Service Area** | Service coverage map, Why choose Unick, Reviews, Quote form |
| **`/faq`** | **FAQ** | FAQ section, Reviews, Quote form |
| **`/admin`** | **Admin** | Dashboard (if logged in) or Login form |

---

## Navigation Elements

### **Desktop Navbar**
- Logo → `/`
- Home → `/`
- Services → `/services`
- Gallery → `/gallery`
- Service Area → `/service-area`
- FAQ → `/faq`
- Get Quote → `/` (scrolls to quote)
- Phone button → Call

### **Mobile Bottom Nav**
- 🏠 Home → `/`
- 📋 Services → `/services`
- 💬 Quote → Scroll to quote form
- 📱 Call → Call button

### **Active Link Indicator**
Current page shows **gold/accent** color

---

## Key Features

✅ **Multi-page Structure** - 6 main pages + admin
✅ **React Router v7** - Modern routing
✅ **Active Route Highlighting** - Visual feedback
✅ **Mobile Responsive** - All pages optimized
✅ **Component Reuse** - DRY principle
✅ **Design System** - Consistent styling
✅ **Lead Management** - Admin dashboard
✅ **Quote Form** - 6-step conversion
✅ **WhatsApp Integration** - Priority chat
✅ **Mobile FAB** - Easy quote access

---

## Development Commands

```bash
# Start dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Preview production build
npm run preview

# Git operations
git add .
git commit -m "message"
git push
```

---

## File Locations

### Pages (User-facing)
```
pages/
├── HomePage.tsx
├── ServicesPage.tsx
├── GalleryPage.tsx
├── ServiceAreaPage.tsx
├── FaqPage.tsx
└── AdminPage.tsx
```

### Components (Reusable)
```
components/
├── Navbar.tsx          ← Uses React Router
├── MobileNav.tsx       ← Uses React Router
├── Hero.tsx
├── ServicesGrid.tsx
├── ServiceDeepDives.tsx
├── BeforeAfterWall.tsx
├── ReviewsSection.tsx
├── FAQSection.tsx
├── QuoteForm.tsx
├── AdminDashboard.tsx
└── ... (10+ more)
```

### Configuration
```
App.tsx                ← Main app with routing
types.ts              ← TypeScript types
constants.tsx         ← Business info & data
lib/store.ts          ← Lead storage
```

---

## Authentication

**Admin Panel Access:**
- URL: `http://localhost:3000/#/admin`
- Password: `unick2026`
- Stores session in localStorage
- Logout clears session

---

## Data Management

### Quote Leads
- Stored in `leadStore` (localStorage)
- Accessible in Admin Dashboard
- Status tracking: new → contacted → quoted → scheduled → completed

### Business Info
- Phone: `(786) 622-7620`
- Email: `Info@UnickAutoDetailing.com`
- Service areas: 14 Miami communities
- Response time: Under 10 minutes

---

## Design System

**Colors:**
- 🟡 Gold: `#FFB84D` (Primary)
- 🔵 Cyan: `#00E5FF` (Accent)
- ⚫ Deep Space: `#0A1628` (Background)
- ⚪ Platinum: `#F8F9FA` (Text)
- 💚 Success: `#10B981` (Confirmation)

**Typography:**
- Headlines: `Outfit` font (bold)
- Body: `Inter` font (regular)

**Components:**
- Glass-card (blur effect)
- Smooth animations
- Mobile-first responsive

---

## Testing URLs

```
Local:
- http://localhost:3000              ← Home
- http://localhost:3000/#/services   ← Services
- http://localhost:3000/#/gallery    ← Gallery
- http://localhost:3000/#/service-area ← Service Area
- http://localhost:3000/#/faq        ← FAQ
- http://localhost:3000/#/admin      ← Admin

Production (when deployed):
- https://yourdomain.com/
- https://yourdomain.com/#/services
etc.
```

---

## Git Commits

Latest commits:
1. `refactor: Convert to multi-page React Router structure`
2. `docs: Add comprehensive refactoring summary`
3. `docs: Add detailed project structure documentation`

---

## Troubleshooting

### Issue: Styles not loading
```bash
npm install
npm run dev
```

### Issue: Routes not working
- Check browser console
- Verify HashRouter is in App.tsx
- Clear browser cache

### Issue: Admin login fails
- Check localStorage isn't full
- Browser DevTools → Application → Storage
- Try incognito mode

### Issue: Quote form not saving
- Ensure localStorage enabled
- Check browser storage limit
- Admin dashboard shows saved leads

---

## Performance Tips

- Use `/services` for service showcase (faster than home)
- Mobile nav recommended for small screens
- Quote form can be accessed from any page
- Admin dashboard loads lead data from localStorage

---

## Next Steps

1. ✅ Multi-page structure implemented
2. ✅ React Router v7 integrated
3. ✅ Navigation updated
4. ✅ All pages responsive
5. ⏳ (Optional) Deploy to Vercel
6. ⏳ (Optional) Add analytics
7. ⏳ (Optional) Setup email notifications

---

## Resources

- **Repository:** https://github.com/Nitheesh0217/unick-auto-detailing
- **Documentation:** README.md, STRUCTURE.md, REFACTORING_SUMMARY.md
- **Live Dev:** http://localhost:3000

---

**Version:** 2.0 (Multi-page with React Router v7)
**Status:** ✅ Production Ready
**Last Updated:** January 15, 2026
