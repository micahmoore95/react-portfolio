import './App.css';
import React from "react";
import About from "./components/About";
import MyProjects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <MyProjects />
      <Contact />
    </main>
  );
}

export default App;
