import React from "react";
import Navbar from "../Components/Navbar";

const VideoPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white">
      <Navbar />

      <h1 className="text-center pt-[15vh] text-[3vw] font-['Bellefair'] uppercase tracking-[0.2vw]">
        Space Launch Video
      </h1>

      <div className="flex justify-center mt-[5vh] pb-[10vh]">
        <iframe
          width="960"
          height="540"
          src="https://www.youtube.com/embed/0qo78R_yYFA"
          title="Rocket Launch"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl shadow-xl"
        ></iframe>
      </div>
    </section>
  );
};

export default VideoPage;
