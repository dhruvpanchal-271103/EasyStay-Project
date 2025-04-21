import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("easystayUser"));
    if (user) setIsLoggedIn(true);
  }, []);

  return (
    <>
      <nav className="bg-gray-800 p-4 flex items-center justify-between shadow-md px-6 md:px-20">
        <Link to="/" className="text-3xl font-extrabold text-white tracking-wide">
          Easystay
        </Link>

        <div className="space-x-14 text-lg text-gray-200 font-medium hidden md:flex">
          <Link to="/" className="hover:text-blue-500 transition-colors duration-200">Home</Link>
          <Link to="/listings" className="hover:text-blue-500 transition-colors duration-200">Properties</Link>
          <Link to="/about" className="hover:text-blue-500 transition-colors duration-200">About Us</Link>
          <Link to="/contact" className="hover:text-blue-500 transition-colors duration-200">Contact Us</Link>
        </div>

        {/* Conditional Render for Login / Become a Host */}
        {!isLoggedIn ? (
          <div className="hidden md:block">
            <Link
              to="/login"
              className="bg-blue-500 text-white px-6 py-1.5 rounded-md transition-colors duration-300 hover:bg-blue-800"
            >
              Login
            </Link>
          </div>
        ) : (
          <div className="hidden md:block">
            <Link
              to="/host-registration" // Updated to /host-registration for proper redirection
              className="bg-blue-500 text-white px-6 py-2 rounded-md transition-colors duration-300 hover:bg-blue-800"
            >
              Become a Host
            </Link>
          </div>
        )}

        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleSidebar}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white p-6 transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <nav className="flex flex-col space-y-6 text-lg">
          <Link to="/" onClick={closeSidebar}>Home</Link>
          <Link to="/listings" onClick={closeSidebar}>Properties</Link>
          <Link to="/about" onClick={closeSidebar}>About Us</Link>
          <Link to="/contact" onClick={closeSidebar}>Contact Us</Link>

          {/* Conditional Render for Login / Become a Host */}
          {!isLoggedIn ? (
            <Link
              to="/login"
              onClick={closeSidebar}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Login
            </Link>
          ) : (
            <Link
              to="/host-registration" // Updated to /host-registration for proper redirection
              onClick={closeSidebar}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Become a Host
            </Link>
          )}
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  );
}

export default Navbar;
