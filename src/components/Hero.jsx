import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);


  const servicesData = [
    {
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1673&auto=format&fit=crop",
      title: "Property Management",
      desc: "Our expert team handles every detail of property management to ensure maximum satisfaction for both guests and hosts.",
    },
    {
      img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1730&auto=format&fit=crop",
      title: "24/7 Customer Support",
      desc: "Our dedicated support team is available around the clock to assist with any inquiries or concerns during your stay.",
    },
    {
      img: "https://images.unsplash.com/photo-1632067694887-097be1c5c5d4?w=500&auto=format&fit=crop",
      title: "Easy Booking Process",
      desc: "Booking your perfect stay is quick and easy with our user-friendly platform, offering flexible options and secure payments.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={`${import.meta.env.BASE_URL}videos/hero-background.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        {/* Optional: dark gradient overlay for text contrast */}
        <div className="absolute bg-opacity-40 z-0" />

        {/* Content */}
        <div className={`relative z-10 max-w-3xl w-full text-white text-center transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <h1 className={`text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md mb-6 transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            Welcome to <span className="text-blue-400">Easystay</span>
          </h1>
          <p className={`text-xl md:text-2xl font-light mb-10 drop-shadow transition-all duration-1000 delay-200 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            Find your perfect stay — luxury resorts, budget hotels, and everything in between.
          </p>
          <div className={`flex flex-col md:flex-row items-center justify-center gap-4 mb-10 transition-opacity duration-1000 delay-[400ms] ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <Link to="/listings" className="bg-blue-500 hover:bg-blue-800 transition transform hover:scale-105 duration-300 text-white font-semibold px-8 py-3 rounded-md shadow-lg">
              Browse Listings
            </Link>
            <Link to="/about" className="bg-transparent border border-white hover:bg-white hover:text-blue-800 transition transform hover:scale-105 duration-300 text-white font-semibold px-10 py-3 rounded-md shadow-lg">
              Learn More
            </Link>
            <Link to="/host" className="bg-blue-500 hover:bg-blue-800 transition transform hover:scale-105 duration-300 text-white font-semibold px-8 py-3 rounded-md shadow-lg">
              Rent your house
            </Link>
          </div>
          <div className={`text-sm opacity-80 space-y-1 transition-all duration-1000 delay-[600ms] ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <p>✓ Curated stays for every traveler</p>
            <p>✓ 24/7 customer support</p>
            <p>✓ Seamless booking experience</p>
          </div>
        </div>
      </div>


      {/* Services Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Services</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          At Easystay, we offer a range of services designed to make your stay as seamless and enjoyable as possible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-20">
          {servicesData.map((card, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-2xl font-semibold text-gray-800">{card.title}</h3>
                <p className="text-lg text-gray-600">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 tracking-tight">
          Featured Properties
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
          {[
            {
              img: "https://images.unsplash.com/photo-1729808641871-8d8b5ade6bbe?w=500&auto=format&fit=crop",
              title: "Luxury Beachfront Villa",
              desc: "A luxurious beachfront villa with stunning ocean views. Perfect for a relaxing getaway.",
            },
            {
              img: "https://images.unsplash.com/photo-1638454795595-0a0abf68614d?w=500&auto=format&fit=crop",
              title: "Modern City Apartment",
              desc: "A sleek, modern apartment in the heart of the city, offering easy access to all major attractions.",
            },
            {
              img: "https://images.unsplash.com/photo-1547561993-9fe9f2af3fd4?w=500&auto=format&fit=crop",
              title: "Cozy Mountain Retreat",
              desc: "A charming retreat in the mountains, ideal for nature lovers seeking peace and tranquility.",
            },
          ].map((property, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl overflow-hidden shadow-md transition-shadow duration-300 transform group"
            >
              <div className="overflow-hidden">
                <img
                  src={property.img}
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
                <p className="text-gray-600 text-base">{property.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button - Now placed below the listings */}
        <div className="flex justify-center mt-14">
          <Link
            to="/listings"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            Explore More Places
          </Link>
        </div>
      </section>




      {/* Testimonials */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 px-6 md:px-20">
          {[
            {
              quote:
                "Easystay helped me find the perfect place for my family vacation. The booking was seamless, and the property was exactly as described!",
              name: "Jane Doe",
              role: "Happy Customer",
            },
            {
              quote:
                "I had an amazing experience! The platform is so easy to use, and the customer support was outstanding. Highly recommend!",
              name: "John Smith",
              role: "Frequent Traveler",
            },
            {
              quote:
                "The property listing was accurate and the host was incredibly welcoming. Will definitely use Easystay again for future trips!",
              name: "Emily Carter",
              role: "Returning Guest",
            },
          ].map((testimonial, i) => (
            <div key={i} className="max-w-xs bg-white p-6 rounded-lg shadow-lg transform hover:translate-y-[-10px] transition-transform duration-300 ease-in-out">
              <p className="text-lg text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold text-gray-800 text-lg">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Hero;
