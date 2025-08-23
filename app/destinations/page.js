"use client";
import { useEffect, useState } from "react";
import DestinationCard from "@/components/DestinationCard";

export default function DestinationsPage() {
  const [data, setData] = useState([]);

  useEffect(() => { fetch("/api/destinations").then(r=>r.json()).then(setData); }, []);

  return (
    <div className="section">
      <h1 className="text-3xl font-extrabold">All Destinations</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {data.map(item => <DestinationCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}
