"use client";
import { Phone, MapPin } from "lucide-react";
import { FaYoutube, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      {/* Full-width hero (same pattern as Terms & About pages) */}
            <div
        className="w-full flex flex-col items-center justify-center h-[60vh] bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/contact-bg.jpg')" }}
      >
        <h1 className="custom-heading text-4xl md:text-5xl font-bold drop-shadow-lg -translate-y-12">
          Contact Us
        </h1>
        <p className="mt-8 text-base md:text-lg font-medium translate-y-10">
          We're here to help you plan your perfect journey.
        </p>
      </div>

      {/* Main content */}
      <div className="container max-w-5xl py-10 md:py-16">
        <div className="card p-6 space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">
            Heritage Tours & Travels
          </h2>

          {/* Addresses */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <a
                href="https://maps.app.goo.gl/oCTLGFXYCMLWTzRE7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-700"
              >
                Address: 5/1004, Viram Khand, Gomti Nagar, Lucknow-226010
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=H.+N.+51,+Village+Banarki,+Ramnagar,+Barabanki,+UP-225201"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-700"
              >
                Address: H. N. 51, Village Banarki, Ramnagar, Barabanki UP-225201
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Shankar+Steel+Opposite+Ramlila+Maidan+Gorakhnath,+Gorakhpur"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-700"
              >
                Address: Shankar Steel Opposite Ramlila Maidan Gorakhnath,
                Gorakhpur-273015
              </a>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-600" />
              <a href="tel:+919214152266" className="hover:text-brand-700">
                +91 9214152266
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-600" />
              <a href="tel:+918175051510" className="hover:text-brand-700">
                +91 8175051510
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3">
            <FaWhatsapp className="w-5 h-5 text-green-500" />
            <a
              href="https://wa.me/9214152266"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Google Maps */}
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-red-600" />
            <a
              href="https://maps.app.goo.gl/P7NvPtP1C7Q5vc9t5?g_st=awb"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              View on Google Maps
            </a>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-3 pt-4">
            <div className="flex items-center gap-3">
              <FaYoutube className="w-5 h-5 text-red-600" />
              <a
                href="https://www.youtube.com/@HTTHeritageLucknowTravels"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                YouTube
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaInstagram className="w-5 h-5 text-pink-600" />
              <a
                href="https://www.instagram.com/heritage_tour_and_travels?igsh=ZGxwYjRzY2JxY3g2"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Instagram
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaFacebook className="w-5 h-5 text-blue-600" />
              <a
                href="https://www.facebook.com/share/19hm4eaWX6/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
