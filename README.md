# 7appointa — Frontend Website

A production-quality, investor-ready frontend for 7appointa, the service marketplace that handles all scheduling for providers.

---

## 🚀 Running Locally

**Prerequisites:** Node.js 16+ and npm installed.

```bash
# 1. Install dependencies
npm install

# 2. Start development server (opens at http://localhost:3000)
npm start
```

That's it — hot reload is enabled; changes reflect instantly.

---

## 🌐 Deploying to Netlify

### Option A — Drag & Drop (easiest)
1. Run `npm run build` → produces a `/build` folder
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
3. Drag the `build/` folder into the Netlify UI
4. Your site is live instantly on a Netlify subdomain

### Option B — Git-connected (recommended for ongoing use)
1. Push this project to a GitHub/GitLab repo
2. In Netlify: "Add new site" → "Import from Git"
3. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
4. Click Deploy — Netlify auto-deploys on every push

---

## ▲ Deploying to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel

# Follow prompts — accepts all defaults for Create React App
```

Or connect via [vercel.com](https://vercel.com) → "New Project" → import Git repo → no config needed.

---

## 🖼️ Replacing the Logo

The SVG logo is in `src/components/Logo.js`. To use your actual PNG/SVG logo file:

1. Copy your logo file into `src/assets/logo.png` (or `.svg`)
2. Open `src/components/Navbar.js`
3. Replace the `<Logo />` component usage:

```jsx
// FROM:
import Logo from './Logo';
<Logo size={36} />

// TO:
import logoImg from '../assets/logo.png';
<img src={logoImg} alt="7appointa" style={{ height: 36, width: 'auto' }} />
```

4. Do the same in `src/components/Footer.js`

---

## 🔗 Updating Links & Contact Info

| What to update | Where to find it |
|---|---|
| **Apply as Provider** (Google Form URL) | Search for `https://forms.google.com` in all `.js` files — replace with your real form URL |
| **Contact email** | Search for `hello@7appointa.com` and `careers@7appointa.com` |
| **Social links** | `src/components/Footer.js` — the social array near the top |
| **Open roles** | `src/pages/CareersPage.js` — the `ROLES` array |
| **Stats / Numbers** | `src/pages/LandingPage.js` — the `STATS` array |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js       # Sticky nav with mobile menu
│   ├── Footer.js       # Full footer with links
│   └── Logo.js         # SVG logo component
├── pages/
│   ├── LandingPage.js  # Hero, How It Works, Services, Why, CTA
│   └── CareersPage.js  # Job listings with expand/collapse
├── App.js              # Router + page shell
├── index.js            # React entry point
└── index.css           # Design tokens + global styles
public/
└── index.html          # HTML shell + Google Fonts
```

---

## 🎨 Design System

Colors are defined as CSS variables in `src/index.css`:

```css
--cobalt:     #2547D0   /* Primary blue */
--periwinkle: #7B93F5   /* Accent blue */
--lavender:   #A8B8FA   /* Light accent */
--ink:        #08091A   /* Background */
```

Fonts: **Syne** (display/headings) + **DM Sans** (body)

