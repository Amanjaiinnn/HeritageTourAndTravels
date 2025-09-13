"use client";

import React, { useState, useEffect } from "react";
// Since external libraries like next/image and next/link are not available,
// we will use standard HTML tags for a self-contained solution.

// Note: Tailwind CSS is assumed to be available in this environment.

const images = [
  "/carousal1.jpg",
  "/carousal2.jpg",
  "/carousal3.jpg",
  "/carousal4.jpg",
  "/carousal5.jpg",
  "/carousal6.jpg",
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect to handle the automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Auto-advances every 5 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Function to handle manual slide change (for buttons and dots)
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  // Function to handle next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Function to handle previous slide
  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Carousel Slides Container */}
      <div id="carousel-slides" className="relative w-full h-full">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-[3000ms] ease-in-out ${
              i === currentSlide ? "opacity-100" : ""
            }`}
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white z-30 opacity-70 hover:opacity-100 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white z-30 opacity-70 hover:opacity-100 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => handleSlideChange(i)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ease-in-out ${
              i === currentSlide ? "bg-blue-500 opacity-100" : "bg-white opacity-50"
            }`}
          ></button>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20 pointer-events-none">
        <span className="badge pointer-events-auto bg-white/20 text-white px-3 py-1 text-xs md:text-sm font-semibold rounded-full backdrop-blur-sm">Curated getaways</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight text-white">
          Discover places you'll <span className="text-blue-400">love</span>
        </h1>
        <p className="text-slate-200 mt-4 max-w-prose">
          Modern, fuss-free travel ideas across India & beyond. Handpicked spots,
          flexible plans, real experiences.
        </p>
        <div className="mt-6 flex gap-3 pointer-events-auto">
          <a href="#destinations" className="px-6 py-3 font-semibold rounded-full transition duration-300 ease-in-out bg-blue-500 text-white hover:bg-blue-600">
            Popular Destinations
          </a>
          <a href="/packages" className="px-6 py-3 font-semibold rounded-full transition duration-300 ease-in-out bg-transparent text-white border border-white hover:bg-white hover:text-black">
            Experiences
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
