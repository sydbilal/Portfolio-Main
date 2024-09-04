import React from 'react';
import laptop from '../assets/laptop hero.jpeg';

const Home = () => {
  return (
    <div 
      className="h-screen flex items-center justify-center bg-cover bg-center relative transform translate-y-[-50px]" 
      style={{ backgroundImage: `url(${laptop})`, }}
    >
      <div className="absolute inset-0 flex items-center justify-center ">
        <h2 className="text-5xl text-center " style={{ color: '#8B0000', transform: 'translateY(-50px)'}}>
          <span className="text-white font-bold fade-in">Hello, Welcome </span>
          <span className="text-red-500 font-semibold fade-in">to My Portfolio</span>
        </h2>
      </div>
    </div>
  );
};

export default Home;
