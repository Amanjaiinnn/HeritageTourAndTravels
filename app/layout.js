// "use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "Voyago — Clean Travel Experiences",
  description: "Modern, responsive travel site with dynamic content (no prices).",
    icons: {
    icon: "/favicon.ico",   // or "/favicon.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Add Tailwind via CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* (Optional) Tailwind config customization */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    brand: '#ff0000'
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <FloatingWhatsApp />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
