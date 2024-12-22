import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { places } from "../tables/places";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

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
        {Object.entries(places).map(([name, coords]) =>(
          <Marker key={name} position={coords}>
            <Popup>
              Place: <strong>{name}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
