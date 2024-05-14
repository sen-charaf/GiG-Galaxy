import ServiceForm from "@/components/ServiceForm";
import React from "react";

export default function UploadService() {
  return (
    <div className="mx-32 mt-12 pb-5">
      <div className="font-custom font-regular text-3xl">Add a new service</div>
      <div className="bg-white mt-5 rounded px-7 py-4 w-2/3">
        <ServiceForm />
      </div>
    </div>
  );
}
