import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Playfair_Display, Inter } from "next/font/google";
import WhatsAppButton from "./components/WhatsappButton";

export const metadata = {
  title: "Khatamband Ceiling in Kashmir",
  description: "Preserving the sacred Kashmiri Khatamband ceiling heritage",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#020617] text-[#F8FAFC] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton/>
      </body>
    </html>
  );
}