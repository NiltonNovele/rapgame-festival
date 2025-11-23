import React from "react";

export default function BatalhasPage() {
  return (
    <main className="bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-center text-red-600 mb-12">
        Artistas
      </h1>

      {/* Gallery Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27].map((i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={`/artists/${i}.jpg`}
              alt="Artista Hip-Hop"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 group-hover:opacity-60 transition"></div>
          </div>
        ))}
      </section>
    </main>
  );
}
