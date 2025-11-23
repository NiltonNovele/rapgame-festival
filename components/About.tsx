import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 bg-black rounded-none shadow-2xl w-full">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-16">
        Sobre o Rapódromo
      </h2>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-zinc-800 text-white p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
          <Image
            src="/ma25.png"
            alt="Arena Rapódromo"
            className="rounded-xl mb-4 w-full h-48 object-cover"
            width={500}
            height={300}
          />
          <h3 className="text-xl font-semibold mb-3">O que é</h3>
          <p className="leading-relaxed text-base">
            O <strong>Rapódromo</strong> é a maior arena de batalhas de rap da
            lusofonia, onde MCs se enfrentam com rimas afiadas, criatividade e
            presença de palco. Um espaço para elevar a cultura e o talento.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-br from-red-500 to-yellow-500 text-black p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
          <Image
            src="/allanedu.png"
            alt="Allan & Duas Karas"
            width={500}
            height={300}
            className="rounded-xl mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-3">Quem são os Hosts 🎤</h3>
          <p className="leading-relaxed text-base">
            <strong>Allan</strong> e <strong>Duas Karas</strong> são dois
            rappers lendários que comandam o Rapódromo com carisma e
            experiência. Eles garantem respeito, fair play e muita energia em
            cada batalha.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-zinc-800 text-white p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
          <Image
            src="/glads.png"
            alt="Gladiadores"
            width={500}
            height={300}
            className="rounded-xl mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-3">Gladiadores 🔥</h3>
          <p className="leading-relaxed text-base">
            Os gladiadores são MCs selecionados das batalhas locais e nacionais.
            Eles trazem estilos únicos, representando suas zonas com orgulho e
            disputando o título máximo.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-black p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
          <Image
            src="/form.png"
            alt="Batalhas"
            width={500}
            height={300}
            className="rounded-xl mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-3">Formato 🏆</h3>
          <p className="leading-relaxed text-base">
            O Rapódromo segue um formato de temporadas com fase de grupos,
            eliminatórias e final. Os MCs acumulam pontos por vitórias,
            punchlines, flow e criatividade.
          </p>
        </div>
      </div>

      {/* Roadmap */}
      <div className="mt-24 w-full">
        <h3 className="text-3xl font-bold text-center text-red-600 mb-14">
          História do Rapódromo 🚀
        </h3>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Column 1 */}
          <div className="space-y-16 relative border-l-4 border-yellow-400 pl-6">
            {/* Step 1 */}
            <div className="relative flex gap-6 items-start">
              <div className="absolute -left-[30px] top-1 w-6 h-6 bg-yellow-400 border-4 border-white rounded-full shadow-md"></div>
              {/* <img
                src="/fundacao.jpg"
                alt="Fundação"
                className="w-32 h-32 rounded-xl object-cover shadow-md"
              /> */}
              <div>
                <h4 className="text-xl font-semibold text-white">
                  🌱 Fundação
                </h4>
                <p className="text-white text-base leading-relaxed">
                  O Rapódromo nasceu da paixão pelo rap e pela rima, com o
                  objetivo de criar um espaço competitivo e respeitado para MCs
                  brilharem.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex gap-6 items-start">
              <div className="absolute -left-[30px] top-1 w-6 h-6 bg-yellow-400 border-4 border-white rounded-full shadow-md"></div>
              {/* <img
                src="/primeiro-evento.jpg"
                alt="Primeiro Evento"
                className="w-32 h-32 rounded-xl object-cover shadow-md"
              /> */}
              <div>
                <h4 className="text-xl font-semibold text-white">
                  🎤 Primeiro Evento
                </h4>
                <p className="text-white text-base leading-relaxed">
                  O primeiro evento reuniu MCs de várias regiões, mostrando o
                  poder do rap como ferramenta de expressão e transformação
                  social.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex gap-6 items-start">
              <div className="absolute -left-[30px] top-1 w-6 h-6 bg-yellow-400 border-4 border-white rounded-full shadow-md"></div>
              {/* <img
                src="/expansao.jpg"
                alt="Expansão"
                className="w-32 h-32 rounded-xl object-cover shadow-md"
              /> */}
              <div>
                <h4 className="text-xl font-semibold text-white">
                  💡 Expansão
                </h4>
                <p className="text-white text-base leading-relaxed">
                  Com o sucesso das batalhas, o Rapódromo expandiu para incluir
                  desafios internacionais com Angola, Brasil e Portugal.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-16 relative border-l-4 border-yellow-400 pl-6">
            {/* Step 4 */}
            <div className="relative flex gap-6 items-start">
              <div className="absolute -left-[30px] top-1 w-6 h-6 bg-yellow-400 border-4 border-white rounded-full shadow-md"></div>
              {/* <img
                src="/impacto-cultural.jpg"
                alt="Impacto Cultural"
                className="w-32 h-32 rounded-xl object-cover shadow-md"
              /> */}
              <div>
                <h4 className="text-xl font-semibold text-white">
                  🌍 Impacto Cultural
                </h4>
                <p className="text-white text-base leading-relaxed">
                  O Rapódromo virou referência cultural, influenciando a cena
                  musical, revelando talentos e inspirando novas gerações.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative flex gap-6 items-start">
              <div className="absolute -left-[30px] top-1 w-6 h-6 bg-yellow-400 border-4 border-white rounded-full shadow-md"></div>
              {/* <img
                src="/futuro.jpg"
                alt="O Futuro"
                className="w-32 h-32 rounded-xl object-cover shadow-md"
              /> */}
              <div>
                <h4 className="text-xl font-semibold text-white">
                  🔥 O Futuro
                </h4>
                <p className="text-white text-base leading-relaxed">
                  O Rapódromo planeja levar suas batalhas para grandes arenas,
                  com transmissão ao vivo e novas colaborações globais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
