import packages from "@/data/packages.json";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") || "").toLowerCase();
  const tag = (searchParams.get("tag") || "").toLowerCase();
  const filtered = packages.filter(p => {
    const matchesQ = q
      ? p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q)
      : true;
    const matchesTag = tag ? (p.tags || []).some(t => t.toLowerCase() === tag) : true;
    return matchesQ && matchesTag;
  });
  return NextResponse.json(filtered);
}
