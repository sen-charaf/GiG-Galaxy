import React, { useState } from "react";

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
  return (
    <div>
      
        <div className={`flex flex-col border rounded p-4 hover:cursor-pointer ${cheked ? "bg-slate-100 border-black" : ""} transition-all duration-200`}
            onClick={handleChekExtra}
        >
          <div className="flex items-center justify-between space-x-2 ">
            <div className="flex items-center space-x-2 ">
              <div className="font-custom font-semibold text-lg">
                Additional logo
              </div>
              <div className="text-slate-600 text-md">({order.extras[index].delay})</div>
            </div>
            <input type="checkbox" checked={cheked} className="accent-black" name="" id="" />
          </div>
          <div>
            You'll get an original source file that you can edit according to
            your needs.
          </div>
          <div className="w-full text-end  font-semibold text-lg">
            {order.extras[index].price} DH
          </div>
        </div>
    </div>
  );
}
