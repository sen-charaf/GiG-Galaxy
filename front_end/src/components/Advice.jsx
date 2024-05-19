import React from "react";

export default function Advice() {
  return (
    <div className="flex flex-col space-y-5 text-zinc-700">
      <div className="flex flex-col space-y-2">
        <div className="font-custom font-regular  text-2xl">
          Add Your Service and Start Earning
        </div>
        <div className="font-light text-md">
          GiG Galaxy allows you to earn money by adding services that you are
          proficient in and offering them for sale to interested customers.
          Enter the service details carefully for the GiG Galaxy team to review
          and publish.
        </div>
      </div>
      <div className="flex flex-col space-y-7">
        <div className="font-custom font-regular text-2xl">
          Tips for Adding a Correct Service
        </div>
        <div className="flex flex-col space-y-1">
          <div className="font-custom font-regular text-xl">Service Title</div>
          <div className="font-light">
            Choose a short and clear title that reflects exactly what you will
            be offering in your service, so that buyers can find it when
            searching with keywords related to the service field.
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="font-custom font-regular text-xl">
            Service Description
          </div>
          <div className="font-light">
            Write a distinctive description of the service in clear and
            error-free language, explaining in detail what the customer will
            receive when purchasing the service.
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="font-custom font-regular text-xl">
            Service Gallery
          </div>
          <div className="font-light">
            Add an expressive image of the service in addition to at least three
            exclusive samples that will introduce the buyer to your work style
            and skills.
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="font-custom font-regular text-xl">Service Price</div>
          <div className="font-light">
            Make sure to set an appropriate price for the service based on the
            amount of work and effort involved, taking into account the site's
            commission, and set an appropriate delivery time to complete the
            service with perfection.
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="font-custom font-regular text-xl">
            Why is the service rejected in GiG Galaxy?
          </div>
          <div className=" ml-4 font-thin space-y-1">
            <li>
              Long or unclear title, or combines more than one service together
            </li>
            <li>
              Neglecting to specify the amount of work the buyer will receive in
              the service description
            </li>
            <li>Low-quality images or designs, or not created by the seller</li>
            <li>
              Attaching less than three samples to the service's work gallery
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
