export default function AboutPage() {
  return (
    <div>
      {/* ✅ Hero Section FULL WIDTH */}
      <div
        className="w-full flex flex-col items-center justify-center h-[70vh] bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        <h1
          className="custom-heading text-4xl md:text-5xl font-bold drop-shadow-lg"
          style={{ color: '#ebebebff' }}
        >
          About Us
        </h1>
        <p
          className="mt-4 text-lg font-medium max-w-2xl"
          style={{ color: '#ebebebff' }}
        >
          Crafting memorable travel experiences across India, Nepal & Bhutan.
        </p>
      </div>

      {/* ✅ Content stays inside container */}
      <div className="container max-w-6xl py-10 md:py-16">
        <hr className="my-8 border-gray-300" />

        <h2 className="mb-4 custom-heading">About Heritage Tour & Travels</h2>
        <p>
          At <strong>Heritage Tour & Travels</strong>, we believe every journey
          should tell a story. Based in the heart of Uttar Pradesh, we are a
          trusted travel company dedicated to curating bespoke experiences that
          reflect your interests and pace. Our foundation rests on delivering
          exceptional, personalized service that transforms travel dreams into
          reality.
        </p>
        <p className="mb-8">
          Whether it’s the spiritual heritage of Varanasi, the historical
          grandeur of Lucknow, or the serene landscapes of Nepal and Bhutan, we
          stand by you as a reliable partner. Every detail of your trip is
          handled with care and professionalism, ensuring a seamless experience
          from start to finish.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="mb-4 custom-heading">Our Services</h2>

        <div className="mb-8">
          <h3 className="mt-6 mb-2">
            <strong>Tailored Tour Packages</strong>
          </h3>
          <p>
            Move beyond ordinary itineraries with our personalized tours across
            India, Nepal, and Bhutan. Each journey is carefully designed to suit
            your preferences—whether you’re seeking cultural exploration,
            spiritual retreats, or adventurous getaways. Your perfect trip is
            our priority.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="mt-6 mb-2">
            <strong>Vehicle Rental Services</strong>
          </h3>
          <p>
            Travel comfortably with our extensive fleet, tailored to meet
            diverse travel needs:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Group & Family Travel:</strong> Spacious options including
              Tempo Traveller (14, 17, and 25-seater), Urbania, and luxury buses.
            </li>
            <li>
              <strong>Business & Special Occasions:</strong> Premium rides such
              as BMW, Audi, and Mercedes for a touch of elegance.
            </li>
            <li>
              <strong>Standard Rentals:</strong> Trusted vehicles like Innova
              Crysta, Kia Carens, Ertiga, and Dzire for everyday journeys.
            </li>
          </ul>
          <p className="mt-3">
            Our vehicle services are available across major cities in Uttar
            Pradesh, including Lucknow, Gorakhpur, Ayodhya, Varanasi,
            Prayagraj, Barabanki, and Raebareli. We also specialize in corporate
            travel, ensuring reliable and comfortable transport for business
            teams and events.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="mt-6 mb-2 custom-heading">Hotel & Accommodation</h3>
          <p>
            To make your travel seamless, we also arrange hotel bookings suited
            to your preferences and budget. From boutique stays to premium
            hotels, we ensure your accommodation complements your itinerary and
            enhances your overall travel experience.
          </p>
        </div>
      </div>
    </div>
  );
}
