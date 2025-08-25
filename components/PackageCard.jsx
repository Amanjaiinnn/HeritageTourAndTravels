"use client";
import Image from "next/image";
import Link from "next/link";

export default function PackageCard({ item }) {
  return (
    <Link href={`/packages?focus=${item.slug}`} className="card overflow-hidden group">
      <div className="relative h-44">
        <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition"/>
        <div className="absolute top-3 left-3 badge">{item.duration}</div>
      </div>
      <div className="p-4">
        <div className="font-semibold">{item.title}</div>
        <div className="mt-1 text-sm text-slate-600">{item.location}</div>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">{item.summary}</p>
      </div>
    </Link>
  );
}
