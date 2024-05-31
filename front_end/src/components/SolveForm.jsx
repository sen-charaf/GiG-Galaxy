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
import { useStateContext } from "@/context/ContextProvider";
import { axiosClient } from "@/api/axios";
export default function SolveForm({ params , load , setLoad }) {
  const [isOtherClicked, setIsOtherClicked] = useState(false);
  const [penalty, setPenalty] = useState("ban");
  const [message, setMessage] = useState("");
  const { currentUser } = useStateContext();
  console.log(currentUser.id);
  const [penaltyData, setPenaltyData] = useState({
    penalty: "ban",
    reason: "",
    duration: "unlimited",
    userId: params.row.reported,
    adminId: currentUser.id,
  });
  console.log(penaltyData);
  const penaltyHandler = (e) => {
    e.preventDefault();
    setPenalty(e.target.value);
    setPenaltyData({
      ...penaltyData,
      penalty: e.target.value,
      adminId: currentUser.id,
    });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(penaltyData);
    axiosClient
      .post("/api/make_penalty", penaltyData)
      .then((response) => {
        console.log(response.data);
        axiosClient
          .post(`/api/update_report/${params.row.id}`, {
            solved: 1,
          })
          .then((response) => {
            console.log("report solved");
            setLoad(!load);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Solve</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>Solve The report</DialogTitle>
          <DialogDescription>
            Upon reading the report, choose the convenable penalty.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-gray-700"
            >
              Message:
            </label>
            <textarea
              className="mt-1 border rounded-sm p-2 resize-none w-full h-16 readOnly  outline-none cursor-default focus:outline-none focus:ring-0  "
              value={`${params.row.message}`}
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-gray-700"
            >
              Comment:
            </label>
            <textarea
              className="mt-1 border rounded-sm p-2 resize-none w-full h-36 readOnly  outline-none cursor-default focus:outline-none focus:ring-0  "
              value={`${params.row.comment}`}
            ></textarea>
          </div>
          <legend className=" font-semibold text-gray-900">Duration</legend>
          <div className=" flex items-center  space-x-5  ">
            <div className="flex  space-x-5 items-center w-full">
              <select
                name="duration"
                className="  w-full pl-3 pr-10 py-2 text-base bg-white border-gray-300 border focus:outline-none  sm:text-sm rounded-md"
                onChange={(e) =>
                  setPenaltyData({ ...penaltyData, duration: e.target.value })
                }
                defaultValue={"unlimited"}
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
                  Not Specified
                </option>
              </select>
            </div>
          </div>
          <fieldset>
            <legend className="text-base font-medium text-gray-900">
              Reason
            </legend>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input
                  className="accent-primary h-4 w-4"
                  id="Spam account"
                  name="reason"
                  type="radio"
                  value={"Spam account"}
                  onChange={(e) => {
                    setIsOtherClicked(false);
                    setPenaltyData({ ...penaltyData, reason: e.target.value });
                  }}
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
                  className="accent-primary h-4 w-4"
                  id="Inappropriate language"
                  name="reason"
                  type="radio"
                  value={"Inappropriate language"}
                  onChange={(e) => {
                    setIsOtherClicked(false);
                    setPenaltyData({ ...penaltyData, reason: e.target.value });
                  }}
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
                  className="accent-primary h-4 w-4"
                  id="other"
                  name="reason"
                  type="radio"
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
                  onChange={(e) =>
                    setPenaltyData({ ...penaltyData, reason: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
          </fieldset>
          <fieldset></fieldset>
        </form>
        <DialogFooter>
          <DialogClose className=" flex space-x-2">
            <Button
              className="bg-red-500 px-6 font-semibold hover:bg-red-600"
              onClick={handleSubmit}
            >
              Ban
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
