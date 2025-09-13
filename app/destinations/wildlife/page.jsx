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
        "/tour3a.jpg",
        "/tour3b.jpg",
        "/tour3c.jpg",
        "/tour3d.jpg",
        "/tour3e.jpg",
        "/tour3f.jpg",
        "/tour3g.jpg",
        "/tour3h.jpg",
        "/tour3j.jpg",
        "/tour3k.jpg",
        "/tour3l.jpg",
        "/tour3m.jpg",
        "/tour3n.jpg",
        "/tour3o.jpg",
        "/tour3p.jpg",
        "/tour3q.jpg",
        
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-80 w-full">
        <Image
          src="/tour3n.jpg" // replace with your destination hero image
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

      <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/dihatii.jpg"
            alt="Rural Development"
            className="
              w-full h-auto rounded-2xl shadow-lg object-cover
              sm:max-w-[90%]   /* small phones */
              md:max-w-[80%]   /* tablets / iPads portrait */
              lg:max-w-[70%]   /* iPads landscape / small laptops */
              laptop:max-w-[65%] /* custom laptop (1366px–1536px) */
              xl:max-w-[60%]   /* large desktops */
              2xl:max-w-[55%]  /* extra large desktops */
            "
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Dehati Development: Empowering Rural India
          </h2>
          <p>
            <span className="font-semibold text-brand-700">
              Dehati Grammothan Vikas Samiti (DGVS)
            </span>{" "}
            is a non-profit rural development organization working to promote
            sustainable livelihood, culture, and tourism in villages. We focus
            on preserving heritage, encouraging local entrepreneurship, and
            improving rural infrastructure.
          </p>
          <p>
            Our activities include training villagers in hospitality, supporting
            homestay development, and promoting eco-friendly practices. We also
            organize cultural festivals to showcase local art, craft, and
            cuisine. The organization works closely with community members to
            generate employment through tourism.
          </p>
          <p>
            We believe in empowering rural youth and women by providing skill
            development opportunities. Our goal is to make villages
            self-reliant while protecting their traditions. Through our
            initiatives, we connect travelers with authentic rural experiences.
          </p>
          <p>
            We have been actively working in multiple villages across{" "}
            <span className="font-semibold">Bundelkhand</span>, creating a
            bridge between culture and commerce.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}
