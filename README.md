<div align="center">

# 🎮 VirtualR – Immersive VR Landing Page

Modern, responsive landing page for a **Virtual Reality experience/product**, built with **React + Vite + Tailwind CSS** and deployed on **Netlify**.

`virtualR` showcases VR features, pricing, testimonials, and workflow with a clean, animated UI.

</div>

---

## ✨ Features

- **Modern UI/UX**: Clean layout with sections for hero, features, workflow, pricing, testimonials and footer.
- **Fully Responsive**: Optimized for **mobile, tablet, and desktop** using a mobile-first approach.
- **Single Page Application (SPA)**: Client-side routing using `react-router-dom`.
- **Reusable Components**: Sections broken into small, maintainable React components.
- **Iconography**: Beautiful icons via `lucide-react`.
- **Netlify Ready**: Includes `_redirects` config for proper SPA routing on Netlify.

---

## 🧑‍💻 Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Bundler / Dev Server**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Icons**: [lucide-react](https://lucide.dev/)
- **Routing**: [react-router-dom](https://reactrouter.com/)
- **Deployment**: [Netlify](https://www.netlify.com/)

---

## 🗂️ Project Structure

High-level folder structure:

```txt
virtualR/
├─ public/
│  └─ _redirects       # Netlify SPA redirect configuration
├─ src/
│  ├─ constanst/
│  │  └─ index.jsx     # Centralized static data (texts, cards, pricing, etc.)
│  ├─ sections/
│  │  ├─ Hero.jsx      # Hero section with main CTA
│  │  ├─ Features.jsx  # Features / benefits section
│  │  ├─ WorkFlow.jsx  # Workflow / how it works
│  │  ├─ Pricing.jsx   # Pricing plans
│  │  ├─ Testimonials.jsx # User feedback and social proof
│  │  ├─ NavBar.jsx    # Navigation bar
│  │  └─ Footer.jsx    # Footer with links and socials
│  └─ App.jsx          # Root component composing all sections
├─ package.json        # Dependencies, scripts and meta
├─ package-lock.json   # Locked dependency tree
└─ README.md           # Project documentation (this file)
```

> Note: some files like configuration for Tailwind/Vite or assets may also be present depending on your setup.

---

## 📱 Responsiveness

The layout was designed with **responsiveness in mind**:

- Uses **flexbox** and **CSS utility classes** from Tailwind to adapt to different screen sizes.
- Typography and spacing scale for readability on small screens.
- Navigation and sections gracefully stack and reflow on mobile devices.

You can test responsiveness using:

- Browser dev tools (mobile/desktop viewports).
- Real devices (phone/tablet) after deployment.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/virtualR.git
cd virtualR
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or as shown in your terminal).

### 4. Build for production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

---

## 🌐 Deploying to Netlify

This project is ready to deploy on **Netlify**.

1. Push the repository to GitHub.
2. On Netlify, create a **New site from Git**.
3. Select your GitHub repo.
4. Use these settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Deploy.

For SPA routing, the file `public/_redirects` contains:

```txt
/*  /index.html  200
```

This ensures that refreshing on any route still serves the React app instead of a 404.

---

## 👨‍💻 Developer

- **Developer**: Adonias Goes

Feel free to use this project as:

- A **portfolio piece** to showcase React + Tailwind skills.
- A **starter template** for VR/tech landing pages.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## ⭐ Support

If you like this project or it helped you in any way:

- **Star this repo on GitHub** ⭐  
- **Share it with friends or colleagues** 🙌  
- **Use it as inspiration or a base for your own projects** 🚀  

Your support means a lot and helps motivate further improvements!

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
