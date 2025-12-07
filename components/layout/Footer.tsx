import React from "react";
import { APP_NAME } from "@/constants";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    support: [
      { label: "Help Center", href: "#" },
      { label: "Safety Information", href: "#" },
      { label: "Cancellation Options", href: "#" },
      { label: "Report a Concern", href: "#" },
    ],
    hosting: [
      { label: "List Your Property", href: "#" },
      { label: "Host Resources", href: "#" },
      { label: "Community Forum", href: "#" },
      { label: "Responsible Hosting", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Investors", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      )
    },
  ];

  return (
    <footer
      className="bg-gray-900 text-gray-300"
      role="contentinfo"
    >
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-rose-500 to-orange-500" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="/"
              className="inline-block text-xl sm:text-2xl font-bold mb-4 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
              aria-label={`${APP_NAME} - Home`}
            >
              <span className="text-rose-500">ALX</span>
              <span className="text-white">Listing</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Find your perfect stay from our curated collection of luxury
              properties worldwide.
            </p>
            {/* Social Icons */}
            <nav aria-label="Social media links">
              <ul className="flex gap-3 list-none p-0 m-0">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 hover:bg-rose-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Support Links */}
          <nav aria-label="Support links">
            <h2 className="font-semibold text-white mb-4 sm:mb-6 text-base sm:text-lg">Support</h2>
            <ul className="space-y-3 sm:space-y-4 list-none p-0 m-0">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hosting Links */}
          <nav aria-label="Hosting links">
            <h2 className="font-semibold text-white mb-4 sm:mb-6 text-base sm:text-lg">Hosting</h2>
            <ul className="space-y-3 sm:space-y-4 list-none p-0 m-0">
              {footerLinks.hosting.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Links */}
          <nav aria-label="Company links">
            <h2 className="font-semibold text-white mb-4 sm:mb-6 text-base sm:text-lg">Company</h2>
            <ul className="space-y-3 sm:space-y-4 list-none p-0 m-0">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 sm:mt-12 lg:mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {currentYear} {APP_NAME}. All rights reserved.
            </p>
            <nav aria-label="Legal links">
              <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 list-none p-0 m-0">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    Cookie Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
