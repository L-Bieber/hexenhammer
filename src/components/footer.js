import React from "react";

export default function Footer(){
    return(
        <footer className="bg-blue-700 text-white py-4 px-6 mt-auto">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm">&copy; {new Date().getFullYear} Der Hexenhammer und Hexenverfolgungen im Heiligen Römischen Reich</div>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="/impressum" className="hover:underline">
                        Impressum
                    </a>
                    <a href="/privacy" className="hover:underline">
                        Datenschutz
                    </a>
                    <a href="/contact" className="hover:underline">
                        Kontakt
                    </a>
                </div>

            </div>
        </footer>
    );
}