import React, { useState } from "react";
import data from "../../data.json";
import Navbar from "../Components/Navbar";
import bgDestination from "../assets/destination/background-destination-desktop.jpg";
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
      className="h-screen w-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bgDestination})` }}
    >
      <Navbar />
      <div
        className="
           w-[30.9vw] h-[3.15vh]
          mt-[14.63vh] ml-[9.67vw]
          flex items-center gap-[1.8vw]
        "
      >
        <span
          className="
            opacity-25 font-['Barlow_Condensed'] font-bold text-[1.46vw] leading-[100%] tracking-[0.25vw] text-white"
        >
          01
        </span>

        <h2
          className="font-['Barlow_Condensed'] font-normal
      text-[1.46vw] leading-[100%] tracking-[0.25vw]
      uppercase text-white"
        >
          Pick your destination
        </h2>
      </div>

      <div className="flex justify-between items-start w-[80vw] ml-[12vw] mt-[8vh]">
        <img
          src={selected.image}
          alt={selected.name}
          className="w-[26vw] h-[26vw] object-contain"
        />

        <div className="w-[30vw] h-auto flex flex-col justify-between -translate-x-[4vw] -translate-y-[5vh] gap-[1.5vw]">
          {/* Tabs */}
          <div className="flex gap-[2vw] mb-[2vh]">
            {destinations.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item)}
                className={`font-['Barlow_Condensed'] text-[1vw] uppercase tracking-[0.2vw]
              pb-[0.5vh] border-b-[3px] transition-all duration-300
              ${
                selected.name === item.name
                  ? "border-white text-white"
                  : "border-transparent text-[#D0D6F9] hover:border-gray-500 hover:text-white"
              }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <h1 className="font-['Bellefair'] text-[6vw] leading-[100%] uppercase">
            {selected.name}
          </h1>

          <p className="font-['Barlow'] text-[1vw] leading-[180%] text-[#D0D6F9] w-[90%]">
            {selected.description}
          </p>

          <hr className="border-[#383B4B] w-full my-[2vh]" />

          <div className="flex justify-between w-[90%]">
            <div>
              <p className="font-['Barlow_Condensed'] text-[0.9vw] tracking-[0.17vw] text-[#D0D6F9] uppercase">
                Avg. distance
              </p>
              <p className="font-['Bellefair'] text-[1.7vw] uppercase">
                {selected.distance}
              </p>
            </div>
            <div>
              <p className="font-['Barlow_Condensed'] text-[0.9vw] tracking-[0.17vw] text-[#D0D6F9] uppercase">
                Est. travel time
              </p>
              <p className="font-['Bellefair'] text-[1.7vw] uppercase">
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
