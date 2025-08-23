"use client";
import { Phone, MapPin, Mail } from "lucide-react";
import { FaYoutube, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="section">
      <h1 className="text-3xl font-extrabold mb-6">Contact Us</h1>
      
      {/* Office Addresses */}
      <div className="card p-6 space-y-4">
        <h2 className="text-xl font-bold">Heritage Tours & Travels</h2>
        
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

        {/* Phone Numbers */}
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-green-600" />
          <a href="tel:+919214152266" className="hover:text-brand-700">+91 9214152266</a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-green-600" />
          <a href="tel:+918175051510" className="hover:text-brand-700">+91 8175051510</a>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center gap-3">
          <FaWhatsapp className="w-5 h-5 text-green-500" />
          <a href="https://wa.me/9214152266" target="_blank" className="text-blue-600 hover:underline">
            Chat on WhatsApp
          </a>
        </div>

        {/* Google Maps */}
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-red-600" />
          <a href="https://maps.app.goo.gl/P7NvPtP1C7Q5vc9t5?g_st=awb" target="_blank" className="text-blue-600 hover:underline">
            View on Google Maps
          </a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center gap-3">
            <FaYoutube className="w-5 h-5 text-red-600" />
            <a href="https://www.youtube.com/@HTTHeritageLucknowTravels" target="_blank" className="text-blue-600 hover:underline">
              YouTube
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaInstagram className="w-5 h-5 text-pink-600" />
            <a href="https://www.instagram.com/heritage_tour_and_travels?igsh=ZGxwYjRzY2JxY3g2" target="_blank" className="text-blue-600 hover:underline">
              Instagram
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaFacebook className="w-5 h-5 text-blue-600" />
            <a href="https://www.facebook.com/share/19hm4eaWX6/" target="_blank" className="text-blue-600 hover:underline">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
