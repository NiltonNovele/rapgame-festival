"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Ticket {
  _id: string;
  ticketCode: string;
  status: "pending" | "confirmed" | "used" | string;
}

export default function BilheteSucesso() {
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  const router = useRouter();

   const API_BASE = "https://api.bolaocesto.com";

  // Generate unique BAC code
  const generateTicketCode = (): string => {
    const randomPart = () => Math.floor(100 + Math.random() * 900).toString();
    return `RGF-${randomPart()}-${randomPart()}-${randomPart()}-STX`;
  };

  // On page load, generate a ticket object
  useEffect(() => {
    try {
      const newTicket: Ticket = {
        _id: crypto.randomUUID(),
        ticketCode: generateTicketCode(),
        status: "pending",
      };
      setTicket(newTicket);
    } catch {
      setError("Erro ao gerar o bilhete.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSave = async () => {
    if (!fullName.trim()) return alert("Insira o seu nome completo.");
    if (!/^8\d{8}$/.test(phone))
      return alert(
        "Insira um número de telemóvel válido de Moçambique (8XXXXXXXX)."
      );

    if (!ticket) {
      alert("Ticket inválido.");
      return;
    }

    try {
      setLoading(true);

      const resp = await fetch(`${API_BASE}/api/update-tickets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketCode: ticket.ticketCode,
          fullName,
          phone,
          tickets: [
            {
              _id: ticket._id,
              ticketCode: ticket.ticketCode,
            },
          ],
        }),
      });

      const data = await resp.json();

      if (!resp.ok) {
        throw new Error(data.error || "Erro ao atualizar ticket");
      }

      setSaved(true);
   } catch (err: unknown) {
  if (err instanceof Error) {
    alert(err.message);
  } else {
    alert("Ocorreu um erro inesperado.");
  }
} finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!ticket) return;
    navigator.clipboard.writeText(ticket.ticketCode);
    alert("Código copiado para a área de transferência!");
  };

  const handleDownload = () => {
    if (!ticket) return;

    const blob = new Blob([ticket.ticketCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${ticket.ticketCode}.txt`;
    a.click();

    URL.revokeObjectURL(url);
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <div className="p-4 bg-red-50 text-red-700">{error}</div>;
  if (!ticket) return <div className="p-4">Sem ticket.</div>;

  // Confirmation screen
  if (saved) {
    return (
      <div className="p-8 max-w-2xl mx-auto text-center">
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="flex flex-col items-center gap-4">
          <div className="text-green-500 text-6xl">✔️</div>
          <h1 className="text-2xl font-bold">Vemo-nos lá!</h1>
          <p>O seu bilhete foi salvo com sucesso.</p>
          <p>
            Ao chegares na porta do evento, fornece o teu nome, numero de
            telefone ou o código do bilhete.
          </p>

          <button
  onClick={() => router.push("/")}
  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
>
  Voltar à página inicial
</button>

        </div>
      </div>
    );
  }

  // Ticket form screen
  return (
  <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16">
    <div className="w-full max-w-xl">

      {/* Header spacing */}
      <div className="mb-10"></div>

      <h1 className="text-3xl font-extrabold text-center mb-6">
        Seu Bilhete
      </h1>

      {/* Ticket Card */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6 mb-8">
        <p className="text-gray-300">
          <span className="font-semibold text-gray-100">Ticket Code:</span>{" "}
          <span className="text-blue-400 font-mono">{ticket.ticketCode}</span>
        </p>

        <p className="mt-2 text-gray-300">
          <span className="font-semibold text-gray-100">Status:</span>{" "}
          <span
            className={
              ticket.status === "confirmed"
                ? "text-yellow-400"
                : ticket.status === "confirmed"
                ? "text-green-400"
                : "text-red-400"
            }
          >
            {ticket.status}
          </span>
        </p>

        <div className="flex gap-3 mt-5">
          <button
            onClick={handleCopy}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg shadow-lg transition-all"
          >
            Copiar Código
          </button>

          <button
            onClick={handleDownload}
            className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg shadow-lg transition-all"
          >
            Download
          </button>
        </div>
      </div>

      {/* Form section */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6">

        <label className="font-semibold text-gray-200">Nome completo:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full mt-1 mb-4 bg-black/40 border border-white/20 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <label className="font-semibold text-gray-200">
          Número de telemóvel (Moçambique):
        </label>
        <input
          type="text"
          value={phone}
          placeholder="8XXXXXXXX"
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mt-1 mb-5 bg-black/40 border border-white/20 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          onClick={handleSave}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-xl transition-all"
        >
          Salvar Informações
        </button>
      </div>
    </div>
  </div>
);
}