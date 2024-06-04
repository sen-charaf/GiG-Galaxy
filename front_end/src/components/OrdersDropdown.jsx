import React, { useState } from "react";
import { FaInbox } from "react-icons/fa";
const OrdersDropdown = () => {
  const [isOrderHovered, setIsOrderHovered] = useState(false);
  const [inProgress, setInProgress] = useState(true);
  
  return (
    <div className="absolute mx-5 right-0 mt-2 w-70 h-[25rem] bg-white shadow-lg rounded">
      <div className="p-4 text-center">
        {0 ? (
          <>
            <div className="text-lg font-medium text-gray-800">
              No Orders Yet
            </div>
            <div className="mt-10 flex justify-center text-8xl">
              <FaInbox />
            </div>
            <div className="mt-4 text-gray-600">
              No Orders
              <div className="mt-2">
                Use the search box to find the digital services you need.
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-lg font-medium text-gray-800">Orders (1)</div>
            {inProgress ? (
              <div
                onMouseEnter={() => setIsOrderHovered(true)}
                onMouseLeave={() => setIsOrderHovered(false)}
                className={`absolute cursor-pointer z-10 ${
                  isOrderHovered ? "opacity-100" : " opacity-0"
                }   flex  opacity-0 transition-all duration-200  justify-center items-center  w-[26rem] h-20  bg-primary rounded`}
              >
                <div className="text-lg font-medium text-white">
                  Contact Seller
                </div>
              </div>
            ) : (
              <div
                onMouseEnter={() => setIsOrderHovered(true)}
                onMouseLeave={() => setIsOrderHovered(false)}
                className={`absolute cursor-pointer z-10 ${
                  isOrderHovered ? "opacity-100" : " opacity-0"
                }   flex  opacity-0 transition-all duration-200  justify-center items-center  w-[26rem] h-20 bg-yellow-500 rounded`}
              >
                <div className="text-lg font-medium text-white">
                  Submit a Review
                </div>
              </div>
            )}
            <div className={`bg-gray-100s border ${!inProgress && "opacity-50"}  rounded w-[26rem] h-20 p-3`}>
              <div className="flex space-x-2 ">
                <img
                  className="w-20 "
                  src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/180551485/original/8d57e720637a909b0249db3ce7552f5803d4dd30/do-graphic-design-services-of-your-choice.jpg"
                  alt=""
                />
                <div className="flex flex-col space-y-3 justify-around w-full">
                  <div className="flex justify-between">
                    <div className="font-custom text-xs text-start ">
                      Graphic Design
                    </div>
                    {inProgress ? (
                      <div className="text-xs border  px-2 border-black rounded ">
                        In Progress
                      </div>
                    ) : (
                      <div className="text-xs border  px-2 border-green-500 text-green-500 rounded ">
                        Done
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between w-full">
                    <div className="font-custom text-start text-gray-500">
                      by kamal
                    </div>
                    <div className="font-custom font-bold text-start ">
                      100Dh
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrdersDropdown;
