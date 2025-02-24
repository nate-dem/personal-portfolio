import React from 'react';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-gray-800/80 backdrop-blur-sm shadow-sm z-50 hidden lg:block">
      <div className="max-w-full mx-4 px-6 sm:px-2 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('landingPage')} className="text-xl font-bold font-mono bg-gradient-to-br from-green-400 to-cyan-500 text-transparent bg-clip-text">Nate Demchak</button>
          </div>
          <div className="flex flex-1 items-center font-mono justify-end space-x-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-br from-green-400 to-cyan-500 text-transparent bg-clip-text hover:text-white"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-br from-green-400 to-cyan-500 text-transparent bg-clip-text hover:text-white"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-br from-green-400 to-cyan-500 text-transparent bg-clip-text hover:text-white"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;