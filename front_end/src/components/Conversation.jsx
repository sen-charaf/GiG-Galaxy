import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Conversation({ conversation }) {
  return (
    <div className="flex justify-between hover:bg-gray-100 cursor-pointer transition-all duration-200 p-3 rounded-md">
      <div className="flex space-x-3">
      <Avatar className="size-16 mx-1">
        <AvatarImage src={conversation.image ?? "https://github.com/shadcn.png"} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-around">
        <div className="font-custom font-semibold">{conversation.username}</div>
        <div className="font-custom text-gray-500">{conversation.last_message ? conversation.last_message.message : "No message yet"} </div>
      </div>
      </div>
      <div className=" ">
        <div className="font-custom text-gray-400">{conversation.last_message ? conversation.last_message.created_at : ""}</div>
      </div>
    </div>
  );
}
