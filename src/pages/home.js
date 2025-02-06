import React from 'react';
import 'leaflet/dist/leaflet.css';
import '../App.css';
import Map from '../components/map';
import Navbar from '../components/navbar';


function Home() {
  return (
    <div className='bg-slate-300'>
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen mx-[5%]">
      <Map/>
    </div>
    </div>
  );
}

export default Home;
