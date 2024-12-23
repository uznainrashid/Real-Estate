import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center  w-full overflow-hidden "
      style={{ backgroundImage: "url(./header_img.png)" }}
      id="Header"
    >
      <Navbar />
      <div className="container mt-36 text-center mx-auto px-6 py-4 md:px-20 lg:px-32 text-white" >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold">Explore Home That Fit Your Dreams</h2>
        <div className="space-x-6 mt-16">
          <a href="#Projects" className="border border-white px-8 py-3 rounded hover">Projects</a>
          <a href="#Contact " className="bg-blue-600 px-8 py-3 rounded hover:bg-blue-800">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Header;