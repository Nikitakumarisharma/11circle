import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white lg:py-8 py-4">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-8  sm:gap-2 md:gap-4">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              My11Circle is your trusted platform for playing fantasy sports, offering an engaging experience for cricket and football fans.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#home" className="text-sm hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: support@my11circle.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
            <p className="text-sm">Address: 123 Fantasy Street, Sports City</p>
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
          &copy; 2024 My11Circle. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
