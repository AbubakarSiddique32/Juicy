import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { AiOutlineShopping } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import blackberry from "../Images/blackberry.png";
import cheeky from "../Images/cheeky.png";
import orange from "../Images/orange.png";
import strawberry from "../Images/strawberry.png";

const juiceData = [
  {
    name: "Orange Crush",
    description:
      "Discover a world of vibrant flavors with our premium juice selection. At Fresh & Juicy, we believe in the power of nature's finest ingredients to bring you delicious.",
    image: orange, // Replace with the correct image path for the orange juice can
    sizes: ["500 ML", "100 ML", "125 ML"],
    bgColor: "bg-orange-500",
    textColor: "text-orange-600",
  },
  {
    name: "Cheeky Lime",
    description:
      "A tangy and refreshing blend of nature's finest ingredients, designed to invigorate your taste buds and brighten your day.",
    image: cheeky, // Replace with the correct image path for the lime juice can
    sizes: ["500 ML", "100 ML", "125 ML"],
    bgColor: "bg-green-500",
    textColor: "text-green-600",
  },
  {
    name: "Red Berry",
    description:
      "Experience the bold and sweet flavor of red berries, carefully crafted with nature’s best to bring a rich, fruity experience.",
    image: strawberry, // Replace with the correct image path for the red berry juice can
    sizes: ["500 ML", "100 ML", "125 ML"],
    bgColor: "bg-red-500",
    textColor: "text-red-600",
  },
  {
    name: "Purple Grape",
    description:
      "A sweet and juicy blend of premium grapes, packed with antioxidants and flavor to refresh your senses.",
    image: blackberry, // Replace with the correct image path for the purple grape juice can
    sizes: ["500 ML", "100 ML", "125 ML"],
    bgColor: "bg-purple-500",
    textColor: "text-purple-600",
  },
];

export default function Juicy() {
  const [currentJuiceIndex, setCurrentJuiceIndex] = useState(0);

  const handleNextJuice = () => {
    setCurrentJuiceIndex((prevIndex) => (prevIndex + 1) % juiceData.length);
  };

  const handlePrevJuice = () => {
    setCurrentJuiceIndex(
      (prevIndex) => (prevIndex - 1 + juiceData.length) % juiceData.length
    );
  };

  const currentJuice = juiceData[currentJuiceIndex];

  return (
    <div
      className={`relative min-h-screen text-white font-sans overflow-hidden ${currentJuice.bgColor}`}
    >
      {/* Nav */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-white text-[32px]  font-bold">Juicy</h1>
        <ul className="hidden md:flex gap-10  ">
          <li className="text-[18px] text-white font-bold cursor-pointer hover:underline">
            Flavour
          </li>
          <li className="text-[18px] text-white font-bold cursor-pointer hover:underline">
            Drinks
          </li>
          <li className="text-[18px] text-white font-bold cursor-pointer hover:underline">
            Fruit
          </li>
          <li className="text-[18px] text-white font-bold cursor-pointer hover:underline">
            About
          </li>
          <li className="text-[18px] text-white font-bold cursor-pointer hover:underline">
            Contact
          </li>
        </ul>
        <div className="flex gap-4 items-center ">
          <HiOutlineUserCircle size={30} className="cursor-pointer" />
          <div className="relative">
            <AiOutlineShopping size={30} className="cursor-pointer" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-xs flex items-center justify-center rounded-full">
              2
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex flex-col lg:flex-row items-center justify-center md:h-[80vh] px-8 md:px-16 py-10 pb-0 relative">
        {/* Product Can Image */}
        <div className="z-10  mt-12  lg:h-[100vh]">
          <img
            src={currentJuice.image}
            alt={currentJuice.name}
            className="w-[280px] mx-auto h-full "
          />
        </div>

        {/* JUICY Background Text */}
        <h1 className="absolute top-[20%] left-0 right-0 text-[20vw]  font-black text-white text-center z-0 select-none pointer-events-none">
          JUICY
        </h1>

        {/* Size Options */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-10 ">
          {currentJuice.sizes.map((size, idx) => (
            <div
              key={idx}
              className="flex items-center text-center font-Outfit justify-center bg-black/30 text-[white] h-[71px] w-[71px] px-4 py-1 rounded-full text-[16px] font-semibold shadow hover:bg-white hover:text-black"
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className=" flex  items-end px-10 py-10">
        {/* Left Text + Buttons */}
        <div className="z-10 w-full md:w-[30%] relative   ">
          <h2 className="text-4xl font-bold">{currentJuice.name}</h2>
          <p className="max-w-md text-white/90 font-Mina font-[400]">
            {currentJuice.description}
          </p>
          <button className="mt-4 bg-white inline-block text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-orange-100 transition">
            See More
          </button>
        </div>
        {/* Slider arrows */}
        <div className="flex gap-4 md:w-[40%] items-center justify-center ">
          <button
            className="w-[50px] h-[50px] bg-transparent border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white/40"
            onClick={handlePrevJuice}
          >
            <FaChevronLeft className=" text-[20px]" />
          </button>
          <button
            className="w-[50px] h-[50px] bg-transparent border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white/40"
            onClick={handleNextJuice}
          >
            <FaChevronRight className=" text-[20px]" />
          </button>
        </div>

        {/* Scroll Button */}
        <div className=" w-[30%] flex items-center justify-end">
          <button className=" bg-transparent border border-white text-white h-[80px] w-[80px] px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition ">
            Scroll Down
          </button>
        </div>
      </div>
    </div>
  );
}
