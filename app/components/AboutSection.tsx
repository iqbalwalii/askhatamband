import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-[#020617]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <Image
          src="/about-khatamband.jpg"
          alt="Khatamband Work"
          width={600}
          height={400}
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Our Heritage
          </h2>

          <p className="text-[#CBD5E1] leading-relaxed">
            Khatamband is a sacred wooden ceiling craft introduced
            to Kashmir by Hazrat Mir Syed Ali Hamdani (RH).
            Every piece is handcrafted without nails,
            reflecting Islamic geometry and spiritual harmony.
          </p>
        </div>

      </div>

    </section>
  );
}