# Abraq Nurseries LLP — High-Density Apple Orchard Platform

> **Pioneering High-Density Apple Biotechnology & Precision Orchard Development in Jammu & Kashmir.**

Located at Wazabagh, Hyderpora Bypass (opposite Rahim Motors), Srinagar, Jammu & Kashmir 190014, **Abraq Nurseries LLP** is a leading orchard developer and provider of certified nursery plants, clonal rootstocks (Italian M9-T337, MM106, MM111), automated drip fertigation, heavy snow-load trellis engineering, and complete MIDH government subsidy assistance.

---

## 🌟 Key Features & Interactive Architecture

- **High-Density Orchard Configurator:** Live interactive pricing and financial architecture with instant itemized cost breakdowns (plants, trellis frames, drip lines, anti-hail safety netting) and automated official PDF quote export (`jspdf`).
- **Interactive High-Density Video Showcase:** Native HTML5 HD drone flyovers, knip-boom nursery propagation documentation, trellis framing, and harvest packouts (`public/videos/`).
- **Cultivar Hologram & Variety Catalog:** Deep technical specifications for European cultivars (Gala Schniga, King Roat®, Red Jonaprince, Jeromine, Fuji, Golden Delicious, Memma Master, Schnico Red, Ziola).
- **14-Test Soil Lab Spectrometer:** Interactive soil chemistry diagnostic tool modeled after our specialized Chadoora laboratory (NPK, pH, EC, Zinc, Boron, Calcium, Magnesium, Organic Carbon).
- **Turnkey Orchard Estimator & Booking Wizard:** Multi-step consultation and site assessment booking with instant WhatsApp connectivity.
- **Alpine Precision Design System:** Modern responsive UI built with Tailwind CSS, glassmorphism, fluid typography, dark/light theme persistence, smooth micro-animations, and interactive spatial widgets.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Routing:** [React Router 7](https://reactrouter.com/) (Single Page Application architecture)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom `@theme` tokens and keyframe animations
- **Icons:** [Lucide React](https://lucide.dev/)
- **PDF Generation:** [jsPDF](https://github.com/parallax/jsPDF)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Project Structure

```
├── public/
│   ├── images/              # Optimized WebP assets (gallery, harvest, hero, nursery, trellis, varieties)
│   └── videos/              # High-definition drone and process MP4 video clips
├── scripts/                 # Media optimization and tooling scripts
├── src/
│   ├── assets/              # Raw master media assets
│   ├── components/          # Reusable UI components & interactive widgets
│   │   ├── ModernBentoFeatures.tsx
│   │   ├── ModernConfigurator.tsx
│   │   ├── ProcessVideoGallery.tsx
│   │   ├── StudioHero.tsx
│   │   ├── VideoSection.tsx
│   │   ├── SoilLabSpectrometer.tsx
│   │   ├── OrchardEstimator.tsx
│   │   └── ...
│   ├── data/                # Variety catalogs, services, knowledge articles, FAQs, projects
│   ├── lib/                 # Classname merge & style utilities
│   ├── pages/               # Page views (Home, About, Varieties, Services, Book Orchard, Knowledge, Projects, Gallery, Contact)
│   ├── utils/               # Math calculations, PDF quotation generator, hooks
│   ├── App.tsx              # Application shell & route configuration
│   ├── index.css            # Alpine Precision design tokens & styles
│   └── main.tsx             # Entry mount point
├── .gitignore               # Git ignore rules
├── package.json             # NPM dependencies & scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration & path alias mapping
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Installation

1. Clone or extract the project repository:
   ```bash
   cd project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 📍 Contact & Support

**Abraq Nurseries LLP**  
- **Address:** Wazabagh, Hyderpora Bypass (opposite Rahim Motors), Srinagar, Jammu & Kashmir 190014  
- **Phone:** +91 70060 12345  
- **Email:** info@abraqnurseries.com  
- **Hours:** Mon–Sat · 9:00 AM – 6:00 PM  
