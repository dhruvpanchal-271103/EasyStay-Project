import React from "react";

function About() {
  return (
    <div className="bg-gray-900 min-h-screen px-6 py-16 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-blue-400">
            <span className="text-white">About</span> EasyStay
          </h1>
          <p className="text-gray-300 text-lg">
            Your trusted platform for booking affordable, verified stays anywhere in India.
          </p>
        </div>

        {/* Grid for Mission, Vision, Offer, Choose */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Mission */}
          <div className="bg-gray-800 p-6 rounded-xl shadow transition transform hover:scale-105 hover:shadow-xl duration-300">
            <h2 className="text-xl font-semibold text-indigo-300 mb-2">Our Mission</h2>
            <p className="text-gray-400">
              To make travel stress-free by connecting people with handpicked, comfortable, and trusted stays.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-800 p-6 rounded-xl shadow transition transform hover:scale-105 hover:shadow-xl duration-300">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">Our Vision</h2>
            <p className="text-gray-400">
              To revolutionize the hospitality space in India by creating a transparent, tech-driven, and guest-focused travel platform.
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-gray-800 p-6 rounded-xl shadow transition transform hover:scale-105 hover:shadow-xl duration-300">
            <h2 className="text-xl font-semibold text-pink-300 mb-2">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Verified properties</li>
              <li>Instant booking</li>
              <li>Secure payments</li>
              <li>24/7 customer support</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-800 p-6 rounded-xl shadow transition transform hover:scale-105 hover:shadow-xl duration-300">
            <h2 className="text-xl font-semibold text-green-300 mb-2">Why Choose Us</h2>
            <p className="text-gray-400">
              We blend technology with local insight to ensure every stay is smooth, safe, and tailored to your needs.
            </p>
          </div>
        </div>

       {/* Our Story & Core Values */}
<div className="grid gap-12 md:grid-cols-2 mb-16">
  {/* Our Story */}
  <div className="bg-gray-800 p-8 rounded-xl shadow transition transform hover:scale-105 hover:shadow-xl duration-300">
    <h2 className="text-2xl font-bold text-white mb-3">Our Story</h2>
    <p className="text-gray-400 mb-4">
      EasyStay was born out of a simple need: finding reliable, affordable places to stay in unfamiliar cities shouldn’t be a gamble.
      Frustrated with hidden charges, poor communication, and sketchy listings, our team set out to build a better experience — one that’s transparent, safe, and customer-first.
    </p>
    <p className="text-gray-400">
      What started as a small initiative is now growing into a nationwide platform, built with love and driven by real travelers.
      We’re here to change how India travels — one stay at a time.
    </p>
  </div>

  {/* Core Values */}
  <div className="bg-gray-800 p-8 rounded-xl shadow transition transform hover:scale-105 hover:shadow-xl duration-300">
    <h2 className="text-2xl font-bold text-white mb-3">Our Core Values</h2>
    <ul className="list-disc list-inside text-gray-400 space-y-6">
      <li> Trust through transparency</li>
      <li> Always-on communication</li>
      <li> Innovation driven by empathy</li>
      <li> Empowering local hosts</li>
    </ul>
  </div>
</div>



        {/* Looking Ahead */}
        <div className="text-center max-w-2xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-white mb-3">Looking Ahead</h2>
          <p className="text-gray-400">
            We're building more features like personalized stays, local experiences, and smarter search tools.
            Our journey’s just beginning — and we’re excited to have you with us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
