import React from 'react';
import TechStack from './Techstack';

const Introduction = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center p-6">
        <div className="border-4 border-gray-800 p-8 rounded-lg shadow-lg w-full max-w-screen-lg flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-10 w-full">
            {/* Left Column */}
            <div className="relative flex items-center border-gray-600 rounded-lg p-4">
              <h3 className="text-6xl font-extrabold text-left text-red-600 fade-in">
                <span className="block">Syed</span>
                <span className="block">Mustafa</span>
                <span className="block">Nadeem</span>
              </h3>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-center text-center">
              <p className="mt-7 text-gray-400 max-w-lg mx-auto">
                Experienced Full Stack Developer with a focus on JavaScript and Python - Node and Django as backend and React, Angular as frontend...
              </p>
              {/* Button for Resume */}
              <div className="mt-5">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                >
                  View Resume
                </a>
                <a 
                  href="/resume.pdf" 
                  download 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <section id="techstack" className="py-1" data-aos="fade-down">
          <TechStack/>
        </section>
      </div>
    </div>
  );
};

export default Introduction;
