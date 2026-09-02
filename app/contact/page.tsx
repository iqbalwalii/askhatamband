export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#020617] py-24 px-6 text-[#F8FAFC]">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#D4AF37] mb-6">
          Contact Us
        </h1>

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
            className="w-full p-4 bg-[#0F172A] rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-4 bg-[#0F172A] rounded"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full p-4 bg-[#0F172A] rounded"
          />

          <button
            type="submit"
            className="w-full py-3 bg-[#D4AF37] text-black font-semibold rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}