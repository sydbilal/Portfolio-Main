import React from 'react';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import ContactMe from './Components/Contactme';
import './App.css'
import Home from './Components/Home';


const App = () => {
  return (
    <div>
      <Navbar/>

      <section id="home" className="py-5 bg-gray-100">
      <Home/>

      </section>
      



      <section id="projects" className="py-5 bg-gray-100">
        <Projects/>
      </section>
      <section id="experience" className="py-1 bg-gray-100">
        <Experience/>
      </section>
      <section id="contact" className="py-5 bg-gray-100">
        <ContactMe/>
      </section>
    </div>
  );
};

export default App;
