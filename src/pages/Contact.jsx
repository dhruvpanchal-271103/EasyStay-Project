function Contact() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-12 text-white">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold mb-6 text-indigo-200">Get In Touch</h1>
        <p className="text-gray-300 mb-12">
          We’re here to help with any questions, comments, or support needs.
          Reach out to us, and we'll get back to you as soon as possible!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Email Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <span className="text-indigo-300 text-3xl">✉️</span>
            </div>
            <h3 className="text-2xl font-semibold text-indigo-300 mb-2">Email Us</h3>
            <p className="text-gray-400">
              Reach us directly at:{" "}
              <a href="mailto:dhruvpan2711@gmail.com" className="text-indigo-400 hover:underline">
                dhruvpan2711@gmail.com
              </a>
            </p>
          </div>

          {/* Address Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <span className="text-pink-300 text-3xl">📍</span>
            </div>
            <h3 className="text-2xl font-semibold text-pink-300 mb-2">Visit Us</h3>
            <p className="text-gray-400">Ahmedabad, India</p>
          </div>

          {/* Phone Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <span className="text-green-300 text-3xl">📞</span>
            </div>
            <h3 className="text-2xl font-semibold text-green-300 mb-2">Call Us</h3>
            <p className="text-gray-400">Phone: +91 9714172527</p>
          </div>
        </div>

      {/* Contact Form Section */}
<div className="mt-20 bg-gray-800 p-10 rounded-2xl shadow-xl border border-gray-700">
  <h2 className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
    Send Us a Message
  </h2>
  <div className="w-24 h-1 bg-indigo-500 rounded-full mx-auto mb-8"></div>

  <form action="#" method="POST" className="grid gap-6 md:grid-cols-2 text-left">
  {/* First Name */}
  <input
    type="text"
    placeholder="First Name"
    className="p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
  />

  {/* Last Name */}
  <input
    type="text"
    placeholder="Last Name"
    className="p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
  />

  {/* Email */}
  <input
    type="email"
    placeholder="Email Address"
    className="p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
  />

  {/* Phone Number */}
  <input
    type="tel"
    placeholder="Phone Number"
    className="p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
  />

  {/* Message (full width) */}
  <textarea
    rows="5"
    placeholder="Your Message"
    className="md:col-span-2 p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 resize-none"
  ></textarea>

  {/* Submit Button (full width) */}
  <div className="md:col-span-2">
    <button
      type="submit"
      className="w-full py-4 font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md shadow-lg hover:shadow-2xl hover:scale-[1.01] transition duration-300"
    >
      🚀 Send Message
    </button>
  </div>
</form>


</div>

      </div>
    </div>
  );
}

export default Contact;
