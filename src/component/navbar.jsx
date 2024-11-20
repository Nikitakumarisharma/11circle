import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 flex flex-wrap justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="https://th.bing.com/th/id/OIP.wQAAiA4NkHQ1B2vU86sXUwHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" // Replace with the actual logo URL
          alt="logo"
          className="w-8 h-8"
        />
        <span className="font-bold text-lg">
          MY<span className="text-red-500">11</span>CIRCLE
        </span>
      </div>

      {/* Register and Log In Buttons */}
      <div className="flex items-center space-x-4 mt-2 sm:mt-0">
        <a href="#register" className="text-blue-100 hover:underline text-sm sm:text-base">
          Register Now
        </a>
        <button className="border border-white px-3 py-1 text-sm sm:text-base rounded hover:bg-white hover:text-black transition">
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
