import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import ContactMe from './Components/Contactme';
import './App.css';
import Home from './Components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import Introduction from './Components/Introduction';
import Services from './Components/Services';
// import LoginScreen from './Components/LoginScreen'; // Import the LoadingScreen component
import Testimonials from './Components/Testimonial';
import Skills from './Components/SkillsBar';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [loadingComplete, setLoadingComplete] = useState(false); // State to handle loading screen

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Show loading screen until animation finishes
  // if (!loadingComplete) {
  //   return <LoginScreen setLoadingComplete={setLoadingComplete} />;
  // }

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} /> 

      <section id="home" className="py-5">
        <Home />
      </section>
      <section id="introduction" className="">
        <Introduction />
      </section>
      <section id="introduction" className="" data-aos="fade-down">
        <Skills/>
      </section>
      <section id="services" className="py-5" data-aos="fade-down">
        <Services />
      </section>
      <section id="projects" className="py-5" data-aos="fade-down">
        <Projects />
      </section>
      <section id="experience" className="py-1" data-aos="fade-down">
        <Experience />
      </section>
      <section id="experience" className="py-1" data-aos="fade-down">
        <Testimonials/>
      </section>
      <section id="contact" className="py-5" data-aos="fade-down">
        <ContactMe />
      </section>
    </div>
  );
};

export default App;
