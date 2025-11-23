import React, { useState, useEffect } from "react";
import data from "../../data.json";
import Navbar from "../Components/Navbar";

// Import fundaluri
import bgDesktop from "../assets/crew/background-crew-desktop.jpg";
import bgTablet from "../assets/crew/background-crew-tablet.jpg";
import bgMobile from "../assets/crew/background-crew-mobile.jpg";

// Import imagini
import douglasImg from "../assets/crew/image-douglas-hurley.png";
import markImg from "../assets/crew/image-mark-shuttleworth.png";
import victorImg from "../assets/crew/image-victor-glover.png";
import anoushehImg from "../assets/crew/image-anousheh-ansari.png";

const Crew: React.FC = () => {
  const crewMembers = [
    { ...data.crew[0], image: douglasImg },
    { ...data.crew[1], image: markImg },
    { ...data.crew[2], image: victorImg },
    { ...data.crew[3], image: anoushehImg },
  ];

  const [selected, setSelected] = useState(crewMembers[0]);
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
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-white overflow-x-hidden relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />

      {/* WRAPPER FLEX PENTRU MOBIL / BLOCK PENTRU DESKTOP */}
      <div className="flex flex-col items-center w-full md:block">
        {/* 1. TITLU (Order 1 pe Mobil) */}
        <div
          className="
          /* Mobil: Centrat, margine sus 112px */
          order-1 mt-[112px] flex items-center justify-center gap-4
          
          /* Desktop: Clasele tale originale */
          md:order-none md:mt-[14.63vh] md:ml-[9.67vw] md:justify-start md:gap-[1.8vw] md:w-[30.9vw] md:h-[3.15vh]
        "
        >
          <span
            className="
            font-['Barlow_Condensed'] font-bold text-white opacity-25
            /* Mobil */
            text-[16px] tracking-[2.7px]
            /* Desktop */
            md:text-[1.46vw] md:leading-[100%] md:tracking-[0.25vw]
          "
          >
            02
          </span>
          <h2
            className="
            font-['Barlow_Condensed'] font-normal text-white uppercase
            /* Mobil */
            text-[16px] tracking-[2.7px]
            /* Desktop */
            md:text-[1.46vw] md:leading-[100%] md:tracking-[0.25vw]
          "
          >
            Meet your crew
          </h2>
        </div>

        {/* 2. IMAGINE + LINIE (Order 2 pe Mobil) */}
        <div
          className="
           /* Mobil: Flex column pentru a pune linia sub imagine */
           order-2 w-[327px] flex flex-col items-center mt-8
           /* Desktop: Reset */
           md:order-none md:w-auto md:mt-0 md:block
        "
        >
          <img
            src={selected.image}
            alt={selected.name}
            className="
              /* Mobil: Inaltime fixa, object contain */
              h-[222px] object-contain
              
              /* Desktop: Pozitionare absoluta (Originalul tau) */
              md:absolute md:w-[39.5vw] md:h-[79.1vh] md:top-[20vh] md:left-[56vw]
            "
          />
          {/* Linie Separatoare (Doar pe Mobil) */}
          <div className="w-full h-[1px] bg-[#383B4B] md:hidden"></div>
        </div>

        {/* 3. BULINE / DOTS (Order 3 pe Mobil) */}
        <div
          className="
          /* Mobil: Flex row, gap 4 */
          order-3 flex gap-4 mt-8
          
          /* Desktop: Pozitionare absoluta (Originalul tau) */
          md:order-none md:absolute md:left-[9.7vw] md:bottom-[9vh] md:gap-[1vw] md:mt-0
        "
        >
          {crewMembers.map((member, index) => (
            <button
              key={index}
              onClick={() => setSelected(member)}
              className={`
                rounded-full transition-all duration-300
                /* Mobil */
                w-[10px] h-[10px]
                /* Desktop */
                md:w-[1vw] md:h-[1vw]
                ${
                  selected.name === member.name
                    ? "bg-white"
                    : "bg-[#979797] opacity-30 hover:opacity-70"
                }
              `}
            ></button>
          ))}
        </div>

        {/* 4. TEXT INFO (Order 4 pe Mobil) */}
        <div
          className="
          /* Mobil: Centrat */
          order-4 flex flex-col items-center text-center px-6 mt-8 pb-12
          
          /* Desktop: Structura ta originala (flex-row wrapper, margins) */
          md:order-none md:flex md:justify-between md:items-start md:text-left md:w-[80vw] md:ml-[12vw] md:mt-[14.26vh] md:px-0 md:pb-0
        "
        >
          <div
            className="
            /* Mobil: Flex col */
            flex flex-col items-center
            
            /* Desktop: Clasele tale originale pentru containerul textului */
            md:w-[30vw] md:items-start md:-translate-x-[2.5vw] md:-translate-y-[5vh]
          "
          >
            {/* Role + Name */}
            <div
              className="
              flex flex-col gap-2
              md:gap-[4vh]
            "
            >
              <h3
                className="
                font-['Bellefair'] font-normal text-white uppercase opacity-50
                /* Mobil */
                text-[16px]
                /* Desktop */
                md:text-[2.22vw] md:leading-[100%]
              "
              >
                {selected.role}
              </h3>
              <h1
                className="
                font-['Bellefair'] font-normal text-white uppercase text-nowrap
                /* Mobil */
                text-[24px]
                /* Desktop */
                md:text-[3.9vw] md:leading-[100%]
              "
              >
                {selected.name}
              </h1>
            </div>

            {/* Bio */}
            <p
              className="
              font-['Barlow'] font-normal text-[#D0D6F9]
              /* Mobil */
              text-[15px] leading-[25px] mt-4
              /* Desktop */
              md:mt-[5vh] md:text-[1.25vw] md:leading-[177%] md:w-[30.8vw]
            "
            >
              {selected.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;
