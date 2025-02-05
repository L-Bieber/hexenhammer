import React from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Prints_places from "./prints_places";
import Trials_places from "./trials_places";


export default function Map() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <MapContainer
        center={[50.863, 10.339]} // Coordinates for the map center
        zoom={6}
        style={{ height: "90%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Prints_places/>
        <Trials_places/>
      </MapContainer>
      <div className="text-xs">
      Blue Icon made by Yuju from www.flaticon.com <br/>
      Red Icon made by kmgdesign from www.flaticon.com
      </div>
    </div>
  );
}
