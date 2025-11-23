import React from "react";

const Plans = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-red-100 to-white text-black text-center">
      <h2 className="text-4xl font-extrabold mb-6 text-red-600 tracking-tight">
        Planos de Acesso
      </h2>
      <p className="text-zinc-700 mb-12 text-lg max-w-2xl mx-auto">
        Escolhe o teu plano e entra na arena do Rapódromo. Apoia Allan, Duas
        Karas e os gladiadores do rap moçambicano!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Free Plan */}
        <div className="border border-zinc-300 rounded-2xl p-8 bg-white shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-zinc-800">
            Acesso Básico
          </h3>
          <ul className="text-left text-zinc-600 space-y-3 mb-6">
            <li>🎧 Ouve batalhas e entrevistas online</li>
            <li>📺 Assiste aos vídeos no YouTube</li>
            <li>🚫 Sem downloads</li>
            <li>🔒 Sem acesso VIP</li>
          </ul>
          <span className="text-xl font-bold text-zinc-800">Grátis</span>
        </div>

        {/* Paid Plan */}
        <div className="border border-red-600 rounded-2xl p-8 bg-white shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4 text-red-600">Mmebro</h3>
          <ul className="text-left text-zinc-600 space-y-3 mb-6">
            <li>🎧 Accesso as batalhas em direto (com comentarios)</li>
            <li>📺 Assiste a conteúdo exclusivo</li>
            <li>⬇️ Download do audio das batalhas</li>
            <li>💬 Acesso a communidade</li>
            <li>
              👑 Conteúdo exclusivo de bastidores (Real Talk Podcast em Direto)
            </li>
            <li>
              🌍 <strong>Acesso à Comunidade Rapódromo</strong>
            </li>
          </ul>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-red-600">€9.99/mês</span>
            <a
              href="/entrar"
              className="bg-red-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-700 transition"
            >
              Entrar Já
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
