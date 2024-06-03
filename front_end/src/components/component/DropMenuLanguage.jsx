import React, { useState } from 'react';
import ENFlag from '../../assets/EN2.png';
import FRFlag from '../../assets/fr.png';

export default function DropMenuLanguage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const languages = [
    { name: 'English', flag: ENFlag, code: 'EN' },
    { name: 'French', flag: FRFlag, code: 'FR' },
    // Add more languages as needed
  ];

  const changeLanguage = (language) => {
    console.log('Language changed to:', language.code);
    setSelectedLanguage(language);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className='relative flex flex-col items-center w-fit rounded'>
      <button 
        onClick={() => setIsOpen((prev) => !prev)}
        className='bg-white text-primar px-2 py-2 flex items-center justify-center rounded tracking-wider border-transparent active:border-white duration-300 active:text-white'
      >
        {selectedLanguage ? (
          <>
            {selectedLanguage.code} 
            <img src={selectedLanguage.flag} alt={selectedLanguage.name} className='ml-2' width="20" height="15" />
          </>
        ) : (
          "Language"
        )}
      </button>
      {isOpen && (
        <div className='bg-white absolute top-12 flex flex-col items-start rounded p-2 w-[10rem] shadow-lg'>
          {languages.map((language, i) => (
            <div 
              className='flex w-full justify-between cursor-pointer rounded p-2 hover:bg-gray-200' 
              key={i}
              onClick={() => changeLanguage(language)}
            >
              <h3 className='font-bold'>{language.name}</h3>
              <img src={language.flag} alt={language.name} className='ml-2' width="30" height="20" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
