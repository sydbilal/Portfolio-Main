import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = ({ setLoadingComplete }) => {
  const rocketRef = useRef(null);
  const helloRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the rocket
    gsap.fromTo(
      rocketRef.current,
      { y: '100vh', opacity: 0 },
      { y: '-20vh', opacity: 1, duration: 3, ease: 'power4.out' }
    );
    // GSAP animation for the "Hello" text
    gsap.fromTo(
      helloRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'back.out(1.7)', delay: 0.5 }
    );

    // When the animation is complete, hide the loading screen
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 3500); // 3.5 seconds to match the rocket animation

    return () => clearTimeout(timer);
  }, [setLoadingComplete]);

  return (
    <div className="loading-screen w-full h-screen bg-gray-900 flex flex-col justify-center items-center">
      <h1
        ref={helloRef}
        className="text-white text-4xl font-bold mb-8"
        style={{ opacity: 0 }}
      >
        Hello!
      </h1>
      <div ref={rocketRef} className="rocket-icon">
        🚀
      </div>
    </div>
  );
};

export default LoadingScreen;
