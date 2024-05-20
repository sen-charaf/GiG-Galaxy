import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from "react-router-dom";
import ServiceCardEditProfile from './ServiceCardEditProfile';

export default function ServicesComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [services, setServices] = useState([
    'Service 1',
    'Service 2',
    'Service 3',
    'Service 4',
    'Service 5',
    'Service 6',
    'Service 7',
    'Service 8',
    'Service 9',
    'Service 10',
    'Service 11'
  ]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCheckboxChange = (service) => {
    setSelectedServices(prevState =>
      prevState.includes(service)
        ? prevState.filter(s => s !== service)
        : [...prevState, service]
    );
  };

  const handleSave = () => {
    setServices(prevServices => prevServices.filter(service => !selectedServices.includes(service)));
    setSelectedServices([]);
    toggleModal();
  };

  return (
    <div className={`relative h-screen overflow-y-auto overflow-x-hidden scrollbar-hidecards ${isModalOpen ? '' : ''}`}>
      <div className="grid grid-cols-3 gap-4 mb-24">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center p-2  rounded">
          <ServiceCard w={96} h={52} w_card={26} />
          <div className="text-center mt-2">{service}</div>
        </div>
        ))}
      </div>
      <div className="fixed bottom-4 right-4 scrollbar-hidecards flex">
      <Link to="/AddService">
        <button
          className="flex-1 rounded-lg relative w-52 h-10 cursor-pointer flex items-center border border-purple-500 bg-white group hover:bg-purple-500 active:bg-purple-500 active:border-purple-500"
        >
          <span
            className="text-black font-semibold ml-10 transform group-hover:translate-x-20 transition-all duration-300"
          >
            Add Service
          </span>
          <span
            className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
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
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </span>
        </button>
        </Link>
        <button
          className="ml-6 flex-1 rounded-lg relative w-[17rem] h-10 cursor-pointer flex items-center border border-purple-500 bg-white group hover:bg-purple-500 active:bg-purple-500 active:border-purple-500"
          onClick={toggleModal}
        >
          <span
            className="text-black font-semibold ml-10 transform group-hover:translate-x-20 transition-all duration-300"
          >
            Remove Service
          </span>
          <span
            className="absolute right-0 h-full w-10 rounded-lg bg-red-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
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
      </div>

      {isModalOpen && (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-6 rounded-lg w-1/2">
            <h2 className="text-xl font-semibold mb-4">Select Services to Remove</h2>
            <div className="max-h-60 overflow-y-auto">
              {services.map((service, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={() => handleCheckboxChange(service)}
                  />
                  <label>{service}</label>
                </div>
              ))}
            </div>
            <button
              className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
