import { Link } from "react-router-dom";

function BecomeHost() {
  return (
    <div className="min-h-screen bg-gray-900 px-6 md:px-20 py-16 font-light">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Become a Host on{" "}
          <span className="text-blue-400">EasyStay</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Earn income by sharing your space. Connect with travelers from around the world
          with full control and peace of mind.
        </p>
        <Link
          to="/host-registration"
          className="bg-blue-500 hover:bg-blue-700 transition duration-300 text-white font-semibold px-8 py-3 rounded-md shadow-lg"
          aria-label="Get started with hosting"
        >
          Get Started
        </Link>
      </div>

      {/* Steps Section */}
      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {[ 
          {
            title: "List Your Property",
            desc: "Create a listing with photos, pricing, and availability details.",
            bg: "bg-gradient-to-br from-blue-200 via-blue-100 to-white",
            icon: "🏠",
          },
          {
            title: "Connect with Guests",
            desc: "Approve bookings, chat with guests, and customize your hosting rules.",
            bg: "bg-gradient-to-br from-purple-200 via-purple-100 to-white",
            icon: "💬",
          },
          {
            title: "Earn & Grow",
            desc: "Receive payments securely and manage your hosting business with insights.",
            bg: "bg-gradient-to-br from-yellow-200 via-yellow-100 to-white",
            icon: "💰",
          },
        ].map((step, i) => (
          <div
            key={i}
            className={`relative ${step.bg} rounded-3xl p-8 shadow-xl border border-white/10 transform transition duration-400 hover:-translate-y-2 hover:shadow-2xl`}
          >
            <div className="text-5xl mb-4" role="img" aria-label={step.title}>
              {step.icon}
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">{step.title}</h3>
            <p className="text-gray-800 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Testimonial Section */}
      <div className="mt-24 text-center max-w-3xl mx-auto text-white">
        <blockquote className="italic text-xl text-gray-300">
          “EasyStay made it super easy to turn my extra room into a source of income.
          The platform is smooth and support is always there.”
        </blockquote>
        <p className="mt-4 font-semibold text-blue-400">— A Happy Host</p>
      </div>
    </div>
  );
}

export default BecomeHost;
