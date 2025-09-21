"use client";
import { useState, useEffect, useRef } from "react";
import slides from "@/data/Gallery"; // adjust path if needed

export default function HeritageCarousel() {
  const [current, setCurrent] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const intervalRef = useRef(null);

  // Responsive: 3 items on desktop, 1 on mobile
  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth >= 768 ? 3 : 1);
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  // Auto-slide every 3s (pause when video is playing)
  useEffect(() => {
    if (!isVideoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [current, itemsToShow, isVideoPlaying]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + itemsToShow) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - itemsToShow + slides.length) % slides.length);
  };

  const getVisibleSlides = () => {
    let visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(slides[(current + i) % slides.length]);
    }
    return visible;
  };

  // Handle video play/pause events
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    clearInterval(intervalRef.current);
  };

  const handleVideoPauseOrEnd = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Gallery</h2>
      <div className="relative flex items-center">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black"
        >
          ‹
        </button>

        {/* Slides */}
        <div className="flex w-full gap-4 overflow-hidden justify-center">
          {getVisibleSlides().map((slide) => (
            <div
              key={slide.id}
              className="w-full md:w-1/3 flex-shrink-0 h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              {slide.type === "image" ? (
                <img
                  src={slide.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={slide.src}
                  controls
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPauseOrEnd}
                  onEnded={handleVideoPauseOrEnd}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black"
        >
          ›
        </button>
      </div>
    </div>
  );
}
