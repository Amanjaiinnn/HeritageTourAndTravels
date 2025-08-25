"use client";

import React from "react";

const AboutDGVS = () => {
  return (
    <section className="relative w-full bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Image */}
        <div className="relative w-full h-80 md:h-full rounded-2xl overflow-hidden ">
          <img
            src="/dihati.jpg"
            alt="Rural Development"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/30" />
          <h2 className="absolute bottom-4 left-4 text-2xl md:text-3xl font-extrabold text-white">
            Dehati Grammothan Vikas Samiti
          </h2> */}
        </div>

        {/* Right Side - Content */}
        <div className="space-y-5 text-slate-700">
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

          {/* Call to Action */}
          <div className="pt-4">
            <a
              href="/contact"
              className="inline-block px-6 py-3 font-semibold rounded-full transition duration-300 ease-in-out bg-blue-500 text-white hover:bg-blue-600"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDGVS;
