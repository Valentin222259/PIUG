import React from "react";
import bgHome from "../assets/home/background-home-desktop.jpg";
import Navbar from "../Components/Navbar";

const Home: React.FC = () => {
  return (
    <section
      className="
        relative
        h-screen w-screen
        bg-cover bg-center bg-no-repeat
        text-white
      "
      style={{ backgroundImage: `url(${bgHome})` }}
    >
      {/* Navbar peste imagine */}
      <Navbar />
    </section>
  );
};

export default Home;
