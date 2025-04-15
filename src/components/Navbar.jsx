import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between shadow-md px-20">
     
      <Link to="/" className="text-3xl font-extrabold text-white tracking-wide">
        Easystay
      </Link>

      {/* Nav Links */}
      <div className="space-x-14 text-lg text-gray-200 font-medium hidden md:flex">
        <Link to="/" className="hover:text-blue-500 ransition-colors duration-[800ms]">Home</Link>
        <Link to="/listings" className="hover:text-blue-500 ransition-colors duration-[800ms]">Properties</Link>
        <Link to="/about" className="hover:text-blue-500 ransition-colors duration-[800ms]">About Us</Link>
        <Link to="/contact" className="hover:text-blue-500 ransition-colors duration-[800ms]">Contact Us</Link>
      </div>

      {/* Right section: Search + Login */}
      <div className="flex items-center space-x-4">
       
        <Link
          to="/login"
          className="bg-blue-500 text-white px-6 py-1.5 rounded-md transition-colors duration-[800ms] hover:bg-blue-800"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
