import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Prints_places from "./prints_places";
import Trials_places from "./trials_places";
import Protestantisch from "./protestantisch";
import Katholisch from "./katholisch";
import MapToggle from "./mapToggle";

export default function Map() {
  const [showPrints, setShowPrints] = useState(true);
  const [showTrials, setShowTrials] = useState(true);
  const [showCatholic, setShowCatholic] = useState(true);
  const [showProtestant, setShowProtestant] = useState(true);

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
        {showProtestant && <Protestantisch/>}
        {showCatholic && <Katholisch/>}
      </MapContainer>
      <MapToggle 
        showPrints={showPrints} setShowPrints={setShowPrints}
        showTrials={showTrials} setShowTrials={setShowTrials}
        showCatholic={showCatholic} setShowCatholic={setShowCatholic}
        showProtestant={showProtestant} setShowProtestant={setShowProtestant}
      /> 
    </div>
  );
}