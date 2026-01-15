# 🚗 Unick Auto Detailing – Elite Miami Mobile Concierge

**Premium Auto Detailing Services | Miami, Florida**

A modern, high-performance website for Unick Auto Detailing – showcasing elite mobile car detailing services with an advanced quote system, admin dashboard, and AI-powered service recommendations.

---

## 🌟 Features

- **Hero Section** - Stunning landing experience with immediate call-to-action
- **Service Grid** - Showcase of 5+ elite detailing services with pricing
- **Before/After Gallery** - Visual proof of transformation quality
- **AI Assistant** - Smart service recommendation engine based on customer needs
- **Advanced Quote System** - 6-step multi-intent form with real-time price estimation
- **Service Deep Dives** - Detailed explanations of each service offering
- **Service Areas** - Coverage map and regional information for Miami
- **Reviews Section** - Customer testimonials and ratings
- **FAQ Section** - Comprehensive Q&A for customer support
- **Admin Dashboard** - Manage incoming quote requests and leads
- **Mobile Responsive** - Fully optimized for all device sizes
- **Glassmorphism UI** - Modern design with blur effects and gradient overlays
- **WhatsApp Integration** - Direct messaging integration for priority communication

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19.2.3** | UI Framework |
| **TypeScript** | Type-safe development |
| **Vite 6.4** | Build tool & dev server |
| **React Router 7.12** | Page routing |
| **Tailwind CSS** | Styling & utilities |
| **Lucide React** | Icon library |
| **Custom Store** | Lead management system |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20.17.0 or higher
- npm 11.0.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nitheesh0217/unick-auto-detailing.git
   cd unick-auto-detailing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Configure Gemini API for future AI integration:
   - Edit `.env.local` and add your `GEMINI_API_KEY`
   - Currently, the AI Assistant uses simulated recommendations

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
unick-auto-detailing/
├── components/              # React components
│   ├── AdminDashboard.tsx   # Lead management interface
│   ├── AIAssistant.tsx      # Smart service recommendations
│   ├── BeforeAfterWall.tsx  # Gallery showcase
│   ├── Hero.tsx             # Landing section
│   ├── QuoteForm.tsx        # 6-step quote request form
│   ├── ReviewsSection.tsx   # Customer testimonials
│   ├── ServiceDeepDives.tsx # Detailed service info
│   ├── ServicesGrid.tsx     # Service cards display
│   ├── ServiceAreas.tsx     # Regional coverage
│   ├── FAQSection.tsx       # Q&A section
│   ├── Navbar.tsx           # Navigation
│   └── Footer.tsx           # Footer section
├── lib/
│   └── store.ts             # Lead store management
├── App.tsx                  # Main app component
├── index.tsx                # React entry point
├── types.ts                 # TypeScript definitions
├── constants.tsx            # Business constants & services
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
└── index.html               # HTML template
```

---

## 🎯 Key Features Explained

### Quote Form (6-Step Process)
1. **Intent Selection** - Identify customer goal (selling, protection, repair, maintenance)
2. **Service Selection** - Choose relevant detailing packages
3. **Vehicle Profiling** - Specify vehicle year, make, model
4. **Contact Information** - Capture name, email, phone, WhatsApp preference
5. **Logistics** - Select preferred appointment date/time
6. **Confirmation** - Summary and WhatsApp priority chat option

### Admin Dashboard
- **Password Protected** (password: `unick2026`)
- View all incoming quote requests
- Filter by status: New, Contacted, Quoted, Scheduled, Completed
- Real-time lead updates
- Contact information and service selections visible

### AI Assistant
- Analyzes customer queries for service matching
- Returns relevant service recommendations
- Anchoring psychology for bundle pricing
- Future integration with Gemini API for advanced NLP

---

## 🎨 Design System

**Color Palette:**
- Gold: `#FFB84D` - Primary brand color
- Deep Space: `#0A1628` - Dark background
- Miami Cyan: `#00E5FF` - Accent color
- Platinum: `#F8F9FA` - Light text
- Success: `#10B981` - Confirmation states

**Typography:**
- Headings: `Outfit` (600-900 weight)
- Body: `Inter` (400-700 weight)

**UI Components:**
- Glass-card effects (backdrop blur)
- Smooth animations and transitions
- Mobile-first responsive design
- Accessibility considerations

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🔐 Authentication

Admin panel uses simple localStorage-based authentication:
- Default password: `unick2026`
- Stored in browser localStorage
- Logout clears session

---

## 📊 Data Structure

### QuoteRequest
```typescript
{
  id: string;
  timestamp: Date;
  services: string[];
  vehicle: { year, make, model };
  contact: { name, email, phone, whatsapp };
  location: string;
  preferredDate: string;
  preferredTime: 'morning' | 'afternoon' | 'evening';
  estimatedPrice: { min, max };
  status: 'new' | 'contacted' | 'quoted' | 'scheduled' | 'completed';
}
```

---

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

This generates an optimized build in the `dist/` folder ready for deployment.

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
Connect your GitHub repository to Netlify for automatic deployments.

---

## 📞 Contact Information

**Unick Auto Detailing**
- 📱 Phone: (786) 622-7620
- 📧 Email: Info@UnickAutoDetailing.com
- 📍 Service Area: Miami, FL (Mobile Concierge)
- 📱 WhatsApp: Available
- 🎬 Social: @unickdetailing (Instagram, TikTok, YouTube)

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## 🤝 Contributing

This is a commercial website for Unick Auto Detailing. For updates or modifications, contact the development team.

---

## 📄 License

Private project - All rights reserved © 2026 Unick Auto Detailing

---

## 🔮 Future Enhancements

- [ ] Gemini API integration for advanced AI recommendations
- [ ] Photo upload in quote form
- [ ] Email/SMS notifications for quote updates
- [ ] Payment integration
- [ ] Appointment calendar sync
- [ ] Customer portal for tracking service status
- [ ] Review system backend integration

---

<div align="center">

**Built with ❤️ for Elite Auto Care**

[Visit Website](http://localhost:3000) | [GitHub](https://github.com/Nitheesh0217/unick-auto-detailing)

</div>
