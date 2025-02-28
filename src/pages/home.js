import React from 'react';
import 'leaflet/dist/leaflet.css';
import '../App.css';
import Map from '../components/map';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


function Home() {
  return (
    <div className='bg-slate-300 flex flex-col min-h-screen'>
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen mx-[5%]">
      <Map/>
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
