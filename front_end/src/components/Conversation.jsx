import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Conversation() {
  return (
    <div className="flex justify-between hover:bg-gray-100 cursor-pointer transition-all duration-200 p-3 rounded-md">
      <div className="flex space-x-3">
      <Avatar className="size-16 mx-1">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-around">
        <div className="font-custom font-semibold">Receiver's name</div>
        <div className="font-custom text-gray-500">Me: This is the last message </div>
      </div>
      </div>
      <div className=" ">
        <div className="font-custom text-gray-400">10:10 AM</div>
      </div>
    </div>
  );
}
