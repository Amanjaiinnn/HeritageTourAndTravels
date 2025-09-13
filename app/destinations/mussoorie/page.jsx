"use client";
import Image from "next/image";
import { Calendar, MapPin, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MussooriePage() {
  const itinerary = [
    { day: "Day 1", title: "Arrival & Kempty Falls", desc: "Check-in, visit Kempty Falls, evening leisure at Mall Road." },
    { day: "Day 2", title: "Mussoorie Local Sightseeing", desc: "Explore Mall Road, Camel’s Back Road walk, enjoy local cafes." },
    { day: "Day 3", title: "Dhanaulti Eco Park", desc: "Day trip to Dhanaulti Eco Park, nature trails, adventure activities." },
    { day: "Day 4", title: "Departure", desc: "Check-out and transfer to Dehradun airport or railway station." },
  ];

  const highlights = [
    "Kempty Falls",
    "Mall Road Mussoorie",
    "Dhanaulti Eco Park",
    "Camel’s Back Road Walk"
  ];

  const photos = ["/tour16a.jpg", "/tour16b.jpg", "/tour16c.jpg"];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="relative h-80 w-full">
        <Image src="/mussoorie.jpg" alt="Mussoorie" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">Mussoorie & Dhanaulti Hill Tour</h1>
          <p className="mt-2 text-lg">4 Days / 3 Nights</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-rose-500" /> Destination Overview
          </h2>
          <p className="text-slate-700 leading-relaxed">
            District: Dehradun, Uttarakhand. <br />
            Experience serene hill station landscapes, scenic walks, waterfalls, and nature trails in Mussoorie and Dhanaulti.
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
              <div key={i} className="bg-white shadow rounded-xl p-4 text-center hover:shadow-md transition">{h}</div>
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
                <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full -left-3 ring-4 ring-white text-white text-xs">{idx + 1}</span>
                <h3 className="text-lg font-semibold">{item.day}: {item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/919214152266?text=Namaste,%20I%20would%20like%20to%20customize%20a%20Mussoorie%20tour.%20Please%20connect%20with%20me"
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