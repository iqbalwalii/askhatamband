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

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-4"
        >
          {/* Web3Forms Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="3ec6f59d-014e-4b96-a5f4-c6dca03f3b9c"
          />

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-4 rounded bg-[#0F172A] text-[#F8FAFC] placeholder:text-[#94A3B8] outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-4 rounded bg-[#0F172A] text-[#F8FAFC] placeholder:text-[#94A3B8] outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full p-4 rounded bg-[#0F172A] text-[#F8FAFC] placeholder:text-[#94A3B8] outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />

          <button
            type="submit"
            className="w-full py-3 bg-[#D4AF37] text-black font-semibold rounded hover:bg-[#C9A227] transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}