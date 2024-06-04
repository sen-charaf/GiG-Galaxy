import React, { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChatContext } from "@/context/ChatContextProvider";
function ChatHeader() {
  const {conversation} = useContext(ChatContext)
  return (
    <div className="flex items-center space-x-3 bg-white p-2 border-b">
      <Avatar className="size-12 mx-1">
        <AvatarImage src={conversation.image ? conversation.displayImage : "https://github.com/shadcn.png"} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="font-custom font-bold text-sm">{conversation.username}</div>
    </div>
  );
}

export default ChatHeader;
