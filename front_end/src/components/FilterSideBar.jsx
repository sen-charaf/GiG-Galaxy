import React from "react";
import { useState } from "react";
export default function FilterSideBar({ services, setServices }) {
  const [price, setPrice] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [tag, setTag] = useState("");
  const [showCustomPrice, setShowCustomPrice] = useState(false);

  const filterServices = (services, price, deliveryTime, tag) => {
    return services.filter((service) => {
      const matchesPrice = price ? service.price <= price : true;
      const matchesDeliveryTime = deliveryTime
        ? service.delivery_time <= deliveryTime
        : true;
      const matchesTag = tag
        ? service.servicetags.some((t) => t.tag_id === parseInt(tag))
        : true;
      return matchesPrice && matchesDeliveryTime && matchesTag;
    });
  };


  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleDeliveryTimeChange = (e) => setDeliveryTime(e.target.value);
  const handleTagChange = (e) => setTag(e.target.value);
  const handlFilter = (e) => {
    e.preventDefault();
    const filteredServices = filterServices(services, price, deliveryTime, tag);
    console.log(filteredServices);
    console.log(price);
    console.log(filteredServices);
    setServices(filteredServices);
  }
  return (
    <>
      <div className="w-80 h-fit flex flex-col  space-y-5 bg-white border  my-5 p-3 rounded  ">
        <div className=" font-custom font-bold text-2xl">Filter</div>
        <div className="">
          <form onSubmit={(e) => handlFilter(e)}>
            <div className="flex flex-col space-y-4 ">
              <div>
                <label className="font-semibold" htmlFor="delivery">
                  {" "}
                  Delivery time{" "}
                </label>
                <div className="space-x-3 mt-2 ">
                  <input

                    className=" accent-[#8C41F3]"
                    type="radio"
                    name="delivery"
                    value={"1"}
                    checked={deliveryTime === '1'}
                    onChange={handleDeliveryTimeChange}
                  />
                  <label htmlFor="">Within 1 day</label>
                </div>
                <div className="space-x-3">
                  <input
                    className="accent-[#8C41F3]"
                    type="radio"
                    name="delivery"
                    value={"3"}
                    checked={deliveryTime === '3'}
                    onChange={handleDeliveryTimeChange}
                  />
                  <label htmlFor="">Up to 3 days</label>
                </div>
                <div className="space-x-3">
                  <input
                    className="accent-[#8C41F3]"
                    type="radio"
                    name="delivery"
                    value={"5"}
                    checked={deliveryTime === '5'}
                    onChange={handleDeliveryTimeChange}
                  />
                  <label htmlFor="">Up to 5 days</label>
                </div>
                <div className="space-x-3">
                  <input
                    className="accent-[#8C41F3]"
                    type="radio"
                    name="delivery"
                    value={"7"}
                    checked={deliveryTime === '7'}
                    onChange={handleDeliveryTimeChange}
                  />
                  <label htmlFor="">Up to 7 days</label>
                </div>
              </div>
              <div className="h-px w-full bg-gray-300"></div>
              <div>
                <label className="font-semibold" htmlFor="price">
                  {" "}
                  Price{" "}
                </label>
                <div className="space-x-3 mt-2 ">
                  <input
                    className="accent-[#8C41F3]"
                    type="radio"
                    name="price"
                    value={"-100"}
                    onClick={() => setShowCustomPrice(false)}
                  />
                  <label htmlFor="">Under 100DH</label>
                </div>
                <div className="space-x-3">
                  <input
                    className="accent-[#8C41F3]"
                    type="radio"
                    name="price"
                    value={"100"}
                    onClick={(e) => {setShowCustomPrice(false); handlePriceChange(e)}}
                  />
                  <label htmlFor="">100DH to 200DH</label>
                </div>
                <div className="space-x-3">
                  <input
                    className="accent-[#8C41F3]"
                    type="radio"
                    name="price"
                    value={"200"}
                    onClick={(e) => {setShowCustomPrice(false); handlePriceChange(e)}}
                  />
                  <label htmlFor="">200DH to 300DH</label>
                </div>
                <div className="space-x-3">
                  <input
                    className="accent-[#8C41F3]"
                    type="radio"
                    name="price"
                    value={"300+"}
                    onClick={() => setShowCustomPrice(false)}
                  />
                  <label htmlFor="">Over 300DH</label>
                </div>
                <div className="space-x-3 mb-5">
                  <input
                    className="accent-[#8C41F3]"
                    type="radio"
                    name="price"
                    value={"custom"}
                    onClick={() => setShowCustomPrice(!showCustomPrice)}
                  />
                  <label htmlFor="">Custom</label>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className={`flex space-x-3 ${!showCustomPrice && "hidden"}`}>
                    <div className=" flex items-baseline space-x-2  w-32  border border-gray-300 rounded-sm px-2 py-2 focus:outline-1 outline-red-500">
                      <label className="text-sm font-semibold" htmlFor="">
                        DH
                      </label>
                      <input
                        className="w-full focus:outline-none "
                        type="number"
                        name="minPriceCostum"
                        placeholder="min"
                      />
                    </div>
                    <div className=" flex items-baseline  space-x-2  w-32  border border-gray-300 rounded-sm px-2 py-2">
                      <label className="text-sm font-semibold" htmlFor="">
                        DH
                      </label>
                      <input
                        className="w-full focus:outline-none "
                        type="number"
                        name="maxPriceCostum"
                        placeholder="max"
                      />
                    </div>
                  </div>
                  <button
                
                  className="w-full bg-[#8C41F3] hover:bg-[#8b41f3c8]  transition-all ease-in-out duration-75 active:scale-95 text-white font-semibold rounded px-4 py-2">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
