import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import FilterSection from "../components/FilterSection";
import FilterSideBar from "../components/FilterSideBar";
import PaginationServices from "../components/PaginationServices";
import "../styles/scrollBar.css";
import { axiosClient } from "@/api/axios";

export default function InspectCategories() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axiosClient
      .get("/get_services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="h-screen">
        <div className="flex space-x-5   mx-10  pt-10 h-full ">
          <div className="h-full">
            <FilterSideBar />
          </div>

          <div className="flex flex-col space-y-4 h-full   overflow-y-auto overflow-x-hidden scrollbar-hidden">
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
            <div className="h-full flex flex-col justify-between">
              <div className=" grid 2xl:grid-cols-4 xl:grid-cols-2 gap-x-6 gap-y-11 mt-5 h-fit w-full   ">
                {services.length > 0 &&
                  services.map((service) => (
                    <ServiceCard key={service.id} service={service} w={80} h={44} w_card={22} />
                  ))}
              </div>
              { services.length >= 12 && <PaginationServices />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
