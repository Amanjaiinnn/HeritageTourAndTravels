"use client";
import { Phone, MapPin, Clock } from "lucide-react";
import { FaYoutube, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full flex flex-col items-center justify-center h-[70vh] bg-cover bg-center text-white text-center relative"
        style={{ backgroundImage: "url('/contact-bg.jpg')" }}
      >
        <div className="absolute inset-0 " />
        <h1 className="relative custom-heading text-4xl md:text-5xl font-bold drop-shadow-lg -translate-y-12">
          Contact Us
        </h1>
        <p className="relative mt-6 text-lg md:text-xl max-w-2xl translate-y-10">
          We’re here to assist you with bookings, packages, and all your travel needs.
        </p>
      </div>

      {/* Main Content */}
      <div className="container max-w-5xl py-12 md:py-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">
          {/* Company Heading */}
          <div>
            <h2 className="custom-heading text-4xl md:text-5xl font-bold drop-shadow-lg">
              Heritage Tours & Travels
            </h2>
            <p className="text-slate-600 leading-relaxed max-w-3xl">
              Your trusted travel partner in Uttar Pradesh. From curated holiday
              packages to personalized itineraries, we ensure memorable journeys
              across India and beyond. Reach out to us for bookings, enquiries,
              or travel assistance — our team is always happy to help.
            </p>
          </div>

          {/* Contact Info (Fixed) */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: Addresses */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Our Offices</h3>

              {/* Lucknow */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <a
                  href="https://maps.app.goo.gl/oCTLGFXYCMLWTzRE7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  Lucknow: 5/1004, Viram Khand, Gomti Nagar, Lucknow-226010
                </a>
              </div>

              {/* Barabanki */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=H.+N.+51,+Village+Banarki,+Ramnagar,+Barabanki,+UP-225201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  Barabanki: H. N. 51, Village Banarki, Ramnagar, Barabanki UP-225201
                </a>
              </div>

              {/* Gorakhpur */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Shankar+Steel+Opposite+Ramlila+Maidan+Gorakhnath,+Gorakhpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  Gorakhpur: Shankar Steel Opposite Ramlila Maidan, Gorakhnath, Gorakhpur-273015
                </a>
              </div>

              {/* Varanasi */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <a
                  href="https://maps.app.goo.gl/JB99JmjmifUSi6hv5?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  Varanasi: Varanasi city railway station, Jalalipura, Varanasi, Uttar Pradesh 221002
                </a>
              </div>

              {/* Ayodhya */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <a
                  href="https://maps.app.goo.gl/6rwV1GSvPRkyhEoK6?g_st=awb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  Ayodhya: Infrontoff Arya Sanskar Bhawan, Bhikhapur,Deokali, Ayodhya-224001
                </a>
              </div>

              {/* Prayagraj */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <a
                  href="google.com/maps/place/Anurag+Mishra+%26+company,+B-292,+Vishnu+Nagar,+Indira+Nagar+Awas+Vikas+Colony,+Indira+Nagar,+Raebareli,+Uttar+Pradesh+229001/@26.2115192,81.2461472,3a,75y,218.83h,90.71t/data=!3m5!1e1!3m3!1sk0C4kPgUiCI4kPJtaO9Ebg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dk0C4kPgUiCI4kPJtaO9Ebg%26w%3D900%26h%3D600%26ll%3D0.0,0.0%26yaw%3D218.0%26pitch%3D0.0%26cb_client%3Dgmm.iv.android!4m2!3m1!1s0x399ba15fe906b87d:0xc9ee3ed37eb6d2f0?utm_source=mstt_0&g_ep=CAESBzI1LjM0LjUYACCBgQEqqwEsOTQyNjc3MjcsOTQyODIzMzcsOTQyODQ0NzgsOTQyMjMyOTksOTQyMTY0MTMsOTQyODA1NzYsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNjI3MzMsNDcwODQzOTMsOTQyMTMyMDAsOTQyNTgzMjUsOTQyODY4NzZCAklO&skid=f6953849-723d-412c-bc40-1462fc8828d7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  Raebareli: B292, Awash Vikash Colony, Indira Nagar Raebareli 229001
                </a>
              </div>
            </div>

            {/* Right: Phones + Hours */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Get in Touch</h3>
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

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <p>Available: Mon – Sat (10:00 AM – 7:00 PM)</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="pt-6">
            <iframe
              className="w-full h-64 md:h-80 rounded-xl shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.917322929498!2d81.012!3d26.848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999563c!2sHeritage%20Tours!5e0!3m2!1sen!2sin!4v1692264000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-5">
              <a href="https://www.youtube.com/@HTTHeritageLucknowTravels" target="_blank" className="flex items-center gap-2 hover:text-red-600">
                <FaYoutube className="w-5 h-5" /> YouTube
              </a>
              <a href="https://www.instagram.com/heritage_tour_and_travels?igsh=ZGxwYjRzY2JxY3g2" target="_blank" className="flex items-center gap-2 hover:text-pink-600">
                <FaInstagram className="w-5 h-5" /> Instagram
              </a>
              <a href="https://www.facebook.com/share/19hm4eaWX6/" target="_blank" className="flex items-center gap-2 hover:text-blue-600">
                <FaFacebook className="w-5 h-5" /> Facebook
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col gap-4 mt-6">
            <a 
              href="https://wa.me/919214152266?text=Hello,%20I%20am%20interested%20in%20your%20Ayodhya%20Darshan%20package.%20Please%20send%20me%20pricing%20and%20details." 
              target="_blank"
              className="w-fit bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
            >
              Inquire more about Heritage Tours & Travels 
            </a>

            <a 
              href="https://wa.me/919214152266?text=Hello,%20I%20am%20interested%20in%20your%20Ayodhya%20Darshan%20package.%20Please%20send%20me%20pricing%20and%20details." 
              target="_blank"
              className="w-fit bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
            >
              Inquire about prices 
            </a>

            <a 
              href="https://wa.me/919214152266?text=Hello,%20I%20am%20interested%20in%20your%20Ayodhya%20Darshan%20package.%20Please%20send%20me%20pricing%20and%20details." 
              target="_blank"
              className="w-fit bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
            >
              Customize our tours 
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
