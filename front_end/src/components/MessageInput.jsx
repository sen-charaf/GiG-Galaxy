import { axiosClient } from "@/api/axios";
import React, { useState } from "react";
import attachementIcon from "../assets/attachementIcon.svg";
import Attachement from "./Attachement";
function MessageInput({ reciverId, setMessagesPlaceholder,attachments,setAttachments }) {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("message", message);
    form.append("receiver_id", reciverId);
    for (let i = 0; i < attachments.length; i++) {
      form.append("attachments[]", attachments[i]);
    }
    axiosClient
      .post("/send_message", form)
      .then((res) => {
        console.log(res);
        setMessage("");
        setMessagesPlaceholder(message);
        setAttachments([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-white flex justify-center items-center">
      <div className="w-full flex flex-col px-5">
        
        <form onSubmit={handleSubmit}>
          <div className="flex w-full">
            <div className="border flex items-center  rounded rounded-r-none outline-none  w-full ">
              <input
                onInputCapture={(e) =>
                  setAttachments([...attachments, e.target.files[0]])
                }
                type="file"
                multiple
                id="attachment"
                className="hidden"
              />
              <label
                className="cursor-pointer hover:bg-gray-100 p-2 mr-3"
                htmlFor="attachment"
              >
                <img src={attachementIcon} className="size-6" alt="" />
              </label>
              <input
                className="outline-none w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                placeholder="Type a message"
              />
            </div>
            <button className=" border w-24 bg-white border-primary text-primary hover:bg-primary hover:text-white transition-all duration-150 active:bg-purple-700 rounded rounded-l-none  p-2">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MessageInput;
