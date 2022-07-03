import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import AboutPage from "./pages/AboutMe";
import ProjectPage from './pages/Projects';
import ContactPage from './pages/Contact';
import Navbar from './components/Navbar';


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
