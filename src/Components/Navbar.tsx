import React from "react";
import logo from "../assets/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    `font-['Barlow_Condensed'] text-[16px] tracking-[2.7px] uppercase flex items-center gap-[8px] ${
      location.pathname === path
        ? "border-b-[3px] border-white text-white"
        : "opacity-80 hover:opacity-100 text-white border-b-[3px] border-transparent hover:border-gray-400"
    }`;
  return (
    <header
      className="
    top-[4vh] left-[3vw] right-[0] relative
    flex items-center justify-between"
    >
      {/* Container pentru logo + linie */}
      <div className="flex items-center gap-[48px]">
        <img
          src={logo}
          alt="Logo"
          className="w-[48px] h-[48px] opacity-100 z-50"
        />

        {/* Linia: 64px distanță de logo */}
        <hr
          className="
      w-[36vw] border-t border-white opacity-25
      z-10
    "
        />
      </div>

      {/* Navbar */}
      <nav
        className="
      w-[57.6vw] h-[10.6vh]
      bg-white/5 backdrop-blur-[80px]
      flex items-center justify-start gap-[64px]
      mr-auto pl-[15vh]"
      >
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
      </nav>
    </header>
  );
};

export default Navbar;
