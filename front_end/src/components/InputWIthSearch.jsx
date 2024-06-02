import React from "react";

const InputWIthSearch = ({ value, onChange }) => {
  const data = [
    "Java",
    "JavaScript",
    "React js",
    "Python",
    "C",
    "C++",
    "C#",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Node js",
    "Express js",
    "MongoDB",
    "Next js",
    "Angular",
    "Git",
    "Github",
    "Linux",
    "Marketing",
    "Writing",
    "Translation",
    "Video",
    "Audio",
    "Music",
    "Photography",
    "Tiktok",
    "Instagram",
    "Facebook",
    "Twitter",
    "Youtube",
    "Linkedin",
    "Skype",
    "Dribble",
    "Figma",
    "Adobe XD",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe After Effects",
    "Adobe Premiere",
    "Adobe Audition",
    "AI",    
  ];

  return (
    <div className="flex justify-center items-center">
      <input
        list="data"
        className="border w-[25rem] border-gray-400 py-3.5 px-2 rounded"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder="Add Skill"
      />
      <datalist id="data">
        {data.map((op) => (
          <option key={op} value={op} />
        ))}
      </datalist>
    </div>
  );
};

export default InputWIthSearch;
