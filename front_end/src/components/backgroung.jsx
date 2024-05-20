import React, { useState } from 'react';
import Education from "./EDucationComponent"

export default function BackGround() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-4">
  <div className="border-b-2 border-purple-500 mb-4"></div> 
  <div className="flex justify-between items-center cursor-pointer" onClick={toggleExpanded}>
    <span className="not-italic text-purple-500 text-2xl font-semibold">Education</span>
    <svg
      className={`w-6 h-6 transform ${isExpanded ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.293 10.293L12 13l2.707-2.707a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414zM12 5a1 1 0 011 1v6a1 1 0 11-2 0V6a1 1 0 011-1z"
        fill="#8700FF" // Changez ici la couleur en purple-500
      />
    </svg>
  </div>
  {isExpanded && (
    <div>
      <Education
        date="2015 - 2017"
        title="Bachelor of Science in Computer Science"
        location="Stanford University - Stanford, CA, USA"
      />
      <Education
        date="2010 - 2014"
        title="Doctor of Medicine"
        location="Harvard Medical School - Boston, MA, USA"
      />
      <Education
        date="2012 - 2016"
        title="Bachelor of Arts in English Literature"
        location="Yale University - New Haven, CT, USA"
      />
      <Education
        date="2006 - 2010"
        title="Bachelor of Business Administration"
        location="University of California, Berkeley - Berkeley, CA, USA"
      />
    </div>
  )}
</div>

  );
}
