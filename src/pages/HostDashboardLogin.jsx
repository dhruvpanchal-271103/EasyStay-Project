import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HostDashboardLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const host = JSON.parse(localStorage.getItem("hostRegistrationData"));
    if (host && host.email === email) {
      alert("Welcome back, Host!");
      navigate("/host/dashboard");
    } else {
      alert("Email not found. Please register first.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 text-white">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-300">
          Host Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            name="email"
            type="email"
            placeholder="Host Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-800 transition transform hover:scale-105 duration-300 text-white font-semibold rounded-md"
          >
            Login as Host
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Not a Host?{" "}
          <a href="/host-registration" className="text-indigo-400 hover:underline">
            Register as a Host
          </a>
        </p>
      </div>
    </div>
  );
}

export default HostDashboardLogin;
