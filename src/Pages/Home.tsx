import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

// Importăm imaginile
import bgDesktop from "../assets/home/background-home-desktop.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgMobile from "../assets/home/background-home-mobile.jpg";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [bgImage, setBgImage] = useState(bgDesktop);

  // Logică schimbare background
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
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
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-x-hidden relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />

      {/* CONTAINER PRINCIPAL */}
      <div
        className="
        /* MOBIL: Flex Column centrat, spatiere egala (gap-10), margine sus */
        flex flex-col items-center px-6 mt-32 gap-20
        
        /* DESKTOP: Layout-ul tau original (fara flex-col, folosim clasele tale) */
        md:flex-row md:justify-between md:items-end md:mt-[251px] md:px-[165px] md:gap-0
      "
      >
        {/* TEXT BLOCK */}
        <div
          className="
          /* MOBIL: Centrat, latime max */
          flex flex-col items-center text-center w-full max-w-[450px] translate-y-0 gap-6
          
          /* DESKTOP: Clasele tale originale */
          md:gap-0 md:items-start md:text-left md:w-[31vw] md:h-[42vh] md:space-y-[24px] md:translate-y-[-50px] md:max-w-none
        "
        >
          <p
            className="
            font-barlowCondensed font-normal text-[#D0D6F9]
            /* MOBIL: Putin mai mare */
            text-[20px] tracking-[3px]
            /* DESKTOP */
            md:w-full md:h-[34px] md:text-[28px] md:leading-[100%] md:tracking-[2.7px]
          "
          >
            SO, YOU WANT TO TRAVEL TO
          </p>

          <h1
            className="
            font-bellefair font-normal text-white
            /* MOBIL: MARE (100px) */
            text-[100px] leading-[100px]
            /* DESKTOP */
            md:w-full md:h-[172px] md:text-[150px] md:leading-[100%]
          "
          >
            SPACE
          </h1>

          <p
            className="
            font-barlow font-normal text-[#D0D6F9]
            /* MOBIL: Putin mai mare */
            text-[16px] leading-[28px]
            /* DESKTOP */
            md:w-full md:h-[128px] md:text-[18px] md:leading-[32px]
          "
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        {/* BUTON EXPLORE */}
        <div
          className="
          /* MOBIL: Doar un wrapper simplu, fara pozitionare absoluta */
          pb-12
          
          /* DESKTOP: Absolut, exact cum aveai tu */
          md:absolute md:top-[52vh] md:left-[69.5vw] md:pb-0
        "
        >
          <button
            onClick={() => navigate("/destination")}
            className="
              /* COMUN */
              flex items-center justify-center rounded-full bg-white text-black
              transition-all duration-300 hover:shadow-[0_0_0_40px_rgba(255,255,255,0.1)]
              
              /* MOBIL: Buton mai mare (180px) */
              w-[180px] h-[180px]
              
              /* DESKTOP: Dimensiunile originale */
              md:w-[18vw] md:h-[18vw]
              md:text-[1.2vw] md:tracking-[2px] md:overflow-hidden
            "
          >
            <span
              className="
              font-bellefair font-normal text-black
              /* MOBIL: Text mai mare */
              text-[24px] tracking-[1.5px]
              
              /* DESKTOP */
              md:w-[148px] md:h-[37px] md:text-[32px] md:leading-[100%] md:tracking-[2px]
            "
            >
              EXPLORE
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
