"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  InfoIcon,
  TicketIcon,
  FlameIcon,
  MailIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            width={500}
            height={300}
            alt="Rapódromo"
            className="h-8 w-8"
          />
          <span className="text-2xl font-bold text-red-600">Hip-Hop Festival</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-5 items-center text-sm">
          <Link
            href="/bilhetes"
            className="flex items-center gap-1 hover:text-red-500"
          >
            <TicketIcon className="w-4 h-4" /> Bilhetes
          </Link>
          <Link
            href="/performance"
            className="flex items-center gap-1 hover:text-red-500"
          >
            <FlameIcon className="w-4 h-4" /> Performance
          </Link>
          <Link
            href="/contacto"
            className="flex items-center gap-1 hover:text-red-500"
          >
            <MailIcon className="w-4 h-4" /> Contacto
          </Link>
        </nav>

        {/* Hamburger Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-white focus:outline-none"
        >
          {menuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
  <div className="sm:hidden mt-4 space-y-3 px-4">
    <Link
      href="/"
      className="flex items-center gap-1 hover:text-red-500"
    >
      <InfoIcon className="w-4 h-4" /> Inicio
    </Link>
    <Link
      href="/bilhetes"
      className="flex items-center gap-1 hover:text-red-500"
    >
      <TicketIcon className="w-4 h-4" /> Bilhetes
    </Link>
    <Link
      href="/performance"
      className="flex items-center gap-1 hover:text-red-500"
    >
      <FlameIcon className="w-4 h-4" /> Performance
    </Link>

    

    <Link
      href="/contacto"
      className="flex items-center gap-1 hover:text-red-500"
    >
      <MailIcon className="w-4 h-4" /> Contacto
    </Link>

    {/* Developer credit */}
    <div className="pt-4 border-t border-zinc-700 text-center text-xs text-zinc-500">
      Desenvolvido pela{" "}
      <a
        href="https://synctechx.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-500"
      >
        SyncTechx
      </a>
    </div>
  </div>
)}
    </header>
  );
}
