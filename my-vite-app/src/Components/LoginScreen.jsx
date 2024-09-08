import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = ({ setLoadingComplete }) => {
  const helloRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the "Hello" text growing and disappearing
    gsap.fromTo(
      helloRef.current,
      { opacity: 1, scale: .1 },
      {
        opacity: 0,
        scale: 30, // Makes the text grow beyond the screen
        duration: 3,
        ease: 'power4.out',
      }
    );

    // When the animation is complete, hide the loading screen
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 2500); // Match the duration of the animation

    return () => clearTimeout(timer);
  }, [setLoadingComplete]);

  return (
    <div className="loading-screen w-full h-screen bg-gray-900 flex flex-col justify-center items-center">
      <h1
        ref={helloRef}
        className="text-white text-4xl font-bold"
        style={{ opacity: 1 }}
      >
        Hello, Welcome to My Portfolio
      </h1>
    </div>
  );
};

export default LoadingScreen;
