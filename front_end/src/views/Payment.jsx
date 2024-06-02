import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import payment from '../assets/payment.png'
const CreditCardForm = () => {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
    gigPrice: 200,
    extras: [
      { description: "Additional logo (+2 day)", price: 60 },
      { description: "Additional logo (+2 day)", price: 80 },
    ],
    total: 0,
  });

  useEffect(() => {
    // Calculate the total whenever the gigPrice or extras change
    const extrasTotal = state.extras.reduce((sum, extra) => sum + extra.price, 0);
    setState((prev) => ({ ...prev, total: state.gigPrice + extrasTotal }));
  }, [state.gigPrice, state.extras]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }));
  };

  return (
    <div className="flex items-center justify-between min-h-screen">
      <div className="container lg:w-1/2 ">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <div className="mt-5 flex items-center justify-center">
          <form>
            <div className="w-full px-3 py-2 mb-3 border-2 border-gray-200 rounded-md transition-colors">
              <input
                type="text"
                name="number"
                className="outline-none w-[30rem] text-xl rounded-lg"
                placeholder="Card Number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
                inputMode="numeric"
                pattern="\d*"
                style={{ '-webkit-appearance': 'none', '-moz-appearance': 'textfield' }}
              />
            </div>
            <div className="w-full px-3 py-2 mb-3 border-2 border-gray-200 rounded-md transition-colors">
              <input
                type="text"
                name="name"
                className="outline-none w-[30rem] text-xl rounded-lg"
                placeholder="Name"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="w-1/2 px-3 py-2 mb-3 border-2 border-gray-200 rounded-md transition-colors mr-2">
                <input
                  type="text"
                  name="expiry"
                  className="outline-none w-full text-xl rounded-lg"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
              </div>
              <div className="w-1/2 px-3 py-2 mb-3 border-2 border-gray-200 rounded-md transition-colors ml-2">
                <input
                  type="text"
                  name="cvc"
                  className="outline-none w-full text-xl rounded-lg"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-5 text-semibold border text-xl py-2 rounded bg-[#8C41F3] text-white d-grid">
              <button type="button" className="">Confirm</button>
            </div>
          </form>
        </div>
      </div>
      <div>

        <div className="lg:w-[45rem] flex flex-col border rounded shadow-lg mr-20 mb-10 items-center p-4 bg-white">
          <div className="w-full">
            <h1 className="text-3xl font-bold text-center">Payment Summary</h1>
            <div className="mt-10 border-t-2 border-gray-300/50"></div>
            <div className="flex items-center justify-center">
              <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" className="cover w-[8rem] pt-7 rounded" />
              <h1 className="font-semibold p-3 text-lg mt-5">I will create a minimalist logo design for your business</h1>
            </div>
            <div className="mt-10 border-t-2 border-gray-300/50"></div>
            <div className="flex items-center justify-between mt-6">
              <h1 className="text-xl font-semibold">GiG:</h1>
              <h1 className="text-xl font-semibold text-zinc-500">${state.gigPrice}</h1>
            </div>
            {state.extras.map((extra, index) => (
              <div className="flex items-center justify-between mt-6" key={index}>
                <div>
                  <h1 className="text-xl font-semibold pb-3">{extra.description}</h1>
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-zinc-500 pb-3">${extra.price}</h1>
                </div>
              </div>
            ))}
            <div className="mt-10 border-t-2 border-gray-300/50"></div>
            <div className="flex items-center justify-between mt-6">
              <h1 className="text-2xl font-semibold pb-3">TOTAL:</h1>
              <h1 className="text-3xl font-semibold  text-zinc-500 pb-3">
                ${state.total}
              </h1>
            </div>

          </div>
        </div>

        <img src={payment} className="flex justify-center items-center ml-20" />

      </div>
    </div>
  );
};

export default CreditCardForm;
