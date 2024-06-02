import React from "react";
import Extra from "./Extra";

export default function Extras({ setOrder, order }) {
  return (
    <div className="w-full bg-white rounded p-5">
      <div className="w-full flex items-baseline space-x-1 text-2xl font-custom ">
        <div className="">Upgrade your order with extras</div>
      </div>
      <div className="h-px my-3 bg-gray-300"></div>
      <div className="flex flex-col space-y-3">
        {order.extras && order.extras.map((_, index) => {
          return <Extra setOrder={setOrder} order={order} index={index} />;
        })}
      </div>
    </div>
  );
}
