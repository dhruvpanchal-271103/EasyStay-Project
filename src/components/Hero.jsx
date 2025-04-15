import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative min-h-[90vh] bg-[url('/your-bg.jpg')] bg-cover bg-center flex items-center justify-center px-6 md:px-12">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl w-full text-white text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md mb-6">
          Welcome to <span className="text-blue-400">Easystay</span>
        </h1>

        <p className="text-xl md:text-2xl font-light mb-18 drop-shadow">
          Find your perfect stay — luxury resorts, budget hotels, and everything in between.
        </p>

       

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          <Link
            to="/listings"
            className="bg-blue-500 hover:bg-blue-800 transition duration-300 text-white font-semibold px-8 py-3 rounded-md shadow-lg"
            aria-label="Browse listings"
          >
            Browse Listings
          </Link>
          <Link
            to="/about"
            className="bg-transparent border border-white hover:bg-white hover:text-blue-800 transition duration-300 text-white font-semibold px-10 py-3 rounded-md shadow-lg"
            aria-label="Learn more about EasyStay"
          >
            Learn More
          </Link>
          <Link
            to="/host"
            className="bg-blue-500 hover:bg-blue-700 transition duration-300 text-white font-semibold px-8 py-3 rounded-md shadow-lg"
            aria-label="Become a Host"
          >
            Become a Host
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="text-sm opacity-80">
          <p>✓ Curated stays for every traveler</p>
          <p>✓ 24/7 customer support</p>
          <p>✓ Seamless booking experience</p>
        </div>
      </div>

    </div>
  );
}

export default Hero;
