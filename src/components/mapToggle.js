import React, { useState } from "react";

export default function MapToggle({ 
  showPrints, setShowPrints,
  showTrials, setShowTrials,
  showCatholic, setShowCatholic,
  showProtestant, setShowProtestant 
}) {
  const [showCatholicInfo, setShowCatholicInfo] = useState(false);
  const [showProtestantInfo, setShowProtestantInfo] = useState(false);
  const [showTrialsInfo, setShowTrialsInfo] = useState(false);

  return (
    <div className="absolute top-0 right-4 m-4 p-2 bg-white shadow-lg rounded" style={{ zIndex: 1000 }}>
      <button
        className={`block mb-2 px-4 py-2 rounded ${showPrints ? 'bg-blue-500 text-white hover:bg-blue-300' : 'bg-gray-500 text-white hover:bg-gray-300'}`}
        onClick={() => setShowPrints(!showPrints)}
      >
        Druckorte
      </button>
      
      <div className="relative flex items-center">
        <button 
          className={`block mb-2 px-4 py-2 rounded flex-1 ${showTrials ? 'bg-red-500 text-white hover:bg-red-300' : 'bg-gray-500 text-white hover:bg-gray-300'}`}
          onClick={() => setShowTrials(!showTrials)}
        >
          Hexenprozesse
        </button>
        <div className="relative group ml-2">
          <button 
            className="bg-gray-300 text-gray-700 rounded-full w-5 h-5 text-xs font-bold flex items-center justify-center hover:bg-gray-400"
            onClick={() => setShowTrialsInfo(!showTrialsInfo)}
          >
            i
          </button>
          {showTrialsInfo && (
            <div className="absolute right-0 top-6 w-52 bg-white p-2 text-sm text-gray-700 shadow-lg rounded border border-gray-300 z-50">
               Daten basieren auf Zahlen aus der <a href="http://dx.doi.org/10.5040/9798216036418" className="underline text-blue-400">Encyclopedia of Witchcraft</a> und 
               beruhen teilweise auf Schätzungen.
            </div>
          )}
        </div>
      </div>

      <div className="relative flex items-center">
        <button 
          className={`block mb-2 px-4 py-2 rounded flex-1 ${showCatholic ? 'bg-green-500 text-white hover:bg-green-300' : 'bg-gray-500 text-white hover:bg-gray-300'}`}
          onClick={() => setShowCatholic(!showCatholic)}
        >
          Katholische Reichskreise
        </button>
        <div className="relative group ml-2">
          <button 
            className="bg-gray-300 text-gray-700 rounded-full w-5 h-5 text-xs font-bold flex items-center justify-center hover:bg-gray-400"
            onClick={() => setShowCatholicInfo(!showCatholicInfo)}
          >
            i
          </button>
          {showCatholicInfo && (
            <div className="absolute right-0 top-6 w-52 bg-white p-2 text-sm text-gray-700 shadow-lg rounded border border-gray-300 z-50">
               Die Einteilung in Katholische und Protestantische Reichskreise basiert auf einer groben Schätzung der konfessionellen Mehrheiten basierend
               auf <a href="https://ghdi.ghi-dc.org/map.cfm?map_id=2815" className="underline text-blue-400">dieser</a> Karte, trotzdem gab es auch in den 
               als Katholisch markierten Reichskreisen Protestantische Gebiete und umgekehrt.
            </div>
          )}
        </div>
      </div>

      <div className="relative flex items-center">
        <button 
          className={`block mb-2 px-4 py-2 rounded flex-1 ${showProtestant ? 'bg-orange-500 text-white hover:bg-orange-300' : 'bg-gray-500 text-white hover:bg-gray-300'}`}
          onClick={() => setShowProtestant(!showProtestant)}
        >
          Protestantische Reichskreise
        </button>
        <div className="relative group ml-2">
          <button 
            className="bg-gray-300 text-gray-700 rounded-full w-5 h-5 text-xs font-bold flex items-center justify-center hover:bg-gray-400"
            onClick={() => setShowProtestantInfo(!showProtestantInfo)}
          >
            i
          </button>
          {showProtestantInfo && (
            <div className="absolute right-0 top-6 w-52 bg-white p-2 text-sm text-gray-700 shadow-lg rounded border border-gray-300 z-40">
              Die Einteilung in Katholische und Protestantische Reichskreise basiert auf einer groben Schätzung der konfessionellen Mehrheiten basierend
               auf <a href="https://ghdi.ghi-dc.org/map.cfm?map_id=2815" className="underline text-blue-400">dieser</a> Karte, trotzdem gab es auch in den 
               als Protestantisch markierten Reichskreisen Katholische Gebiete und umgekehrt.
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
