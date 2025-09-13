"use client";
import React from "react";

const Dehati = () => {
  return (
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
  );
};

export default Dehati;
