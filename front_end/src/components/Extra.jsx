import React, { useEffect, useState } from "react";

export default function Extra({setOrder,order,index}) {
    const [cheked,setcheked] = useState(false)
    const handleChekExtra = () => {
        setOrder((prevOrder) => {
            // Spread the entire order state to preserve existing values
            const newOrder = { ...prevOrder };
        
            // Create a copy of the extras array to avoid mutation
            const newExtras = [...prevOrder.extras];
        
            // Update the checked property of the last object in the copy
            newExtras[index].checked = !cheked; // Set to true
        
            // Update the extras property in the new order object
            newOrder.extras = newExtras;
        
            // Return the updated order state
            return newOrder;
          });
          setcheked(!cheked)
    }

    useEffect(() => {
      if (order.extras[index].delay_time < 14){
        order.extras[index].delay_time = order.extras[index].delay_time + " day"
      }else if (order.extras[index].delay_time >= 14 && order.extras[index].delay_time < 30){
        order.extras[index].delay_time = Math.floor(order.extras[index].delay_time / 14) + " week"
      }else if (order.extras[index].delay_time >= 30 && order.extras[index].delay_time < 365){
        order.extras[index].delay_time = Math.floor(order.extras[index].delay_time / 30) + " month"
      }else if (order.extras[index].delay_time >= 365){
        order.extras[index].delay_time = Math.floor(order.extras[index].delay_time / 365) + " year"
      }
    },[])
  return (
    <div>
      
        <div className={`flex flex-col border rounded p-4 hover:cursor-pointer ${cheked ? "bg-slate-100 border-black" : ""} transition-all duration-200`}
            onClick={handleChekExtra}
        >
          <div className="flex items-center justify-between space-x-2 ">
            <div className="flex items-center space-x-2 ">
              <div className="font-custom font-semibold text-lg">
                {order.extras[index].title}
              </div>
              <div className="text-slate-600 text-md">(+{order.extras[index].delay_time})</div>
            </div>
            <input type="checkbox" checked={cheked} className="accent-black" name="" id="" />
          </div>
          <div>
            {order.extras[index].description}
          </div>
          <div className="w-full text-end  font-semibold text-lg">
            {order.extras[index].charge} DH
          </div>
        </div>
    </div>
  );
}
