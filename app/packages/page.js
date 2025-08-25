"use client";
import { useEffect, useState } from "react";
import PackageCard from "@/components/PackageCard";
import { useSearchParams } from "next/navigation";

export default function PackagesPage() {
  const [data, setData] = useState([]);
  const params = useSearchParams();
  const tag = params.get("tag") || "";
  const q = params.get("q") || "";

  useEffect(() => {
    const usp = new URLSearchParams();
    if (tag) usp.set("tag", tag);
    if (q) usp.set("q", q);
    fetch(`/api/packages?${usp.toString()}`).then(r=>r.json()).then(setData);
  }, [tag, q]);

  return (
    <div className="section">
      <div className="flex items-end justify-between gap-3">
        <h1 className="text-3xl font-extrabold">Experiences</h1>
        <div className="text-sm text-slate-600">{data.length} results</div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {data.map(item => <PackageCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}
