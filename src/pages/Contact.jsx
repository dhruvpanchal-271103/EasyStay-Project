import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert('Message Sent! We will get back to you soon.');
    // Optional: reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-12 text-white">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold mb-6 text-indigo-200">Get In Touch</h1>
        <p className="text-gray-300 mb-12">
          We're here to help with any questions, comments, or support needs.
          Reach out to us, and we'll get back to you as soon as possible!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <span className="text-indigo-300 text-3xl">✉️</span>
            </div>
            <h3 className="text-2xl font-semibold text-indigo-300 mb-2">Email Us</h3>
            <p className="text-gray-400">
              Reach us directly at:{" "}
              <a href="mailto:support@gmail.com" className="text-indigo-400 hover:underline">
                support@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <span className="text-pink-300 text-3xl">📍</span>
            </div>
            <h3 className="text-2xl font-semibold text-pink-300 mb-2">Visit Us</h3>
            <p className="text-gray-400">Ahmedabad, India</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <span className="text-green-300 text-3xl">📞</span>
            </div>
            <h3 className="text-2xl font-semibold text-green-300 mb-2">Call Us</h3>
            <p className="text-gray-400">Phone: +91 1234567890</p>
          </div>
        </div>

        <div className="mt-20 bg-gray-800 p-10 rounded-2xl shadow-xl border border-gray-700">
          <h2 className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Send Us a Message
          </h2>
          <div className="w-24 h-1 bg-indigo-500 rounded-full mx-auto mb-8"></div>

          <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2 text-left">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
              required
            />

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="md:col-span-2 p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 resize-none"
              required
            ></textarea>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-4 font-semibold text-white bg-blue-500 hover:bg-blue-800 rounded-md shadow-lg hover:shadow-2xl hover:scale-[1.01] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
