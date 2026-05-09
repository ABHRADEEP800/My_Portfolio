# 🚀 Abhradeep Biswas — Portfolio (Frontend)

A fast, modern, fully responsive personal portfolio built with **React 19 + TypeScript + Vite + Tailwind CSS v4**, featuring PWA support, dark/light theming, scroll-reveal animations, and a live contact form.

---

## ✨ Features

- ⚡ **Vite 7** — lightning-fast dev server & optimised production builds
- 🎨 **Tailwind CSS v4** — utility-first styling with custom CSS variables for theming
- 🌗 **Dark / Light mode** — persisted via Redux + localStorage
- 📱 **PWA** — installable, offline-capable via `vite-plugin-pwa` + custom service worker
- 🔄 **Scroll-reveal animations** — Intersection Observer for smooth section entrances
- 🦥 **Lazy loading** — heavy sections code-split into async chunks
- 📬 **Contact form** — validated with `react-hook-form`, protected by reCAPTCHA v3, sends email through the backend API
- 🧭 **React Router v7** — client-side routing with a 404 page
- 🛡️ **Rate-limit aware** — graceful error handling for backend throttling

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky navbar with theme toggle
│   ├── Hero.tsx            # Landing section with typewriter effect
│   ├── Skills.tsx          # Tech stack grid
│   ├── About.tsx           # About me section
│   ├── Projects.tsx        # Project cards
│   ├── Contact.tsx         # Contact form (reCAPTCHA v3)
│   ├── Footer.tsx          # Footer
│   ├── LoadingScreen.tsx   # Animated loading overlay
│   ├── NotFound.tsx        # 404 page
│   └── SectionHeader.tsx   # Reusable section heading
├── hooks/
│   └── useScrollAnimation.ts
├── services/
│   └── contact.service.ts  # API call to backend contact endpoint
├── store/
│   ├── store.ts
│   └── theme/themeSlice.ts
├── util/
│   └── localStorage.ts
├── sw.js                   # Custom service worker (injectManifest)
├── App.tsx
├── main.tsx
└── index.css               # Global styles & CSS variables
```

---

## 🛠️ Tech Stack

| Layer        | Technology                                      |
|--------------|-------------------------------------------------|
| Framework    | React 19                                        |
| Language     | TypeScript 5.8                                  |
| Build Tool   | Vite 7                                          |
| Styling      | Tailwind CSS v4                                 |
| State        | Redux Toolkit + React Redux                     |
| Routing      | React Router DOM v7                             |
| Forms        | React Hook Form                                 |
| Animations   | CSS transitions + Intersection Observer         |
| PWA          | vite-plugin-pwa + Workbox                       |
| Typewriter   | react-simple-typewriter                         |
| Toasts       | react-toastify                                  |
| Bot Guard    | react-google-recaptcha-v3                       |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 22.0.0
- npm >= 10.9.3

### Installation

```bash
# Clone the repo
git clone https://github.com/ABHRADEEP800/My_Portfolio_Backend
cd frontend

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the `frontend/` root:

```env
VITE_API_HOST_URL=http://localhost:4000
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_v3_site_key
```

### Development

```bash
npm run dev
```

Runs on `http://localhost:5173` by default.

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview Production Build

```bash
npm run preview
```

### Lint & Format

```bash
npm run lint
npm run format
```

---

## 🔗 Backend

The contact form POSTs to the backend API. See the backend repo:

👉 [https://github.com/ABHRADEEP800/My_Portfolio_Backend](https://github.com/ABHRADEEP800/My_Portfolio_Backend)

---

## 📦 PWA

The app is installable as a Progressive Web App. The service worker uses `injectManifest` strategy with Workbox for:
- Full precaching of all assets
- `CacheFirst` strategy for Google Fonts

---

## 👤 Author

**Abhradeep Biswas**  
GitHub: [@ABHRADEEP800](https://github.com/ABHRADEEP800)

---

> Built with ❤️ by Abhradeep
