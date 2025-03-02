import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <nav className="bg-blue-700 text-white pb-4 px-6">
            <div className="container mx-auto mt-3 flex justify-between items-center">
                <div className="text-xl font-bold">Der Hexenhammer und Hexenverfolgungen im Heiligen Römischen Reich</div>

                <div className="flex space-x-4">
                    <Link to="/map">
                        <button className="hover:bg-blue-400 px-4 py-2 rounded">Map</button>
                    </Link>
                    <Link to="/test">
                    <button className="hover:bg-blue-400 px-4 py-2 rounded">Lorem Ipsum</button>
                    </Link>
                    <button className="hover:bg-blue-400 px-4 py-2 rounded">Button 3</button>
                    <button className="hover:bg-blue-400 px-4 py-2 rounded">Button 4</button>
                </div>
            </div>
        </nav>
    );
}