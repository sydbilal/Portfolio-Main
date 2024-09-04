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
              Experienced Full Stack Developer with a focus on JavaScript and Python - Node and Django as backend and React, Angular as frontend. I have a passion for creating scalable and efficient systems, with 5+ years of experience in the field. I have a good understanding of RESTful APIs, database architecture, and server-side optimization techniques. My expertise in React, Angular, Node, Django frameworks allows me to develop robust and secure web applications. Proficient in JavaScript, Python, AWS, ElasticSearch, and Docker, I can create and deploy highly performant and resilient systems. Let's build something great together!
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <div>
      <section id="techstack" className="py-1 " data-aos="fade-down">
        <TechStack/>
      </section>
      </div>
    </div>
    
  );
};

export default Introduction;
