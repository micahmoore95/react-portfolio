import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';


function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/myprojects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </Router>
  );
}

export default App;
