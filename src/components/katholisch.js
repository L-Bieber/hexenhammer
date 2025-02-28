import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import * as L from "leaflet";
import Kath1 from "../Reichskreise/Katholisch/12044.json"
import Kath2 from "../Reichskreise/Katholisch/12048.json"
import Kath3 from "../Reichskreise/Katholisch/12049.json"
import Kath4 from "../Reichskreise/Katholisch/12050.json"
import Kath5 from "../Reichskreise/Katholisch/12051.json"
import Kath6 from "../Reichskreise/Katholisch/12052.json"
import Kath7 from "../Reichskreise/Katholisch/12053.json"
import Kath8 from "../Reichskreise/Katholisch/12054.json"



export default function Katholisch() {
    const map = useMap();
  
    useEffect(() => {
      const geoJsonLayers = [
        L.geoJSON(Kath1, {
          style: {
            color: "#7cc28f",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.5,
          },
        }),
        L.geoJSON(Kath2, {
          style: {
            color: "#7cc28f",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.5,
          },
        }),
        L.geoJSON(Kath3, {
            style: {
                color: "#7cc28f",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.5,
              },
        }),
        L.geoJSON(Kath4, {
            style: {
                color: "#7cc28f",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.5,
              },
        }),
        L.geoJSON(Kath5, {
            style: {
                color: "#7cc28f",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.5,
              },
        }),
        L.geoJSON(Kath6, {
            style: {
                color: "#7cc28f",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.5,
              },
        }),
        L.geoJSON(Kath7, {
            style: {
                color: "#7cc28f",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.5,
              },
        }),
        L.geoJSON(Kath8, {
            style: {
                color: "#7cc28f",
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