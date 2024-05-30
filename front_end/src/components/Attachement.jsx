import React from "react";
import pdfIcon from "../assets/pdfIcon.svg";
import trashIcon from "../assets/trashIcon.svg";
export default function Attachement({
  attachment,
  setAttachments,
  attachments,
  size,
  icon
}) {
  return (
    <div className="bg-slate-100 w-[24rem] overflow-x-auto rounded-lg p-2">
      <div className="flex items-center sspace-x-4 justify-between">
        <div className="flex items-center space-x-2">
          <img className="w-7" src={icon} alt="" />
          <div className="font-semibold text-zinc-600">{attachment.name}</div>
          <div className="text-xs text-zinc-400">
            ({size.size} {size.unit})
          </div>
        </div>
        <img
          className="w-4 cursor-pointer"
          src={trashIcon}
          alt=""
          onClick={() =>
            setAttachments(attachments.filter((a) => a !== attachment))
          }
        />
      </div>
    </div>
  );
}
