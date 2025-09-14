"use client";
import Image from "next/image";
import { Calendar, MapPin, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function KashmirPage() {
  const itinerary = [
    { day: "Day 1", title: "Arrival in Srinagar", desc: "Check-in, Shikara ride on Dal Lake, evening stroll at local market." },
    { day: "Day 2", title: "Srinagar Sightseeing", desc: "Visit Mughal Gardens: Shalimar, Nishat, and Chashme Shahi; explore local handicrafts." },
    { day: "Day 3", title: "Gulmarg Adventure", desc: "Drive to Gulmarg, enjoy Gondola ride and snow activities." },
    { day: "Day 4", title: "Pahalgam Excursion", desc: "Visit Betaab Valley, Aru Valley, and local trekking spots." },
    { day: "Day 5", title: "Local Exploration", desc: "Free morning in Srinagar, visit temples or local markets." },
    { day: "Day 6", title: "Departure", desc: "Check-out and transfer to airport or railway station." },
  ];

  const highlights = [
    "Dal Lake Shikara Ride, Srinagar",
    "Gulmarg Gondola Ride",
    "Betaab Valley, Pahalgam",
    "Mughal Gardens (Shalimar, Nishat)"
  ];

  const photos = ["/tour12a.jpg", "/tour12b.jpg", "/tour12c.jpg"];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-80 w-full">
        <Image src="/tour12a.jpg" alt="Kashmir" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">Kashmir Paradise Tour</h1>
          <p className="mt-2 text-lg">6 Days / 5 Nights</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-rose-500" /> Destination Overview
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Districts: Srinagar, Gulmarg, Pahalgam, Jammu & Kashmir. <br />
            Explore the breathtaking valleys, lakes, and gardens of the Kashmir region.
          </p>
        </div>

        {/* Photo Carousel */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Tour Photos</h2>
          <div className="w-full md:w-[70%] mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="rounded-2xl shadow"
            >
              {photos.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative w-full h-64 md:h-80">
                    <Image src={src} alt="" fill className="object-cover rounded-2xl" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" /> Highlights
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="bg-white shadow rounded-xl p-4 text-center hover:shadow-md transition">
                {h}
              </div>
            ))}
          </div>
        </div>

        {/* Itinerary */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-emerald-500" /> Itinerary
          </h2>
          <ol className="relative border-l border-slate-300">
            {itinerary.map((item, idx) => (
              <li key={idx} className="mb-8 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full -left-3 ring-4 ring-white text-white text-xs">
                  {idx + 1}
                </span>
                <h3 className="text-lg font-semibold">{item.day}: {item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/919214152266?text=Namaste,%20I%20would%20like%20to%20customize%20a%20Kashmir%20tour.%20Please%20connect%20with%20me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rose-600 text-white px-6 py-3 rounded-xl shadow hover:bg-rose-700 transition"
          >
            Inquire
          </a>
        </div>
      </div>
    </div>
  );
}