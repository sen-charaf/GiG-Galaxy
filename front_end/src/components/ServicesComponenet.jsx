import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import { axiosClient } from "@/api/axios";
import { useStateContext } from "@/context/ContextProvider";

export default function ServicesComponent() {
  const { currentUser, setCurrentUser } = useStateContext();
  const [isRemoving, setIsRemoving] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [services, setServices] = useState([]);

  const handleCheckboxChange = (service, event) => {
    event.stopPropagation();
    const isSelected = selectedServices.includes(service);
    setSelectedServices((prev) =>
      isSelected ? prev.filter((s) => s !== service) : [...prev, service]
    );

    const isSelectedId = selectedIds.includes(service.id);
    setSelectedIds((prev) =>
      isSelectedId ? prev.filter((s) => s !== service.id) : [...prev, service.id]
    );
  };

  const handleCardClick = (service) => {
    const isSelected = selectedServices.includes(service);
    setSelectedServices((prev) =>
      isSelected ? prev.filter((s) => s !== service) : [...prev, service]
    );

    const isSelectedId = selectedIds.includes(service.id);
    setSelectedIds((prev) =>
      isSelectedId ? prev.filter((s) => s !== service.id) : [...prev, service.id]
    );
  };

  const handleRemoveClick = () => {
    setIsRemoving(true);
  };

  const handleSubmitClick = () => {
    setServices((prevServices) =>
      prevServices.filter((service) => !selectedServices.includes(service))
    );
    axiosClient.post("/delete_services", { ids: selectedIds }).then((res) => {
      setSelectedServices([]);
    setSelectedIds([]);
    setIsRemoving(false);
    }).catch((err) => {
      console.log(err);
    });
  };

  useEffect(
    () => {
    axiosClient.get(`/get_servicesBySeller/${currentUser.id}`).then((response) => {
      console.log(response.data);
      setServices(response.data);
    }).catch((error) => {
      console.log(error);
    });
    },
    []
  )

  return (
    <div className="relative h-screen overflow-y-auto overflow-x-hidden scrollbar-hidecards">
      {services.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <h1 className="text-2xl font-bold">No Services</h1>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-2  rounded relative cursor-pointer"
              onClick={() => handleCardClick(service)}
            >
              <ServiceCard w={80} h={44} w_card={22} service={service} />
     
              {isRemoving && (
                <input
                  type="checkbox"
                  className="absolute top-2 right-2 accent-red-500"
                  checked={selectedServices.includes(service)}
                  onChange={(event) => handleCheckboxChange(service, event)}
                  onClick={(event) => event.stopPropagation()}
                />
              )}
            </div>
          ))}
        </div>
      )}
     <div className="fixed bottom-4 right-4 scrollbar-hidecards flex ">
        {!isRemoving && (
          <Link to="/upload_service">
            <button className="flex-1 rounded-lg relative w-[14rem] h-10 cursor-pointer flex border justify-center items-center  bg-white group shadow-lg active:bg-purple-500 active:border-purple-500">
              <span className="text-black font-semibold pr-4   transform group-hover:translate-x-16 transition-all duration-300">
                Add Service
              </span>
              <span className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                <svg
                  className="svg w-8 text-white"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" x2="12" y1="5" y2="19"></line>
                  <line x1="5" x2="19" y1="12" y2="12"></line>
                </svg>
              </span>
            </button>
          </Link>
        )}
       {services.length !== 0 && (
  <button
    className={`ml-6 flex-1 rounded-lg relative w-[14rem] h-10 cursor-pointer flex items-center justify-center border  ${
      isRemoving ? "bg-red-500" : "bg-white group shadow-lg"
    }`}
    onClick={isRemoving ? handleSubmitClick : handleRemoveClick}
  >
    <span className={`${isRemoving ? "text-white" : "text-black"} font-semibold pr-4  transform group-hover:translate-x-12 transition-all duration-300 justify-center flex`}>
      {isRemoving ? "Submit  " : "Remove Service"}
    </span>
    <span
      className={`absolute right-0 h-full w-10 rounded-lg ${
              isRemoving ? "bg-red-500" : "bg-red-500"
            } flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300`}
    >
      <svg
        className="svg w-8 text-white"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="5" x2="19" y1="12" y2="12"></line>
      </svg>
    </span>
  </button>
)}

      </div>
    </div>
  );
}