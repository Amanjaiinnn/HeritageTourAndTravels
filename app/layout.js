// "use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "Heritage Tour & Travels",
  description: "Modern, responsive travel site with dynamic content (no prices).",
  icons: {
    icon: "/logo-removebg-preview.png", // or /favicon.png → place in /public folder
  },
  openGraph: {
    title: "Heritage Tour & Travels",
    description: "Discover tours across India with HTT.",
    url: "https://heritagetourandtravels.in",
    siteName: "Heritage Tour & Travels",
    images: [
      {
        url: "/logo-removebg-preview.png", // put logo/banner in /public
        width: 1200,
        height: 630,
        alt: "HTT Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heritage Tour & Travels",
    description: "Discover tours across India with HTT.",
    images: ["/logo-removebg-preview.png"], // same logo/banner for Twitter preview
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <FloatingWhatsApp />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}