import React from "react";
import ServiceCard from "./ServiceCard";
import FilterSection from "./FilterSection";
import FilterSideBar from "./FilterSideBar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PaginationServices from "./PaginationServices";

export default function InspectCategories() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="flex space-x-16   mx-16 mt-10 ">
          <FilterSideBar />
          <div className="flex flex-col space-y-4">
            <div className="font-custom text-3xl font-semibold">
              Category's name
            </div>
            <div className="h-px bg-gray-300"></div>
            <div>
              <div className=" flex justify-end items-center space-x-4 mr-2">
                <FilterSection />
                <div className="mb-1 font-custom text-slate-500 text-">
                  300+ Results
                </div>
              </div>
            </div>
            <div className=" grid 2xl:grid-cols-4 xl:grid-cols-2 gap-x-6 gap-y-11 mt-5  ">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
          </div>
        </div>
        <PaginationServices />
      </div>
    </>
  );
}
