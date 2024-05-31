import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BlockIcon from "@mui/icons-material/Block";
import { axiosClient } from "@/api/axios";

export default function BanForm({params, currentUser}) {
  const [isOtherClicked, setIsOtherClicked] = useState(false);
  const [penaltyData, setPenaltyData] = useState({
    penalty: "ban",
    reason: "",
    duration: "unlimited",
    userId: params.row.id,
    adminId: currentUser.id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(penaltyData);
    axiosClient
      .post("/api/make_penalty", penaltyData)
      .then((response) => {
        console.log(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" text-red-600 - p-1 rounded-full">
          <BlockIcon />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ban User</DialogTitle>
          <DialogDescription>
            Baning users will prevent them from log in to their account.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-6">
          <fieldset>
            <legend className="text-base font-medium text-gray-900">
              Reason for Ban
            </legend>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input
                  className="accent-orange-600 h-4 w-4"
                  id="suspicious_account"
                  name="ban_reason"
                  type="radio"
                  value={'Spam account'}
                  onChange={() => {setIsOtherClicked(false); setPenaltyData({...penaltyData, reason: 'Spam account'})}}
                />
                <label
                  className="ml-3 block text-sm font-medium text-gray-700"
                  htmlFor="suspicious_account"
                >
                  Spam account
                </label>
              </div>
              <div className="flex items-center">
                <input
                  className="accent-orange-600 h-4 w-4"
                  id="compromised_account"
                  name="ban_reason"
                  type="radio"
                  value={'Inappropriate language'}
                  onChange={() => {setIsOtherClicked(false); setPenaltyData({...penaltyData, reason: 'Inappropriate language'})}}
                />
                <label
                  className="ml-3 block text-sm font-medium text-gray-700"
                  htmlFor="compromised_account"
                >
                  Inappropriate language
                </label>
              </div>
              <div className="flex items-center">
                <input
                  className="accent-orange-600 h-4 w-4"
                  id="other"
                  name="ban_reason"
                  type="radio"
                  value={"other"}
                  onChange={() => setIsOtherClicked(!isOtherClicked)}
                />
                <label
                  className="ml-3 block text-sm font-medium text-gray-700"
                  htmlFor="other"
                >
                  Other
                </label>
              </div>
              <div className={`${isOtherClicked ? "block" : "hidden"} h-24`}>
                <textarea
                  className={`w-full h-full border resize-none  
                    border-gray-300 rounded-md p-2 focus:outline-none focus:border-black" name="ban_reason" cols="30" rows="10`}
                    value={penaltyData.reason}
                    onChange={(e) => setPenaltyData({...penaltyData, reason: e.target.value})}
                ></textarea>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-base font-medium text-gray-900">
              Ban Duration
            </legend>
            <div className="mt-4">
              <select
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-200 border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                id="delete_history"
                name="ban_duration"
                defaultValue={"unlimited"}
                onChange={(e) =>
                  setPenaltyData({ ...penaltyData, duration: e.target.value })
                }
              >
                <option name="ban_duration" value={1}>
                  Day
                </option>
                <option name="ban_duration" value={7}>
                  Week
                </option>
                <option name="ban_duration" value={30}>
                  Month
                </option>
                <option name="ban_duration" value="unlimited">
                  Until Unban
                </option>
              </select>
            </div>
          </fieldset>
        </form>
        <DialogFooter>
          <DialogClose>
            <Button className="bg-red-500 hover:bg-red-600" onClick={handleSubmit}>
              Ban
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
