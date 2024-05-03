import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function FilterSection() {
  return (
    <>
      <div className="flex space-x-3">
        <Select>
          <SelectTrigger className="w-[180px] focus:hidden">
            <SelectValue placeholder="Recommended" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="recent">Recent</SelectItem>
            <SelectItem value="pricelowtohigh">Price: low to high</SelectItem>
            <SelectItem value="pricehightolow">Price: high to low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

export default FilterSection;
