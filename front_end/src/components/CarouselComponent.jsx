import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCardProfile from "./ServiceCardProfile";
import { axiosClient } from "@/api/axios";
function CarouselComponent() {
  const settings = {
    dots: true, // Afficher les points de navigation
    infinite: true, // Bouclage infini du carousel
    speed: 500, // Vitesse de transition
    slidesToShow: 3, // Nombre de slides à montrer
    slidesToScroll: 3, // Nombre de slides à défiler
  };
  const [services, setServices] = useState([]);

  useEffect( () => {
    console.log(56)
    axiosClient.get(`get_services`).then((response) => {
      setServices(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    })
  }, []);

  return (
    <div className="p-4">
          <div className="mb-8">
          <div className="border-b-2 border-gray-500 mb-4 "></div>
          <span className="not-italic text-purple-500 text-2xl font-semibold ">More Services</span>
          </div>
      <div >
        <Slider  {...settings} className="pl-[10px]">
          
          {services && services.map((service) => (
            <ServiceCardProfile key={service.id} service={service} />
          ))}
         
          
        </Slider>
      </div>
    </div>
  );
}

export default CarouselComponent;
