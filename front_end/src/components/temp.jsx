import React from 'react';

const CashAdvance = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-xl font-semibold mb-2 text-purple-700 text-center">Earnings Overview</h1>
      <p className="text-gray-500 mb-4 text-center text-sm">Your earnings summary on GiG Galaxy</p>
      <div className="bg-white shadow rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="flex flex-col items-center p-2 bg-purple-50 rounded">
          <span className="text-purple-700 text-sm mb-1">Total Earnings</span>
          <span className="text-lg font-semibold text-purple-900">MAD 0</span>
        </div>
        <div className="flex flex-col items-center p-2 bg-purple-50 rounded">
          <span className="text-purple-700 text-sm mb-1">Withdrawn</span>
          <span className="text-lg font-semibold text-purple-900">MAD 0</span>
        </div>
       
        <div className="flex flex-col items-center p-2 bg-purple-50 rounded">
          <span className="text-purple-700 text-sm mb-1">Available for Withdrawal</span>
          <span className="text-lg font-semibold text-purple-900">MAD 0</span>
        </div>
        
        
      </div>
    </div>
  );
};

export default CashAdvance;
