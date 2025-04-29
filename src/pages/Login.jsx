import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("easystayUsers")) || [];

    const matchedUser = users.find(
      (user) => user.email === credentials.email && user.password === credentials.password
    );

    if (matchedUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      setIsLoggedIn(true);
      setTimeout(() => {
        window.location.href = "/"; // force reload to refresh app state
      }, 1000);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 text-white">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-700">
        {!isLoggedIn ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-center text-indigo-300">Login to EasyStay</h2>

            <form onSubmit={handleLogin} className="space-y-5">
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 hover:bg-blue-800 transition transform hover:scale-105 duration-300 text-white font-semibold rounded-md"
              >
                Login
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-6 text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-indigo-400 hover:underline">
                Register here
              </Link>
            </p>
          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-green-400">Login successful!</h2>
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-400 mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
