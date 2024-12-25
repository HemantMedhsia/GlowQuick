import React from "react";
import GlowQuickLogo from "../assets/Images/glowQuickGif.gif";
import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#285F74] via-gray-800 to-[#285F74] text-white py-10 px-4">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Logo Section */}
        <div className="text-center md:text-left">
          <img
            src={GlowQuickLogo}
            alt="GlowQuick Logo"
            className="mx-auto md:mx-0 w-2/4"
          />
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-4 text-blue-400">Explore</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-blue-400 transition duration-300"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="hover:text-blue-400 transition duration-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media and Support */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-4 text-blue-400">
            Connect with Us
          </h4>
          <div className="flex justify-center md:justify-start space-x-6 text-gray-300">
            <a
              href="https://facebook.com"
              className="hover:text-blue-400 transition duration-300"
            >
              <GrFacebookOption />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-blue-400 transition duration-300"
            >
              <GrInstagram />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-400 transition duration-300"
            >
              <GrTwitter />
            </a>
          </div>
          <h4 className="text-xl font-semibold mt-6 mb-2 text-blue-400">
            Need Help?
          </h4>
          <a
            href="/support"
            className="hover:text-blue-400 transition duration-300"
          >
            Customer Support
          </a>
        </div>
      </div>

      {/* Footer Divider */}
      <div className="my-6 border-t border-gray-700"></div>

      {/* Bottom Footer Section */}
      <div className="text-center text-sm text-gray-400">
        <p>
          &copy; 2024 GlowQuick. Designed with ❤️ for Haircut Solutions. All
          rights reserved.
        </p>
        <p className="mt-2">
          Powered by <span className="text-blue-400">GlowQuick Team</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
