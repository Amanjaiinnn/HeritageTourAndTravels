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
          <h2 className="text-2xl font-bold">Curated Tours</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {destinations.slice(0,6).map(d => <DestinationCard key={d.id} item={d} />)}
        </div>
      </section>

      <section id="information" className="section">
        <div className="mb-8">
          <h3 className="mt-6 mb-2">
            <strong>Tailored Tour Packages</strong>
          </h3>
          <p>
            Move beyond ordinary itineraries with our personalized tours across
            India, Nepal, and Bhutan. Each journey is carefully designed to suit
            your preferences—whether you’re seeking cultural exploration,
            spiritual retreats, or adventurous getaways. Your perfect trip is
            our priority.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="mt-6 mb-2">
            <strong>Vehicle Rental Services</strong>
          </h3>
          <p>
            Travel comfortably with our extensive fleet, tailored to meet
            diverse travel needs:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Group & Family Travel:</strong> Spacious options including
              Tempo Traveller (14, 17, and 25-seater), Urbania, and luxury buses.
            </li>
            <li>
              <strong>Business & Special Occasions:</strong> Premium rides such
              as BMW, Audi, and Mercedes for a touch of elegance.
            </li>
            <li>
              <strong>Standard Rentals:</strong> Trusted vehicles like Innova
              Crysta, Kia Carens, Ertiga, and Dzire for everyday journeys.
            </li>
          </ul>
          <p className="mt-3">
            Our vehicle services are available across major cities in Uttar
            Pradesh, including Lucknow, Gorakhpur, Ayodhya, Varanasi,
            Prayagraj, Barabanki, and Raebareli. We also specialize in corporate
            travel, ensuring reliable and comfortable transport for business
            teams and events.
          </p>
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
