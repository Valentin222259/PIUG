import React, { useState, useEffect } from "react";
import data from "../../data.json";
import Navbar from "../Components/Navbar";

// Backgrounds
import bgDesktop from "../assets/technology/background-technology-desktop.jpg";
import bgTablet from "../assets/technology/background-technology-tablet.jpg";
import bgMobile from "../assets/technology/background-technology-mobile.jpg";

// Import imagini Portrait (Desktop)
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";

// Import imagini Landscape (Mobile/Tablet)
import launchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";

const Technology: React.FC = () => {
  // Mapăm imaginile corecte
  const techItems = [
    {
      ...data.technology[0],
      images: {
        portrait: launchVehiclePortrait,
        landscape: launchVehicleLandscape,
      },
    },
    {
      ...data.technology[1],
      images: { portrait: spaceportPortrait, landscape: spaceportLandscape },
    },
    {
      ...data.technology[2],
      images: {
        portrait: spaceCapsulePortrait,
        landscape: spaceCapsuleLandscape,
      },
    },
  ];

  const [selected, setSelected] = useState(techItems[0]);
  const [bgImage, setBgImage] = useState(bgDesktop);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // Logică schimbare background & detectare desktop
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 1024);

      if (width < 768) {
        setBgImage(bgMobile);
      } else if (width < 1024) {
        setBgImage(bgTablet);
      } else {
        setBgImage(bgDesktop);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-white overflow-x-hidden relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />

      {/* WRAPPER PRINCIPAL */}
      <div className="flex flex-col w-full md:block">
        {/* 1. TITLU PAGINA (Order 1 Mobil) */}
        <div
          className="
          /* MOBIL: Centrat, margine sus */
          order-1 flex items-center justify-center gap-4 mt-[112px] mb-8
          
          /* DESKTOP: Absolut/Flex conform codului tau */
          md:order-none md:mt-[14vh] md:ml-[10vw] md:justify-start md:gap-[1.5vw] md:mb-0
        "
        >
          <span
            className="
            opacity-25 font-['Barlow_Condensed'] font-bold 
            text-[16px] tracking-[2.7px]
            md:text-[1.4vw] md:tracking-[0.25vw]
          "
          >
            03
          </span>
          <h2
            className="
            font-['Barlow_Condensed'] uppercase
            text-[16px] tracking-[2.7px]
            md:text-[1.4vw] md:tracking-[0.25vw]
          "
          >
            Space launch 101
          </h2>
        </div>

        {/* 2. IMAGINE (Order 2 Mobil: Landscape / Desktop: Portrait Absolut) */}
        <div
          className="
          order-2 w-full
          md:order-none md:absolute md:w-[35.82vw] md:h-[65.8vh] md:right-0 md:top-[26.18vh]
        "
        >
          <img
            src={
              isDesktop ? selected.images.portrait : selected.images.landscape
            }
            alt={selected.name}
            className="w-full object-cover md:h-full"
          />
        </div>

        {/* 3. BUTOANE NUMEROTATE (Order 3 Mobil) */}
        <div
          className="
          /* MOBIL: Flex row, centrat, margine sus */
          order-3 flex gap-4 justify-center mt-8
          
          /* DESKTOP: Flex col, pozitionare absoluta */
          md:order-none md:absolute md:left-[9vw] md:top-[40.5vh] md:flex-col md:gap-[4.5vh] md:mt-0
        "
        >
          {techItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(item)}
              className={`
                rounded-full border border-white flex items-center justify-center font-['Bellefair'] transition-all duration-300
                /* Mobil */
                w-[40px] h-[40px] text-[16px]
                /* Desktop */
                md:w-[5vw] md:h-[5vw] md:text-[1.5vw]
                ${
                  selected.name === item.name
                    ? "bg-white text-black"
                    : "bg-transparent text-white hover:bg-white/20"
                }
              `}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* 4. TEXT EXPLICATIV (Order 4 Mobil) */}
        <div
          className="
          /* MOBIL: Centrat, text center, padding */
          order-4 flex flex-col items-center text-center px-6 mt-8 pb-12
          
          /* DESKTOP: Flex row wrapper original */
          md:order-none md:flex md:justify-between md:items-start md:w-[80vw] md:ml-[10vw] md:mt-[10vh] md:px-0 md:pb-0
        "
        >
          <div
            className="
            /* Mobil */
            flex flex-col items-center gap-4
            /* Desktop: Clasele tale pt container text */
            md:flex-col md:items-start md:text-left md:gap-[2vh] md:max-w-[32vw] md:ml-[7.8vw]
          "
          >
            <p
              className="
              font-['Barlow_Condensed'] uppercase text-[#D0D6F9]
              /* Mobil */
              text-[14px] tracking-[2.36px]
              /* Desktop */
              md:text-[1vw] md:tracking-[0.3vw]
            "
            >
              The terminology...
            </p>
            <h1
              className="
              font-['Bellefair'] uppercase
              /* Mobil */
              text-[24px]
              /* Desktop */
              md:text-[3vw] md:leading-[100%]
            "
            >
              {selected.name}
            </h1>
            <p
              className="
              font-['Barlow'] text-[#D0D6F9]
              /* Mobil */
              text-[15px] leading-[25px]
              /* Desktop */
              md:text-[1.25vw] md:leading-[180%]
            "
            >
              {selected.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
