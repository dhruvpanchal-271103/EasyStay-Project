import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    countryCode: "+91"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("easystayUsers")) || [];

    // Check if user with same email already exists
    const userExists = users.some((user) => user.email === form.email);
    if (userExists) {
      alert("User with this email already exists.");
      return;
    }

    const updatedUsers = [...users, form];
    localStorage.setItem("easystayUsers", JSON.stringify(updatedUsers));

    alert("Account created! You can now login.");
    setTimeout(() => navigate("/login"), 500);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 text-white">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-300">Create an Account</h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <input name="firstName" type="text" placeholder="First Name" onChange={handleChange} required className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input name="lastName" type="text" placeholder="Last Name" onChange={handleChange} required className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />

          <div className="flex space-x-3">
            <select name="countryCode" onChange={handleChange} defaultValue="+91" className="w-1/3 p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+81">🇯🇵 +81</option>
            </select>
            <input name="phone" type="tel" pattern="[0-9]{10}" maxLength={10} placeholder="Phone Number" onChange={handleChange} required className="w-2/3 p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />

          <button type="submit" className="w-full py-3 bg-blue-500 hover:bg-blue-800 transition transform hover:scale-105 duration-300 text-white font-semibold rounded-md">
            Register
          </button>
        </form>

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
