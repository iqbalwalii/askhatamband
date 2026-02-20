export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#020617] py-24 px-6 text-[#F8FAFC]">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#D4AF37] mb-6">
          Contact Us
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 bg-[#0F172A] rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-[#0F172A] rounded"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-4 bg-[#0F172A] rounded"
          />

          <button className="w-full py-3 bg-[#D4AF37] text-black font-semibold rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}