import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Reviews from "./Reviews";
import Extras from "./Extras";
import { FaRegFlag } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/message";

export default function ServiceLeftSide({ slides, setOrder, order, service }) {
  const images = service.serviceimages;
  console.log(images);
  return (
    <>
      {service && (
        <div className="w-2/3">
          <div className="flex flex-col space-y-4 ">
            <div className="bg-white p-5 rounded border flex flex-col items-center">
              <div className="flex justify-between items-center w-full mb-10">
                <div className="text-3xl w-full font-semibold font-custom ">
                  {service.title}
                </div>
                <Dialog>
                  <DialogTrigger className="btn btn-primary text-2xl text-zinc-300 duration-500 hover:text-red-600 text-semibold">
                    <FaRegFlag />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader></DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <div className=" w-[800px] h-[470px]">
                <Carousel>
                  <CarouselContent>
                    {images &&
                      images.map((slide) => (
                        <CarouselItem>
                          <img
                            className=" w-[800px] h-[470px]"
                            src={slide.image}
                          />
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
                <div
                  dangerouslySetInnerHTML={{ __html: service.description }}
                ></div>
              </div>
            </div>
            <Extras setOrder={setOrder} order={order} />
            <Reviews />
          </div>
        </div>
      )}
    </>
  );
}
