import React from 'react';
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const Portfolio = () => {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-800/80 backdrop-blur-sm shadow-sm z-50 hidden lg:block">
        <div className="max-w-full mx-4 px-6 sm:px-2 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold font-mono text-green-300">Nate Demchak</span>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4">
              <a href="#" className="text-green-300 hover:text-white transition-colors">About</a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">Projects</a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen grid grid-cols-[70fr,30fr] grid-rows-[25fr,75fr] snap-start bg-gray-800 px-4">
        <div></div>
        <div></div>
        <div className="flex justify-center items-start p-8 md:p-10 lg:p-12">
          <div>
            <p className="text-lg mb-4 text-gray-300">
              👋 Hi, My name is
            </p>
            <h1 className="text-6xl md:text-8xl font-bold font-mono bg-gradient-to-br from-green-400 to-cyan-500 text-transparent bg-clip-text mb-6">
              Nate Demchak
            </h1>
            <p className="text-xl text-gray-300/90 mb-8 max-w-xl">
              I'm a current junior at Stanford University studying Computer Science and Computational Biology. I'm passionate about using software and artificial intelligence to improve healthcare and medicine.
            </p>
          </div>
        </div>
        <div className='flex-cols items-center justify-center p-12 space-y-8'>
          <h1 className='text-gray-300 text-4xl'>
            Let's connect!
          </h1>
          <div>
            <button className="bg-gradient-to-br from-green-400 to-cyan-500 text-white font-bold py-6 px-8 m-2 rounded-2xl">
            <div className="flex space-x-6">
              <a href="https://github.com/nate-dem" className="text-white/80 hover:text-white transition-colors">
                <LuGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/nathaniel-demchak-4340b326b/" className="text-white/80 hover:text-white transition-colors">
                <LuLinkedin size={28} />
              </a>
              <a href="mailto:natedemchak35@gmail.com" className="text-white/80 hover:text-white transition-colors">
                <LuMail size={28} />
              </a>
            
            </div>
            </button>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Portfolio;