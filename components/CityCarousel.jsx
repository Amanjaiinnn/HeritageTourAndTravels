"use client";
import React, { useState } from "react";

const cities = [
  {
    name: "Lucknow",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
    link: "/goa",
  },
  {
    name: "Gorakpur",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1400&auto=format&fit=crop",
    link: "/maharashtra",
  },
  {
    name: "Barabanki",
    image: "https://images.unsplash.com/photo-1598373182133-523aa4b44afc?q=80&w=1400&auto=format&fit=crop",
    link: "/uttarakhand",
  },
  {
    name: "Varanasi",
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=1400&auto=format&fit=crop",
    link: "/dubai",
  },
  {
    name: "Ayodhya",
    image: "https://images.unsplash.com/photo-1581320546602-19a1a5d41b8b?q=80&w=1400&auto=format&fit=crop",
    link: "/vrindavan",
  },
  {
    name: "Raebareli",
    image: "https://images.unsplash.com/photo-1589386417689-791db56b67c5?q=80&w=1400&auto=format&fit=crop",
    link: "/varanasi",
  },
];

const CityCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cities.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cities.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCities = () => {
    // Show 1 city on mobile, 3 on larger screens
    const visibleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(cities[(currentIndex + i) % cities.length]);
    }
    return visible;
  };

  return (
    <section className="w-full py-12 bg-gray-100">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Our Services
      </h2>

      <div className="relative flex items-center w-full">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white z-30 opacity-70 hover:opacity-100 transition-opacity"
        >
          ‹
        </button>

        {/* City Blocks */}
        <div className="flex justify-center w-full gap-6 overflow-hidden">
          {getVisibleCities().map((city, index) => (
            <a
              key={index}
              href={city.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-1 max-w-25 h-28 md:h-36 rounded-full shadow-lg overflow-hidden flex items-center justify-center transform hover:scale-105 transition duration-3  00"
              style={{
                backgroundImage: `url(${city.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <span className="relative text-white font-semibold text-lg">
                {city.name}
              </span>
            </a>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white z-30 opacity-70 hover:opacity-100 transition-opacity"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default CityCarousel;
