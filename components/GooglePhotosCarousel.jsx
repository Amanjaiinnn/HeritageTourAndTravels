"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function GooglePhotosCarousel() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await fetch("/api/google-photos");
        const data = await res.json();
        setPhotos(data.photos || []);
      } catch (error) {
        console.error("Error loading photos:", error);
      }
    }
    fetchPhotos();
  }, []);

  if (photos.length === 0) {
    return <p className="text-center text-gray-500">Loading photos...</p>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
      >
        {photos.map((url, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={url}
              alt={`Business photo ${idx + 1}`}
              className="w-full h-[400px] object-cover rounded-2xl shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
