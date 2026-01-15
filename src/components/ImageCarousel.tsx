import { useCallback, useState } from "react";
import { screens } from "@/assets/screenshots";
import Button from "@/ui/button";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-6 px-4">
      <h2 className="text-3xl font-bold text-center">Capturas de pantalla</h2>

      <div className="flex items-center justify-center gap-4 w-full max-w-4xl relative">
        <Button
          onClick={handlePrev}
          className="bg-transparent border-none text-3xl cursor-pointer p-4"
        >
          ❮
        </Button>

        <div className="flex items-center justify-center w-full">
          <img
            src={screens[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="
              max-h-[70vh]
              w-auto
              object-contain
              rounded-3xl
              transition-opacity
              duration-500
            "
          />
        </div>

        <Button
          onClick={handleNext}
          className="bg-transparent border-none text-3xl cursor-pointer p-4"
        >
          ❯
        </Button>
      </div>
    </div>
  );
};

export default ImageCarousel;
