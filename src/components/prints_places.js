import React, { useState, useEffect, use } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { places } from "./places";
import Papa from "papaparse";


const customIcon = new L.Icon({
    iconUrl: require("../images/location.png"), // Update the path to your custom icon
    iconSize: [40, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    shadowSize: [41, 41], // Size of the shadow
  });
  
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

export default function Prints_places(){
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
    
    return(
        <>
        {markers.map((marker, index) => (
                  <Marker key={index} position={marker.coordinates} icon={customIcon}>
                    <Popup>
                        <strong>PRINT</strong><br/>
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
        </>
    );
  }