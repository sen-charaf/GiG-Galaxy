import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { axiosClient } from "@/api/axios";
import { ChatContext } from "@/context/ChatContextProvider";
import Pusher from "pusher-js";
import moment from "moment";
import { Skeleton } from "@mui/material";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MessagesArea({
  reciverId,
  messagesPlaceholder,
  setMessagesPlaceholder,
}) {
  const { messages, setMessages } = useContext(ChatContext);
  const [liveMessages, setLiveMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  function formatCreatedAt(createdAt) {
    const now = Date.now();
    const then = new Date(createdAt);
    const diffInMs = now - then.getTime(); // Milliseconds difference

    // Using moment.js (if installed)
    if (moment) {
      const duration = moment.duration(diffInMs);
      const minutes = Math.floor(duration.asMinutes());
      const hours = Math.floor(duration.asHours());
      const days = Math.floor(duration.asDays());

      if (days > 0) {
        // Check for days first
        return then.toLocaleDateString(); // Format as full date for days
      } else if (hours > 0) {
        return `${Math.round(hours)}h ago`; // Round hours
      } else if (minutes > 0) {
        return `${Math.round(minutes)}m ago`; // Round minutes
      } else {
        return "Just now";
      }
    } else {
      // Using native Date methods (fallback)
      const seconds = Math.floor(diffInMs / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days > 0) {
        return then.toLocaleDateString(); // Format as full date for days
      } else if (hours > 0) {
        return `${hours}h ago`;
      } else if (minutes > 0) {
        return `${minutes}m ago`;
      } else {
        return "Just now";
      }
    }
  }
  useEffect(() => {
    const pusher = new Pusher("152dd772c0915f356ab0", {
      cluster: "eu",
    });
    const channel = pusher.subscribe("my-channel");
    const handleNewMessage = (data) => {
      console.log("1");

      data.formatedCreated_at = formatCreatedAt(data.message.created_at);
      setMessagesPlaceholder(null);
      setLiveMessages((prev) => [data, ...prev]);
  
    };

    channel.bind("my-event", handleNewMessage);
  }, []);
  useEffect(() => {
    axiosClient
      .post(`/get_messagesByUser/${reciverId}`)
      .then((res) => {
        let messages = res.data;
        messages.forEach((message) => {
          message.formatedCreated_at = formatCreatedAt(
            message.message.created_at
          );
        });
        setMessages(messages);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="h-full flex flex-col-reverse space-y-3 overflow-y-scroll ">
      {messagesPlaceholder && (
        <div className="hover:bg-gray-100  transition-all duration-200 p-3 rounded-md opacity-50">
          <div className="flex  space-x-3">
            <Avatar className="size-10 mx-1">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-3">
                <div className="font-custom font-semibold">
                  Me
                </div>
                <div className="text-sm text-gray-400">
                  just now
                </div>
              </div>
              <div>
                {messagesPlaceholder}
              </div>
            </div>
          </div>
        </div>
      )}
      {liveMessages &&
        liveMessages.map((message, index) => {
          return <Message key={index} message={message} />;
        })}
      {loading
        ? messages.map((message, index) => {
            return <Message key={index} message={message} />;
          })
        : array.map((_, index) => {
            return (
              <div
                key={index}
                className="hover:bg-gray-100  transition-all duration-200 p-3 rounded-md"
              >
                <div className="flex  space-x-3">
                  <Skeleton
                    style={{ padding: "12px" }}
                    variant="circular"
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-3">
                      <div className="font-custom font-semibold">
                        <Skeleton variant="text" width={100} />
                      </div>
                      <div className="text-sm text-gray-400">
                        <Skeleton variant="text" width={50} />
                      </div>
                    </div>
                    <div>
                      <Skeleton variant="text" width={200} height={30} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
}
