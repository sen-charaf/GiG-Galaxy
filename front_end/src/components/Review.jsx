import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rating } from "@mui/material";
export default function Review() {
  return (
    <div className="flex flex-col">
      <div className="flex space-x-2">
        <Avatar className="size-10 mx-1">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <div className="flex  space-x-2 items-center ">
            <div className="font-custom font-bold text-zinc-800 text-sm">Reviewer's name</div>
            <div className="text-slate-400 text-xs">| 2022-03-10</div>
          </div>
          <Rating
            name="simple-controlled"
            defaultValue={3.5}
            precision={0.5}
            readOnly
            size="small"
          />
          <div className="mt-2">
            i left it up falen for design and colors. was better than i thought.
            i asked falen to change font size and curve the company name under
            the nest. falen made the changes quick and i like the logo
            professional looking
          </div>
        </div>
      </div>
      <div className="mx-10 mt-5">
        <div className="flex flex-col">
          <div className="flex space-x-2">
            <Avatar className="size-10 mx-1">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start justify-center">
              <div className="font-custom font-bold text-sm text-zinc-800">
                Seller's response
              </div>
            </div>
          </div>
          <div className="ml-14">Thank you so much!</div>
        </div>
      </div>
      <div className="h-px my-3 mx-5 bg-gray-200"></div>
    </div>
  );
}
