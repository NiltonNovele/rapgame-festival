import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { name: "Caldo Ricci", logo: "/ricci.jpg" },
    { name: "Caste Lite", logo: "/castle.webp" },
    { name: "SynctechX", logo: "/synctechx.png" },
    { name: "Scala", logo: "/scala.jpg" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-900 to-black text-white py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-3 text-red-500 tracking-tight">
          Apoiadores & Parceiros
        </h2>
        <p className="text-zinc-400 text-base mb-12 max-w-xl mx-auto">
          Essas marcas fortalecem o Rapódromo. Apoia quem fortalece a cena!
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-44 h-44 bg-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center border border-red-500 shadow-xl hover:scale-105 hover:border-white transition-transform duration-300 group"
            >
              <div className="w-16 h-16 relative mb-3 group-hover:scale-110 transition-transform">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain rounded"
                />
              </div>
              <p className="text-sm text-white font-semibold tracking-wide">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
