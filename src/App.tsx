import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import Contact from "./Pages/Contact";
import Video from "./Pages/Video";
import Footer from "./Components/Footer";
import HelpButton from "./Components/HelpButton";
import ScrollButton from "./Components/ScrollButton";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#0B0D17] text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/video" element={<Video />} />
      </Routes>
      <Footer />
      <HelpButton />
      <ScrollButton />
    </div>
  );
};

export default App;
