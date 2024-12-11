import React from "react";
import logo from "../assets/Images/glowQuickLogo.png";
import Button1 from "../Common/Button1/Button1";
import Button from "../Common/Button4/Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-full w-[40%] object-contain" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 absolute top-5 right-5">
        <div className="flex gap-10 justify-center items-center">
          <Button1 name={"Book Now"} />
          <Button
            text="LOGIN AS SERVICE PROVIDER"
            bgColor="#285F74"
            textColor="text-white"
            className="text-xl border border-[#285F74]"
          />
        </div>
      </div>
      <div className="hidden md:flex space-x-6 absolute top-5 right-5"></div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="text-white">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
