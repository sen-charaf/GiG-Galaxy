import React from "react";
import ServiceCard from "./ServiceCard";

export default function InspectCategories() {
  return (
    <>
      <div className="mx-28 mt-10">
        <div className="flex flex-col space-y-3">
          <div className="font-custom text-3xl font-semibold">
            Category's name
          </div>
          <div className="h-px bg-gray-300"></div>
          <div className="">
            <ServiceCard />
          </div>
        </div>
      </div>
    </>
  );
}
