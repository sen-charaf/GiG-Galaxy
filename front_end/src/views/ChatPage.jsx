import React, { useContext, useEffect, useState } from "react";
import Pusher from "pusher-js";
import { axiosClient } from "@/api/axios";
import ConversationsList from "@/components/ConversationsList";
import ChatSection from "@/components/ChatSection";
import ChatIcon from "../assets/chat_placeholder.svg";
import { ChatContext, ChatProvider } from "@/context/ChatContextProvider";

export default function ChatPage() {
  const { messages, setMessages } = useContext(ChatContext);
  const [reciverId, setReciverId] = useState(0);

  useEffect(() => {
    console.log("changed");
  }, [messages]);

  /*  const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.post('/chat', {message, username}).then((response) => {
            
        })
    } */

  return (
    <div className="flex">
      <ChatProvider>
        <ConversationsList setReciverId={setReciverId} />
        {console.log(reciverId)}
        {reciverId ? (
          <ChatSection reciverId={reciverId} />
        ) : (
          <div className=" w-3/4 flex justify-center items-center">
           <div className="flex flex-col items-center space-y-2 text-gray-400">
            <img className="size-64" src={ChatIcon} alt="ss" />
            <div className="font-custom font-bold text-xl">Select a conversation to start messaging</div>
           </div>
          </div>
        )}
      </ChatProvider>
    </div>
  );
}
