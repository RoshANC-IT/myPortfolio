
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Experiance from "./components/Experiance";
import Skill from "./components/Skills";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './App.css'
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/experiance" element={<Experiance />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </div>
      <Toaster/>
    </Router>
  );
}

export default App;
