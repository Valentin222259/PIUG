# Space Tourism Website 🚀

A comprehensive solution to the [Space Tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWlf1GfW). This project has been expanded with custom pages (Video, Contact) and built using a robust, type-safe architecture with React and TypeScript.

## 🎨 Overview

The goal was to build a multi-page space tourism website matching the design as closely as possible. Users are able to:

- View optimal layouts for each website page depending on device screen size
- See hover states for all interactive elements
- Navigate between different pages (Home, Destination, Crew, Technology)
- Access additional custom pages (Video, Contact)

## 🛠️ Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Utility-first approach)
- **Build Tool:** Vite
- **Routing:** React Router (Single Page Application structure)
- **Data Management:** JSON data integration for dynamic content

## 📂 Project Structure

```
piug/
├── src/
│   ├── components/         # Reusable UI components (Navbar, Buttons)
│   ├── pages/              # Main view components (Home, Destination, Crew, etc.)
│   ├── assets/             # Static assets (images, icons)
│   ├── data.json           # Data source for destinations and crew
│   ├── App.tsx             # Main application entry
│   └── main.tsx            # React DOM rendering
├── public/                 # Public static files
├── package.json
└── vite.config.ts
```

## ✨ Key Features

- **Fully Responsive:** Meticulous adaptation for Mobile, Tablet, and Desktop viewports
- **Dynamic Data Rendering:** Content for Crew, Destinations, and Technology pages is fetched and rendered dynamically from a JSON file
- **Custom Pages:** Added `Video` and `Contact` pages to demonstrate extended routing and form handling capabilities
- **Modern Styling:** Utilized Tailwind CSS for rapid and consistent styling
- **Type-Safe:** Full TypeScript support for better code quality and developer experience

## ⚙️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/valentin222259/piug.git
cd piug
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

## 📋 Requirements

- Node.js >= 14.x
- npm >= 6.x
- Modern browser (Chrome, Firefox, Safari, Edge)

## 🤝 Contributing

Feel free to check the Issues tab for any reported bugs or feature requests. Pull requests are welcome!

## 📝 License

MIT

---

**Made with ❤️ by Valentin**
