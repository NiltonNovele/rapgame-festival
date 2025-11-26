"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const eventDate = new Date("2025-12-13T18:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setDays(d >= 0 ? d : 0);
      setHours(h >= 0 ? h : 0);
      setMinutes(m >= 0 ? m : 0);
      setSeconds(s >= 0 ? s : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const tickets = [
    { type: "Normal", price: "500 Mt", door: "700 Mt" },
    { type: "VIP", price: "1.000 Mt", door: "1.500 Mt" },
  ];

  const featuredArtists = [
    { name: "Djimetta", img: "/djimmy.png" },
    { name: "Jay Arghh", img: "/artists/2.jpg" },
    { name: "Trez Agah", img: "/artists/6.jpg" },
  ];

  return (
    <main className="bg-black text-white font-sans">
      {/* Hero Section */}
    <section className="relative h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 gap-8">
  {/* Text Content */}
  <div className="flex-1 text-center md:text-left">
    <h1 className="text-5xl md:text-6xl font-extrabold text-red-600 mb-4 animate-fade-in">
      RAP GAME HIP-HOP FESTIVAL
    </h1>
    <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in delay-100">
      13 de Dezembro de 2025 - Desportivo de Maputo
    </p>
    <div className="flex justify-center md:justify-start gap-4 flex-wrap animate-fade-in delay-200">
      <a
        href="/bilhetes"
        className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition shadow-lg"
      >
        Comprar Bilhete
      </a>
      {/* <a
        href="/cert.pdf"
        className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition shadow-lg"
      >
        Documentação Legal
      </a> */}
    </div>
  </div>

  {/* Hero Image */}
  <div className="flex-1 relative w-full h-96 md:h-[500px]">
    <Image
      src="/cartazm.jpg"
      alt="Hero Image"
      fill
      className="object-cover rounded-3xl shadow-2xl"
      priority
    />
  </div>
</section>
      {/* Countdown Section */}
      <section className="py-20 px-6 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-12">
          Contagem Regressiva até o Evento
        </h2>
        <div className="flex justify-center gap-8 flex-wrap text-white">
          {[{ label: "Dias", value: days }, { label: "Horas", value: hours }, { label: "Minutos", value: minutes }, { label: "Segundos", value: seconds }].map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-3xl px-8 py-6 shadow-2xl w-28 flex flex-col items-center transform transition hover:scale-105 duration-300"
            >
              <p className="text-4xl font-bold">{item.value}</p>
              <p className="uppercase text-sm text-zinc-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-12">
          Artistas em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredArtists.map((artist, idx) => (
            <div key={idx} className="bg-zinc-800 rounded-3xl overflow-hidden shadow-2xl transform transition hover:scale-105 hover:shadow-3xl duration-300">
              <Image
                src={artist.img}
                alt={artist.name}
                width={400}
                height={400}
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-500">{artist.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flyers Section */}
     <section className="py-20 px-6 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* Flyer 1 */}
    <div className="relative bg-zinc-800 rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] transform transition hover:scale-105 duration-300">
      <Image
        src="/cartazm.jpg"
        alt="Flyer 1"
        fill
        className="object-cover rounded-3xl"
      />
    </div>

    {/* Flyer 2 */}
    <div className="relative bg-zinc-800 rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] transform transition hover:scale-105 duration-300">
      <Image
        src="/cartaz2.jpg"
        alt="Flyer 2"
        fill
        className="object-cover rounded-3xl"
      />
    </div>

  </div>
</section>



      {/* Tickets Section */}
      <section id="tickets" className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-12">
          Tipos de Bilhetes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {tickets.map((ticket, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-3xl p-8 shadow-2xl flex flex-col gap-6 items-center transform transition hover:-translate-y-2 hover:shadow-3xl duration-300"
            >
              <h3 className="text-3xl font-bold text-red-500">{ticket.type}</h3>
              <p className="text-gray-300 text-lg">
                Preço antecipado: <span className="text-green-400 font-semibold">{ticket.price}</span>
              </p>
              <p className="text-gray-300 text-lg">
                Preço na porta: <span className="text-red-500 font-semibold">{ticket.door}</span>
              </p>
              <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition shadow-lg hover:shadow-xl text-lg">
                <a
            href="/bilhetes"
            className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition shadow-lg"
          >
            Comprar Bilhete
          </a>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-6 bg-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
          Local do Evento
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-2">Desportivo de Maputo</p>
        <p className="text-gray-400 text-lg md:text-xl mb-8">13 de Dezembro de 2025 | 18:00</p>

        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-8 h-96 md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d802.7598678581677!2d32.57691887773379!3d-25.97394664575166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69b0f3611f7df%3A0x994411be373d7c13!2sCentro%20Social%20Desportivo!5e1!3m2!1sen!2sza!4v1763940305198!5m2!1sen!2sza"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Desportivo de Maputo"
          ></iframe>
        </div>

        <a
          href="https://maps.app.goo.gl/zEJzY3469EKonxTx6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-10 rounded-full transition text-lg shadow-lg hover:shadow-xl"
        >
          Obter Direções
        </a>
      </section>
    </main>
  );
}
