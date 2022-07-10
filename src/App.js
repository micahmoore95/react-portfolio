import './App.css';
import React, { useState} from "react";
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import ProjectList from './components/ProjectData';


function App() {
  const [homeSelected, setHomeSelected] = useState(true);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header 
      setHomeSelected={setHomeSelected} 
      setAboutSelected={setAboutSelected} 
      setProjectSelected={setProjectSelected}
      setContactSelected={setContactSelected}
      homeSelected={homeSelected} 
      aboutSelected={aboutSelected}
      projectSelected={projectSelected}
      contactSelected={contactSelected} />
      
      {homeSelected && <Home />}
      {aboutSelected && <About />}
      {projectSelected && <ProjectList />}
      {contactSelected && <Contact />}
    </div>
  )
}

export default App;
