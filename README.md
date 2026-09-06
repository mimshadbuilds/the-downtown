# The Downtown

A responsive news/magazine template built with **React 19 + Vite**, styled with **Tailwind CSS**. Features a modern layout with hero slider, reusable components, and fast performance. Live at [the-downtown-dun.vercel.app](https://the-downtown-dun.vercel.app/)

![Project screenshot](<img width="3308" height="2348" alt="IMG-20260127-WA0000" src="https://github.com/user-attachments/assets/d69f3f53-ca07-4ceb-b45a-99d19fce4369" />).


## Main Technologies (Stack)

- **Language(s):** JavaScript, CSS, HTML
- **Framework & Bundler:** React (v19) + Vite
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Dev Tools & Plugins:** @vitejs/plugin-react, ESLint, Babel React Compiler

## Key Features

- 📱 Responsive news layout (left sidebar, main content, right sidebar)
- 🎬 Top slider (TopSlider) for hero/featured items
- 🔄 Reusable NewsCard component with multiple variants
- ⚡ Image lazy-loading and sectioned content presentation
- 🎨 Fast customization via Tailwind CSS
- ⚙️ Modern tooling with Vite for fast HMR and builds

## Dependencies

### Production Dependencies
- `react`: ^19.2.0
- `react-dom`: ^19.2.0

### Dev Dependencies
- `vite`: ^7.2.4 — Fast build tool and dev server
- `tailwindcss`: ^3.4.17 — Utility-first CSS framework
- `@vitejs/plugin-react`: ^5.1.1 — React support for Vite
- `babel-plugin-react-compiler`: ^1.0.0 — Optimized React compilation
- `eslint`: ^9.39.1 — Code linting
- `eslint-plugin-react-hooks`: ^7.0.1 — React Hooks linting rules
- `postcss`: ^8.5.6 & `autoprefixer`: ^10.4.23 — CSS post-processing
- `@types/react`: ^19.2.5 & `@types/react-dom`: ^19.2.3 — TypeScript types
- Additional tools: `globals`, `eslint-plugin-react-refresh`

## Project Structure

```
.
├── public/                  # Static files (place screenshot.png here)
├── src/
│   ├── assets/             # Logo and other images
│   ├── components/         # Header, Navbar, NewsCard, TopSlider, SectionIndex, ...
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## How to Run Locally

### Quick Start
1. **Clone the repository:**
   ```bash
   git clone https://github.com/mimshadbuilds/the-downtown.git
   cd the-downtown
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open the URL shown by Vite (usually `http://localhost:5173`) in your browser.

### Build & Preview
```bash
# Create production build
npm run build

# Preview the production build locally
npm run preview
```

## Links

- **🌐 Live Demo:** https://the-downtown-dun.vercel.app/
- **📦 Repository:** https://github.com/mimshadbuilds/the-downtown
