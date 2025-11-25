import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import StudentProfile from "./pages/StudentProfile";


import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className ="min-h-screen flex flex-col bg-gray-50"><Navbar/>
      <div  className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/students/:id" element={<StudentProfile />} />
          </Routes>
          </div>
          <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
