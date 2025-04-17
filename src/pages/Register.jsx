import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 text-white">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-300">Create an Account</h2>

        <form className="space-y-5">
          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Phone Number with Country Code */}
          <div className="flex space-x-3">
            <select
              name="countryCode"
              className="w-1/3 p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              defaultValue="+91"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+81">🇯🇵 +81</option>
              {/* Add more as needed */}
            </select>

            <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              maxLength={10}
              placeholder="Phone Number"
              className="w-2/3 p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-800 transition transform hover:scale-105 duration-300 text-white font-semibold rounded-md transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Link to Login */}
        <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
