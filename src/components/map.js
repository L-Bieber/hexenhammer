import React, { useState, useEffect, use } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { places } from "./places";
import Papa from "papaparse";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function Map() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const printsPath = "/tables/malleus_prints.csv";

    fetch(printsPath)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const groupedMarkers = results.data.reduce((acc, row) => {
              const city = row.place?.toLowerCase().trim();
              const date = row.date?.trim();
              const coordinates = places[city]; // Match city to coordinates in places

              if (coordinates && date) {
                if (!acc[city]) {
                  acc[city] = { city: capitalizeFirstLetter(city), coordinates, dates: [] };
                }
                acc[city].dates.push(date);
              }
              return acc;
            }, {});

            const validMarkers = Object.values(groupedMarkers);
            setMarkers(validMarkers); // Store markers in state
          },
          error: (err) => {
            console.error("Error parsing CSV:", err);
          },
        });
      });
  }, []);

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
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.coordinates}>
            <Popup>
                <strong>Place:</strong> {marker.city}
                <br />
                {marker.dates.map((date,i) =>(
                  <div key={i}>
                    <strong>Date:</strong> {date}
                  </div>
                ))}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
