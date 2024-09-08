import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import laptop from '../assets/laptop hero.jpeg';

const Home = () => {
  const helloRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the "Hello" text shrinking and disappearing
    gsap.fromTo(
      helloRef.current,
      { opacity: 0, scale: 30 },  // Start large
      {
        opacity: 1,
        scale: 1,  // Shrink to normal size
        duration: 3,
        ease: 'power4.out',
      }
    );
  }, []);

  return (
    <div 
      className="h-screen flex items-center justify-center bg-cover bg-center relative transform translate-y-[-50px]" 
      style={{ backgroundImage: `url(${laptop})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          ref={helloRef}
          className="text-5xl text-center"
          style={{ color: '#8B0000', transform: 'translateY(-50px)' }}
        >
          <span className="text-white font-bold">Hello, Welcome </span>
          <span className="text-red-500 font-semibold">to My Portfolio</span>
        </h2>
      </div>
    </div>
  );
};

export default Home;
