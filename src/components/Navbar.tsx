import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-blue-600/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-mono text-xl font-bold text-white">AI-Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-white hover:text-blue-200 transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-white hover:text-blue-200 transition-colors">
              Services
            </Link>
            <Link to="/reviews" className="text-white hover:text-blue-200 transition-colors">
              Reviews
            </Link>
            <Link to="/events" className="text-white hover:text-blue-200 transition-colors">
              Events
            </Link>
            <Link to="/gallery" className="text-white hover:text-blue-200 transition-colors">
              Gallery
            </Link>
            <Link to="/blog" className="text-white hover:text-blue-200 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-200 transition-colors">
              Contact
            </Link>
            <Link to="/admin" className="text-white hover:text-blue-200 transition-colors">
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-200"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/about"
              className="block text-white hover:text-blue-200 transition-colors py-2"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="block text-white hover:text-blue-200 transition-colors py-2"
            >
              Services
            </Link>
            <Link
              to="/reviews"
              className="block text-white hover:text-blue-200 transition-colors py-2"
            >
              Reviews
            </Link>
            <Link
              to="/events"
              className="block text-white hover:text-blue-200 transition-colors py-2"
            >
              Events
            </Link>
            <Link
              to="/gallery"
              className="block text-white hover:text-blue-200 transition-colors py-2"
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              className="block text-white hover:text-blue-200 transition-colors py-2"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-blue-200 transition-colors py-2"
            >
              Contact
            </Link>
            <Link
              to="/admin"
              className="block text-white hover:text-blue-200 transition-colors py-2"
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