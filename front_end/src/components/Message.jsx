import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import pdfIcon from "../assets/pdfIcon.svg";
import trashIcon from "../assets/trashIcon.svg";
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
import { axiosClient } from "@/api/axios";
import LoadedAttachement from "./LoadedAttachement";
import { useStateContext } from "@/context/ContextProvider";

function Message({ message }) {
  const {currentUser} = useStateContext();
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

  const deleteMessage = () => {
    axiosClient.post('/delete_message', {message_id: message.message.id}).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="hover:bg-gray-100 group flex justify-between  transition-all duration-200 p-3 rounded-md">
      <div>
        <div className="flex  space-x-3">
          <Avatar className="size-10 mx-1">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-3">
              <div className="font-custom font-semibold">
                {message.username}
              </div>
              <div className="text-sm text-gray-400">
                {message.formatedCreated_at}
              </div>
            </div>
            <div>{message.message.message}</div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          {message.attachments &&
            message.attachments.length > 0 &&
            message.attachments.map((attachment) => {
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
                <LoadedAttachement
                message={message.message}
                  attachment={attachment}
                  size={size}
                  icon={icon}
                />
              );
            })}
        </div>
      </div>
      {
        message.message.sender_id === currentUser.id && (
          <div className="border hover:bg-red-500 hover:text-white  cursor-pointer  hidden group-hover:flex border-red-500 text-red-500 text-sm px-1 rounded h-fit"
          onClick={deleteMessage}>
            Delete
          </div>
        )
      }
    </div>
  );
}

export default Message;
