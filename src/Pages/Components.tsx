import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const Components: React.FC = () => {
  return (
    <section className="min-h-screen w-full bg-[#0B0D17] text-white overflow-x-hidden">
      <Navbar />

      <div className="container mx-auto px-6 py-12 mt-24 md:mt-32">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bellefair uppercase tracking-widest">
            Inventar Componente
          </h1>
          <Link
            to="/"
            className="mt-4 md:mt-0 px-6 py-2 border border-white/50 rounded hover:bg-white hover:text-black transition-all font-barlowCondensed tracking-widest uppercase"
          >
            Înapoi Acasă
          </Link>
        </div>

        <div className="overflow-x-auto bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-1">
          <table className="min-w-full text-left text-sm md:text-base">
            <thead className="bg-white/10 uppercase font-barlowCondensed tracking-widest text-white/80 border-b border-white/10">
              <tr>
                <th className="px-6 py-4 font-medium">Denumire</th>
                <th className="px-6 py-4 font-medium">Tip</th>
                <th className="px-6 py-4 font-medium">Descriere</th>
                <th className="px-6 py-4 font-medium text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 font-barlow text-white/70">
              {/* PAGINI */}
              <tr className="bg-white/5">
                <td
                  colSpan={4}
                  className="px-6 py-2 text-xs uppercase tracking-widest text-white/40 font-bold"
                >
                  Pagini Principale
                </td>
              </tr>

              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-white">Home</td>
                <td className="px-6 py-4 text-purple-300">Pagină</td>
                <td className="px-6 py-4">
                  Pagina de start (Hero section) cu design adaptiv
                  Mobile/Desktop.
                </td>
                <td className="px-6 py-4 text-center text-green-400">
                  ✔️ Finalizat
                </td>
              </tr>

              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-white">
                  Destination
                </td>
                <td className="px-6 py-4 text-purple-300">Pagină</td>
                <td className="px-6 py-4">
                  Selector interactiv pentru planete (Lună, Marte, Europa,
                  Titan).
                </td>
                <td className="px-6 py-4 text-center text-green-400">
                  ✔️ Finalizat
                </td>
              </tr>

              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-white">Crew</td>
                <td className="px-6 py-4 text-purple-300">Pagină</td>
                <td className="px-6 py-4">
                  Prezentarea echipajului cu navigare tip "dots" și layout
                  adaptiv.
                </td>
                <td className="px-6 py-4 text-center text-green-400">
                  ✔️ Finalizat
                </td>
              </tr>

              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-white">Technology</td>
                <td className="px-6 py-4 text-purple-300">Pagină</td>
                <td className="px-6 py-4">
                  Prezentare vehicule spațiale (imagini Portrait pe Desktop /
                  Landscape pe Mobil).
                </td>
                <td className="px-6 py-4 text-center text-green-400">
                  ✔️ Finalizat
                </td>
              </tr>

              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-white">Contact</td>
                <td className="px-6 py-4 text-purple-300">Pagină</td>
                <td className="px-6 py-4">
                  Formular funcțional cu validare pentru nume, email și telefon.
                </td>
                <td className="px-6 py-4 text-center text-green-400">
                  ✔️ Finalizat
                </td>
              </tr>

              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-white">Video</td>
                <td className="px-6 py-4 text-purple-300">Pagină</td>
                <td className="px-6 py-4">
                  Pagină dedicată pentru redarea conținutului video (YouTube
                  embed).
                </td>
                <td className="px-6 py-4 text-center text-green-400">
                  ✔️ Finalizat
                </td>
              </tr>

              {/* COMPONENTE UI */}
              <tr className="bg-white/5">
                <td
                  colSpan={4}
                  className="px-6 py-2 text-xs uppercase tracking-widest text-white/40 font-bold"
                >
                  Componente UI & Navigație
                </td>
              </tr>

              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-white">Navbar</td>
                <td className="px-6 py-4 text-blue-300">Componentă</td>
                <td className="px-6 py-4">
                  Meniu principal. Include logo, link-uri și burger menu pe
                  mobil.
                </td>
                <td className="px-6 py-4 text-center text-green-400">
                  ✔️ Finalizat
                </td>
              </tr>

              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-white">Footer</td>
                <td className="px-6 py-4 text-blue-300">Componentă</td>
                <td className="px-6 py-4">
                  Subsol cu link-uri sociale (SVG) și copyright.
                </td>
                <td className="px-6 py-4 text-center text-green-400">
                  ✔️ Finalizat
                </td>
              </tr>

              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-white">
                  ScrollButton
                </td>
                <td className="px-6 py-4 text-blue-300">Componentă</td>
                <td className="px-6 py-4">
                  Buton plutitor care duce utilizatorul sus sau jos în pagină.
                </td>
                <td className="px-6 py-4 text-center text-green-400">
                  ✔️ Finalizat
                </td>
              </tr>

              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-white">HelpButton</td>
                <td className="px-6 py-4 text-blue-300">Componentă</td>
                <td className="px-6 py-4">
                  Buton "Ajutor" care deschide un modal cu instrucțiuni.
                </td>
                <td className="px-6 py-4 text-center text-green-400">
                  ✔️ Finalizat
                </td>
              </tr>

              {/* FUNCȚIONALITĂȚI */}
              <tr className="bg-white/5">
                <td
                  colSpan={4}
                  className="px-6 py-2 text-xs uppercase tracking-widest text-white/40 font-bold"
                >
                  Funcționalități & Logică
                </td>
              </tr>

              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-white">
                  Search System
                </td>
                <td className="px-6 py-4 text-yellow-300">Funcționalitate</td>
                <td className="px-6 py-4">
                  Sistem de căutare globală cu autocompletare și navigare.
                </td>
                <td className="px-6 py-4 text-center text-green-400">
                  ✔️ Finalizat
                </td>
              </tr>

              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-white">
                  Theme Context
                </td>
                <td className="px-6 py-4 text-yellow-300">Context API</td>
                <td className="px-6 py-4">
                  Sistem de temă Dark/Light disponibil în toată aplicația.
                </td>
                <td className="px-6 py-4 text-center text-green-400">
                  ✔️ Finalizat
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-white">
                  Responsive Logic
                </td>
                <td className="px-6 py-4 text-yellow-300">Hook-uri</td>
                <td className="px-6 py-4">
                  Logică custom pentru schimbarea imaginilor de fundal la
                  resize.
                </td>
                <td className="px-6 py-4 text-center text-green-400">
                  ✔️ Finalizat
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center md:text-left text-white/50 font-barlow text-sm">
          * Această pagină oferă o privire de ansamblu asupra structurii
          proiectului.
        </div>
      </div>
    </section>
  );
};

export default Components;
