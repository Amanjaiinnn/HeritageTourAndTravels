"use client";
import React, { useState, useRef } from "react";

const cities = [
  {
    name: "Lucknow",
    image: "/luck.jpg",
    link: "/goa",
  },
  {
    name: "Gorakpur",
    image: "/Gorakhnath.jpg",
    link: "/maharashtra",
  },
  {
    name: "Barabanki",
    image: "/chandra.png",
    link: "/uttarakhand",
  },
  {
    name: "Varanasi",
    image: "/ghat.jpg",
    link: "/dubai",
  },
  {
    name: "Ayodhya",
    image: "/ayodhya.jpg",
    link: "/vrindavan",
  },
  {
    name: "Raebareli",
    image: "/rae.jpg",
    link: "/varanasi",
  },
];

const CityCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Swipe tracking
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cities.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cities.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCities = () => {
    const visibleCount =
      typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(cities[(currentIndex + i) % cities.length]);
    }
    return visible;
  };

  // Touch Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const delta = touchStartX.current - touchEndX.current;

    const swipeThreshold = 50; // px
    if (delta > swipeThreshold) {
      // Swiped left → next
      handleNext();
    } else if (delta < -swipeThreshold) {
      // Swiped right → prev
      handlePrev();
    }

    // reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="w-full py-12 bg-gray-100">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Avaliable at
      </h2>

      <div className="relative flex items-center w-full">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white z-30 opacity-70 hover:opacity-100 transition-opacity"
        >
          ‹
        </button>

        {/* Swipe Wrapper */}
        <div
          className="flex justify-center w-full gap-6 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {getVisibleCities().map((city, index) => (
            <a
              key={index}
              href={city.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-1 max-w-25 h-28 md:h-36 rounded-full shadow-lg overflow-hidden flex items-center justify-center transform hover:scale-105 transition duration-300"
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
