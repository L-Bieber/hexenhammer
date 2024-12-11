import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map(){
    return(
    <div className="w-full h-screen overflow-hidden">
        <MapContainer 
          center={[50.863, 10.339]} // Coordinates for the map center
          zoom={6} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty popup! <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>);
};