import { axiosClient } from "@/api/axios";
import { useStateContext } from "@/context/ContextProvider";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Verify from "../assets/Verify.png";

export default function VerificationPage() {
  const { setCurrentToken, setCurrentUser, currentUser, currentToken } =
    useStateContext();
  const navigate = useNavigate();

  const handleGoToDash = () => {
    navigate("/login");
  };
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
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center rounded-lg p-10 border shadow-lg">
        <img src={Verify} className="cover w-[30rem]" alt="Email Sent" />
        <div className="text-center mt-4">
          <h2 className="text-4xl font-semibold text-zinc-500">
            Email Verified Successfully
          </h2>
        </div>

        <div className="flex mt-5 justify-center items-center">
          <button
            onClick={handleGoToDash}
            className="mt-2 text-[#8C41F3] border-[#8C41F3] border ml-10 text-xl p-3 rounded hover:text-white hover:bg-[#8C41F3] duration-500"
          >
            To Login
          </button>
        </div>
      </div>
    </div>
  );
}
