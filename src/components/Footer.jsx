import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 to-gray-800 text-white pt-12 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Easystay</h2>
          <p className="text-sm text-gray-300 leading-relaxed md:w-3/4">
            Your trusted partner for the perfect getaway. Discover handpicked places, book with ease, and enjoy world-class stays.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/listings" className="hover:text-blue-400 transition">Properties</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>Email: <a href="mailto:support@easystay.com" className="hover:text-blue-400">support@easystay.com</a></li>
            <li>Phone: +91 1234567890</li>
            <li>123 Easystay Abcd,<br />Gujarat, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-5 text-2xl text-gray-300">
            <a href="#" className="hover:text-blue-400 transition hover:scale-110"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition hover:scale-110"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400 transition hover:scale-110"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 transition hover:scale-110"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; 2025 <span className="text-blue-400 font-semibold">Easystay</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
