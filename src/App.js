import './App.css';
import React from "react";
import About from "./components/About";
import Projects from './components/Projects';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
