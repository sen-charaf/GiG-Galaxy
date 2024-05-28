import React, { useContext, useEffect, useState } from "react";
import MessagesArea from "./MessagesArea";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";
import { ChatContext } from "@/context/ChatContextProvider";

export default function ChatSection({reciverId}) {
  const [messagesPlaceholder, setMessagesPlaceholder] = useState(null)
  return (
    <div className="h-[90vh] border w-3/4  bg-gray-50 rounded">
      <div className="h-[7vh]">
        <ChatHeader />
      </div>
      <div className="h-[73vh]">
        <MessagesArea messagesPlaceholder={messagesPlaceholder} setMessagesPlaceholder={setMessagesPlaceholder}   reciverId={reciverId}  />
      </div>
      <div className="h-[10vh]">
        <MessageInput reciverId={reciverId} setMessagesPlaceholder={setMessagesPlaceholder}  />
      </div>
    </div>
  );
}
