import { axiosClient } from "@/api/axios";
import { useStateContext } from "@/context copy/ContextProvider";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function VerificationPage() {
  const { setCurrentToken, setCurrentUser, currentUser, currentToken } =useStateContext();
    
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const p_id = searchParams.get("id");
  const p_hash = searchParams.get("hash");

  useEffect(() => {
    if (currentToken !== null && currentToken !== undefined) {
      console.log(currentToken !== null && currentToken !== undefined);
      axiosClient
        .get(`/email-verification?id=${p_id}&hash=${p_hash}`)
        .then((response) => {
          console.log(response);
          setCurrentToken(response.data.token);
          setCurrentUser(response.data.user);
          console.log(response.data.user);
          console.log(response.data.token);
          console.log(currentUser);
          console.log(currentToken);
          localStorage.setItem("token", response.data.token);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div className="h-screen flex  space-y-5 flex-col justify-center items-center my-1.5 mb-6">
      <div className=" flex">
        <div className="font-bold">@{currentUser.name}</div>
        <h1>,You've been verified successfully</h1>
      </div>
      <Link to="/">
        <button className="bg-primary hover:bg-primary/90 transition-all duration-200 text-white font-bold py-2 px-4 rounded">
          Go to HomePage
        </button>
      </Link>
    </div>
  );
}
