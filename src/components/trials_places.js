import React, { useState, useEffect } from "react";
import { CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { places } from "./places";
import Papa from "papaparse";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function Trials_places() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const trialsPath = "/tables/witch_trials.csv";

    fetch(trialsPath)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const groupedMarkers = results.data.reduce((acc, row) => {
              const city = row.place?.toLowerCase().trim();
              const date = row.date?.trim();
              const sentence = row.sentence?.trim();
              const coordinates = places[city];

              if (coordinates && date) {
                if (!acc[city]) {
                  acc[city] = { city: capitalizeFirstLetter(city), coordinates, dates: [], sentences: [] };
                }
                acc[city].dates.push(date);
                acc[city].sentences.push(sentence);
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
          color="red"
          fillColor="red"
          fillOpacity={0.4} 
          stroke={false} 
        >
          <Popup>
            <strong>Hexenprozess</strong><br/>
            <strong>Ort:</strong> {marker.city}
            <br/>
            --------------------------------- <br/>
            {marker.dates.map((date, i) => (
              <div key={i}>
                <strong>Jahr:</strong> {date}<br />
                {marker.sentences[i] &&(
                <>
                <strong>Urteil/Hinrichtungsmethode:</strong> {marker.sentences[i]}<br/>
                </>
                )}
                ---------------------------------
              </div>
            ))}
          </Popup>
        </CircleMarker>
      ))}
    </>
  );
}