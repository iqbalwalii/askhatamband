import TimelineItem from "./TimelineItem";

export default function TimelineSection() {
  return (
    <section className="py-32 bg-[#020617] px-6">

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-12 text-center">
          Hazrat Shah-e-Hamdan (RA)
        </h2>

        <div>
          <TimelineItem
            year="1314 CE"
            title="Birth in Hamdan, Persia"
            description="Hazrat Mir Syed Ali Hamdani (RA) was born in Hamdan, Persia,
            into a noble lineage tracing back to the Prophet Muhammad ﷺ."
          />

          <TimelineItem
            year="1372 CE"
            title="Arrival in Kashmir"
            description="He arrived in Kashmir with hundreds of disciples,
            introducing Islamic scholarship, ethics, and refined arts."
          />

          <TimelineItem
            year="1379 CE"
            title="Introduction of Crafts"
            description="He introduced several crafts including Khatamband,
            shawl weaving, calligraphy, and woodwork — transforming Kashmiri culture."
          />

          <TimelineItem
            year="1384 CE"
            title="Spiritual Legacy"
            description="His teachings established Kashmir as a center of spirituality,
            craftsmanship, and Islamic learning."
          />
        </div>
      </div>

    </section>
  );
}