import React, { useState } from "react";
import data from "../../data.json";
import Navbar from "../Components/Navbar";
import bgCrew from "../assets/crew/background-crew-desktop.jpg";

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

  return (
    <section
      className="h-screen w-screen bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgCrew})` }}
    >
      <Navbar />

      {/* Titlu principal */}
      <div
        className="
           w-[30.9vw] h-[3.15vh] mt-[14.63vh] ml-[9.67vw] flex items-center gap-[1.8vw]"
      >
        <span className="opacity-25 font-['Barlow_Condensed'] font-bold text-[1.46vw] leading-[100%] tracking-[0.25vw] text-white">
          02
        </span>

        <h2 className="font-['Barlow_Condensed'] font-normal text-[1.46vw] leading-[100%] tracking-[0.25vw] uppercase text-white">
          Meet your crew
        </h2>
      </div>

      {/* Conținut principal */}
      <div className="flex justify-between items-start w-[80vw] ml-[12vw] mt-[14.26vh]">
        {/* Stânga — text */}
        <div className="w-[30vw] flex flex-col -translate-x-[2.5vw] -translate-y-[5vh] text-white">
          {/* Role + Name */}
          <div className="flex flex-col gap-[3vh]">
            <h3 className="opacity-50 font-['Bellefair'] font-normal text-[2.22vw] leading-[100%] uppercase">
              {selected.role}
            </h3>
            <h1 className="font-['Bellefair'] font-normal text-[3.9vw] leading-[100%] uppercase text-nowrap">
              {selected.name}
            </h1>
          </div>

          {/* Bio */}
          <p className="mt-[3vh] font-['Barlow'] font-normal text-[1.25vw] leading-[177%] w-[30.8vw]">
            {selected.bio}
          </p>
          <div className="flex gap-[1vw] mt-[4vh]">
            {crewMembers.map((member, index) => (
              <button
                key={index}
                onClick={() => setSelected(member)}
                className={`w-[1vw] h-[1vw] rounded-full transition-all duration-300 ${
                  selected.name === member.name
                    ? "bg-white"
                    : "bg-[#979797] opacity-30 hover:opacity-70"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Dreapta — imagine membru echipaj */}
        <div className="flex justify-end w-[40%]">
          <img
            src={selected.image}
            alt={selected.name}
            className="w-[28vw] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Crew;
