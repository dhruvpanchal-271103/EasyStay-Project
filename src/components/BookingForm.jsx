import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm({ price }) {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    members: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    if (formData.checkOut < formData.checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    const daysStayed = (checkOutDate - checkInDate) / (1000 * 3600 * 24);

    const totalPrice = daysStayed * price;

    navigate('/payment', { state: { ...formData, totalPrice } });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setFormData({ ...formData, phone: value });
    }
  };

  return (
    <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
      {/* Name Section */}
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

      {/* Email & Phone */}
      <div className="flex space-x-4">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full md:w-1/2 p-2 rounded bg-gray-700 border border-gray-600"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full md:w-1/2 p-2 rounded bg-gray-700 border border-gray-600"
          required
          value={formData.phone}
          onChange={handlePhoneChange}
        />
      </div>

      {/* Dates */}
      <div className="flex space-x-4">
        <div className="flex flex-col w-1/2">
          <label className="text-gray-300 text-sm">Check-in</label>
          <input
            type="date"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            required
            min={today}
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
            min={formData.checkIn || today}
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
        min="1"
        value={formData.members}
        onChange={(e) => {
          const value = e.target.value;
          if (value === '' || Number(value) >= 1) {
            setFormData({ ...formData, members: value });
          }
        }}
      />

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
