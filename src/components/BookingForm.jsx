function BookingForm() {
  return (
    <form className="space-y-4 mt-4">
      {/* Name Section: First Name and Last Name in a single line */}
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-full md:w-1/2 p-2 rounded bg-gray-700 border border-gray-600"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full md:w-1/2 p-2 rounded bg-gray-700 border border-gray-600"
          required
        />
      </div>

      {/* Email Field */}
      <div className="flex space-x-4">

        <input
          type="email"
          placeholder="Email Address"
          className="w-full md:w-1/2 p-2 rounded bg-gray-700 border border-gray-600"
          required
        />

        {/* Phone Number */}
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full md:w-1/2 p-2 rounded bg-gray-700 border border-gray-600"
          required
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
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label className="text-gray-300 text-sm">Check-out</label>
          <input
            type="date"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            required
          />
        </div>
      </div>

      {/* Members */}
      <input
        type="number"
        placeholder="Member/Members"
        className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        required
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
