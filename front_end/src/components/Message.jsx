import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
function Message({ message }) {
  return (
    <div className="hover:bg-gray-100  transition-all duration-200 p-3 rounded-md">
      <div className="flex  space-x-3">
        
            <Avatar className="size-10 mx-1">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-3">
            <div className="font-custom font-semibold">{message.username}</div>
            <div className="text-sm text-gray-400">{message.formatedCreated_at}</div>
          </div>
          <div>{message.message.message}</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
