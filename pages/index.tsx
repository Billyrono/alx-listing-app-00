import React, { useState } from "react";
import { PROPERTYLISTINGSAMPLE, FILTER_LABELS } from "@/constants";
import Pill from "@/components/common/Pill";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  // Filter properties based on active filter
  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.some((cat) =>
          cat.toLowerCase().includes(activeFilter.toLowerCase())
        )
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <main className="bg-white min-h-screen">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-rose-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-28"
        aria-labelledby="hero-heading"
      >
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80"
          alt="Beautiful mountain lake destination"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"></div>

        {/* Decorative Elements */}
        <div
          className="absolute top-1/4 left-10 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl hidden lg:block"
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl hidden lg:block"
          aria-hidden="true"
        ></div>

        {/* Hero Content - Centered */}
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Subtitle */}
          <p className="text-rose-300 font-semibold text-sm sm:text-base uppercase tracking-widest mb-4">
            Discover Your Dream Destination
          </p>

          {/* Main Heading - From Spec */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Find your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-400 via-rose-500 to-orange-400">
              favorite place
            </span>{" "}
            here!
          </h1>

          {/* Search Box */}
          <div className="bg-white rounded-2xl p-3 sm:p-4 max-w-3xl mx-auto shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Location Input */}
              <div className="flex-1 relative">
                <label htmlFor="location-search" className="sr-only">
                  Where are you going?
                </label>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <input
                  id="location-search"
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full pl-12 pr-4 py-3 sm:py-4 text-gray-800 bg-gray-50 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>

              {/* Date Input */}
              <div className="flex-1 relative">
                <label htmlFor="date-search" className="sr-only">
                  Check-in date
                </label>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  id="date-search"
                  type="text"
                  placeholder="Check in - Check out"
                  className="w-full pl-12 pr-4 py-3 sm:py-4 text-gray-800 bg-gray-50 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>

              {/* Guests Input */}
              <div className="sm:w-36 relative">
                <label htmlFor="guests-search" className="sr-only">
                  Number of guests
                </label>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <input
                  id="guests-search"
                  type="text"
                  placeholder="Guests"
                  className="w-full pl-12 pr-4 py-3 sm:py-4 text-gray-800 bg-gray-50 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>

              {/* Search Button */}
              <button
                className="bg-rose-500 hover:bg-rose-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-rose-500/30 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                aria-label="Search properties"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Filter Section */}
      <section
        id="main-content"
        className="bg-gray-50 py-3 sm:py-4 border-b border-gray-100"
        aria-labelledby="filter-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="filter-heading" className="sr-only">
            Filter properties
          </h2>
          <div className="flex items-center justify-between gap-4 mb-4">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Popular Filters
            </p>
            {activeFilter && (
              <button
                onClick={() => setActiveFilter(null)}
                className="text-sm text-rose-500 hover:text-rose-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 rounded px-2 py-1"
              >
                Clear All
              </button>
            )}
          </div>
          <div
            className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide"
            role="group"
            aria-label="Property filters"
          >
            {FILTER_LABELS.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Listing Section */}
      <section
        className="bg-gray-50 py-5 sm:py-6 lg:py-8"
        aria-labelledby="listings-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <p className="text-rose-500 font-semibold text-sm uppercase tracking-wider mb-2">
                Explore
              </p>
              <h2
                id="listings-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"
              >
                {activeFilter
                  ? `${activeFilter} Properties`
                  : "Featured Properties"}
              </h2>
              <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xl">
                Discover our handpicked selection of exceptional properties
              </p>
            </div>
            <span
              className="text-gray-600 text-sm bg-white px-4 py-2 rounded-full font-medium shadow-sm self-start sm:self-auto"
              aria-live="polite"
            >
              {filteredProperties.length} listings found
            </span>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="text-center py-16 sm:py-20 bg-white rounded-3xl shadow-sm">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 sm:h-10 w-8 sm:w-10 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                No properties found
              </h3>
              <p className="text-gray-500 mb-6 sm:mb-8 max-w-md mx-auto px-4">
                We couldn&apos;t find any properties matching your filter.
              </p>
              <button
                onClick={() => setActiveFilter(null)}
                className="bg-rose-500 hover:bg-rose-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                View All Properties
              </button>
            </div>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 list-none p-0 m-0">
              {filteredProperties.map(
                (property: PropertyProps, index: number) => (
                  <li key={index}>
                    <PropertyCard property={property} />
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}

// Property Card Component
interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden">
        {/* Loading State */}
        {!imageLoaded && (
          <div
            className="absolute inset-0 bg-gray-200 animate-pulse"
            aria-hidden="true"
          ></div>
        )}
        <img
          src={property.image}
          alt={`${property.name} in ${property.address.city}, ${property.address.country}`}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%239ca3af'%3EProperty Image%3C/text%3E%3C/svg%3E";
            setImageLoaded(true);
          }}
        />

        {/* Discount Badge */}
        {property.discount && (
          <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-linear-to-r from-rose-500 to-orange-500 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold shadow-lg">
            {property.discount}% OFF
          </span>
        )}

        {/* Favorite Button */}
        <button
          className={`absolute top-3 sm:top-4 right-3 sm:right-4 w-9 sm:w-10 h-9 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white shadow-lg ${
            isLiked
              ? "bg-rose-500 text-white scale-110"
              : "bg-white/90 text-gray-600 hover:bg-white hover:text-rose-500"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          aria-label={
            isLiked
              ? `Remove ${property.name} from favorites`
              : `Add ${property.name} to favorites`
          }
          aria-pressed={isLiked}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 sm:h-5 w-4 sm:w-5"
            fill={isLiked ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Rating Badge */}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs sm:text-sm font-bold text-gray-900">
            {property.rating}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-rose-400 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="truncate">
            {property.address.city}, {property.address.country}
          </span>
        </div>

        {/* Property Name */}
        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3 line-clamp-1 group-hover:text-rose-500 transition-colors">
          {property.name}
        </h3>

        {/* Amenities */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 sm:h-4 w-3.5 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            {property.offers.bed} Beds
          </span>
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 sm:h-4 w-3.5 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
            {property.offers.shower} Baths
          </span>
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 sm:h-4 w-3.5 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {property.offers.occupants}
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between gap-1">
          <div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              ${property.price.toLocaleString()}
            </span>
            <span className="text-gray-500 text-xs sm:text-sm ml-0.5">
              /night
            </span>
          </div>
          <button
            className="text-rose-500 hover:text-white hover:bg-rose-500 border border-rose-500 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            aria-label={`Book ${property.name}`}
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
};
