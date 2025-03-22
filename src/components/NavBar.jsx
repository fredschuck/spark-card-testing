import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              SparkCard
            </Link>
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary px-4 py-2 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-primary px-4 py-2 transition duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-orange-600 bg-primary hover:bg-secondary px-4 py-2 rounded-md transition duration-200"
            >
              Signup
            </Link>
            <Link
              to="/profile"
              className="text-gray-700 bg-primary hover:bg-secondary px-4 py-2 rounded-md transition duration-200"
            >
              Profile
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="space-y-2 py-3 px-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-primary transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-primary transition duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="block text-orange-600 bg-primary hover:bg-secondary rounded-md transition duration-200"
            >
              Signup
            </Link>
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 bg-primary hover:bg-secondary py-2 rounded-md transition duration-200"
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
