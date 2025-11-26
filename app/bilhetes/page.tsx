"use client";

import Image from "next/image";
import { useState } from "react";

export default function BilhetesPage() {
  const [ticketType, setTicketType] = useState("normal");
  const [quantity, setQuantity] = useState(1);

  const ticketPrices = {
    normal: 500,
    normalDoor: 700,
    vip: 1000,
    vipDoor: 1500,
  };

  const [loadingPayment, setLoadingPayment] = useState(false);

const handlePayment = async () => {
  try {
    setLoadingPayment(true);

    // 🔹 PREÇO REAL (com base no tipo)
    const ticketPrices = {
      normal: 2,
      vip: 2,
    };

    const price =
      ticketType === "normal"
        ? ticketPrices.normal
        : ticketPrices.vip;

    const amount = price * quantity;

    // 🔹 Descrição
    const description = `Compra de ${quantity} bilhete(s) do Rap Game Festival – Tipo: ${ticketType.toUpperCase()}`;

    // 🔹 URL do backend
    // const API_URL = "https://rapgame-festival.vercel.app/api/payments/create";
    const API_URL = "https://api.bolaocesto.com/api/payments/create";
    

    // 🔹 Dados enviados ao servidor
    const payload = {
      amount,
      reference: `RAPGAMEFESTIVAL`,
      description,
      return_url: "https://rapgame-festival.vercel.app/sucesso",
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.status !== "success" || !data.data?.checkout_url) {
      console.error("❌ Erro no pagamento:", data);
      alert("❌ Ocorreu um erro ao iniciar o pagamento. Tenta novamente.");
      setLoadingPayment(false);
      return;
    }

    console.log("✅ Pagamento criado:", data);

    // 🔹 Timeout de segurança
    setTimeout(() => {
      setLoadingPayment(false);
      alert(
        "⚠️ O pagamento demorou demasiado a iniciar. Por favor, tenta novamente."
      );
    }, 15000);

    // 🔹 Abre o checkout na MESMA aba
    window.location.href = data.data.checkout_url;

    // Não verificamos popup porque não há nova janela

  } catch (err) {
    console.error("❌ Erro no pagamento:", err);
    alert("❌ Erro de rede. Verifica a tua ligação e tenta novamente.");
  } finally {
    setLoadingPayment(false);
  }
};


  const price = ticketType === "normal" ? ticketPrices.normal : ticketPrices.vip;

  return (
    <main className="p-6 md:p-12 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-red-600 text-center">
        Comprar Bilhete
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Bilhetes Section */}
        <div className="flex-1 bg-zinc-800 p-6 rounded-3xl shadow-2xl flex flex-col gap-6">
          <div className="w-full flex justify-center">
            <Image
              src="/cartazm.jpg"
              alt="Rapódromo Live"
              width={800}
              height={450}
              className="w-full max-w-full h-auto object-cover rounded-2xl bg-black"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-2">Escolha o Tipo de Bilhete</h2>

            <div className="flex gap-4 flex-wrap">
              <button
                className={`px-6 py-3 rounded-xl font-semibold transition ${
                  ticketType === "normal"
                    ? "bg-red-600 text-white"
                    : "bg-zinc-700 text-white hover:bg-red-500"
                }`}
                onClick={() => setTicketType("normal")}
              >
                Normal
              </button>
              <button
                className={`px-6 py-3 rounded-xl font-semibold transition ${
                  ticketType === "vip"
                    ? "bg-red-600 text-white"
                    : "bg-zinc-700 text-white hover:bg-red-500"
                }`}
                onClick={() => setTicketType("vip")}
              >
                VIP
              </button>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <label htmlFor="quantity" className="text-lg font-medium">Qtd:</label>
              <input
                id="quantity"
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-20 p-2 text-center rounded-lg bg-zinc-700 border border-zinc-500"
              />
            </div>

            <div className="text-xl font-semibold mt-2">
              Preço por bilhete: <span className="text-green-400">{price.toLocaleString()} Mt</span>
            </div>
            <div className="text-xl font-semibold">
              Total: <span className="text-green-400">{(price * quantity).toLocaleString()} Mt</span>
            </div>

            
          </div>
        </div>

        {/* Carrinho Section */}
        <div className="w-full lg:w-[400px] bg-zinc-800 p-6 rounded-3xl shadow-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Carrinho</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-lg">
                Hip-Hop Festival ({quantity}x {ticketType === "normal" ? "Normal" : "VIP"})
              </p>
              <p className="font-semibold">{(price * quantity).toLocaleString()} Mt</p>
            </div>

            <div className="flex justify-between border-t border-zinc-600 pt-4 mb-4">
              <p className="text-lg">Total</p>
              <p className="text-xl font-bold text-green-400">{(price * quantity).toLocaleString()} Mt</p>
            </div>

            <div className="mb-6">
              <p className="text-zinc-400 mb-2 font-medium">Métodos de Pagamento</p>
              <div className="flex gap-4 items-center flex-wrap">
                <span className="bg-white text-black text-sm font-semibold px-3 py-1 rounded">M-Pesa</span>
                <span className="bg-white text-black text-sm font-semibold px-3 py-1 rounded">e-Mola</span>
                <span className="bg-white text-black text-sm font-semibold px-3 py-1 rounded">Visa</span>
              </div>
            </div>

          <button onClick={handlePayment} disabled={loadingPayment} className="bg-green-600 hover:bg-green-700 w-full py-3 rounded-full font-semibold text-lg transition disabled:opacity-50" >
            {loadingPayment ? "Processando..." : "Finalizar Compra"}
          </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-12 bg-zinc-800 p-6 rounded-3xl shadow-2xl space-y-4 text-zinc-300">
        <h2 className="text-2xl text-red-600 font-bold mb-2">Detalhes do Evento</h2>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li>Bilhetes normal: 500,00Mt | Na porta: 700,00Mt</li>
          <li>VIP Normal: 1.000,00Mt | VIP Na porta: 1.500,00Mt</li>
          <li>Local: Desportivo de Maputo</li>
        </ul>

        <div className="mt-4 space-y-1">
          <p className="text-red-600 font-bold text-lg">⛔️🚫 RAP GAME MOZ 🚫⛔️</p>
          <p>🦅 Águia não voa com pardais 🐦</p>
          <p>⭐ Stars never fall ✨</p>
          <p>⚠️ Pela primeira vez em Moz 🇲🇿</p>
          <p>👺👹 Dois Monstros implacáveis do battle Moz vão se enfrentar ⚠️</p>
          <p>Kadabra MC 🥋🥊 VS 🥊🥋 16 Cenas</p>
          <p>❗Quem será o best of the best❓</p>
          <p>⚠️ Stay Tuned❗❗❗</p>
          <p>🗓 13 de Dezembro De 2025</p>
          <p>E muito mais artistas incluindo Trez Agah, Jay Arghh, Djimetta e muito mais</p>
          <p>✊🏾🇲🇿</p>
          <p className="text-sm text-zinc-400">#Rapgamefestival #Hip-hopmoz #RG #RAPGAME ✅️</p>
        </div>
      </div>
    </main>
  );
}
