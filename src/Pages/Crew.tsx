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
      <div className="w-[30vw] h-[3.15vh] mt-[14vh] ml-[9vw] flex items-center gap-[1.8vw]">
        <span className="opacity-25 font-['Barlow_Condensed'] font-bold text-[1.46vw] leading-[100%] tracking-[0.25vw]">
          02
        </span>
        <h2 className="font-['Barlow_Condensed'] font-normal text-[1.46vw] leading-[100%] tracking-[0.25vw] uppercase">
          Meet your crew
        </h2>
      </div>

      {/* Conținut principal */}
      <div className="flex justify-between items-end w-[80vw] mx-auto mt-[10vh]">
        {/* Stânga — text */}
        <div className="flex flex-col justify-between gap-[2vh] w-[40%] translate-y-[-4vh]">
          <div>
            <h3 className="font-['Bellefair'] text-[1.5vw] text-[#8e8f95] uppercase mb-[1vh]">
              {selected.role}
            </h3>
            <h1 className="font-['Bellefair'] text-[3.5vw] uppercase leading-[120%]">
              {selected.name}
            </h1>
          </div>

          <p className="font-['Barlow'] text-[1vw] leading-[180%] text-[#D0D6F9] w-[80%]">
            {selected.bio}
          </p>

          {/* Butoane pentru crew */}
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
