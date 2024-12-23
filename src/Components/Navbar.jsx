import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

function Navbar ()  {
  const [showMobileIcon, setShowMobileIcon] = useState(false);
  useEffect(() => {
    if (showMobileIcon) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
     return () => {
    document.body.style.overflow = "auto";
    };
  }, [showMobileIcon]);
  return (
    <div className="absulote top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt=""  className="cursor-pointer" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Home" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#Testimonails"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonails
          </a>
          <a
            href="#Contact"
            className="cursor-pointer hover:text-gray-400"
          >
            Contact Us
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        {/* ---------MobileNavbar ---- */}
        <div>
        <img
          onClick={() => setShowMobileIcon(true)}
          src={assets.menu_icon}
          alt=""
          className="md:hidden w-7"
        />
      </div>
      
      <div
        className={`md:hidden ${
          showMobileIcon ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileIcon(false)}
            src={assets.cross_icon}
            className="w-6 transition-all"
          />
          
        </div>
        <div className="flex flex-col items-center">
        <img src={assets.uznain} alt="" className="w-12 rounded-full" />
        <p className="text-blue-500">Uznain Rashid </p>
        </div>

        <ul className="flex flex-col items-center gap-2 mt-1 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileIcon(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileIcon(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileIcon(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileIcon(false)}
            href="#Testimonails"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonails
          </a>
          <a
            onClick={() => setShowMobileIcon(false)}
            href="#Contact"
            className="px-4 py-2 rounded-full inline-block"
          >
            Contact Us
          </a>
        </ul>
        <div className="mt-80 text-center">
          <p className="">
            Copyright © 2024 Real-Estate{" "}
            <a
              onClick={() => setShowMobileIcon(false)}
              href=""
              className=" ml-2 font-bold text-blue-500 cursor-pointer"
            >
              CodeWithUznain
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
