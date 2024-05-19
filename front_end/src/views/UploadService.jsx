import Advice from "@/components/Advice";
import ServiceForm from "@/components/ServiceForm";
import React from "react";

export default function UploadService() {
  return (
    <div className="mx-32 mt-12 pb-5 flex space-x-10">
      <div className="w-2/3">
        <div className="font-custom font-regular text-3xl">
          Add a new service
        </div>
        <div className="bg-white mt-5 rounded px-7 py-7 w-full">
          <ServiceForm />
        </div>
      </div>
      <div className="w-1/3 mt-14">
        <Advice />
      </div>
    </div>
  );
}
