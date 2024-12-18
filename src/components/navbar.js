import React from "react";

export default function Navbar(){
    return(
        <nav className="bg-blue-700 text-white py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">Der Hexenhammer und Hexenverfolgungen</div>

                <div className="flex space-x-4">
                    <button className="hover:bg-blue-400 px-4 py-2 rounded">Button 1</button>
                    <button className="hover:bg-blue-400 px-4 py-2 rounded">Button 2</button>
                    <button className="hover:bg-blue-400 px-4 py-2 rounded">Button 3</button>
                    <button className="hover:bg-blue-400 px-4 py-2 rounded">Button 4</button>
                </div>
            </div>
        </nav>
    );
}