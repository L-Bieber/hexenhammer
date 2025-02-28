import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Prints_places from "./prints_places";
import Trials_places from "./trials_places";
import Protestantisch from "./protestantisch";
import Katholisch from "./katholisch";

export default function Map() {
  const [showPrints, setShowPrints] = useState(true);
  const [showTrials, setShowTrials] = useState(true);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <MapContainer
        center={[50.863, 10.339]} 
        zoom={6}
        style={{ height: "90%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {showPrints && <Prints_places />}
        {showTrials && <Trials_places />}
        <Protestantisch/>
        <Katholisch/>
      </MapContainer>
      <div className="absolute top-0 right-0 m-4 p-2 bg-white shadow-lg rounded" style={{zIndex: 1000}}>
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
      </div>
      <div className="text-xs absolute">
        Blue Icon made by Yuju from www.flaticon.com <br />
        Red Icon made by kmgdesign from www.flaticon.com
      </div>
    </div>
  );
}