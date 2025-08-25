export default function AboutPage() {
  return (
    <div>
      {/* ✅ Hero Section FULL WIDTH */}
      <div
        className="w-full flex flex-col items-center justify-center h-[60vh] bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/tour.jpg')" }}
      >
        <h1 className="custom-heading text-4xl md:text-5xl font-bold drop-shadow-lg">
          About Us
        </h1>
        <p className="mb-8 text-lg font-medium" style={{ color: '#136bcf' }}>
          We craft simple, honest travel experiences around India & beyond.
        </p>
      </div>

      {/* ✅ Content stays inside container */}
      <div className="container max-w-6xl py-10 md:py-16">
        <hr className="my-8 border-gray-300" />

        <h2 className="mb-4 custom-heading">About Heritage Tour & Travels</h2>
        <p>
          At <strong>Heritage Tour & Travels</strong>, we believe that every
          journey should be a unique story. Based in the heart of Uttar Pradesh,
          we are a leading travel company specializing in creating bespoke travel
          experiences that are as unique as you are. Our reputation is built on
          providing exceptional, personalized service that turns your travel
          dreams into a reality.
        </p>
        <p className="mb-8">
          Whether you're exploring the spiritual heritage of Varanasi, the
          historical grandeur of Lucknow, or the serene landscapes of Nepal and
          Bhutan, we are your trusted partner every step of the way. We are
          committed to delivering the best service, ensuring every detail of your
          trip is handled with care and professionalism.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="mb-4 custom-heading">Our Services</h2>

        <div className="mb-8">
          <h3 className="mt-6 mb-2">
            <strong>Tailored Tour Packages</strong>
          </h3>
          <p>
            Go beyond standard itineraries. We craft personalized tours across
            India, Nepal, and Bhutan, meticulously designed to match your
            interests, pace, and preferences. From cultural excursions to
            adventurous getaways, your perfect trip is our priority.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="mt-6 mb-2">
            <strong>Vehicle Rental Services</strong>
          </h3>
          <p>
            Travel in comfort and style with our extensive fleet of vehicles. Ideal
            for group tours, family vacations, or corporate travel, we offer a
            range of options to suit your needs:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Group & Family Travel:</strong> Tempo Traveller (14, 17, and
              25-seater), Urbania, Bus, and other spacious vehicles.
            </li>
            <li>
              <strong>Business & Special Occasions:</strong> Arrive in elegance
              with our premium vehicles, including BMW, Audi, and Mercedes.
            </li>
            <li>
              <strong>Standard Rentals:</strong> Explore India with our reliable
              fleet, including Innova Crysta, Kia Carens, Ertiga, and Dzire.
            </li>
          </ul>
          <p className="mt-3">
            We proudly provide vehicle services from major cities in Uttar
            Pradesh, including Lucknow, Gorakhpur, Ayodhya, Varanasi, Prayagraj,
            Barabanki, and Raebareli. We also cater to corporate bookings,
            providing reliable and comfortable transport for business events and
            teams.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="mt-6 mb-2 custom-heading">Hotel & Accommodation</h3>
          <p>
            We make planning easy by also offering hotel booking services for our
            customers. Simply tell us your destination and preferences, and we'll
            secure comfortable and convenient stays that complement your travel
            plan.
          </p>
        </div>
      </div>
    </div>
  );
}
