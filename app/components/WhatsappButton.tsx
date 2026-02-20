"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917006251177"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full shadow-lg hover:transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative w-14 h-14">
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          fill
          className="object-contain"
          priority
        />
      </div>
    </a>
  );
}