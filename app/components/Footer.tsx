import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-[#CBD5E1] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Brand */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">

          {/* Logo */}
          <div className="relative w-32 h-32 sm:w-72 sm:h-72">
            <Image
              src="/logo.png"
              alt="AS Khatamband Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Name */}
          {/* <h2 className="brand-text text-2xl text-[#D4AF37] tracking-wide">
            AS Khatamband
          </h2> */}

          {/* Tagline */}
          <p className="text-sm text-gray-400 max-w-md">
            Preserving the Sacred Art of Kashmiri Khatamband Ceilings
          </p>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/15 mb-12" />

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:text-left">

          {/* Explore */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4 uppercase tracking-wider text-sm">
              Explore
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Heritage */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4 uppercase tracking-wider text-sm">
              Heritage
            </h3>

            <p className="text-sm leading-relaxed text-gray-400">
              Inspired by the teachings of  
              Hazrat Mir Syed Ali Hamdani (RA),  
              reflecting devotion, geometry,  
              and spiritual harmony.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4 uppercase tracking-wider text-sm">
              Contact
            </h3>

            <div className="text-sm space-y-2 text-gray-400">
              <p>Kashmir, India</p>

              <a
                href="mailto:info@askhatamband.com"
                className="hover:text-[#D4AF37]"
              >
                info@askhatamband.com
              </a>

              <a
                href="tel:+917006251177"
                className="hover:text-[#D4AF37]"
              >
                +91 7006251177
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/10 text-center text-xs text-gray-500">

          © {new Date().getFullYear()} AS Khatamband · All Rights Reserved

        </div>

      </div>
    </footer>
  );
}
