import React from 'react';
import { useState, useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import '../App.css';
import Navbar from '../components/navbar';

const TextFileViewer = () => {
    const [text, setText] = useState("");

    useEffect(() =>{
        fetch("/texts/loremipsum.txt")
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading text file:", error))
    }, []);
    return(
      <div className='max-w-2/3 mx-auto p-4 mx-72'>
        <pre className='whitespace-pre-wrap'>
            <h1>TITLE</h1>
            {text}
        </pre>
      </div>  
    );
};

export default function TextTest(){
    return(
    <div className='bg-slate-300 min-h-screen'>
        <Navbar/>
        <div className=''>
            <TextFileViewer/>
        </div>
    </div>
    );
}