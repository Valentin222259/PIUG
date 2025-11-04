import React from "react";
import bgHome from "../assets/home/background-home-desktop.jpg";

const Home: React.FC = () => {
  return (
    <div
      className="
        h-screen w-screen
        bg-cover bg-center bg-no-repeat
        text-white flex items-center justify-center
      "
      style={{ backgroundImage: `url(${bgHome})` }}
    ></div>
  );
};

export default Home;
