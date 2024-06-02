import React from "react";

const SelectWork = ({ value, onChange }) => {
  const data2 = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Designer",
    "Content Writer",
    "Data Analyst",
    "Marketing",
    "Product Manager",
    "UI/UX Designer",
    "Graphic Designer",
    "Video Editor",
    "Copywriter",
    "Freelancer",
    "Freelance Developer",
    "Freelance Designer",
    "Freelance Writer",
  ];

  return (
    <div className="flex justify-center items-center">
      <input
        list="data2"
        className="border w-[25rem] border-gray-400 py-3.5 px-2 rounded"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder="Add specialization"
      />
      <datalist id="data2">
        {data2.map((op) => (
          <option key={op} value={op} />
        ))}
      </datalist>
    </div>
  );
};

export default SelectWork;
