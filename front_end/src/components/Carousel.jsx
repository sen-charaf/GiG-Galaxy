import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

function Carousel({ slides }) {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  return (
    <>
      <div className="  overflow-hidden group  relative w-80 shadow-md">
        <div
          className=" flex w-fit transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${curr * 100/slides.length}%)` }}
        >
          {slides.map((slide, index) => (
            <div className=" w-80 h-44 ">
              <img className="rounded w-80 h-44" src={slide} alt="" />
            </div>
          ))}
        </div>
        <div className="hidden absolute inset-0 group-hover:flex items-center justify-between p-2">
          <button
            onClick={prev}
            className="bg-white/80 rounded-full p-1 shadow text-gray-800 hover:bg-white"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="bg-white/80 rounded-full p-1 shadow text-gray-800 hover:bg-white"
          >
            <ChevronRight />
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0 ">
          <div className="flex items-center justify-center gap-2">
            {slides.map((slide, index) => (
              <div
                className={`transition-all w-2 h-2 bg-white rounded-full ${
                  curr === index ? "p-1" : "bg-opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
