import React from 'react';
import TAKEAWAY from '../assets/TAKEAWAYY.jpeg';

const Home = () => {
  return (
    <div className="container mx-auto py-20 flex flex-col items-center">
      <h2 className="mt-20 mb-10 text-4xl font-bold text-center">
        Hello, Welcome to My Portfolio
      </h2>
      <h3 className="mt-2 text-2xl font-semibold text-center">
        Syed Mustafa Nadeem
      </h3>

      <p className="mt-10 max-w-xl text-center text-gray-700">
        Experienced Full Stack Developer with a focus on JavaScript and Python - Node and Django as backend and React, Angular as frontend. I have a passion for creating scalable and efficient systems, with 5+ years of experience in the field. I have a good understanding of RESTful APIs, database architecture, and server-side optimization techniques. My expertise in React, Angular, Node, Django frameworks allows me to develop robust and secure web applications. Proficient in JavaScript, Python, AWS, ElasticSearch, and Docker, I can create and deploy highly performant and resilient systems. Let's build something great together!
      </p>
    </div>
  );
};

export default Home;
