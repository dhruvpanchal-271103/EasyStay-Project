import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 text-white">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-300">Login to EasyStay</h2>
        
        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md transition duration-300"
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
      </div>
    </div>
  );
}

export default Login;
