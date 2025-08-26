"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = [
    { href: "/#destinations", label: "Destinations" },
    { href: "/packages", label: "Vehicles" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/terms", label: "Terms & Conditions" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="flex items-center gap-0">
            <Image
              src="/logo-removebg-preview.png"
              alt="Heritage Tour & Travels Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
            <span className="font-extrabold text-xl text-brand-700">
              Heritage Tour & Travels
            </span>
          </Link>
        <nav className="hidden md:flex items-center gap-4">
          {items.map(i => (
            <Link key={i.href} className="hover:text-brand-700" href={i.href}>
              {i.label}
            </Link>
          ))}
          <Link href="/packages" className="btn btn-primary">Explore</Link>
        </nav>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-xl border border-slate-200">
          {open ? <X size={18}/> : <Menu size={18}/> }
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container max-w-6xl mx-auto px-4 py-2 flex flex-col gap-2">
            {items.map(i => (
              <Link key={i.href} href={i.href} onClick={()=>setOpen(false)} className="py-2">
                {i.label}
              </Link>
            ))}
            <Link href="/packages" className="btn btn-primary w-full" onClick={()=>setOpen(false)}>
              Explore
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
