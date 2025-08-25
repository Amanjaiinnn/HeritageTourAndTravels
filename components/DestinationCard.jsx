"use client";
import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({ item }) {
  return (

    <Link href={`/destinations?focus=${item.slug}`} className="card overflow-hidden group">
      <div className="relative h-44">
        <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition"/>
      </div>
      <div className="p-4">
        
        <div className="font-semibold">{item.title}</div>
        <p className="mt-1 text-sm text-slate-600 line-clamp-2">{item.summary}</p>
      </div>
    </Link>
  );
}
