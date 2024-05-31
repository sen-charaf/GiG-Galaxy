import React, { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BanForm from "./BanForm";
import { useStateContext } from "@/context/ContextProvider";
export default function PenaltyForm({ params }) {
  const { currentUser } = useStateContext();

  return (
    <>
      <div className="flex flex-row space-x-2">
        <BanForm params={params} currentUser={currentUser}/>
      
      </div>
    </>
  );
}
