import React, { useState } from "react";
import data from "../../data.json";
import Navbar from "../Components/Navbar";
import bgDestination from "../assets/destination/background-destination-desktop.jpg";

const Destination: React.FC = () => {
  const destinations = data.destinations;
  const [selected, setSelected] = useState(destinations[0]);

  return (
    <section
      className="h-screen w-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bgDestination})` }}
    >
      <Navbar />

      <div className="flex justify-between items-center px-[165px] mt-[120px]">
        {/* Left: Image */}
        <div className="flex flex-col items-center w-1/2">
          <h2 className="font-barlowCondensed text-[28px] tracking-[4.72px] text-[#D0D6F9] uppercase mb-[64px]">
            <span className="opacity-25 mr-[18px]">01</span> Pick your
            destination
          </h2>
          <img
            src={selected.images.png}
            alt={selected.name}
            className="w-[445px] h-[445px] object-contain"
          />
        </div>

        {/* Right: Info */}
        <div className="flex flex-col w-[445px] space-y-[20px]">
          {/* Tabs */}
          <div className="flex gap-[24px] uppercase text-[16px] tracking-[2.7px] font-barlowCondensed">
            {destinations.map((dest) => (
              <button
                key={dest.name}
                onClick={() => setSelected(dest)}
                className={`pb-[8px] border-b-[3px] transition ${
                  selected.name === dest.name
                    ? "border-white text-white"
                    : "border-transparent text-[#D0D6F9] hover:border-gray-500"
                }`}
              >
                {dest.name}
              </button>
            ))}
          </div>

          <h1 className="font-bellefair text-[100px]">{selected.name}</h1>
          <p className="font-barlow text-[18px] leading-[32px] text-[#D0D6F9]">
            {selected.description}
          </p>

          <hr className="opacity-25 my-[32px]" />

          <div className="flex justify-between">
            <div>
              <p className="text-[#D0D6F9] uppercase text-[14px] tracking-[2.36px]">
                Avg. Distance
              </p>
              <p className="font-bellefair text-[28px]">{selected.distance}</p>
            </div>
            <div>
              <p className="text-[#D0D6F9] uppercase text-[14px] tracking-[2.36px]">
                Est. Travel Time
              </p>
              <p className="font-bellefair text-[28px]">{selected.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
