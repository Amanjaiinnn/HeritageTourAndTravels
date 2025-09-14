import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  try {
    // Get photo references from Google Places API
    const detailsRes = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photos&key=${apiKey}`
    );
    const detailsData = await detailsRes.json();

    if (!detailsData.result?.photos) {
      return NextResponse.json({ photos: [] });
    }

    // Construct direct photo URLs
    const photoUrls = detailsData.result.photos.map(
      (photo) =>
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo.photo_reference}&key=${apiKey}`
    );

    return NextResponse.json({ photos: photoUrls });
  } catch (error) {
    console.error("Error fetching Google Maps photos:", error);
    return NextResponse.json({ photos: [] }, { status: 500 });
  }
}
