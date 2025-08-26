"use client";
import Image from "next/image";
import { Calendar, MapPin, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DestinationPageC() {
  const itinerary = [
    { day: "Day 1", title: "Chitrakoot", desc: "Mau Gurdari-Raghav Waterfall, Ranipur Tiger Reserve. Night Stay: Mau Gurdari Homestay." },
    { day: "Day 2", title: "Chitrakoot", desc: "Bagrehi-Valmiki Tapo Sthali, Vindhya forests. Char-Somnath Temple, Valmiki River banks. Night Stay: Char Homestay." },
    { day: "Day 3", title: "Chitrakoot", desc: "Rasin-Scenic farmlands, check-dam, local temples. Rishiyan-Bhandevar Shiva Temple, Yamuna River banks. Night Stay: Rishiyan Homestay." },
    { day: "Day 4", title: "Mahoba", desc: "Kakun-Siddh Baba’s Cave, historical Hanuman Mandir. Supa-Gateway to Charkhari, local markets. Night Stay: Kakun Homestay." },
    { day: "Day 5", title: "Departure",desc: ""},
  ];

const highlights = ["Forests & Tiger Reserve", "Sacred Temples & Shrines", "Waterfalls & Riverbanks", "Spiritual Caves & Historic Temples"];
  const photos = [
    "/manali1.jpg",
    "/manali2.jpg",
    "/manali3.jpg",
    "/manali4.jpg",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-80 w-full">
        <Image
          src="/manali.jpg" // replace with your destination hero image
          alt="Manali"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">Wildlife, Spiritual & River Trails  </h1>
          <p className="mt-2 text-lg">5 Days / 4 Nights</p>
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
           Embark on a spiritual odyssey through Bundelkhand's heartland. 
           This trip uncovers Chitrakoot's sacred sites, waterfalls, and Vindhya forests, 
           before revealing Mahoba's hidden spiritual caves and historic temples, perfectly blending devotion with natural beauty. 
           <br /> Districts: Chitrakoot, Mahoba, Hamirpur.
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
                    <Image
                      src={src}
                      alt={`Manali Photo ${idx + 1}`}
                      fill
                      className="object-cover rounded-2xl"
                    />
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
              <div
                key={i}
                className="bg-white shadow rounded-xl p-4 text-center hover:shadow-md transition"
              >
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
        {/* CTA */}
            <div className="mt-10 text-center">
            <a
                href="https://wa.me/919214152266?text=Namaste,%20I%20would%20like%20to%20customize%20a%20family%20tour.%20Please%20connect%20with%20me"
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
