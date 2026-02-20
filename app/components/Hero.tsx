import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center">

      {/* Background Image */}
      <Image
        src="/hero-khatamband.jpg"
        alt="Khatamband Ceiling"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-left">

        <h1 className="text-4xl md:text-6xl font-extrabold text-[#D4AF37] leading-tight">
          Sacred Art of <br /> Khatamband Ceilings
        </h1>

        <p className="mt-6 text-lg text-[#CBD5E1] max-w-xl">
          A divine Kashmiri heritage brought by
          Hazrat Syed Ameer Kabir Mir Syed Ali Hamdani (RH),
          preserving craftsmanship through centuries.
        </p>

      </div>
    </section>
  );
}