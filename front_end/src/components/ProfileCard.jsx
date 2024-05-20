import { useState } from "react";

export default function ProfileCard() {
  const [online, setOnline] = useState(true); // Par défaut, l'utilisateur est en ligne

  return (
    <div className="w-11/12">
      <div className="p-5 border border-gray-300 rounded text-center text-gray-500 relative overflow-hidden">
        {/* Container for the circular image */}
        <div className="relative w-56 h-56 mx-auto  overflow-hidden">
          {/* Profile Image */}
          <img
            className="object-cover w-full h-full rounded-full"
            src="../src/assets/ronaldo.jpeg"
            alt="profile-picture"
          />
          {/* Status Indicator */}
          <div
            className={`absolute bottom-0 right-0 mb-6 mr-4 w-6 h-6 rounded-full ${
              online ? "bg-green-500" : "bg-gray-500"
            }`}
          />
        </div>
        <div className="mt-5">
          {/* Link for the name with increased font size and added bottom margin */}
          <h1 className="text-4xl font-extrabold text-gray-900 hover:text-purple-600 transition duration-300 ease-in-out mb-2">
            Cristiano Ronaldo
          </h1>
          {/* Paragraph for the job title */}
          <p className="text-base font-medium text-gray-700">Ai Professor</p>
        </div>

        <div className="flex justify-center gap-7 pt-2">
          <div className="flex justify-center ">
            <img
              className="w-8 mr-2 "
              src="../src/assets/location-svgrepo-com.svg"
              alt="locatin_Selller"
            />
            <span className="mt-[5px] mr-2"> Morocco , Agadir </span>
          </div>
          <div className="flex justify-center ">
            <img
              className="w-8 mr-2"
              src="../src/assets/crown-2-svgrepo-com.svg"
              alt="succses"
            />
            <span className="mt-[5px]"> 90% Job Success</span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex flex-col items-center">
            <button className="mt-3 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-black font-bold text-white md:text-lg rounded-lg shadow-md">
              Contact me  
            </button>
            <div className="flex justify-center mt-4 gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#222325"
                className="flex-1 mt-1"
              >
                <path d="M8 1C3.581 1 0 3.91 0 7.5c0 1.488.622 2.85 1.653 3.947-.466 1.231-1.434 2.275-1.45 2.287A.75.75 0 0 0 .75 15c1.922 0 3.438-.803 4.347-1.447A9.65 9.65 0 0 0 8 14c4.419 0 8-2.91 8-6.5S12.419 1 8 1Zm0 11.5a8.12 8.12 0 0 1-2.45-.378l-.71-.225-.609.431a6.718 6.718 0 0 1-1.797.906c.228-.378.45-.803.622-1.256l.332-.878-.644-.681C2.178 9.816 1.5 8.819 1.5 7.5c0-2.756 2.916-5 6.5-5s6.5 2.244 6.5 5-2.916 5-6.5 5Z"></path>
              </svg>
              <div className="flex-1 flex gap-1">
                <span className="text-black">Arabic,</span>
                <span className="text-black">English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
