import React, { useState, useEffect } from "react";
import { CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { places } from "./places";
import Papa from "papaparse";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function Prints_places() {
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
              const coordinates = places[city];

              if (coordinates && date) {
                if (!acc[city]) {
                  acc[city] = { city: capitalizeFirstLetter(city), coordinates, dates: [] };
                }
                acc[city].dates.push(date);
              }
              return acc;
            }, {});

            setMarkers(Object.values(groupedMarkers));
          },
          error: (err) => {
            console.error("Error parsing CSV:", err);
          },
        });
      });
  }, []);

  return (
    <>
      {markers.map((marker, index) => (
        <CircleMarker
          key={index}
          center={marker.coordinates}
          radius={Math.min(5 + marker.dates.length * 5, 100)} 
          color="blue"
          fillColor="blue"
          fillOpacity={0.4} 
          stroke={false}
        >
          <Popup>
            <strong>DRUCKORT</strong><br />
            <strong>Ort:</strong> {marker.city}
            <br />
            {marker.dates.map((date, i) => (
              <div key={i}>
                <strong>Jahr:</strong> {date}
              </div>
            ))}
          </Popup>
        </CircleMarker>
      ))}
    </>
  );
}
