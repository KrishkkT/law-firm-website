# Thakker & Associates — Professional Law Firm Website

A modern, fully static website for Thakker & Associates law firm built with React, Vite, and Tailwind CSS. Features a professional light theme with dark mode support, smooth animations, and SEO optimization.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will open automatically at `http://localhost:3000`

## 📋 Features

### Design System
- **Light Theme (Default)**: Warm ivory backgrounds with muted antique gold accents
- **Dark Theme**: Deep charcoal with lighter gold accents
- **Typography**: Cormorant Garamond (headings) + DM Sans (body)
- **Custom Cursor**: Gold accent with subtle trail effect
- **Grain Texture**: Subtle animated grain for material depth

### Sections
1. **Navbar** - Sticky glassmorphism header with theme toggle
2. **Hero** - Full-viewport landing with abstract legal motif
3. **About** - Firm story with value pillars
4. **Practice Areas** - Tab/accordion interface for 9 practice areas
5. **Why Choose Us** - Dark section with stats and feature cards
6. **Team** - Staggered blob-shaped profile cards
7. **Testimonials** - Stacked card reveal carousel
8. **Process** - Horizontal timeline (vertical on mobile)
9. **Contact** - Two-column form with location info
10. **Footer** - Minimal typographic footer

### Animation & Motion
- Scroll-triggered fade-up animations with blur clearance
- Staggered child animations (80ms delay)
- Smooth page scrolling
- 200ms hover transitions (no bounce)
- Parallax hero background (0.2x scroll speed)
- Animated timeline drawing
- Auto-rotating testimonials

### SEO & AEO/GEO
- JSON-LD schema markup (LegalService, LocalBusiness)
- Open Graph tags for social sharing
- Semantic HTML throughout
- Optimized meta tags
- Location-keyed content

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── PracticeAreas.jsx
│   ├── WhyChooseUs.jsx
│   ├── Team.jsx
│   ├── Testimonials.jsx
│   ├── Process.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   └── useScrollReveal.js    (custom scroll animation hook)
├── utils/
│   └── constants.js           (all firm data, copy, testimonials)
├── styles/
│   └── globals.css            (global styles, grain texture, cursor)
├── App.jsx
└── main.jsx
```

## 🎨 Color System

### Light Theme
| Role | Value |
|---|---|
| Background | `#F5F0E8` |
| Surface | `#EDE7D9` |
| Text Primary | `#1C1C1C` |
| Text Secondary | `#5C5648` |
| Accent Gold | `#B8972A` |
| Accent Gold Light | `#D4AF5A` |

### Dark Theme
| Role | Value |
|---|---|
| Background | `#0F0E0C` |
| Surface | `#1A1814` |
| Text Primary | `#EDE7D9` |
| Text Secondary | `#9C9080` |
| Accent Gold | `#C9A84C` |

## 🔧 Technology Stack

- **React** 18.2.0 — UI framework
- **Vite** 5.0.0 — Fast bundler
- **Tailwind CSS** 3.3.6 — Utility-first CSS
- **Framer Motion** 10.16.4 — Animations (ready for expansion)
- **React Scroll** 1.8.10 — Smooth scroll navigation
- **React Helmet** 6.1.0 — Meta tag management
- **React Icons** 4.11.0 — Icon library

## ✨ Customization

### Update Firm Data
Edit `src/utils/constants.js`:
```javascript
export const FIRM_DATA = {
  name: 'Your Firm Name',
  founded: 2024,
  phone: '+1-XXX-XXX-XXXX',
  email: 'contact@yourfirm.com',
  // ... etc
};
```

### Modify Colors
Update `tailwind.config.js`:
```javascript
colors: {
  light: {
    bg: '#F5F0E8',    // your background color
    gold: '#B8972A', // your accent color
    // ... etc
  }
}
```

### Add More Sections
Create a new component in `src/components/` and import it in `App.jsx`:
```javascript
import YourComponent from './components/YourComponent';

<YourComponent />
```

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimizations at `md:` breakpoint (768px)
- Desktop layouts at `lg:` breakpoint (1024px)
- Touch-friendly interactive elements
- Mobile menu overlay navigation

## 🌐 Deployment

### Vite-hosted (Free)
1. Push to GitHub
2. Enable GitHub Pages in repo settings
3. Point to `/dist` folder

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

### Vercel
```bash
npm install -g vercel
vercel
```

## 📝 Content Management

All firm content is stored in `src/utils/constants.js` for easy updates:
- Team members
- Testimonials
- Practice areas
- Process steps
- Stats

## 🔐 Privacy & Legal

- Update privacy policy and terms links in Footer
- Customize legal disclaimer
- Add your own schema markup for local SEO

## 📞 Support

For questions about this template or to request custom modifications, contact your development team.

---

Built with ❤️ for professional excellence.
