// src/Components/TechStack.jsx
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Import logos
import javascriptLogo from '../assets/javascript.png';
// import htmlLogo from '../assets/logos/html.png';
// import cssLogo from '../assets/logos/css.png';
import pythonLogo from '../assets/redux.png';
import reactLogo from '../assets/react.png';
import angularLogo from '../assets/angular.png';
import nodeLogo from '../assets/node.png';
import djangoLogo from '../assets/django.png';
// import githubLogo from '../assets/';
import awsLogo from '../assets/aws.png';
import mongoLogo from '../assets/mongodb.png';
import reduxlogo from '../assets/python.png';

const logos = [
  { src: javascriptLogo, alt: 'JavaScript' },
//   { src: htmlLogo, alt: 'HTML' },
//   { src: cssLogo, alt: 'CSS' },
  { src: pythonLogo, alt: 'Python' },
  { src: reactLogo, alt: 'React' },
  { src: angularLogo, alt: 'Angular' },
  { src: nodeLogo, alt: 'Node.js' },
  { src: djangoLogo, alt: 'Django' },
//   { src: githubLogo, alt: 'GitHub' },
  { src: awsLogo, alt: 'AWS' },
  {src: reduxlogo, alt:'reduxlogo'},
  { src: mongoLogo, alt: 'AWS' },

];

const TechStack = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="w-14 h-14 flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay={index * 100} // Stagger animation delay
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-16 h-16 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default TechStack;
