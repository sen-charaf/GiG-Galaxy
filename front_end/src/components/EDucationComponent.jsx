import React from 'react';

export default function Education({ date, title, location }) {
  return (
    <div className="flex flex-row-reverse md:justify-between mb-6 w-11/12 p-4">
      <div className="text-gray-700 text-xs/1">{date}</div>
      <div>
        <h4 className="text-black font-semibold text-base mb-2">{title}</h4>
        <p className="text-base text-gray-700">{location}</p>
      </div>
    </div>
  );
}
