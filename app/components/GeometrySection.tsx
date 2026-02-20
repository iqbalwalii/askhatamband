export default function GeometrySection() {
  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">

      {/* Animated Geometry */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-[500px] h-[500px] animate-[spin_120s_linear_infinite]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <g fill="none" stroke="#D4AF37" strokeWidth="0.5">
              {Array.from({ length: 12 }).map((_, i) => (
                <polygon
                  key={i}
                  points="100,10 130,60 190,100 130,140 100,190 70,140 10,100 70,60"
                  transform={`rotate(${i * 30} 100 100)`}
                />
              ))}
            </g>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6">
          Sacred Geometry of Khatamband
        </h2>

        <p className="text-[#CBD5E1] leading-relaxed">
          Khatamband ceilings are built on the principles of Islamic geometry —
          symmetry, infinity, and divine balance. Each pattern reflects unity
          within multiplicity, echoing spiritual order and harmony.
        </p>
      </div>

    </section>
  );
}