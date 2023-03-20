import Image from "next/image";
import { useState } from "react";

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div className="relative m-2 mt-2 rounded-lg border-2 border-blue-200 bg-white shadow-md shadow-blue-500">
      <button
        type="button"
        className="group absolute top-0 left-0 z-30 flex h-full transform cursor-pointer items-center justify-center px-4 hover:scale-110 focus:outline-none"
        onClick={handlePrevClick}
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-800/80 text-white hover:text-blue-500 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span className="sr-only">Anterior</span>
        </span>
      </button>
      <button
        type="button"
        className="group absolute top-0 right-0 z-30 flex h-full transform cursor-pointer items-center justify-center px-4 hover:scale-110 hover:text-blue-500 focus:outline-none"
        onClick={handleNextClick}
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-800/80 text-white hover:text-blue-500 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
          <span className="sr-only">Siguiente</span>
        </span>
      </button>

      <div className="h-64 w-64 overflow-hidden rounded-lg sm:h-80 sm:w-80 md:h-80 md:w-80 lg:h-96 lg:w-96 xl:w-[32rem]">
        <div>
          <Image
            src={`/${images[currentImageIndex]}`}
            height="1200"
            width="800"
            alt={`Image ${currentImageIndex}`}
            className="absolute h-full w-full rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
