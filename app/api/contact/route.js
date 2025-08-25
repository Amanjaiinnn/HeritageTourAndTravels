import { NextResponse } from "next/server";
export async function POST(req) {
  const body = await req.json();
  console.log("Contact submission:", body);
  return NextResponse.json({ ok: true });
}
