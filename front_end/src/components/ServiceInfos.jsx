import React from 'react'
import PlustIcon from "../assets/plus.svg";
import MinusIcon from "../assets/minus.svg";
import DeliveryIcon from "../assets/delivery.svg";
import StarIcon from "../assets/staroutline.svg";
import OrderdIcon from "../assets/cart.svg";
import { FaLocationDot, FaLocationPinLock } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ServiceInfos({ order, setOrder, handlePriceAddSub }) {
  return (
    <div className="w-full bg-white  border rounded pt-8 h-fit pb-5   ">
      <div className="flex flex-col justify-between items-center p-2">
        <div className="font-custom font-bold text-4xl text-zinc-600">
          {order.totalPrice} DH
        </div>
      </div>
      <div className="flex  space-x-5 justify-center mb-8">
        <div className=" flex items-center justify-between bg-gray-50 p-2 border-2 rounded border-zinc-200 w-32 ">
          <div>
            <img
              className="hover:cursor-pointer"
              src={MinusIcon}
              alt="minus"
              onClick={() => handlePriceAddSub("-")}
            />
          </div>
          <div className="w-10 text-center font-semibold text-zinc-600">
            {order.qte}
          </div>
          <div>
            <img
              className="hover:cursor-pointer"
              src={PlustIcon}
              alt="plus"
              onClick={() => handlePriceAddSub("+")}
            />
          </div>
        </div>
        <button className=" w-52     p-3 rounded-md bg-green-500 hover:bg-green-400 transition-all ease-in-out duration-75 active:scale-95 text-white font-bold text-lg">
          Buy service
        </button>
      </div>

      <div className="flex w-full justify-around">
        <div className="flex flex-col w-24 justify-center items-center">
          <img className="w-7" src={DeliveryIcon} alt="DeliveryIcon" />
          <div className="text-sm text-zinc-600">
            Delivery within <div className="font-bold text-center">2 days</div>
          </div>
        </div>
        <div className="flex flex-col w-24 justify-center items-center">
          <img className="w-7" src={StarIcon} alt="DeliveryIcon" />
          <div className="text-sm text-zinc-600 ">
            Rating <div className="font-bold text-center">4.9</div>
          </div>
        </div>
        <div className="flex flex-col w-24 justify-center items-center">
          <img className="w-7" src={OrderdIcon} alt="DeliveryIcon" />
          <div className="text-sm text-zinc-600">
            Orderd by <div className="font-bold">50 people</div>
          </div>
        </div>
      </div>
      <div className=" h-px bg-zinc-200 mt-5 mb-2 mx-4"></div>
      <div className="mx-4">
        <div className="mb-4 text-md font-custom font-semibold text-zinc-600">
          Service provider
        </div>
        <div className="flex space-x-2 mb-3 ">
          <Avatar className="size-16 mx-1">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1">
            <div className="flex justify-between items-center">
              <div className="font-semibold ">Seller's name</div>
              <div className="flex space-x-1 justify-center items-center">
                <FaLocationDot className="size-3 text-zinc-400" />
                <div className="text-zinc-400 text-sm font-semibold">
                  Morocco
                </div>
              </div>
            </div>
            <div className="  h-10 text-xs text-zinc-600 overflow-y-hidden">
              Website Expert: Usability Consultant | QA Engineer | Conversion
              Rate Optimisation | Improve Sales | Reduce Bounce |
            </div>
          </div>
        </div>
        <div className=" flex w-full justify-between items-center space-x-3 mt-7">
          <button className="bg-gray-100 border border-zinc-200 transition-all ease-in-out duration-75 active:scale-95  w-full  py-2 px-3 rounded-md text-zinc-500 font-semibold">
            View profile
          </button>
          <button
            className="bg-white hover:bg-primary border border-primary transition-all duration-75 ease-in-out  active:scale-95 w-full  
           py-2 px-3 rounded-md text-primary hover:text-white font-semibold "
          >
            Contact me
          </button>
        </div>
      </div>
    </div>
  )
}
