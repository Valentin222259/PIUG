import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
      w-full py-8 
      bg-white/5 backdrop-blur-xl 
      text-white 
      border-t border-white/10
      mt-20
    "
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6 px-4">
        {/* Text */}
        <p className="tracking-[3px] uppercase text-[14px] opacity-80">
          Follow us on social media
        </p>

        {/* Icons */}
        <div className="flex gap-8 text-[22px]">
          <a href="#" className="hover:text-white/60 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white/60 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white/60 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white/60 transition">
            <FaYoutube />
          </a>
        </div>

        {/* Linie */}
        <div className="w-full h-[1px] bg-white/10"></div>

        {/* Subtext */}
        <p className="text-[12px] opacity-60 tracking-wide">
          © 2025 Exploration Space. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
