import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function NotFound(){
    return(
    <div className='bg-slate-300 min-h-screen flex flex-col'>
        <Navbar/>
        <div className="text-center mt-11">
            <h1 className="font-bold text-9xl">404</h1>
            <p className="text-xl mt-10">Seite nicht gefunden 😞</p>
            <Link to='/home' className="text-s float-center text-black underline font-bold px-4 py-2 mt-3  inline-block rounded-lg bg-hellblau hover:bg-gradient-to-r hover:underline from-lila to-pink">Zurück zur Startseite</Link>
        </div>
        <Footer/>
    </div>
    );
}