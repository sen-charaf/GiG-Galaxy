import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
function ChatHeader() {
  return (
    <div className="flex items-center space-x-3 bg-white p-2 border-b">
      <Avatar className="size-12 mx-1">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="font-custom font-bold text-sm">Sender's name</div>
    </div>
  );
}

export default ChatHeader;
