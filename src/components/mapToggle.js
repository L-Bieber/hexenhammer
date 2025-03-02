import React from "react";

export default function MapToggle({ 
  showPrints, setShowPrints,
  showTrials, setShowTrials,
  showCatholic, setShowCatholic,
  showProtestant, setShowProtestant 
}) {
  return (
    <div className="absolute top-0 right-0 m-4 p-2 bg-white shadow-lg rounded" style={{ zIndex: 1000 }}>
      <button
        className={`block mb-2 px-4 py-2 rounded ${showPrints ? 'bg-blue-500 text-white hover:bg-blue-300' : 'bg-gray-500 text-white hover:bg-gray-300'}`}
        onClick={() => setShowPrints(!showPrints)}
      >
        Places of Printing
      </button>

      <button
        className={`block mb-2 px-4 py-2 rounded ${showTrials ? 'bg-red-500 text-white hover:bg-red-300' : 'bg-gray-500 text-white hover:bg-gray-300'}`}
        onClick={() => setShowTrials(!showTrials)}
      >
        Witch Trials
      </button>

      <button 
        className={`block mb-2 px-4 py-2 rounded ${showCatholic ? 'bg-green-500 text-white hover:bg-green-300' : 'bg-gray-500 text-white hover:bg-gray-300'}`}
        onClick={() => setShowCatholic(!showCatholic)}
      >
        Catholic Imperial Circles
      </button>

      <button 
        className={`block mb-2 px-4 py-2 rounded ${showProtestant ? 'bg-orange-500 text-white hover:bg-orange-300' : 'bg-gray-500 text-white hover:bg-gray-300'}`}
        onClick={() => setShowProtestant(!showProtestant)}
      >
        Protestant Imperial Circles
      </button>
    </div>
  );
}
