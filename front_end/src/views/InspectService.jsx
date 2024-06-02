import ServiceRightSide from "@/components/ServiceRightSide";
import ServiceLeftSide from "@/components/ServiceLeftSide";
import React, { useEffect, useState } from "react";
import { axiosClient } from "@/api/axios";
import { useParams } from "react-router-dom";

export default function InspectService() {
  const [service, setService] = useState({});
  const [order, setOrder] = useState({});
  const { serviceId } = useParams();
  const slides = [
    "https://5.imimg.com/data5/HP/EL/HI/GLADMIN-13990078/selection-320-500x500.png",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1714235233~exp=1714235833~hmac=b700a74bca0c87ce4ca7109283d30e6ed308f21ff4b2c8b602fdc6553650cdfe",
    "https://img.freepik.com/free-photo/assortment-colored-plant-leaves_23-2149337905.jpg?t=st=1714235326~exp=1714238926~hmac=db12683ce65ab20642a23ded2d6f17e3a3f19333f3e811c2e9cb0d11d929e5c4&w=1380",
    "https://img.freepik.com/free-photo/majestic-cliff-waters-edge-reflecting-beauty-generative-ai_188544-12640.jpg?t=st=1714237808~exp=1714241408~hmac=34f29b92ad9b21d090f6e316b8a35cb29bf63dedd1f1f5bbe3dfe005182e0041&w=1380",
  ];

  /* useEffect(() => {
    setOrder({ ...order, totalPrice: order.originalPrice * order.qte });
  }, [order.qte]); */

  useEffect(() => {
    axiosClient
      .get(`/get_servicesById/${serviceId}`)
      .then((response) => {
        setService(response.data);
        setOrder({
          qte: 1,
          originalPrice: response.data.price,
          totalPrice: 10,
          extras: response.data.extras,
        });
        let extraPrice = 0;
        order.extras.forEach((extra) => {
          if (extra.checked) {
            extraPrice += extra.price;
          }
        });
        setOrder({
          ...order,
          totalPrice: order.originalPrice * order.qte + extraPrice,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    let extraPrice = 0;
    if (order.extras) {
      order.extras.forEach((extra) => {
        if (extra.checked) {
          extraPrice += extra.charge;
        }
      });
      setOrder({
        ...order,
        totalPrice: order.originalPrice * order.qte + extraPrice,
      });
    }
  }, [order.extras, order.qte]);

  return (
    <>
      {service ? (
        <div className="flex bg-gray-100 mx-64 mt-16 space-x-3 pb-5 ">
          <ServiceLeftSide
            order={order}
            setOrder={setOrder}
            slides={slides}
            service={service}
          />
          <ServiceRightSide
            order={order}
            setOrder={setOrder}
            service={service}
          />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
