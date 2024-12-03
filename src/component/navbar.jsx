import logo from "../asset/exye.ai"

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 flex flex-wrap justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src ={logo}
          alt="logo"
          className="w-8 h-8"
        />
        <span className="font-bold text-lg text-red-600">
         EXYE
        </span>
      </div>

      {/* Register and Log In Buttons */}
      <div className="flex items-center space-x-4 mt-2 sm:mt-0">
        <button className="border border-white px-3 py-1 text-sm sm:text-base rounded hover:bg-white hover:text-black transition">
          DOWNLOAD NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
