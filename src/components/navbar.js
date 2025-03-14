import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <nav className="bg-blue-700 text-white pb-4 px-6">
            <div className="container mx-auto mt-3 flex justify-between items-center">
                <Link to="/map">
                <div className="text-xl font-bold">Der Hexenhammer und Hexenverfolgungen im Heiligen Römischen Reich</div>
                </Link>
                <div className="flex space-x-4">
                    <Link to="/map">
                        <button className="hover:bg-blue-400 px-4 py-2 rounded">Karte</button>
                    </Link>
                    <Link to="/hexenhammer">
                    <button className="hover:bg-blue-400 px-4 py-2 rounded">Der Hexenhammer</button>
                    </Link>
                    <Link to="/quellen">
                    <button className="hover:bg-blue-400 px-4 py-2 rounded">Quellen</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}