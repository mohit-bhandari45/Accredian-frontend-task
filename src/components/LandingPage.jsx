import React from 'react';

const LandingPage = ({ onReferNow }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-5xl font-bold text-blue-700 mb-6">Refer & Earn</h1>
      <p className="text-xl text-gray-700 mb-4">Invite your friends and earn rewards!</p>
      <button 
        onClick={onReferNow}
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
      >
        Refer Now
      </button>
    </div>
  );
};

export default LandingPage;
