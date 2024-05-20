import React from "react";

import Review from "./Review";
export default function Reviews() {
  return (
    <div className="w-full bg-white rounded p-5">
      <div className="w-full flex items-baseline space-x-1 text-2xl font-custom ">
        <div className="">Reviews</div>
        <div className="text-slate-400 text-lg">(50)</div>
      </div>
      <div className="h-px my-3 bg-gray-300"></div>
      <Review />
      <Review />
      <Review />
      <Review />
    </div>
  );
}
