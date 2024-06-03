import React from 'react';

const MessageDropdown = () => {
  return (
    <div className="absolute right-0 mt-2 w-70 h-[25rem] bg-white shadow-lg rounded">
      <div className="p-4 text-center">
        <div className="text-lg font-medium text-gray-800">Message (0)</div>
        <div className="mt-2">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/no-audio.png"
            alt="No Message"
            className="w-12 h-12 mx-auto"
          />
        </div>
        <div className="mt-4 text-gray-600">
          No Message
          <div className="mt-2 text-sm">
            Browse our amazing catalog of Gigs or offer your talent on Gig Galaxy.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDropdown;
