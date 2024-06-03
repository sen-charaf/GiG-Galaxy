import { Skeleton } from "@mui/material";
import React from "react";
import SkelatonServicCard from "./SkelatonServicCard";

export default function SkelatonInspectService() {
  return (
    <div className="flex bg-gray-100 mx-64 mt-16 space-x-3 pb-5 ">
      <div className="w-2/3">
        <div className="flex flex-col space-y-4 ">
          <div className="bg-white p-5 rounded border flex flex-col items-center">
            <div className="text-3xl w-full font-semibold font-custom mb-10">
              <Skeleton variant="text" height={80} />
            </div>
            <div className=" w-[800px] h-[470px]">
              <Skeleton variant="rectangular" height={470} />
            </div>
            <div className="w-full mt-8 flex flex-col space-y-5">
              <div className="w-full text-xl flex justify-start   font-semibold ">
                <Skeleton variant="text" width={500} height={50} />
              </div>
              <div>
                <Skeleton variant="rectangular" height={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 space-y-2">
        <div className="w-full bg-white  border rounded pt-8 h-fit pb-5   ">
          <div className="flex flex-col justify-between items-center p-2">
            <div className="font-custom font-bold text-4xl text-zinc-600">
              <Skeleton variant="text" width={200} height={50} />
            </div>
          </div>
          <div className="flex  space-x-5 justify-center mb-8">
            <Skeleton
              className="rounded"
              variant="rectangular"
              width={200}
              height={50}
            />

            <Skeleton
              className="rounded"
              variant="rectangular"
              width={200}
              height={50}
            />
          </div>

          <div className="flex w-full justify-around">
            <div className="flex flex-col w-24 justify-center items-center">
              <Skeleton variant="rectangular" width={50} height={40} />
              <div className="text-sm w-full flex flex-col justify-center items-center text-zinc-600">
                <Skeleton variant="text" width={80} />
                <div className="font-bold w-fit text-center">
                  <Skeleton variant="text" width={50} />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-24 justify-center items-center">
              <Skeleton variant="rectangular" width={50} height={40} />
              <div className="text-sm text-zinc-600 w-full flex flex-col justify-center items-center ">
                <Skeleton variant="text" width={80} />{" "}
                <div className="font-bold w-fit text-center">
                  <Skeleton variant="text" width={50} />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-24 justify-center items-center">
              <Skeleton variant="rectangular" width={50} height={40} />
              <div className="text-sm text-zinc-600 w-full flex flex-col justify-center items-center">
                <Skeleton variant="text" width={80} />{" "}
                <div className="font-bold w-fit">
                  <Skeleton variant="text" width={50} />
                </div>
              </div>
            </div>
          </div>
          <div className=" h-px bg-zinc-200 mt-5 mb-2 mx-4"></div>
          <div className="mx-4">
            <div className="mb-4 text-md font-custom font-semibold text-zinc-600">
              <Skeleton variant="text" width={180} />
            </div>
            <div className="flex space-x-2 mb-3 ">
              <Skeleton variant="circular" width={64} height={64} />
              <div className="flex flex-col space-y-1">
                <div className="flex justify-between items-center">
                  <div className="font-semibold ">
                    <Skeleton variant="text" width={100} />
                  </div>
                  <div className="flex space-x-1 justify-center items-center">
                    <div className="text-zinc-400 text-sm font-semibold">
                      <Skeleton variant="text" width={80} />
                    </div>
                  </div>
                </div>
                <div className="  h-10 text-xs text-zinc-600 overflow-y-hidden">
                  <Skeleton variant="text" width={350} height={50} />
                </div>
              </div>
            </div>
            <div className=" flex w-full justify-between items-center space-x-3 mt-7">
              <Skeleton
                className="rounded"
                variant="rectangular"
                width={200}
                height={50}
              />

              <Skeleton
                className="rounded"
                variant="rectangular"
                width={200}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-white  border rounded py-5 px-3 ">
          <div className="font-custom font-semibold text-2xl text-zinc-600">
            {/* Recommended for you */} <Skeleton variant="text" height={40}  width={250} />
          </div>
          <div className="h-px mt-2 mb-3 bg-gray-200" />
          <div className="flex flex-col justify-center items-center space-y-4 ">
            {/*  <ServiceCard w={96} h={52} w_card={26}/>
        <ServiceCard w={96} h={52} w_card={26}/>
        <ServiceCard w={96} h={52} w_card={26}/> */}
            <SkelatonServicCard />
            <SkelatonServicCard />
            <SkelatonServicCard />
          </div>
          <div className="text-end mt-4 px-3 text-primary underline font-custom cursor-pointer">
            View more{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
