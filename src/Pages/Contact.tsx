import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/[\s-]/g, ""); // scoate spații și liniuțe
    return /^\+?[0-9]{10,15}$/.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Numele este obligatoriu.";
    if (!email.trim()) newErrors.email = "Emailul este obligatoriu.";
    else if (!validateEmail(email)) newErrors.email = "Email invalid.";

    if (!phone.trim()) newErrors.phone = "Telefonul este obligatoriu.";
    else if (!validatePhone(phone))
      newErrors.phone = "Număr de telefon invalid.";

    if (!message.trim()) newErrors.message = "Mesajul nu poate fi gol.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);

      // aici ai trimite datele spre backend dacă aveai backend :)
      console.log({
        name,
        email,
        phone,
        message,
      });

      // ștergem formularul după trimitere
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    <section className="min-h-screen w-full text-white bg-gradient-to-b from-[#0B0D17] to-[#111]">
      <Navbar />

      <div className="max-w-[700px] mx-auto mt-[12vh] p-8">
        <h1 className="text-[42px] font-bellefair mb-8 text-center">
          Contactează-ne
        </h1>

        {submitted && (
          <p className="text-green-400 mb-4 text-center">
            Mesaj trimis cu succes!
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10"
        >
          {/* NUME */}
          <div>
            <label className="block mb-1 tracking-[2px] uppercase text-sm">
              Nume și prenume
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/10 p-3 rounded-md outline-none text-white placeholder-white/40"
              placeholder="Introduceți numele"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-1 tracking-[2px] uppercase text-sm">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 p-3 rounded-md outline-none text-white placeholder-white/40"
              placeholder="Introduceți emailul"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* TELEFON */}
          <div>
            <label className="block mb-1 tracking-[2px] uppercase text-sm">
              Număr de telefon
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white/10 p-3 rounded-md outline-none text-white placeholder-white/40"
              placeholder="Ex: 0722 123 456"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* MESAJ */}
          <div>
            <label className="block mb-1 tracking-[2px] uppercase text-sm">
              Mesaj
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white/10 p-3 rounded-md outline-none text-white placeholder-white/40 min-h-[120px]"
              placeholder="Scrie mesajul aici..."
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-md font-bold tracking-[2px] hover:bg-white/80 transition"
          >
            Trimite mesajul
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
