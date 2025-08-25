"use client";
import Link from "next/link";
import { Phone, MapPin, Mail} from "lucide-react";
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="grid md:grid-cols-4 gap-6 py-8 px-4 max-w-6xl mx-auto">
        <div>
          <div className="flex items-center gap-2">
           <Image
              src="/logo-removebg-preview.png" // path from /public
              alt="Heritage Tour & Travels Logo"
              width={80} // adjust as needed
              height={80}
              className="object-contain"
              priority
            />
                <div className="font-extrabold text-xl text-brand-700">Heritage Tour & Travels</div>
                </div>
          
          <p className="text-sm text-slate-600 mt-2">Simple, honest travel ideas since 2015.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link className="link" href="/about">About</Link></li>
            <li><Link className="link" href="/contact">Contact</Link></li>
            <li><Link className="link" href="/privacy">Privacy</Link></li>
            <li><Link className="link" href="/terms">Terms</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link className="link" href="/packages?tag=romantic">Romantic</Link></li>
            <li><Link className="link" href="/packages?tag=adventure">Adventure</Link></li>
            <li><Link className="link" href="/packages?tag=beach">Beach</Link></li>
            <li><Link className="link" href="/destinations">Destinations</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <div className="text-sm text-slate-600 space-y-2">
  <div className="text-sm text-slate-600 space-y-2">
      {/* Contact */}
      <div className="flex items-start gap-2">
        <Phone className="w-4 h-4 mt-1 text-brand-700" />
        <div>
          <span className="font-semibold">Contact:</span>{" "}
          <a href="tel:+919214152266" className="hover:text-brand-700">+91 9214152266</a>,{" "}
          <a href="tel:+918175051510" className="hover:text-brand-700">+91 8175051510</a>
        </div>
      </div>

      {/* Address 1 */}
      <div className="flex items-start gap-2">
        <MapPin className="w-4 h-4 mt-1 text-brand-700" />
        <div>
          <span className="font-semibold">Address 1:</span>{" "}
          <a 
            href="https://maps.app.goo.gl/oCTLGFXYCMLWTzRE7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-700"
          >
            5/1004, Viram Khand, Gomti Nagar, Lucknow-226010
          </a>
        </div>
      </div>

      {/* Address 2 */}
      <div className="flex items-start gap-2">
        <MapPin className="w-4 h-4 mt-1 text-brand-700" />
        <div>
          <span className="font-semibold">Address 2:</span>{" "}
          <a 
            href="https://maps.app.goo.gl/SzvDms7rmchz9c5L9?g_st=aw" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-700"
          >
            H. N. 51, Village Banarki, Ramnagar, Barabanki UP-225201
          </a>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <MapPin className="w-4 h-4 mt-1 text-brand-700" />
        <div>
          <span className="font-semibold">Address 3:</span>{" "}
          <a 
            href="https://maps.app.goo.gl/bgrE4jAb1mBCqGkj6" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-700"
          >
            Shankar Steel Opposite Ramlila Maidan Gorakhnath, Gorakhpur- 273015
          </a>
        </div>
      </div>

      {/* Email (Optional if you want it) */}
      <div className="flex items-start gap-2">
        <FaEnvelope className="w-6 h-6 text-red-600" />
        <div>
          <span className="font-semibold">Email:</span>{" "}
          <a href="mailto:info@yourdomain.com" className="hover:text-brand-700">heritagetourandtravelslucknow@gmail.com</a>
        </div>
      </div>
        <div className="text-sm text-slate-600 space-y-3">
      {/* Social Media Section */}
      
    </div>
    </div>
</div>
<div className="font-semibold mb-0">Follow us</div>
      <div className="flex items-center gap-4 pt-3">
        <a
          href="https://www.youtube.com/@HTTHeritageLucknowTravels"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-800 transition"
          aria-label="YouTube"
        >
          <FaYoutube className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/heritage_tour_and_travels?igsh=ZGxwYjRzY2JxY3g2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 transition"
          aria-label="Instagram"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          href="https://www.facebook.com/share/19hm4eaWX6/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition"
          aria-label="Facebook"
        >
          <FaFacebook className="w-6 h-6" />
        </a>
      </div>
        </div>
      </div>
      <div className="border-t border-slate-200">
            <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between text-s text-slate-500">
              <div>
                &copy; {new Date().getFullYear()} Heritage Tour & Travels. All rights reserved.
              </div>
              <div className="flex items-center gap-4">
                <a href="/terms" className="hover:text-slate-700 transition">
                  Terms & Conditions
                </a>
                <button
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                          aria-label="Back to Top"
                        >
                          <ArrowUp className="w-4 h-4" />
                        </button>
              </div>
            </div>
          </div>
    </footer>
  );
}
