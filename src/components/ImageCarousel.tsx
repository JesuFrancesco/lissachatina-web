import { useState } from "react";

import homeScreen from "@/assets/home_screen.png";
import detectorScreen from "@/assets/detector_screen.png";
import settingsScreen from "@/assets/settings_screen.png";

const ImageCarousel = () => {
  const screens = [homeScreen, detectorScreen, settingsScreen];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex align-middle justify-center w-full max-w-2xl mx-auto relative">
      <button
        onClick={handlePrev}
        className="bg-transparent border-none text-xl cursor-pointer p-5 z-2"
      >
        ❮
      </button>
      <img
        src={screens[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-auto rounded-lg transition-opacity duration-500 opacity-100"
      />
      <button
        onClick={handleNext}
        className="bg-transparent border-none text-xl cursor-pointer p-5 z-2"
      >
        ❯
      </button>
    </div>
  );
};

export default ImageCarousel;
