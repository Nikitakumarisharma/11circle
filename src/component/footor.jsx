import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); // React Router navigation hook

  const handleTermsClick = () => {
    navigate("/terms-and-conditions"); // Navigate to the terms page
  };
  return (
    <footer className="bg-[#F05A5B] text-white lg:py-8 py-4">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-8  sm:gap-2 md:gap-4">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              EXYE is an innovative online quiz gaming platform that transforms
              your knowledge into rewards. Compete in exciting contests across
              diverse topics like history, science, entertainment, and more.
              With fresh questions added hourly, EXYE ensures a dynamic
              experience where speed and accuracy lead to victory. Join today
              and showcase your wisdom!
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
              <Link to="/" className="text-sm hover:underline">
            Home
          </Link>
              </li>
              <li>
                {/* Terms and Conditions */}
                <span
                  className="text-sm hover:underline cursor-pointer"
                  onClick={handleTermsClick}
                >
                  Terms & Conditions
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
              Email:{" "}
              <a href="mailto:manager@auradevops.com" className=" underline">
                manager@auradevops.com
              </a>
            </p>

            <p className="text-sm">Phone: XXX XX XXX</p>
            <p className="text-sm">Addres: XXXXXX</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-400">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://instagram.com" className="hover:text-pink-400">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          &copy; 2024 EXYE. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
