import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-[#161a2e] to-transparent bg-opacity-10 backdrop-blur-md backdrop-filter p-8 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold" >
          <a href="#home">Syed Mustafa Nadeem</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white font-bold hover:text-maroon-red">
            Home
          </a>
          <a href="#projects" className="text-white font-bold hover:text-maroon-red">
            Projects
          </a>
          <a href="#experience" className="text-white font-bold hover:text-maroon-red">
            Experience
          </a>
          <a href="#contact" className="text-white font-bold hover:text-maroon-red">
            Contact Me
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button 
            className="text-white font-bold hover:text-maroon-red focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-blue-950 bg-opacity-75 p-4`}>
        <a href="#home" className="block text-white font-bold py-2" onClick={toggleMenu}>
          Home
        </a>
        <a href="#projects" className="block text-white font-bold py-2" onClick={toggleMenu}>
          Projects
        </a>
        <a href="#experience" className="block text-white font-bold py-2" onClick={toggleMenu}>
          Experience
        </a>
        <a href="#contact" className="block text-white font-bold py-2" onClick={toggleMenu}>
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
