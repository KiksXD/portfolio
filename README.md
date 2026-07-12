# KMT / Portfolio

Personal portfolio website for **Kaung Myat Tun @ Kikko** — Computer Engineering student at Singapore Polytechnic, specializing in Robotics & Machine Learning.

**🔗 Live site:** [your-vercel-url.vercel.app](https://portfolio-five-mu-82.vercel.app/)

---

## ✨ Features

- Responsive single-page portfolio with smooth scroll navigation
- Animated section reveals on scroll (`IntersectionObserver`)
- Sections: About, Experience, Skills, Projects, Education, Contact
- Custom design system with CSS variables (accent color, dark theme)
- Built with Vite for fast dev/build performance

## 🛠️ Tech Stack

- **Framework:** React (Vite)
- **Styling:** Plain CSS with CSS custom properties
- **Deployment:** Vercel
- **Icons/Assets:** Custom PNGs (logo, profile photo, illustrations)

## 📂 Project Structure

```
my-portfolio/
├── public/
├── src/
│   ├── assets/          # images (logo, profile photo, etc.)
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── About.jsx / About.css
│   │   ├── Experience.jsx / Experience.css
│   │   ├── Skills.jsx / Skills.css
│   │   ├── Projects.jsx / Projects.css
│   │   ├── Education.jsx / Education.css
│   │   └── Contact.jsx / Contact.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node)

### Installation

```bash
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio
npm install
```

### Run locally

```bash
npm run dev
```

Visit `http://localhost:5173` to view it in the browser.

### Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview the production build locally

```bash
npm run preview
```

## ☁️ Deployment

This project is deployed on **[Vercel](https://vercel.com)**.

### Steps to deploy your own copy:

1. Push this repo to your own GitHub account.
2. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
3. Vercel auto-detects the Vite framework preset — no config needed. Confirm these settings if asked:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Vercel will build and give you a live URL (e.g. `my-portfolio.vercel.app`).
5. Every subsequent `git push` to the `main` branch triggers an automatic redeploy.

> **Note:** Make sure all image assets in `src/assets/` are committed to git (check `.gitignore` doesn't exclude them) — Vercel builds from a clean clone of your repo, so any file not pushed to GitHub won't be available during the build.

## 📬 Contact

- 📍 Singapore
- 📧 kmtun13579@gmail.com
- 📞 +65 9427 5904

---

*Built with React + Vite.*