import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function FilterSection({ services, setServices }) {
  const [sortMethod, setSortMethod] = useState("recommended");

  const sortServices = (services, method) => {
    switch (method) {
      case "recommended":
        return [...services].sort(
          (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
        );
      case "recent":
        return [...services].sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
      case "price-high-to-low":
        return [...services].sort((a, b) => b.price - a.price);
      case "price-low-to-high":
        return [...services].sort((a, b) => a.price - b.price);
      default:
        return services;
    }
  };
  const handleSortChange = (e) => {
    setSortMethod(e.target.value);
    const sortedServices = sortServices(services, e.target.value);
    setServices(sortedServices);
  };
  return (
    <>
      <div className="flex space-x-3">
        <select value={sortMethod} onChange={handleSortChange} name="" id="" className="w-[180px] h-[40px] px-3 py-2 text-sm rounded bg-white border">
          <option value="recommended">Recommended</option>
          <option value="recent">Recent</option>
          <option value="price-low-to-high">Price: low to high</option>
          <option value="price-high-to-low">Price: high to low</option>
        </select>
      </div>
    </>
  );
}

export default FilterSection;
