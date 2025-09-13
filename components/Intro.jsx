import React from "react";

export default function Intro({ onBook = () => {  const phoneNumber = "919999999999"; // Replace with your WhatsApp number
  const message = "Hello, I would like to book a vehicle with Heritage Tour & Travels.";
  const url = "https://wa.me/919214152266?text=Namaste,%20I%20would%20like%20to%20customize%20a%20family%20tour.%20Please%20connect%20with%20me";
  window.open(url, "_blank");}
  , whatsappUrl = "#" }
) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
      <div className="bg-gradient-to-r from-slate-50 to-white shadow-lg rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left: Hero text */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mb-4">Personalized Travel & Rentals</span>

            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900 mb-4">Heritage Tour &amp; Travels</h1>

            <p className="text-slate-600 mb-6"> We specialize in curated travel experiences across India, Nepal and Bhutan — backed by glowing reviews. Whether it’s a family trip, corporate travel, wedding transport or a hotel booking, we craft the journey to suit your needs.</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white rounded-xl border">
                <h3 className="text-sm font-semibold text-slate-700">Group & Family</h3>
                <p className="text-xs text-slate-500 mt-1">Tempo travellers and buses for comfortable group travel.</p>
              </div>

              <div className="p-4 bg-white rounded-xl border">
                <h3 className="text-sm font-semibold text-slate-700">Corporate & Events</h3>
                <p className="text-xs text-slate-500 mt-1">Corporate bookings and premium vehicles for business & weddings.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={onBook}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-3 rounded-lg shadow focus:outline-none"
              >
                Book Now
              </button>

              <a
                href="https://wa.me/919214152266?text=Namaste,%20I%20would%20like%20to%20customize%20a%20family%20tour.%20Please%20connect%20with%20me"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-slate-200 px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-50"
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>

          {/* Right: Vehicles & service list */}
          <div className="p-6 lg:p-10 bg-gradient-to-b from-white to-slate-50">
            <div className="space-y-6">

              <div className="rounded-xl bg-white p-4 shadow-inner border">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Vehicles We Provide</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <span className="text-sm p-2 rounded-md bg-slate-50 border">Tempo Traveller</span>
                  <span className="text-sm p-2 rounded-md bg-slate-50 border">14 Seat</span>
                  <span className="text-sm p-2 rounded-md bg-slate-50 border">17 Seat</span>
                  <span className="text-sm p-2 rounded-md bg-slate-50 border">25 Seat</span>
                  <span className="text-sm p-2 rounded-md bg-slate-50 border">Urbania</span>
                  <span className="text-sm p-2 rounded-md bg-slate-50 border">Bus</span>
                  <span className="text-sm p-2 rounded-md bg-slate-50 border">Innova Crysta</span>
                  <span className="text-sm p-2 rounded-md bg-slate-50 border">Kia Carens</span>
                  <span className="text-sm p-2 rounded-md bg-slate-50 border">Ertiga</span>
                  <span className="text-sm p-2 rounded-md bg-slate-50 border">Dzire</span>
                </div>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-inner border">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Premium / Business</h4>
                <p className="text-sm text-slate-600 mb-3">For weddings, VIP transfers and business travel we arrange premium cars:</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-sm px-3 py-2 border rounded-md">BMW</span>
                  <span className="text-sm px-3 py-2 border rounded-md">Audi</span>
                  <span className="text-sm px-3 py-2 border rounded-md">Mercedes</span>
                </div>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-inner border">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Bookings & Coverage</h4>
                <p className="text-sm text-slate-600 mb-2">We handle hotel bookings and full itinerary support. We operate pickups across:</p>

                <ul className="text-sm text-slate-700 grid grid-cols-2 gap-1">
                  <li>Lucknow</li>
                  <li>Gorakhpur</li>
                  <li>Ayodhya</li>
                  <li>Varanasi</li>
                  <li>Prayagraj</li>
                  <li>Barabanki</li>
                  <li>Raebareli</li>
                </ul>

                <p className="text-xs text-slate-500 mt-3">We also take bookings for Nepal and Bhutan and provide vehicles across India for tours and corporate needs.</p>
              </div>

              <div className="rounded-xl p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <h4 className="text-lg font-semibold">Why choose us?</h4>
                <ul className="mt-3 text-sm space-y-2">
                  <li>• Customized itineraries with flexible pickup points</li>
                  <li>• Vehicles for every group size and purpose</li>
                  <li>• Trusted service and positive customer reviews</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Footer CTA */}
        <div className="border-t bg-white/50 px-6 py-4">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-600">Ready to plan your trip? Get a free quote or request a custom itinerary.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={onBook} className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold">Contact</button>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
