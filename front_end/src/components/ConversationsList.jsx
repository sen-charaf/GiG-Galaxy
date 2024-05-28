import React, { useEffect, useState } from "react";
import Conversation from "./Conversation";
import { axiosClient } from "@/api/axios";
import { Skeleton } from "@mui/material";
import Pusher from "pusher-js";

export default function ConversationsList({ setReciverId }) {
  const [conversations, setConversations] = useState([]);
  const [Isloading, setIsloading] = useState(true);
  const [latestmessage, setLatestmessage] = useState({message:"" , convId:"", senderName:""});
  const array = [1, 2, 3, 4, 5, 6, 7];
  useEffect(() => {
    axiosClient
      .post(`/get_conversations`)
      .then((res) => {
        setConversations(res.data);
        console.log(res.data);

        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const pusher = new Pusher("152dd772c0915f356ab0", {
      cluster: "eu",
    });
    const channel = pusher.subscribe("my-channel");
    const handlelatestMessage = (data) => {
      setLatestmessage({message:data.message, convId:data.message.conversation_id, senderName:data.username});
      
    };

    channel.bind("my-event", handlelatestMessage);
  }, []);
  return (
    <div className="bg-white w-1/4 h-[90vh] border">
      <div className="flex flex-col mx-3 py-5">
        <div className="font-custom font-semibold text-2xl mx-5">
          Conversations
        </div>
        <div className="h-px my-3  bg-gray-300" />
        <div className="flex flex-col space-y-5">
          {!Isloading
            ? conversations.map((conversationitem) => {
                return (
                  <Conversation
                    setReciverId={setReciverId}
                    key={conversationitem.id}
                    conversationitem={conversationitem}
                    latestmessage={latestmessage}
                  />
                );
              })
            : array.map((item, index) => {
                return (
                  <div className="flex justify-between hover:bg-gray-100 cursor-pointer transition-all duration-200 p-3 rounded-md">
                    <div className="flex space-x-3">
                      <Skeleton variant="circular" width={64} height={64} />
                      <div className="flex flex-col justify-around">
                        <div className="font-custom font-semibold">
                          <Skeleton variant="text" width={120} />
                        </div>
                        <div className="font-custom text-gray-500">
                          <Skeleton variant="text" width={300} />
                        </div>
                      </div>
                    </div>
                    <div className=" ">
                      <div className="font-custom text-gray-400">
                        <Skeleton variant="text" width={50} />
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
