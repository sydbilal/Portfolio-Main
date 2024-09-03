import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import ContactMe from './Components/Contactme';
import './App.css'
import Home from './Components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      once: false,     // Whether animation should happen only once - while scrolling down
    });
  }, []);
  
  return (
    <div>
      <Navbar/>

      <section id="home" className="py-5 bg-gray-100">
  <Home />
</section>

<section id="projects" className="py-5 bg-gray-100" data-aos="fade-down">
  <Projects />
</section>

<section id="experience" className="py-1 bg-gray-100" data-aos="fade-down">
  <Experience />
</section>

<section id="contact" className="py-5 bg-gray-100" data-aos="fade-down">
  <ContactMe />
</section>
    </div>
  );
};

export default App;
