import { axiosClient } from "@/api/axios";
import React, { useState } from "react";

function MessageInput({reciverId, setMessagesPlaceholder}) {
 const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient.post("/send_message", { message, receiver_id: reciverId }).then((res) => {
      console.log(res);
      setMessage('');
      setMessagesPlaceholder(message);
    }).catch((err) => {
      console.log(err);
    })
    
  }
  return (
    <div className="bg-white border-y h-full flex justify-center items-center">
      <div className="w-full px-5">
        <form onSubmit={handleSubmit}>
          <div className="flex w-full">
            <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
              className="border rounded rounded-r-none outline-none  w-full p-2 "
              type="text"
              placeholder="Type a message"
            />
            <button className=" border w-24 bg-white border-primary text-primary hover:bg-primary hover:text-white transition-all duration-150 active:bg-purple-700 rounded rounded-l-none  p-2">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MessageInput;
