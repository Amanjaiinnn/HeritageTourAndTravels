"use client";
import Image from "next/image";
import { Calendar, MapPin, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SpitiPage() {
  const itinerary = [
    { day: "Day 1", title: "Arrival at Kaza", desc: "Check-in, relax and acclimatize." },
    { day: "Day 2", title: "Kaza Monastery & Key Monastery", desc: "Sightseeing of local monasteries and village exploration." },
    { day: "Day 3", title: "Chandratal Lake", desc: "Full day trip to the stunning Chandratal Lake, camping optional." },
    { day: "Day 4", title: "Tabo Monastery", desc: "Visit 1000-year-old Tabo Monastery and local villages." },
    { day: "Day 5", title: "Dhankar & Lhalung", desc: "Explore Dhankar Monastery, scenic trekking nearby." },
    { day: "Day 6", title: "Spiti Valley Excursion", desc: "Visit nearby lakes, valleys, and local cultural sites." },
    { day: "Day 7", title: "Departure", desc: "Check-out and transfer to next destination." },
  ];

  const highlights = [
    "Kaza Monastery",
    "Key Monastery",
    "Chandratal Lake",
    "Tabo Monastery"
  ];

  const photos = ["/tour17a.jpg", "/tour17b.jpg", "/tour17c.jpg"];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="relative h-80 w-full">
        <Image src="/tour17a.jpg" alt="Spiti Valley" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">Spiti Valley Road Adventure</h1>
          <p className="mt-2 text-lg">7 Days / 6 Nights</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-rose-500" /> Destination Overview
          </h2>
          <p className="text-slate-700 leading-relaxed">
            District: Lahaul & Spiti, Himachal Pradesh. <br />
            Explore remote monasteries, high-altitude lakes, and stunning Spiti landscapes.
          </p>
        </div>

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

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" /> Highlights
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="bg-white shadow rounded-xl p-4 text-center hover:shadow-md transition">{h}</div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-emerald-500" /> Itinerary
          </h2>
          <ol className="relative border-l border-slate-300">
            {itinerary.map((item, idx) => (
              <li key={idx} className="mb-8 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full -left-3 ring-4 ring-white text-white text-xs">{idx + 1}</span>
                <h3 className="text-lg font-semibold">{item.day}: {item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/919214152266?text=Namaste,%20I%20would%20like%20to%20customize%20a%20Spiti%20Valley%20tour.%20Please%20connect%20with%20me"
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