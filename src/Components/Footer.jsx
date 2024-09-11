import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-yellow-400" : "text-white";
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <footer className="bg-black text-white py-10 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-center">About Us</h2>
            <p className="text-sm text-gray-200 text-center">
              MultiTech AC Spare Parts provides high-quality air conditioning
              parts at affordable prices. With a legacy of trusted service, we
              deliver to customers across Vadodara with a focus on efficiency
              and reliability.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className={`${isActive("/")} hover:text-yellow-400`}
                  onClick={scrollToTop}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={`${isActive("/products")} hover:text-yellow-400`}
                  onClick={scrollToTop}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`${isActive("/about")} hover:text-yellow-400`}
                  onClick={scrollToTop}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${isActive("/contact")} hover:text-yellow-400`}
                  onClick={scrollToTop}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Our Products</h2>
            <ul className="space-y-2">
              <li>AC Compressors</li>
              <li>AC Condensers</li>
              <li>AC Fans</li>
              <li>AC Filters</li>
              <li>AC Thermostats</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li>
                Address: Office No.4 Jainab Park Tower C B/h, Amrapali Society,
                Gorwa, Vadodara, Gujarat
              </li>
              <li>Email: infotech@multitechacspareparts.com</li>
              <li>Phone: +91-748-605-2477</li>
              <li>Working Hours: Mon-Fri 9am to 6pm</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} MultiTech AC Spare Parts. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
