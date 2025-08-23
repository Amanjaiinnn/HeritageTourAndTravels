import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
export const metadata = {
  title: "Voyago — Clean Travel Experiences",
  description: "Modern, responsive travel site with dynamic content (no prices).",
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
