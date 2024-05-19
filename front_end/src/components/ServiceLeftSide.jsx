import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Reviews from "./Reviews";

export default function ServiceLeftSide({ slides }) {
  return (
    <>
      <div className="w-2/3">
        <div className="flex flex-col space-y-4 ">
          <div className="bg-white p-5 rounded border flex flex-col items-center">
            <div className="text-3xl w-full font-semibold font-custom mb-10">
              I will create a minimalist logo design for your business
            </div>
            <div className=" w-[800px] h-[470px]">
              <Carousel>
                <CarouselContent>
                  {slides.map((slide) => (
                    <CarouselItem>
                      <img className=" w-[800px] h-[470px]" src={slide} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="mt-8 flex flex-col space-y-5">
              <div className="w-full text-xl   font-semibold ">
                About this GiG
              </div>
              <div>
                Need content written for your bespoke landing page? I'll write
                500 words of unique and SEO-friendly content for your website.
                If you need words that CONVERT, look no further. I can write on
                almost any topic for any audience. Just send me prior writing
                examples or your brand tone guide! Need more words? My standard
                rate is £10/100 words for expert-level website content.
              </div>
            </div>
          </div>
          <Reviews />
        </div>
      </div>
    </>
  );
}
