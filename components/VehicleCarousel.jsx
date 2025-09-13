"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import vehicles from "@/data/vehicles";

import "swiper/css";
import "swiper/css/navigation";

export default function VehicleCarousel() {
  return (
    <div className="w-full px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Our Vehicles</h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 }, // mobile full width
          768: { slidesPerView: 2 }, // tablet
          1024: { slidesPerView: 3 }, // desktop
        }}
        className="w-full"
      >
        {vehicles.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-3">{item.name}</h3>
              {item.rate && (
                <p className="text-gray-700 font-medium">{item.rate}</p>
              )}
              {item.category && (
                <p className="text-sm text-gray-500 mt-1">{item.category}</p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
