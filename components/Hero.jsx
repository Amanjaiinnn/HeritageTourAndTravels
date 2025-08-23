import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="section grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge">Curated getaways</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            Discover places you'll <span className="text-brand-700">love</span>
          </h1>
          <p className="text-slate-600 mt-4 max-w-prose">
            Modern, fuss-free travel ideas across India & beyond. Handpicked spots, flexible plans, real experiences.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="#destinations" className="btn btn-primary">Popular Destinations</Link>
            <Link href="/packages" className="btn btn-outline">Experiences</Link>
          </div>
        </div>
        <div className="relative h-72 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1400&auto=format&fit=crop"
            alt="Travel Collage"
            fill
            className="object-cover rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
