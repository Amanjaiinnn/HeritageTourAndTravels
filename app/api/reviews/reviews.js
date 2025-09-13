import fetch from "node-fetch";

export default async function handler(req, res) {
  const placeId = process.env.GOOGLE_PLACE_ID; // add this in .env.local
  const apiKey = process.env.GOOGLE_API_KEY;   // add this in .env.local

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data.result.reviews || []);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
}
