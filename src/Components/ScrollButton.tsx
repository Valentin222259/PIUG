import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollButton: React.FC = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 200); // dacă ești sus, arată DOWN
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <button
      onClick={isTop ? scrollToBottom : scrollToTop}
      className="
        fixed bottom-27 right-8.5
        w-[50px] h-[50px]
        bg-white/20 backdrop-blur-xl
        hover:bg-white/30
        text-white
        rounded-full shadow-lg
        flex items-center justify-center
        transition-all duration-300
        z-[9999]
      "
    >
      {isTop ? <FaArrowDown size={20} /> : <FaArrowUp size={20} />}
    </button>
  );
};

export default ScrollButton;
