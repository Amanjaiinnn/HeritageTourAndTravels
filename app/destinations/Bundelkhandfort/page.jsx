



"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import CityCarousel from "@/components/CityCarousel";
import Dehati from "@/components/Dehati";
import Intro from "@/components/Intro";
import VehicleCarousel from "@/components/VehicleCarousel";
import ReviewCarousel from "@/components/ReviewCarousel";

export default function HomePage() {
  const [destinations, setDestinations] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  // 🔹 Hardcoded packages
  const pack = [
    {
      id: 1,
      title: "Bundelkhand Forts & Spiritual Heritage (4 Days / 3 Nights)",
      slug: "Bundelkhandfirst",
      image: "/tour01.jpg",
      summary: "Districts: Banda, Mahoba, Chitrakoot.",
      highlights: [
        "Kalinjar Fort",
        "Vijayraghavgarh Fort",
        "Hanuman Dhara Temple, Chitrakoot",
        "Gupta Godavari Caves",
      ],
    },
    {
      id: 2,
      title: "Nature & Waterfalls of Bundelkhand (4 Days / 3 Nights)",
      slug: "Bundelkhandwaterfalls",
      image: "/tour2.jpg",
      summary: "Districts: Hamirpur, Banda, Chitrakoot.",
      highlights: [
        "Marpha Waterfalls (Chitrakoot)",
        "Keoti Waterfalls",
        "Pandav Caves & Natural Springs",
        "Ken River Scenic Views",
      ],
    },
    {
      id: 3,
      title: "Wildlife, Spiritual & River Trails (5 Days / 4 Nights)",
      slug: "wildlife",
      image: "/tour3.jpg",
      summary: "Districts: Chitrakoot, Mahoba, Hamirpur.",
      highlights: [
        "Panna Tiger Reserve Safari",
        "Ken Gharial Sanctuary",
        "Ramghat Aarti at Mandakini River",
        "Mahoba Sun Temple",
      ],
    },
    {
      id: 4,
      title: "Royal Bundelkhand & Festival Tour (4 Days / 3 Nights)",
      slug: "Bundelkhandfestival",
      image: "/tour4.jpg",
      summary: "Districts: Chitrakoot, Mahoba.",
      highlights: [
        "Orchha Fort & Jahangir Mahal",
        "Chaturbhuj Temple",
        "Ramleela Festival at Chitrakoot",
        "Folk Dance & Bundeli Music Nights",
      ],
    },
  ];
  


  return (
    <div>

      {/* Destinations Section */}
      <section id="destinations" className="section">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Curated Tours</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {pack.slice(0, 4).map((d) => (
            <DestinationCard key={d.id} item={d} />
          ))}
        </div>
      </section>

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
