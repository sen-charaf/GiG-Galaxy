import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCardProfile from "./ServiceCardProfile";
function CarouselComponent() {
  const settings = {
    dots: true, // Afficher les points de navigation
    infinite: true, // Bouclage infini du carousel
    speed: 500, // Vitesse de transition
    slidesToShow: 3, // Nombre de slides à montrer
    slidesToScroll: 3, // Nombre de slides à défiler
  };

  return (
    <div className="p-4">
          <div className="mb-8">
          <div className="border-b-2 border-gray-500 mb-4 "></div>
          <span className="not-italic text-purple-500 text-2xl font-semibold ">More Services</span>
          </div>
      <div >
        <Slider  {...settings} className="pl-[10px]">
          
            <ServiceCardProfile  />
         
          
            <ServiceCardProfile />
         
          
            <ServiceCardProfile />
         
         
            <ServiceCardProfile />
        
       
            <ServiceCardProfile />
          
        </Slider>
      </div>
    </div>
  );
}

export default CarouselComponent;
