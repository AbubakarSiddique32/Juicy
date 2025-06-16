import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

export default function Juicy() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-300 to-orange-500 text-white font-sans overflow-hidden">
      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-white text-2xl font-bold">Juicy</h1>
        <ul className="hidden md:flex gap-6 text-white font-medium">
          <li>Flavour</li>
          <li>Drinks</li>
          <li>Fruit</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-4 items-center">
          <FaUserCircle size={24} />
          <div className="relative">
            <IoMdNotifications size={24} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-xs flex items-center justify-center rounded-full">
              2
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 py-10 relative">
        {/* Left Text + Buttons */}
        <div className="z-10 w-full lg:w-1/2 ">
          <h2 className="text-4xl font-bold">Orange Crush</h2>
          <p className="max-w-md text-white/90 font-Mina font-[400]">
            Discover a world of vibrant flavors with our premium juice
            selection. At Fresh & Juicy, we believe in the power of nature's
            finest ingredients to bring you delicious
          </p>
          <button className="mt-4 bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-orange-100 transition">
            See More
          </button>
        </div>

        {/* Product Can Image */}
        <div className="z-10 relative mt-12 lg:mt-0">
          <img src="/can.png" alt="Juice Can" className="w-[280px] mx-auto" />
        </div>

        {/* JUICY Background Text */}
        <h1 className="absolute top-1/3 left-0 right-0 text-[15vw] font-black text-white text-center z-0 select-none pointer-events-none">
          JUICY
        </h1>

        {/* Size Options */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-10">
          {["500 ML", "100 ML", "125 ML"].map((size, idx) => (
            <div
              key={idx}
              className="bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-semibold shadow"
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-8">
        {/* Slider arrows */}
        <div className="flex gap-2">
          <button className="w-10 h-10 bg-white/30 border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white/40">
            ◀
          </button>
          <button className="w-10 h-10 bg-white/30 border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white/40">
            ▶
          </button>
        </div>

        {/* Scroll Button */}
        <div className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-100 transition">
          Scroll Down
        </div>
      </div>
    </div>
  );
}
