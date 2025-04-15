function About() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-12 text-white">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-400">
          <span className="text-white">About</span> EasyStay
        </h1>
        <p className="text-gray-300 mb-10">
          Your trusted platform for booking affordable, verified stays anywhere in India.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left justify-center">
          {/* Mission */}
          <div className="bg-gray-800 p-6 rounded-xl shadow transition transform hover:scale-105 hover:shadow-xl duration-300">
            <h2 className="text-xl font-semibold text-indigo-300 mb-2">Our Mission</h2>
            <p className="text-gray-400">
              To make travel stress-free by connecting people with handpicked, comfortable, and trusted stays.
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

        <div className="mt-12 text-gray-400 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">Looking Ahead</h2>
          <p>
            We're building more features like personalized stays, experiences, and smarter search. Our journey’s just beginning!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
