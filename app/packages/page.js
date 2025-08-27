"use client";
import { useState } from "react";
import PackageCard from "@/components/PackageCard";

export default function PackagesPage() {
  // Updated data for vehicles with new rates
  const [vehicles] = useState([
    {
      id: 1,
      name: "Tempo Traveller (9 Seater) - Fully AC",
      image: "/traveller-9.png",
      rate: "₹22/km + ₹250/day (Journey Charge)",
      category: "Group & Family Travel",
    },
    {
      id: 2,
      name: "Tempo Traveller (14 Seater) - Fully AC",
      image: "/Traveller-13.png",
      rate: "₹24/km + ₹250/day (Journey Charge)",
      category: "Group & Family Travel",
    },
    {
      id: 3,
      name: "Tempo Traveller (17 Seater) - Fully AC",
      image: "/18.png",
      rate: "₹27/km + ₹250/day (Journey Charge)",
      category: "Group & Family Travel",
    },
    {
      id: 4,
      name: "Tempo Traveller (22 Seater) - Fully AC",
      image: "/Traveller-35.png",
      rate: "₹32/km + ₹250/day (Journey Charge)",
      category: "Group & Family Travel",
    },
    {
      id: 5,
      name: "Tempo Traveller (25 Seater) - Fully AC",
      image: "/Traveller-35.png",
      rate: "₹35/km + ₹250/day (Journey Charge)",
      category: "Group & Family Travel",
    },
    {
      id: 6,
      name: "Luxury Bus (30 Seater) - Fully AC",
      image: "/Bus-1.jpeg.webp",
      rate: "₹42/km + ₹250/day (Journey Charge)",
      category: "Group & Family Travel",
    },
    {
      id: 7,
      name: "Luxury Bus (35 Seater) - Fully AC",
      image: "/Bus-2.jpeg.webp",
      rate: "₹45/km + ₹250/day (Journey Charge)",
      category: "Group & Family Travel",
    },
    {
      id: 8,
      name: "Luxury Bus (45 Seater) - Fully AC",
      image: "/buss.jpg",
      rate: "₹60/km + ₹250/day (Journey Charge)",
      category: "Group & Family Travel",
    },
    {
      id: 9,
      name: "Luxury Bus (52 Seater) - Fully AC",
      image: "/bus-1.jpeg",
      rate: "₹70/km + ₹250/day (Journey Charge)",
      category: "Group & Family Travel",
    },
    {
      id: 10,
      name: "Innova Crysta",
      image: "/innova.png",
      rate: "₹16/km",
      category: "Standard Rentals",
    },
    {
      id: 11,
      name: "Kia Carens",
      image: "/carens.jpeg",
      rate: "₹14/km",
      category: "Standard Rentals",
    },
    {
      id: 12,
      name: "Ertiga",
      image: "/ertiga.jpeg",
      rate: "₹13/km",
      category: "Standard Rentals",
    },
    {
      id: 13,
      name: "Dzire",
      image: "/dzire.jpeg",
      rate: "₹11/km",
      category: "Standard Rentals",
    },
    {
      id: 14,
      name: "BMW",
      image: "/bmw.jpeg",
      rate: "₹100/km",
      category: "Business / Marriage Purpose",
    },
    {
      id: 15,
      name: "Audi",
      image: "audi.jpeg",
      rate: "₹120/km",
      category: "Business / Marriage Purpose",
    },
    {
      id: 16,
      name: "Mercedes",
      image: "merc.jpeg",
      rate: "₹150/km",
      category: "Business / Marriage Purpose",
    },
  ]);

  return (
    <div className="section">
      {/* Header */}
      <div className="flex items-end justify-between gap-3">
        <h1 className="text-3xl font-extrabold">Our Vehicles</h1>
        <div className="text-sm text-slate-600">{vehicles.length} Available</div>
      </div>

      {/* Vehicle Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {vehicles.map((item) => (
          <PackageCard key={item.id} item={item} />
        ))}
      </div>

      {/* Terms & Conditions */}
      <div className="mt-12 bg-gray-100 p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Time & Distance will be calculated Garage to Garage.</li>
          <li>Night Charges applicable before 06 AM & after 09 PM.</li>
          <li>Toll Tax, State Tax, Parking & Driver Night extra.</li>
          <li>Outstation duty requires a minimum of 250 km running per day.</li>
          <li>Journey Charge ₹250/day applicable on all vehicles.</li>
          <li>GST Bill: 18% GST extra on final bill amount.</li>
        </ul>
      </div>
    </div>
  );
}