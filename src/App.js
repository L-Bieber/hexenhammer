import React from 'react';
import 'leaflet/dist/leaflet.css';
import './App.css';
import { Analytics } from "@vercel/analytics/react"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import TextTest from './pages/textTest';
import Impressum from './pages/impressum';
import NotFound from './pages/notFound';
import Sources from './pages/sources';
import Hexenhammer from './pages/hexenhammer';


function App() {
  return (
    <div className='app'>
      <Analytics/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/map' element={<Home/>}/>
          <Route path='/test' element={<TextTest/>}/>
          <Route path="/impressum" element={<Impressum/>}/>
          <Route path='/quellen' element={<Sources/>}/>
          <Route path="/hexenhammer" element={<Hexenhammer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
