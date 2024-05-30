import React, { useContext, useEffect, useState } from "react";
import MessagesArea from "./MessagesArea";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";
import { ChatContext } from "@/context/ChatContextProvider";
import Attachement from "./Attachement";
import pdfIcon from "../assets/pdfIcon.svg";
import docIcon from "../assets/docIcon.svg";
import codeIcon from "../assets/codeIcon.svg";
import audioIcon from "../assets/audioIcon.svg";
import imageIcon from "../assets/imageIcon.svg";
import pptIcon from "../assets/pptIcon.svg";
import txtIcon from "../assets/txtIcon.svg";
import unknownTypeIcon from "../assets/unknownTypeIcon.svg";
import vedioIcon from "../assets/vedioIcon.svg";
import xlsIcon from "../assets/xlsIcon.svg";
import zibIcon from "../assets/zibIcon.svg";

export default function ChatSection({ reciverId }) {
  const fileIcons = {
    pdf: pdfIcon,
    doc: docIcon,
    docx: docIcon,
    html: codeIcon,
    js: codeIcon,
    css: codeIcon,
    json: codeIcon,
    jsx: codeIcon,
    py: codeIcon,
    java: codeIcon,
    c: codeIcon,
    cpp: codeIcon,
    cs: codeIcon,
    sql: codeIcon,
    xml: codeIcon,
    mp3: audioIcon,
    jpg: imageIcon,
    jpeg: imageIcon,
    png: imageIcon,
    ppt: pptIcon,
    pptx: pptIcon,
    txt: txtIcon,
    mp4: vedioIcon,
    xls: xlsIcon,
    xlsx: xlsIcon,
    zip: zibIcon,
    mkv: vedioIcon,
  };
  const [messagesPlaceholder, setMessagesPlaceholder] = useState(null);
  const [attachments, setAttachments] = useState([]);
  return (
    <div className="h-[90vh] border w-3/4 flex flex-col   bg-gray-50 rounded">
      <div className="">
        <ChatHeader />
      </div>
      <div className="flex-grow h-1/4">
        <MessagesArea
          messagesPlaceholder={messagesPlaceholder}
          setMessagesPlaceholder={setMessagesPlaceholder}
          reciverId={reciverId}
        />
      </div>
      <div className=" flex bg-white flex-col justify-center border-y space-y-3 py-4   ">
        {attachments.length > 0 && (
          <div className="relative w-full px-5  flex flex-col space-y-3">
            <div className="text-primary font-semibold">Attachements</div>
            <div className="flex space-x-2">
              {attachments.map((attachment, index) => {
                 const type = attachment.name.split(".").pop();
                 const icon = fileIcons[type] || unknownTypeIcon;
                 let size = {
                   size: Math.round(attachment.size / 1000),
                   unit: "KB",
                 };
                 if (size.size > 1000) {
                   console.log(size);
                   size = { size: Math.round(size.size / 1024), unit: "MB" };
                   console.log(size);
                   console.log(attachment.name);
                 } else if (size.size > 1000 * 1000) {
                   size = { size: Math.round(size.size / 1024), unit: "GB" };
                 }
                return (
                  <Attachement
                    key={index}
                    attachment={attachment}
                    attachments={attachments}
                    setAttachments={setAttachments}
                    icon={icon}
                    size={size}
                  />
                );
              })}
            </div>
          </div>
        )}
        <div>
          <MessageInput
            reciverId={reciverId}
            setMessagesPlaceholder={setMessagesPlaceholder}
            attachments={attachments}
            setAttachments={setAttachments}
          />
        </div>
      </div>
    </div>
  );
}
