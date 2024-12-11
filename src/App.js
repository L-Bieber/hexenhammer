import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import Map from './components/map';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen mb-40">
      <Map/>
    </div>
    </div>
  );
}

export default App;
