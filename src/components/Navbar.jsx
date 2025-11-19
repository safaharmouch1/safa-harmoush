import React from 'react';
import{ Link } from "react-router-dom";



function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Student Portal</h1>
             
             <ul className="flex gap-6 text-lg">
                <li><link to="/" className="hover:text-gray-200">Home</link></li>
                <li><link to="/About" className="hover:text-gray-200">About</link></li>
                <li><link to="/courses" className="hover:text-gray-200">Courses</link></li>
                <li><link to="/contact" className="hover:text-gray-200">Contact</link></li>
             </ul>
        </div>
    </nav>
   
  );
}

export default Navbar;
