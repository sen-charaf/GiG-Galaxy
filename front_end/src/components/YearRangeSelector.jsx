import React, { useState, useEffect } from 'react';

const YearRangeSelector = ({ value, onChange }) => {
  const currentYear = new Date().getFullYear();
  const [startYear, setStartYear] = useState(value.startYear || currentYear - 10);
  const [endYear, setEndYear] = useState(value.endYear || currentYear);

  useEffect(() => {
    onChange({ startYear, endYear });
  }, [startYear, endYear, onChange]);

  return (
    <div className="flex items-center space-y-4">
      <div className="flex mt-4 space-x-5">
        <label htmlFor="start-year" className="text-sm font-medium text-gray-700">Start Year</label>
        <input
          type="number"
          id="start-year"
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <label htmlFor="end-year" className="text-sm font-medium text-gray-700">End Year</label>
        <input
          type="number"
          id="end-year"
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default YearRangeSelector;
