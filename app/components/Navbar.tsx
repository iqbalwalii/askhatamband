"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
                src="/logo.png"
                alt="AS Khatamband Logo"
                width={80}
                height={80}
                className="object-contain"
                priority
            />

            <span className="brand-text text-lg md:text-xl text-[#D4AF37]">
                AS Khatamband
            </span>
            </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {["Home", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="group-hover:text-[#D4AF37] transition">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all" />
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className="w-6 h-0.5 bg-[#D4AF37]" />
            <span className="w-6 h-0.5 bg-[#D4AF37]" />
            <span className="w-6 h-0.5 bg-[#D4AF37]" />
          </button>

        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-[#020617] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">

          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl font-bold text-[#D4AF37]">
              AS Khatamband
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="text-2xl text-[#D4AF37]"
            >
              ✕
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-8 text-lg font-semibold">
            {["Home", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between"
              >
                <span className="group-hover:text-[#D4AF37] transition">
                  {item}
                </span>

                <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition">
                  →
                </span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-8 border-t border-white/10 text-sm text-gray-400">
            Preserving Sacred Heritage
          </div>

        </div>
      </aside>
    </>
  );
}