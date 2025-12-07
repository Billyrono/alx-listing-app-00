import React, { useState, useEffect } from "react";
import { APP_NAME, ACCOMMODATION_TYPES } from "@/constants";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
        }`}
      role="banner"
    >
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a
            href="/"
            className={`text-xl sm:text-2xl font-bold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 rounded-lg px-2 py-1 ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            aria-label={`${APP_NAME} - Home`}
          >
            <span className="text-rose-500">ALX</span>
            <span>Listing</span>
          </a>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-6 lg:mx-8">
            <div className="w-full relative">
              <label htmlFor="header-search" className="sr-only">Search destinations</label>
              <input
                id="header-search"
                type="search"
                placeholder="Search destinations..."
                className={`w-full px-4 py-2.5 rounded-full text-sm transition-all focus:outline-none focus:ring-2 focus:ring-rose-500 ${isScrolled
                    ? 'bg-gray-100 border border-gray-200 text-gray-800 placeholder:text-gray-400'
                    : 'bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/70'
                  }`}
              />
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-rose-500 text-white p-2 rounded-full hover:bg-rose-600 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className={`px-4 lg:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 ${isScrolled
                  ? 'text-gray-700 hover:text-rose-500 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
                }`}
              aria-label="Sign in to your account"
            >
              Sign In
            </button>
            <button
              className="bg-rose-500 hover:bg-rose-600 text-white px-4 lg:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              aria-label="Create a new account"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Accommodation Types Navigation */}
      <nav
        className={`transition-all duration-300 ${isScrolled
            ? 'bg-gray-50 border-t border-gray-100'
            : 'bg-black/20 backdrop-blur-sm'
          }`}
        aria-label="Accommodation types"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul
            className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-3 scrollbar-hide list-none"
            role="menubar"
          >
            {ACCOMMODATION_TYPES.map((type) => (
              <li key={type} role="none">
                <button
                  className={`shrink-0 font-medium text-sm whitespace-nowrap px-3 sm:px-4 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-rose-500 ${isScrolled
                      ? 'text-gray-600 hover:text-rose-500 hover:bg-white'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  role="menuitem"
                  aria-label={`Browse ${type} accommodations`}
                >
                  {type}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="bg-white shadow-xl mx-4 mt-2 rounded-2xl overflow-hidden">
          {/* Mobile Search */}
          <div className="p-4 pb-2">
            <label htmlFor="mobile-search" className="sr-only">Search destinations</label>
            <input
              id="mobile-search"
              type="search"
              placeholder="Search destinations..."
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          {/* Mobile Auth Buttons */}
          <div className="p-4 pt-2 space-y-2">
            <button className="w-full py-3 text-gray-700 font-medium rounded-xl border border-gray-200 hover:border-rose-200 hover:text-rose-500 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500">
              Sign In
            </button>
            <button className="w-full py-3 bg-rose-500 text-white font-semibold rounded-xl hover:bg-rose-600 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
