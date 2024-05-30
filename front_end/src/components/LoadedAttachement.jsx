import React, { useEffect, useState } from "react";
import trashIcon from "../assets/trashIcon.svg";
import { axiosClient } from "@/api/axios";
import axios from "axios";
import { useStateContext } from "@/context/ContextProvider";

export default function LoadedAttachement({ attachment, icon, size, message }) {
  const { currentUser } = useStateContext();
  const downloadFile = async (attachment) => {
    try {
      const response = await axios({
        url: `http://127.0.0.1:8000/api/download_file/${attachment.id}`, // Adjust URL
        method: "get",
        responseType: "blob", // Specify expected response as blob
      });

      const fileName = attachment.name; // Adjust based on actual filename
      const blob = new Blob([response.data], { type: response.data.type });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    } catch (error) {
      console.error("Error downloading file:", error);
      // Handle errors appropriately in your UI (e.g., display an error message)
    } finally {
      // Optional cleanup (e.g., remove temporary link element)
    }
  };

  const deleteFile = () => {
    axiosClient
      .post("/delete_attachement", { attachmentId: attachment.id })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gray-200 group w-[24rem] h-11   overflow-x-clip rounded-lg p-2 mx-12">
      <div className="flex items-center sspace-x-4 justify-between">
        <div className="flex items-center space-x-2">
          <img className="w-7" src={icon} alt="" />
          <div
            onClick={() => downloadFile(attachment)}
            className="font-semibold hover:underline cursor-pointer text-primary text-ellipsis  overflow-clip"
          >
            {attachment.name}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-xs text-zinc-400">
            ({size.size} {size.unit})
          </div>
          {currentUser.id === message.sender_id && (
            <img
              className="w-4 cursor-pointer hidden group-hover:flex"
              src={trashIcon}
              alt=""
              onClick={deleteFile}
            />
          )}
        </div>
      </div>
    </div>
  );
}
