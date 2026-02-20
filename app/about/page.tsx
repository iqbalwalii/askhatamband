import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-[#020617] text-[#F8FAFC]">

      {/* HERO */}
      <div className="relative h-[60vh] flex items-center justify-center">

        <Image
          src="/about-khatamband.jpg"
          alt="Khatamband Ceiling"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#D4AF37] mb-4">
            The Legacy of Khatamband
          </h1>

          <p className="text-[#CBD5E1] text-lg">
            A sacred craft shaped by faith, geometry, and centuries of devotion.
          </p>
        </div>

      </div>

      {/* INTRO */}
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">

        <h2 className="text-3xl font-bold text-[#D4AF37] mb-6">
          A Heritage Beyond Time
        </h2>

        <p className="text-[#CBD5E1] leading-relaxed text-lg">
          Khatamband is not merely decoration. It is a reflection of spiritual
          balance, artistic excellence, and divine symmetry. Every wooden piece
          fits perfectly without nails — symbolizing unity, discipline, and faith.
        </p>

      </div>

      {/* STORY SECTION */}
      <div className="bg-[#0F172A] py-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h3 className="text-3xl font-bold text-[#D4AF37] mb-6">
              Hazrat Shah-e-Hamdan (RA)
            </h3>

            <p className="text-[#CBD5E1] leading-relaxed mb-4">
              Hazrat Mir Syed Ali Hamdani (RA) brought not only Islamic knowledge
              to Kashmir but also refined arts, ethics, and craftsmanship.
            </p>

            <p className="text-[#CBD5E1] leading-relaxed">
              Through his disciples, he introduced Khatamband, shawl weaving,
              calligraphy, and wood artistry — transforming Kashmir into a
              center of spiritual and cultural excellence.
            </p>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/shah-e-hamdan.jpg"
              alt="Hazrat Shah-e-Hamdan"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>

      {/* CRAFT SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-3 gap-12 text-center">

          {[
            {
              title: "Precision",
              desc: "Each piece is hand-cut with millimeter accuracy.",
            },
            {
              title: "Spiritual Geometry",
              desc: "Patterns reflect Islamic symmetry and divine balance.",
            },
            {
              title: "Lifetime Durability",
              desc: "Built to last for generations without compromise.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0F172A] p-8 rounded-xl border border-white/10"
            >
              <h4 className="text-xl font-bold text-[#D4AF37] mb-3">
                {item.title}
              </h4>
              <p className="text-[#CBD5E1]">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* QUOTE */}
      <div className="bg-black py-24 px-6 text-center">

        <blockquote className="max-w-4xl mx-auto">

          <p className="text-2xl md:text-3xl italic text-[#CBD5E1] mb-6">
            “True beauty lies in harmony — between art, faith, and purpose.”
          </p>

          <span className="text-[#D4AF37] font-semibold">
            — Kashmiri Heritage Philosophy
          </span>

        </blockquote>

      </div>

      {/* FINAL */}
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">

        <h3 className="text-3xl font-bold text-[#D4AF37] mb-6">
          Our Commitment
        </h3>

        <p className="text-[#CBD5E1] leading-relaxed text-lg">
          We are dedicated to preserving the sacred art of Khatamband for future
          generations — honoring tradition, spirituality, and craftsmanship
          in every ceiling we create.
        </p>

      </div>

    </section>
  );
}