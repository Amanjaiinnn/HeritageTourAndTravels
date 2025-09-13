export default function Terms() {
  return (
    <>
      {/* Full-width hero (same pattern as About page) */}
      <div
        className="w-full flex flex-col items-center justify-center h-[60vh] bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/T&C.jpg')" }}
      >
        <h1 className="custom-heading text-4xl md:text-5xl font-bold drop-shadow-lg">
          Terms &amp; Conditions
        </h1>
        <p className="mt-2 text-base md:text-lg font-medium">
          Please read these terms carefully before booking.
        </p>
      </div>

      {/* Main content */}
      <div className="container max-w-6xl py-10 md:py-16">
        <ul className="space-y-3">
          <li>
            ⭐Time and distance are calculated from <strong>Garage to Garage</strong>.
          </li>
          <li>
            ⭐<strong>Night charges</strong> apply before <strong>06:00 AM</strong> and after{" "}
            <strong>09:00 PM</strong>.
          </li>
          <li>
            ⭐<strong>Toll tax, state tax, parking charges, and driver night charges</strong> are
            additional unless explicitly mentioned in your voucher.
          </li>
          <li>
            ⭐For outstation duty, a minimum of <strong>250 km per day</strong> is billable.
          </li>
          <li>
            ⭐<strong>GST @ 18%</strong> is applicable on the final bill.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="custom-heading mb-4">Booking &amp; Payments</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Reservations are confirmed on receipt of the booking advance as communicated at the time of quotation.</li>
          <li>Balance payment is due before the start of the trip or as per the payment schedule on your invoice.</li>
          <li>Prices are subject to change until confirmed; currency and tax changes may affect the final amount.</li>
          <li>Please verify itinerary, dates, passenger details, and pickup information on the confirmation voucher.</li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="custom-heading mb-4">Inclusions &amp; Exclusions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Inclusions typically cover the base vehicle fare for the selected category and driver allowance during normal hours.
          </li>
          <li>
            Exclusions usually include tolls, parking, interstate/state entry permits, monuments, guide fees, meals, and personal expenses unless specified.
          </li>
          <li>
            Air/rail tickets, hotel charges, and sightseeing entry fees are not included unless mentioned in writing.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="custom-heading mb-4">Vehicle Usage &amp; Charging Policy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Kilometers and hours are counted from garage departure to garage return.</li>
          <li>Route deviations or extra local runs beyond the agreed plan may incur additional charges.</li>
          <li>Upgrades (vehicle model/class) are subject to availability and may change the fare.</li>
          <li>Air-conditioning performance may be affected in hilly areas per manufacturer guidance.</li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="custom-heading mb-4">Driver Policy &amp; Night Rules</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Driver duty hours adhere to local regulations to ensure safety.</li>
          <li>Night halt/driver night charges apply for services extending beyond 9:00 PM or that require overnight stays.</li>
          <li>Please avoid asking the driver to exceed safe speed limits or legal hours; the driver may refuse unsafe routes or timings.</li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="custom-heading mb-4">Cancellations, No-Shows &amp; Date Changes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Cancellation fees depend on the time remaining before departure; non-refundable components (e.g., permits, special bookings) are fully chargeable.
          </li>
          <li>
            No-show at pickup or last-minute reductions in itinerary may be billed partially or fully as per policy.
          </li>
          <li>
            Rescheduling is subject to availability, rate revisions, and any third-party charges already incurred.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="custom-heading mb-4">Delays, Breakdowns &amp; Force Majeure</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We aim to maintain punctuality, but delays due to traffic, weather, road closures, civil unrest, or mechanical issues can occur.</li>
          <li>In case of a breakdown, reasonable assistance or a replacement (when feasible) will be arranged; liability is limited to the unused portion of service.</li>
          <li>Force majeure events beyond reasonable control may lead to rescheduling or refunds as per actuals and feasibility.</li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="custom-heading mb-4">Documents, ID &amp; Permits</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Guests must carry valid government-issued photo ID; foreign nationals may require passports/visas.</li>
          <li>Certain destinations require special entry permits; we’ll assist when included, otherwise charges/time apply.</li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="custom-heading mb-4">Luggage, Safety &amp; Conduct</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Luggage should fit within the vehicle’s designated space; excess luggage may require a larger vehicle at extra cost.</li>
          <li>Seat belts are advised at all times. Smoking, alcohol, or illegal substances inside the vehicle are prohibited.</li>
          <li>Any damage to the vehicle/interiors due to passenger actions may be chargeable.</li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="custom-heading mb-4">Liability &amp; Disputes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Our liability is limited to the amount paid for the specific service in question.</li>
          <li>All disputes are subject to the jurisdiction of the local courts where the booking is made/billed.</li>
        </ul>
      </div>
    </>
  );
}
