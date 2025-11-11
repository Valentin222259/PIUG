import React, { useState } from "react";
import data from "../../data.json";
import Navbar from "../Components/Navbar";
import bgTech from "../assets/technology/background-technology-desktop.jpg";

// Import imagini pentru tehnologie
import launchVehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsule from "../assets/technology/image-space-capsule-portrait.jpg";

const Technology: React.FC = () => {
  const techItems = [
    { ...data.technology[0], image: launchVehicle },
    { ...data.technology[1], image: spaceport },
    { ...data.technology[2], image: spaceCapsule },
  ];

  const [selected, setSelected] = useState(techItems[0]);

  return (
    <section
      className="relative h-screen w-screen bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgTech})` }}
    >
      <Navbar />

      {/* Titlu sus */}
      <div className="flex items-center gap-[1.5vw] mt-[14vh] ml-[10vw]">
        <span className="opacity-25 font-['Barlow_Condensed'] text-[1.4vw] font-bold tracking-[0.25vw]">
          03
        </span>
        <h2 className="font-['Barlow_Condensed'] text-[1.4vw] uppercase tracking-[0.25vw]">
          Space launch 101
        </h2>
      </div>
      <div className="flex justify-between items-center w-[80vw] ml-[10vw] mt-[10vh]">
        {/* Stânga - butoane + text */}
        <div className="flex gap-[4vw] items-center">
          {/* Butoanele circulare */}
          <div className="flex flex-col gap-[2vh]">
            {techItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item)}
                className={`w-[4vw] h-[4vw] rounded-full border border-white flex items-center justify-center text-[1.5vw] font-['Bellefair'] transition-all duration-300 ${
                  selected.name === item.name
                    ? "bg-white text-black"
                    : "bg-transparent text-white hover:bg-white/20"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Text */}
          <div className="flex flex-col gap-[2vh] max-w-[32vw]">
            <p className="font-['Barlow_Condensed'] text-[1vw] uppercase tracking-[0.3vw] text-[#D0D6F9]">
              The terminology...
            </p>
            <h1 className="font-['Bellefair'] text-[3vw] uppercase leading-[100%]">
              {selected.name}
            </h1>
            <p className="font-['Barlow'] text-[1.25vw] leading-[180%] text-[#D0D6F9]">
              {selected.description}
            </p>
          </div>
        </div>

        {/* Dreapta — imagine */}
        <img
          src={selected.image}
          alt={selected.name}
          className="w-[32vw] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Technology;
