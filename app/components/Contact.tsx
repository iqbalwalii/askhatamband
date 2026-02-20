export default function ContactSection() {
  return (
    <section className="py-24 px-6 bg-[#020617]">

      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-[#D4AF37] mb-6">
          Contact Us
        </h2>

        <p className="text-[#CBD5E1] mb-10">
          Reach out for custom Khatamband ceilings
          and heritage restoration projects.
        </p>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded bg-[#0F172A]"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded bg-[#0F172A]"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-4 rounded bg-[#0F172A]"
          />

          <button className="w-full py-3 bg-[#D4AF37] text-black font-semibold rounded">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}