"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import CityCarousel from "@/components/CityCarousel";
import Dehati from "@/components/Dehati";

export default function HomePage() {
  const [destinations, setDestinations] = useState([]);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("/api/destinations").then(r=>r.json()).then(setDestinations);
    fetch("/api/packages").then(r=>r.json()).then(setPackages);
  }, []);

  return (
    <div>
      <Hero />

      <CityCarousel />

      <Dehati />

      <section id="destinations" className="section">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Popular Destinations</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {destinations.slice(0,6).map(d => <DestinationCard key={d.id} item={d} />)}
        </div>
      </section>

      <section id="packages" className="section">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Experiences</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {packages.slice(0,6).map(p => <PackageCard key={p.id} item={p} />)}
        </div>
      </section>
    </div>
  );
}
