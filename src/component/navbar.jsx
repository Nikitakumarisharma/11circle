import logo from "../asset/exye_logo_.png";

const alert = () => {
  window.alert("It will be available soon for download!😄");
};

const Navbar = () => {
  return (
    <nav className="bg-[#FEE79B] p-2 lg:p-4 flex flex-wrap justify-between items-center">
      {/* Logo and Text */}
      <div className="flex items-center lg:space-x-2">
        <img
          src={logo}
          alt="logo"
          className="w-8 h-6 lg:w-12 lg:h-10"
        />
        <span className="text-[#F05A5B] text-[12px] sm:text-lg font-bold ">
          EXYE
        </span>
      </div>

      {/* Center Text */}
      <div className="flex-grow text-center">
        <span className="text-[#F05A5B] md:text-xs text-[13px] lg:text-lg font-bold">
          Award Your Wisdom
        </span>
      </div>

      {/* Button */}
      <div>
        <button
          className="border bg-[#F05A5B] lg:px-3 lg:py-1 px-1 py-1 text-[10px] sm:text-sm lg:text-base rounded text-white font-bold hover:bg-[#E04A4A] transition"
          onClick={alert}
        >
          DOWNLOAD NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
