import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import * as L from "leaflet";
import Prot1 from "../Reichskreise/Protestantisch/11979.json"
import Prot2 from "../Reichskreise/Protestantisch/11980.json"
import Prot3 from "../Reichskreise/Protestantisch/11981.json"
import Prot4 from "../Reichskreise/Protestantisch/11983.json"



export default function Protestantisch() {
    const map = useMap();
  
    useEffect(() => {
      const geoJsonLayers = [
        L.geoJSON(Prot1, {
          style: {
            color: "#ff7800",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.5,
          },
        }),
        L.geoJSON(Prot2, {
          style: {
            color: "#ff7800",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.5,
          },
        }),
        L.geoJSON(Prot3, {
            style: {
                color: "#ff7800",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.5,
              },
        }),
        L.geoJSON(Prot4, {
          style: {
              color: "#ff7800",
              weight: 2,
              opacity: 1,
              fillOpacity: 0.5,
            },
      })
      ];
  
      geoJsonLayers.forEach(layer => layer.addTo(map));
  
      return () => {
        geoJsonLayers.forEach(layer => map.removeLayer(layer));
      };
    }, [map]);
  
    return null;
  }