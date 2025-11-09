import React from "react";
import logo from "../assets/shared/logo.svg";

const Navbar: React.FC = () => {
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
        <a
          href="#"
          className="font-['Barlow_Condensed'] text-[16px] tracking-[2.7px] text-white uppercase flex items-center gap-[8px] border-b-[3px] border-white"
        >
          <span className="font-bold">00</span>
          <span className="font-normal">Home</span>
        </a>
        <a
          href="#"
          className="font-['Barlow_Condensed'] text-[16px] tracking-[2.7px] text-white uppercase flex items-center gap-[8px] opacity-80 hover:opacity-100"
        >
          <span className="font-bold">01</span>
          <span className="font-normal">Destination</span>
        </a>
        <a
          href="#"
          className="font-['Barlow_Condensed'] text-[16px] tracking-[2.7px] text-white uppercase flex items-center gap-[8px] opacity-80 hover:opacity-100"
        >
          <span className="font-bold">02</span>
          <span className="font-normal">Crew</span>
        </a>
        <a
          href="#"
          className="font-['Barlow_Condensed'] text-[16px] tracking-[2.7px] text-white uppercase flex items-center gap-[8px] opacity-80 hover:opacity-100"
        >
          <span className="font-bold">03</span>
          <span className="font-normal">Technology</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
