import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";

const HelpButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Buton plutitor */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-8 right-8
          w-14 h-14 rounded-full
          bg-white text-black
          flex items-center justify-center
          shadow-xl
          hover:scale-110 transition
          z-50
        "
      >
        <FaQuestion size={24} />
      </button>

      {/* MODAL HELP */}
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white text-black w-[400px] p-6 rounded-xl shadow-2xl relative">
            <h2 className="text-2xl font-bold mb-4">Help Center</h2>

            <p className="text-gray-800 leading-6 mb-4">
              Bun venit! Aici găsești informații utile despre navigarea pe site:
            </p>

            <ul className="text-gray-700 list-disc ml-5 mb-4 space-y-2">
              <li>Folosește meniul de sus pentru a naviga între pagini.</li>
              <li>
                Folosește Search pentru a găsi planete, echipaj sau tehnologii.
              </li>
              <li>Accesează Contact pentru a ne trimite un mesaj.</li>
              <li>
                Pagina Video conține conținut media despre zboruri spațiale.
              </li>
            </ul>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition w-full"
            >
              Închide
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpButton;
