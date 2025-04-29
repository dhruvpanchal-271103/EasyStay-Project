// src/components/BookingForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const navigate = useNavigate(); // Hook to navigate
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    members: ''
  });

  return (
    <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
      {/* Name Section: First Name and Last Name in a single line */}
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-full md:w-1/2 p-2 rounded bg-gray-700 border border-gray-600"
          required
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full md:w-1/2 p-2 rounded bg-gray-700 border border-gray-600"
          required
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
      </div>

      {/* Email Field */}
      <div className="flex space-x-4">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full md:w-1/2 p-2 rounded bg-gray-700 border border-gray-600"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {/* Phone Number */}
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full md:w-1/2 p-2 rounded bg-gray-700 border border-gray-600"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      {/* Check-in and Check-out Dates */}
      <div className="flex space-x-4">
        <div className="flex flex-col w-1/2">
          <label className="text-gray-300 text-sm">Check-in</label>
          <input
            type="date"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            required
            value={formData.checkIn}
            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label className="text-gray-300 text-sm">Check-out</label>
          <input
            type="date"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            required
            value={formData.checkOut}
            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
          />
        </div>
      </div>

      {/* Members */}
      <input
        type="number"
        placeholder="Member/Members"
        className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        required
        value={formData.members}
        onChange={(e) => setFormData({ ...formData, members: e.target.value })}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-800 transition transform hover:scale-105 duration-300 p-2 rounded"
      >
        Book Now
      </button>
    </form>
  );
}

export default BookingForm;
