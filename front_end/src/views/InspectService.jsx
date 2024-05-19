import ServiceRightSide from "@/components/ServiceRightSide";
import ServiceLeftSide from "@/components/ServiceLeftSide";
import React from "react";

export default function InspectService() {
  const slides = [
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1714235233~exp=1714235833~hmac=b700a74bca0c87ce4ca7109283d30e6ed308f21ff4b2c8b602fdc6553650cdfe",
    "https://img.freepik.com/free-photo/assortment-colored-plant-leaves_23-2149337905.jpg?t=st=1714235326~exp=1714238926~hmac=db12683ce65ab20642a23ded2d6f17e3a3f19333f3e811c2e9cb0d11d929e5c4&w=1380",
    "https://img.freepik.com/free-photo/majestic-cliff-waters-edge-reflecting-beauty-generative-ai_188544-12640.jpg?t=st=1714237808~exp=1714241408~hmac=34f29b92ad9b21d090f6e316b8a35cb29bf63dedd1f1f5bbe3dfe005182e0041&w=1380",
  ];
  return (
    <>
      <div className="flex bg-gray-100 mx-64 mt-16 space-x-3 pb-5 ">
        <ServiceLeftSide  slides={slides} />
        <ServiceRightSide  />
      </div>
    </>
  );
}
