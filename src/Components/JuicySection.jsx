import { useState } from "react";
import { motion } from "framer-motion";

const drinks = [
  {
    id: 1,
    name: "Cheeky Lime",
    flavor: "Cheeky Lime",
    image: "path_to_green_drink_image.png", // Replace with actual image path
    bgColor: "bg-green-500",
    textColor: "text-green-700",
  },
  {
    id: 2,
    name: "Orange Crush",
    flavor: "Orange Crush",
    image: "path_to_orange_drink_image.png", // Replace with actual image path
    bgColor: "bg-orange-500",
    textColor: "text-orange-700",
  },
  {
    id: 3,
    name: "Red Berry",
    flavor: "Red Berry",
    image: "path_to_red_drink_image.png", // Replace with actual image path
    bgColor: "bg-red-500",
    textColor: "text-red-700",
  },
  {
    id: 4,
    name: "Purple Grape",
    flavor: "Purple Grape",
    image: "path_to_purple_drink_image.png", // Replace with actual image path
    bgColor: "bg-purple-500",
    textColor: "text-purple-700",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % drinks.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + drinks.length) % drinks.length
    );
  };

  return (
    <div
      className={`relative ${drinks[currentIndex].bgColor} h-screen flex items-center justify-center`}
    >
      {/* Left Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full"
        onClick={handlePrev}
      >
        &#10094;
      </button>

      {/* Drink Image & Text */}
      <div className="text-center text-white px-4">
        <motion.div
          className="relative"
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            loop: Infinity,
            repeatType: "mirror",
          }}
        >
          <img
            src={drinks[currentIndex].image}
            alt={drinks[currentIndex].flavor}
            className="w-72 h-72 mx-auto"
          />
        </motion.div>

        {/* Flavor Text with animation */}
        <motion.div
          className="mt-8 text-3xl font-bold"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {drinks[currentIndex].flavor}
        </motion.div>

        <motion.div
          className={`text-xl mt-2 ${drinks[currentIndex].textColor}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Discover a world of vibrant flavors with our premium drink selections.
        </motion.div>
      </div>

      {/* Right Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default HeroSection;
