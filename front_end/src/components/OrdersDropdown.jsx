import React from 'react';
import { FaInbox } from "react-icons/fa";
const OrdersDropdown = () => {
  return (
    <div className="absolute mx-5 right-0 mt-2 w-70 h-[25rem] bg-white shadow-lg rounded">
      <div className="p-4 text-center">
        <div className="text-lg font-medium text-gray-800">No Orders Yet</div>
        <div className="mt-10 flex justify-center text-8xl">
        <FaInbox />
        </div>
        <div className="mt-4 text-gray-600">
          No Orders
          <div className="mt-2">
          Use the search box to find the digital services you need.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDropdown;
