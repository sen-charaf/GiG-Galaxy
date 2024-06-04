import React, { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChatContext } from "@/context/ChatContextProvider";
import moment from "moment";

export default function Conversation({ conversationitem, setReciverId,latestmessage }) {
    const {setConversation , conversation} = useContext(ChatContext)
    console.log(conversationitem.image ? conversationitem.displayImage : "https://github.com/shadcn.png");
    const senderUsername = conversationitem.reciverId === conversationitem.last_message.sender_id ? conversationitem.username : "Me"
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
  
    
        if (days > 0) { // Check for days first
          return then.toLocaleDateString(); // Format as full date for days
        } else if (hours > 0) {
          return `${Math.round(hours)}h ago`; // Round hours
        } else if (minutes > 0) {
          return `${Math.round(minutes)}m ago`; // Round minutes
        } else {
          return 'Just now';
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
          return 'Just now';
        }
      }
    }
    return (
      
        latestmessage.convId && conversationitem.id === latestmessage.convId ? (
          
          
            <div onClick={() => {setReciverId(conversationitem.reciverId) ; setConversation(conversationitem) }} 
            className={`flex justify-between hover:bg-gray-100 ${conversationitem.id === conversation.id ? "bg-black/5" : ""} cursor-pointer transition-all duration-200 p-3 rounded-md`}>
              <div className="flex space-x-3">
              <Avatar className="size-16 mx-1">
                <AvatarImage src={conversationitem.image ? conversationitem.displayImage : "https://github.com/shadcn.png"} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-around">
                <div className="font-custom font-semibold">{conversationitem.username}</div>
                <div className="font-custom text-gray-500">
                  {latestmessage.senderName+": "+latestmessage.message.message}
                   </div>
              </div>
              </div>
              <div className=" ">
                <div className="font-custom text-gray-400">{formatCreatedAt(latestmessage.message.created_at)}</div>
              </div>
            </div>
        ) : (
          <div onClick={() => {setReciverId(conversationitem.reciverId) ; setConversation(conversationitem) }} 
            className={`flex justify-between hover:bg-gray-100 ${conversationitem.id === conversation.id ? "bg-black/5" : ""} cursor-pointer transition-all duration-200 p-3 rounded-md`}>
              <div className="flex space-x-3">
              <Avatar className="size-16 mx-1">
                <AvatarImage src={conversationitem.image ? conversationitem.displayImage : "https://github.com/shadcn.png"} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-around">
                <div className="font-custom font-semibold">{conversationitem.username}</div>
                <div className="font-custom text-gray-500">
                  {conversationitem.last_message ? senderUsername+": "+conversationitem.last_message.message : ""}
                   </div>
              </div>
              </div>
              <div className=" ">
                <div className="font-custom text-gray-400">{conversationitem.last_message ? formatCreatedAt(conversationitem.last_message.created_at) : ""}</div>
              </div>
            </div>
        )
      
    )
    
}
