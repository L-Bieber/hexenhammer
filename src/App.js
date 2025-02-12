import React from 'react';
import 'leaflet/dist/leaflet.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import TextTest from './pages/textTest';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/map' element={<Home/>}/>
          <Route path='/test' element={<TextTest/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
