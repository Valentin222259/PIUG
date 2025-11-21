import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme(); // ✔️ Corect!

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const searchable = [
    "Moon",
    "Mars",
    "Europa",
    "Titan",
    "Douglas Hurley",
    "Mark Shuttleworth",
    "Victor Glover",
    "Anousheh Ansari",
    "Launch Vehicle",
    "Spaceport",
    "Space Capsule",
  ];

  const handleSearch = (value: string) => {
    setQuery(value);

    if (value.trim() === "") return setResults([]);

    setResults(
      searchable.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const goToItem = (item: string) => {
    setQuery("");
    setResults([]);

    if (["Moon", "Mars", "Europa", "Titan"].includes(item))
      return navigate(`/destination?item=${item.toLowerCase()}`);

    if (
      [
        "Douglas Hurley",
        "Mark Shuttleworth",
        "Victor Glover",
        "Anousheh Ansari",
      ].includes(item)
    )
      return navigate(`/crew?member=${item.toLowerCase().replace(" ", "-")}`);

    if (["Launch Vehicle", "Spaceport", "Space Capsule"].includes(item))
      return navigate(
        `/technology?tech=${item.toLowerCase().replace(" ", "-")}`
      );
  };

  const linkClass = (path: string) =>
    `font-['Barlow_Condensed'] text-[16px] tracking-[2.7px] uppercase flex items-center gap-[8px] ${
      location.pathname === path
        ? "border-b-[3px] border-white text-white"
        : "opacity-80 hover:opacity-100 text-white border-b-[3px] border-transparent hover:border-gray-400"
    }`;

  return (
    <header className="top-[4vh] left-[3vw] right-[0] relative flex items-center justify-between">
      <div className="flex items-center gap-[48px]">
        <img
          src={logo}
          alt="Logo"
          className="w-[48px] h-[48px] opacity-100 z-50"
        />
      </div>

      <nav className="w-[90%] h-[10.6vh] bg-white/5 backdrop-blur-[80px] flex items-center justify-start gap-[64px] mr-auto pl-[3vw] left-[4vw] relative">
        {/* SEARCH */}
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search..."
            className="bg-white/10 rounded-full px-4 py-2 backdrop-blur-md outline-none text-white placeholder-white/60 w-[18vw]"
          />

          {results.length > 0 && (
            <div className="absolute top-[50px] w-full bg-white/10 backdrop-blur-xl rounded-xl p-2 flex flex-col gap-2 z-50">
              {results.map((item) => (
                <button
                  key={item}
                  onClick={() => goToItem(item)}
                  className="px-3 py-2 text-white text-left bg-white/10 hover:bg-white/20 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* NAV LINKS */}
        <Link to="/" className={linkClass("/")}>
          <span className="font-bold">00</span> Home
        </Link>
        <Link to="/destination" className={linkClass("/destination")}>
          <span className="font-bold">01</span> Destination
        </Link>
        <Link to="/crew" className={linkClass("/crew")}>
          <span className="font-bold">02</span> Crew
        </Link>
        <Link to="/technology" className={linkClass("/technology")}>
          <span className="font-bold">03</span> Technology
        </Link>
        <Link to="/contact" className={linkClass("/contact")}>
          <span className="font-bold">04</span> Contact
        </Link>
        <Link to="/video" className={linkClass("/video")}>
          <span className="font-bold">05</span> Video
        </Link>

        {/* THEME BUTTON */}
        <button onClick={toggleTheme} className="ml-auto mr-6 text-[20px]">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
