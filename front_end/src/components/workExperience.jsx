import React from 'react';

function WorkExperience({ title, company, duration, description }) {
  return (
    <div className="grid gap-2 border-l-4 border-dashed border-purple-500 pl-4 dark:border-dashed dark:border-gray-50">
      <div className="font-medium">{title}</div>
      <div className="text-gray-500 dark:text-gray-400">{company}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{duration}</div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    
    </div>
  );
}

export default WorkExperience;
