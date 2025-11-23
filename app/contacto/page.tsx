export default function ContactoPage() {
  return (
    <main className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-600">
        Contacto
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Inquérito */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-red-600 mb-4">
            Inquérito
          </h2>
          <form className="bg-gray-800 p-6 rounded-xl shadow-xl space-y-6">
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Seu Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Seu E-mail
              </label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Mensagem</label>
              <textarea
                placeholder="Deixe sua mensagem"
                rows={5}
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>
            <button className="w-full p-4 bg-red-600 text-black rounded-lg hover:bg-red-500 transition-colors">
              Enviar Inquérito
            </button>
          </form>
        </section>

        {/* Flyer on the right */}
        <section className="flex justify-center">
          <img
            src="/cartaz.jpg"
            alt="Flyer do Evento"
            className="w-full max-w-md rounded-xl shadow-xl"
          />
        </section>
      </div>
    </main>
  );
}
