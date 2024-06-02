import React from "react";

import ServiceInfos from "./ServiceInfos";
import RecomendedServices from "./RecomendedServices";
export default function ServiceRightSide({ order, setOrder, service }) {
  const handlePriceAddSub = (op) => {
    if (op === "+") {
      setOrder({ ...order, qte: order.qte + 1 });
    } else if (op === "-") {
      if (order.qte > 1) {
        setOrder({ ...order, qte: order.qte - 1 });
      }
    }
  };
  return (
    <div className="w-1/3 space-y-2">
      <ServiceInfos
        order={order}
        setOrder={setOrder}
        handlePriceAddSub={handlePriceAddSub}
        service={service}
      />
      <RecomendedServices service={service} />
    </div>
  );
}
