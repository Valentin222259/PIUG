# Space Tourism Website 🚀

[![CI/CD Pipeline](https://github.com/valentin222259/space-tourism/actions/workflows/ci.yml/badge.svg)](https://github.com/valentin222259/space-tourism/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Valentin222259_Space-Tourism&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Valentin222259_Space-Tourism)

**Live Demo:** [🌍 Vezi aplicația live pe Vercel](https://piug-alpha.vercel.app/)

A comprehensive solution to the [Space Tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWlf1GfW). This project has been expanded with custom pages (Video, Contact) and built using a robust, type-safe architecture with React and TypeScript, complete with an automated CI/CD pipeline.

---

## 🎨 Overview

The goal was to build a multi-page space tourism website matching the design as closely as possible. Users are able to:

- View optimal layouts for each page depending on device screen size
- See hover states for all interactive elements
- Navigate between different pages (Home, Destination, Crew, Technology)
- Access additional custom pages (Video, Contact)

---

## ✨ Key Features

- **Fully Responsive** — Meticulous adaptation for Mobile, Tablet, and Desktop viewports.
- **Dynamic Data Rendering** — Content for Crew, Destinations, and Technology pages is fetched and rendered dynamically from a local JSON file.
- **Custom Pages** — Added `Video` and `Contact` pages to demonstrate extended routing and form handling capabilities.
- **Modern Styling** — Utilized Tailwind CSS for rapid and consistent styling.
- **Type-Safe** — Full TypeScript support for better code quality and developer experience.
- **Automated Pipeline (CI/CD)** — Every push and pull request is automatically built and tested using GitHub Actions.
- **Strict Code Quality** — Integrated with SonarCloud to ensure the codebase remains clean, secure, and maintainable (Zero Security Hotspots).

---

## 🛠️ Tech Stack

**Frontend:**

| Technology | Purpose |
|---|---|
| React 18 | UI Framework |
| TypeScript | Type Safety |
| Tailwind CSS | Utility-first Styling |
| Vite | Build Tool |
| React Router | Client-side Routing (SPA) |
| React Context API | Global Theme Management |

**DevOps & Quality Assurance:**

| Tool | Purpose |
|---|---|
| GitHub Actions | CI/CD — Automated build & lint |
| SonarCloud | SAST, Code Smells, Duplication |
| Vercel | Hosting & Deployment |

---

## 📂 Project Structure

```text
space-tourism/
├── .github/
│   └── workflows/          # CI/CD Pipeline configurations
├── src/
│   ├── components/         # Reusable UI components (Navbar, Buttons)
│   ├── pages/              # Main view components (Home, Destination, Crew, etc.)
│   ├── assets/             # Static assets (images, icons)
│   ├── ThemeContext.tsx    # Global state for theme management
│   ├── App.tsx             # Main application entry & routing
│   └── main.tsx            # React DOM rendering
├── public/                 # Public static files
├── data.json               # Data source for destinations, crew & technology
├── sonar-project.properties# SonarCloud configuration
└── package.json
```

---

## ⚙️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/valentin222259/space-tourism.git
cd space-tourism
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open your browser and navigate to the local link provided by Vite (usually `http://localhost:5173`).

### 4. Build for Production

```bash
npm run build
```

---

## 📋 Requirements

- **Node.js** >= 18.x (v20 recommended)
- **npm** >= 9.x
- Modern browser (Chrome, Firefox, Safari, Edge)

---

## 🤝 Contributing

Feel free to check the [Issues](https://github.com/valentin222259/space-tourism/issues) tab for any reported bugs or feature requests. Pull requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📝 License

This project is licensed under the [MIT License](./LICENSE).
