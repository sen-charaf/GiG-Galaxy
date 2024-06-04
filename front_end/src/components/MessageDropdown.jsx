import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { axiosClient } from "@/api/axios";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

const MessageDropdown = ({setIsMessageOpen}) => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
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
  const toInbox = () => {
    setIsMessageOpen(false);
    navigate("/chat");
  }
  useEffect(() => {
    axiosClient
      .post("/get_recived_messages/4")
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="absolute right-0 mt-2 w-70 h-[25rem] bg-white flex flex-col justify-between shadow-lg rounded">
      {messages.length == 0 ? (
        <div className="p-4 text-center">
          <div className="text-lg font-medium text-gray-800">Messages (0)</div>
          <div className="mt-2">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/no-audio.png"
              alt="No Message"
              className="w-12 h-12 mx-auto"
            />
          </div>
          <div className="mt-4 text-gray-600">
            No Message
            <div className="mt-2 text-sm">
              Browse our amazing catalog of Gigs or offer your talent on Gig
              Galaxy.
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 text-center">
          <div className="text-lg font-medium text-gray-800">Messages (+4)</div>
          {messages.map((message) => (
            <div
              className={`flex justify-between hover:bg-gray-100 cursor-pointer transition-all duration-200 p-3 rounded-md w-[26rem]`}
            >
              <div className="flex space-x-3">
                <Avatar className="size-10 mx-1">
                  <AvatarImage
                    src={
                      /* conversationitem.image ??  */ message.sender.image
                    }
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-around">
                  <div className="font-custom font-semibold">
                    {message.sender.name}
                  </div>
                  <div className="font-custom text-start text-gray-500">
                    {message.message}
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="font-custom text-gray-400">
                  {formatCreatedAt(message.created_at)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="w-full flex justify-center pb-4">
     
          <div 
          onClick={toInbox} className=" text-primary text-sm border border-primary px-4 py-2 rounded cursor-pointer hover:bg-primary hover:text-white transition-all duration-100">
            
            Open Inbox
          </div>
      
      </div>
    </div>
  );
};

export default MessageDropdown;
