
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'  
import Projects from './components/Projects.jsx';
import About from "./components/About.jsx";
import Footer from './components/Footer.jsx';
import Contact from "./components/Contact"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />          {/* Home page */}
          <Route path="/about" element={<About />} />       {/* About page */}
        <Route path="/projects" element={<Projects />} /> {/* Projects page */}
        <Route path="/contact" element={<Contact />} />
        
         
        
      </Routes>

       <Footer /> {/* ← Footer is here, outside Routes */}

    </Router>
  );
}

export default App;