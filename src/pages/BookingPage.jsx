// src/pages/BookingPage.js
import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Book Your Stay</h1>
          <p className="text-lg mb-8">
            Fill in the form below to secure your booking for an unforgettable experience.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
