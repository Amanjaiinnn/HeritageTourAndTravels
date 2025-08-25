"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/911234567890" // replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50 animate-bounce"
    >
      <span className="absolute w-12 h-12 rounded-full bg-green-400 opacity-50 blur-xl animate-ping"></span>
      <FaWhatsapp size={28} className="relative z-10" />
    </a>
  );
};

export default FloatingWhatsApp;

