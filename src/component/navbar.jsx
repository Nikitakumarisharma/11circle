import logo from "../asset/exye_logo_.png"

const alert = () => {
  window.alert("It will be available soon for download!😄");
};

const Navbar = () => {
  return (
    <nav className="bg-[#FEE79B] lg:p-4 px-2 py-1 flex flex-wrap justify-between items-center">
      {/* Logo */}
      <div className="flex items-center ">
        <img
          src ={logo}
          alt="logo"
          className="w-12 h-10"
        />
        <span className="font-bold text-lg text-[#F05A5B]">
         EXYE
        </span>
      </div>

      {/* Register and Log In Buttons */}
      <div className="flex items-center space-x-4 mt-2 sm:mt-0">
        <button className="border border-[#F05A5B] px-3 py-1 text-sm sm:text-base rounded text-[#F05A5B] hover:bg-[#F05A5B] hover:text-white transition mb-2" onClick={alert}>
          DOWNLOAD NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
