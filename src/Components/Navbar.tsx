import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  // Lista de pagini disponibile pentru căutare
  const searchable = [
    "Home",
    "Destination",
    "Crew",
    "Technology",
    "Contact",
    "Video",
    "Components", // Am adăugat și pagina de componente, opțional
  ];

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim() === "") return setResults([]);

    // Filtrare simplă case-insensitive
    setResults(
      searchable.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const goToItem = (item: string) => {
    setQuery("");
    setResults([]);
    setIsOpen(false); // Închide meniul mobil dacă e deschis

    // Navigare simplă bazată pe numele paginii
    if (item === "Home") {
      navigate("/");
    } else {
      // Pentru restul: /destination, /crew, /technology etc.
      navigate(`/${item.toLowerCase()}`);
    }
  };

  const linkClass = (path: string) =>
    `font-['Barlow_Condensed'] text-[16px] tracking-[2.7px] uppercase flex items-center gap-[8px] transition-all duration-300
    ${
      location.pathname === path
        ? "border-r-[4px] md:border-r-0 md:border-b-[3px] border-white text-white"
        : "opacity-100 hover:opacity-100 text-white border-r-[4px] md:border-r-0 border-transparent md:border-b-[3px] hover:border-gray-400" // AICI S-A FĂCUT MODIFICAREA: opacity-80 -> opacity-100
    }`;

  return (
    <header
      className="
      fixed top-0 left-0 w-full p-6 z-50 flex items-center justify-between
      md:relative md:top-[4vh] md:left-[3vw] md:right-[0] md:p-0 md:w-auto
    "
    >
      <div className="flex items-center md:gap-[48px]">
        <img
          src={logo}
          alt="Logo"
          className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] opacity-100 z-50"
        />
      </div>

      {/* Buton Hamburger (Doar Mobil) */}
      <button
        className="block md:hidden z-50 relative focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={isOpen ? iconClose : iconHamburger} alt="Menu" />
      </button>

      {/* NAVIGATIE */}
      <nav
        className={`
          /* STILURI DESKTOP (Sidebar) */
          fixed inset-y-0 right-0 ml-14.5 w-[70%] max-w-[300px] h-screen bg-[#0B0D17]/95 backdrop-blur-xl
          flex flex-col pt-32 pl-8 gap-8 z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}

          /* STILURI MOBIL (Originale) */
          md:translate-x-0 md:static md:flex-row md:h-[10.6vh] md:w-[90%] md:max-w-none 
          md:bg-white/5 md:backdrop-blur-[80px] md:pt-0 md:pl-[3vw] md:gap-[64px] 
          md:items-center md:justify-start md:mr-auto md:left-[4vw] md:relative
        `}
      >
        {/* SEARCH */}
        <div className="relative w-full md:w-auto pr-8 md:pr-0">
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Page..."
            className="bg-white/10 rounded-full px-4 py-2 backdrop-blur-md outline-none text-white placeholder-white/60 w-full md:w-[18vw]"
          />
          {results.length > 0 && (
            <div className="absolute top-[50px] w-full md:w-[18vw] bg-black/90 backdrop-blur-xl rounded-xl p-2 flex flex-col gap-2 z-50 border border-white/20">
              {results.map((item) => (
                <button
                  key={item}
                  onClick={() => goToItem(item)}
                  className="px-3 py-2 text-white text-left bg-white/10 hover:bg-white/20 rounded-md block w-full uppercase font-barlowCondensed tracking-widest"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-6 md:flex-row md:gap-[48px]">
          <Link
            to="/"
            className={linkClass("/")}
            onClick={() => setIsOpen(false)}
          >
            <span className="font-bold">00</span> Home
          </Link>
          <Link
            to="/destination"
            className={linkClass("/destination")}
            onClick={() => setIsOpen(false)}
          >
            <span className="font-bold">01</span> Destination
          </Link>
          <Link
            to="/crew"
            className={linkClass("/crew")}
            onClick={() => setIsOpen(false)}
          >
            <span className="font-bold">02</span> Crew
          </Link>
          <Link
            to="/technology"
            className={linkClass("/technology")}
            onClick={() => setIsOpen(false)}
          >
            <span className="font-bold">03</span> Technology
          </Link>
          <Link
            to="/contact"
            className={linkClass("/contact")}
            onClick={() => setIsOpen(false)}
          >
            <span className="font-bold">04</span> Contact
          </Link>
          <Link
            to="/video"
            className={linkClass("/video")}
            onClick={() => setIsOpen(false)}
          >
            <span className="font-bold">05</span> Video
          </Link>
        </div>

        {/* THEME BUTTON */}
        <button
          onClick={toggleTheme}
          className="mt-4 md:mt-0 md:ml-auto md:mr-6 text-[24px] md:text-[20px] text-left"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
