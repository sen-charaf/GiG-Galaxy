import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CarouselEditProfile({ slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((prevCurr) => (prevCurr === 0 ? slides.length - 1 : prevCurr - 1));

  const next = () =>
    setCurr((prevCurr) => (prevCurr === slides.length - 1 ? 0 : prevCurr + 1));

  return (
    <>
      <div className="overflow-hidden group relative w-[16rem] shadow-md ">
        <Link to={"/service"}>
          <div
            className="flex w-fit transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${curr * 100 / slides.length}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-[16rem] h-[8rem]">
                <img className="rounded w-[16rem] h-[8rem]" src={slide} alt="" />
              </div>
            ))}
          </div>
        </Link>
        <div className="hidden w-full absolute top-1/2 -translate-y-1/2 group-hover:flex items-center justify-between p-2">
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
                key={index}
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

export default CarouselEditProfile;
