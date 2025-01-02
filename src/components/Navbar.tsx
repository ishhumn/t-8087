import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-mono text-xl font-bold text-gray-800">AI-Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link to="/reviews" className="text-gray-600 hover:text-gray-900 transition-colors">
              Reviews
            </Link>
            <Link to="/events" className="text-gray-600 hover:text-gray-900 transition-colors">
              Events
            </Link>
            <Link to="/gallery" className="text-gray-600 hover:text-gray-900 transition-colors">
              Gallery
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
            <Link to="/admin" className="text-gray-600 hover:text-gray-900 transition-colors">
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/about"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Services
            </Link>
            <Link
              to="/reviews"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Reviews
            </Link>
            <Link
              to="/events"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Events
            </Link>
            <Link
              to="/gallery"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Contact
            </Link>
            <Link
              to="/admin"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;