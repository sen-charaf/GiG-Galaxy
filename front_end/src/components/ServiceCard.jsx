import React from "react";
import Carousel from "./Carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarRate from "../assets/star.svg";
import { Link } from "react-router-dom";
function ServiceCard({w,h,w_card,service}) {
  const slides = [
    "https://5.imimg.com/data5/HP/EL/HI/GLADMIN-13990078/selection-320-500x500.png",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1714235233~exp=1714235833~hmac=b700a74bca0c87ce4ca7109283d30e6ed308f21ff4b2c8b602fdc6553650cdfe",
    "https://img.freepik.com/free-photo/assortment-colored-plant-leaves_23-2149337905.jpg?t=st=1714235326~exp=1714238926~hmac=db12683ce65ab20642a23ded2d6f17e3a3f19333f3e811c2e9cb0d11d929e5c4&w=1380",
    "https://img.freepik.com/free-photo/majestic-cliff-waters-edge-reflecting-beauty-generative-ai_188544-12640.jpg?t=st=1714237808~exp=1714241408~hmac=34f29b92ad9b21d090f6e316b8a35cb29bf63dedd1f1f5bbe3dfe005182e0041&w=1380",
  ];
  return (
    <>
      <div className={`flex w-[${w_card}rem]  flex-col space-y-2 bg-white p-4 border rounded group hover:cursor-pointer `}>
        {
          service && <Carousel w={w} h={h} slides={service.serviceimages} />
        }
        <div className="flex justify-between w-full">
          <div className="flex items-center space-x-1">
            <Avatar className="size-7 mx-1">
              <AvatarImage src={service && service.user.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className=" font-custom font-bold text-sm ">{service && service.user.name}</div>
          </div>
          <div className="flex space-x-1 items-center">
            <div className="size-7">
              <img src={StarRate} alt="stareRate" />
            </div>
            <div className="font-custom font-semibold">{service && service.rating}</div>
            <div className="font-custom  text-gray-400">(0)</div>
          </div>
        </div>
        <Link to={`/service/${service && service.id}`}>
          <div className="w-full mx-1 group-hover:text-primary  transition-all ease-in-out duration-300 ">
            {service && service.title}
          </div>
        </Link>

        <div className="flex justify-between items-center w-full">
          <div className="w-full mx-1 font-custom font-bold">{service && service.price}DH</div>
          <div className="w-full text-right font-custom  text-xs text-gray-400">
            Within { service && service.displayed_delivery_time}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
