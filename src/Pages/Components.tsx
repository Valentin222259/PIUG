import React from "react";

const Components: React.FC = () => {
  return (
    <div className="text-white p-12">
      <h1 className="text-4xl font-bold mb-8">Tabel de componente</h1>

      <table className="min-w-full text-white border border-white/40 mt-6">
        <thead>
          <tr className="bg-white/10">
            <th className="border px-4 py-2">Componentă</th>
            <th className="border px-4 py-2">Descriere</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Navbar</td>
            <td className="border px-4 py-2">
              Navigație între paginile principale
            </td>
            <td className="border px-4 py-2">✔️ Implementat</td>
          </tr>

          <tr>
            <td className="border px-4 py-2">Search bar</td>
            <td className="border px-4 py-2">
              Căutare internă dinamica în site
            </td>
            <td className="border px-4 py-2">✔️ Implementat</td>
          </tr>

          <tr>
            <td className="border px-4 py-2">Dark/Light Mode</td>
            <td className="border px-4 py-2">Schimbare temă la nivel global</td>
            <td className="border px-4 py-2">✔️ Implementat</td>
          </tr>

          <tr>
            <td className="border px-4 py-2">Help Button</td>
            <td className="border px-4 py-2">
              Buton de ajutor afișabil oriunde
            </td>
            <td className="border px-4 py-2">✔️ Implementat</td>
          </tr>

          <tr>
            <td className="border px-4 py-2">Scroll to Top</td>
            <td className="border px-4 py-2">
              Buton pentru întoarcerea la începutul paginii
            </td>
            <td className="border px-4 py-2">✔️ Implementat</td>
          </tr>

          <tr>
            <td className="border px-4 py-2">Responsive Design</td>
            <td className="border px-4 py-2">
              Site-ul se adaptează pe orice dispozitiv
            </td>
            <td className="border px-4 py-2">✔️ Implementat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Components;
