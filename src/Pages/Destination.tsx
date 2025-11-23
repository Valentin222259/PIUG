import React, { useState } from "react";
import data from "../../data.json";
import Navbar from "../Components/Navbar";
import bgDestination from "../assets/destination/background-destination-desktop.jpg";

// Import imagini
import moonImg from "../assets/destination/image-moon.png";
import marsImg from "../assets/destination/image-mars.png";
import europaImg from "../assets/destination/image-europa.png";
import titanImg from "../assets/destination/image-titan.png";

const Destination: React.FC = () => {
  const destinations = [
    { ...data.destinations[0], image: moonImg },
    { ...data.destinations[1], image: marsImg },
    { ...data.destinations[2], image: europaImg },
    { ...data.destinations[3], image: titanImg },
  ];
  const [selected, setSelected] = useState(destinations[0]);

  return (
    <section
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-white overflow-x-hidden relative"
      style={{ backgroundImage: `url(${bgDestination})` }}
    >
      <Navbar />

      {/* Titlu Pagina */}
      <div
        className="
          /* MOBIL: Centrat, margine sus */
          flex items-center justify-center gap-4 mt-[112px]
          
          /* DESKTOP: Stilul original */
          md:w-[30.9vw] md:h-[3.15vh] md:mt-[14.63vh] md:ml-[9.67vw] md:justify-start md:gap-[1.8vw]
        "
      >
        <span
          className="
            opacity-25 font-['Barlow_Condensed'] font-bold 
            text-[16px] tracking-[2.7px]
            md:text-[1.46vw] md:leading-[100%] md:tracking-[0.25vw]
          "
        >
          01
        </span>

        <h2
          className="
            font-['Barlow_Condensed'] font-normal uppercase
            text-[16px] tracking-[2.7px]
            md:text-[1.46vw] md:leading-[100%] md:tracking-[0.25vw]
          "
        >
          Pick your destination
        </h2>
      </div>

      {/* CONTINUT PRINCIPAL */}
      <div
        className="
        /* MOBIL: Flex Column, centrat, gap mare */
        flex flex-col items-center mt-8 pb-12 gap-8 px-6
        
        /* DESKTOP: Flex Row, margini specifice */
        md:flex-row md:items-start md:justify-between md:w-[80vw] md:ml-[12vw] md:mt-[8vh] md:gap-0 md:pb-0
      "
      >
        {/* IMAGINE PLANETA */}
        <img
          src={selected.image}
          alt={selected.name}
          className="
            /* MOBIL: 170px */
            w-[170px] h-[170px] object-contain
            
            /* DESKTOP: 26vw */
            md:w-[26vw] md:h-[26vw]
          "
        />

        {/* ZONA TEXT & TABS */}
        <div
          className="
          /* MOBIL: Flex Column, centrat, latime max 327px */
          flex flex-col items-center text-center w-full max-w-[327px]
          
          /* DESKTOP: Latime 30vw, translatari specifice, aliniere stanga */
          md:w-[30vw] md:h-auto md:items-start md:text-left md:justify-between 
          md:-translate-x-[4vw] md:-translate-y-[5vh] md:gap-[1.5vw] md:max-w-none
        "
        >
          {/* TABS (Moon, Mars...) */}
          <div
            className="
            flex gap-6 mb-6
            md:gap-[2vw] md:mb-[2vh]
          "
          >
            {destinations.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item)}
                className={`
                  font-['Barlow_Condensed'] uppercase transition-all duration-300 border-b-[3px] pb-2
                  /* Mobil */
                  text-[14px] tracking-[2.36px]
                  /* Desktop */
                  md:text-[1vw] md:tracking-[0.2vw] md:pb-[0.5vh]
                  ${
                    selected.name === item.name
                      ? "border-white text-white"
                      : "border-transparent text-[#D0D6F9] hover:border-gray-500 hover:text-white"
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* TITLU PLANETA (MOON) */}
          <h1
            className="
            font-['Bellefair'] uppercase
            /* Mobil */
            text-[56px] leading-none mb-4
            /* Desktop */
            md:text-[6vw] md:leading-[100%] md:mb-0
          "
          >
            {selected.name}
          </h1>

          {/* DESCRIERE */}
          <p
            className="
            font-['Barlow'] text-[#D0D6F9]
            /* Mobil */
            text-[15px] leading-[25px] mb-8
            /* Desktop */
            md:text-[1vw] md:leading-[180%] md:w-[90%] md:mb-0
          "
          >
            {selected.description}
          </p>

          {/* LINIE DESPARTITOARE */}
          <hr className="border-[#383B4B] w-full mb-8 md:my-[2vh]" />

          {/* STATISTICI */}
          <div
            className="
            flex flex-col gap-8 w-full
            md:flex-row md:justify-between md:gap-0 md:w-[90%]
          "
          >
            <div className="flex flex-col gap-3 md:gap-0">
              <p
                className="
                font-['Barlow_Condensed'] uppercase text-[#D0D6F9]
                /* Mobil */
                text-[14px] tracking-[2.36px]
                /* Desktop */
                md:text-[0.9vw] md:tracking-[0.17vw]
              "
              >
                Avg. distance
              </p>
              <p
                className="
                font-['Bellefair'] uppercase
                /* Mobil */
                text-[28px]
                /* Desktop */
                md:text-[1.7vw]
              "
              >
                {selected.distance}
              </p>
            </div>

            <div className="flex flex-col gap-3 md:gap-0">
              <p
                className="
                font-['Barlow_Condensed'] uppercase text-[#D0D6F9]
                /* Mobil */
                text-[14px] tracking-[2.36px]
                /* Desktop */
                md:text-[0.9vw] md:tracking-[0.17vw]
              "
              >
                Est. travel time
              </p>
              <p
                className="
                font-['Bellefair'] uppercase
                /* Mobil */
                text-[28px]
                /* Desktop */
                md:text-[1.7vw]
              "
              >
                {selected.travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
