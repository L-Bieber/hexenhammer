import React from 'react';
import { useState, useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import '../App.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const TextFileViewer = () => {
    const [text, setText] = useState("");

    useEffect(() =>{
        fetch("/texts/malleus_info.txt")
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading text file:", error))
    }, []);
    return(
      <div className='w-1/2 mx-auto p-4 mx-1/4'>
        <pre className='whitespace-pre-wrap font-sans'>
            <h1 className='text-xl my-7'>Der Hexenhammer</h1>
            {text}
        </pre>
      </div>  
    );
};

export default function Hexenhammer(){
    return(
    <div className='bg-slate-300 min-h-screen flex flex-col'>
        <Navbar/>
        <div className=''>
            <TextFileViewer/>
        </div>
        <Footer/>
    </div>
    );
}