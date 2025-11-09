import React from "react";
import bgHome from "../assets/home/background-home-desktop.jpg";
import Navbar from "../Components/Navbar";

const Home: React.FC = () => {
  return (
    <section
      className="
        h-screen w-screen
        bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgHome})` }}
    >
      {/* Navbar peste imagine */}
      <Navbar />
      <div className="flex justify-between items-end mt-[251px] px-[165px]">
        {/* Stânga — text */}
        <div className="flex flex-col w-[31vw] h-[42vh] space-y-[24px] relative translate-y-[-50px]">
          <p
            className="w-full h-[34px] 
         font-barlowCondensed font-normal 
         text-[28px] leading-[100%]
         text-[#D0D6F9]"
          >
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1
            className="w-full h-[172px]
         font-bellefair font-normal
         text-[150px] leading-[100%] 
         text-[#D0D6F9]"
          >
            SPACE
          </h1>
          <p
            className="w-full h-[128px]
         font-barlow font-normal
         text-[18px] leading-[32px]
         text-[#D0D6F9]"
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        {/* Dreapta — cercul Explore */}
        <button
          className="top-[55vh] left-[69.5vw]
    w-[18vw] h-[18vw]
    flex items-center justify-center
    rounded-full
    !bg-white text-black
    text-[1.2vw] tracking-[2px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)]"
        >
          <span
            className="w-[148px] h-[37px]
    font-['Bellefair'] font-normal text-[32px]
    leading-[100%] tracking-[2px]
    !text-black"
          >
            EXPLORE
          </span>
        </button>
      </div>
    </section>
  );
};

export default Home;
