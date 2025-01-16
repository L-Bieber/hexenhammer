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

export default function Map() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Path to your CSV file
    const csvPath = "/tables/malleus_prints.csv";

    // Fetch and parse the CSV
    fetch(csvPath)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true, // Treat the first row as headers
          complete: (results) => {
            // Extract relevant data from the CSV
            const validMarkers = results.data
              .map((row) => {
                const city = row.place?.toLowerCase().trim(); // Standardize city names
                const date = row.date?.trim();
                const coordinates = places[city]; // Match city to coordinates in places

                // Only include entries with valid city and coordinates
                if (coordinates && date) {
                  return { city, date, coordinates };
                }
                return null; // Exclude invalid entries
              })
              .filter((marker) => marker !== null); // Remove null entries

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
                <strong>Place:</strong>{marker.city}
                <br />
                <strong>Date:</strong>{marker.date}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
