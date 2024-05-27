import React from "react";
import MessagesArea from "./MessagesArea";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";

export default function ChatSection() {
  return (
    <div className="h-[90vh] border w-3/4  bg-gray-50 rounded">
      <div className="h-[7vh]">
        <ChatHeader />
      </div>
      <div className="h-[73vh]">
        <MessagesArea />
      </div>
      <div className="h-[10vh]">
        <MessageInput />
      </div>
    </div>
  );
}
