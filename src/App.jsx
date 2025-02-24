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
              <span className="text-xl font-bold font-mono bg-gradient-to-br from-green-400 to-cyan-500 text-transparent bg-clip-text">Nate Demchak</span>
            </div>
            <div className="flex flex-1 items-center font-mono justify-end space-x-4">
              <a href="" className="bg-gradient-to-br from-green-400 to-cyan-500 text-transparent bg-clip-text hover:text-white">About</a>
              <a href="#" className="bg-gradient-to-br from-green-400 to-cyan-500 text-transparent bg-clip-text hover:text-white">Projects</a>
              <a href="#" className="bg-gradient-to-br from-green-400 to-cyan-500 text-transparent bg-clip-text hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Landing Page */}
      <section id="hero" className="h-screen snap-start flex flex-col items-center bg-gray-800 px-4">
        <div className="flex flex-col items-center justify-center flex-grow mt-40 space-y-8">
          <div className="text-center font-mono">
            <p className="text-lg mb-4 text-gray-300">
              👋 Hi, My name is
            </p>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-green-400 to-cyan-500 text-transparent bg-clip-text mb-6">
              Nate Demchak
            </h1>
          </div>

          <div className="max-w-lg text-center font-mono">
            <p className="text-xl text-gray-300/90 mb-8">
              I'm a junior at Stanford University studying Computer Science and Computational Biology. I'm passionate about using software and artificial intelligence to improve healthcare and medicine.
            </p>
          </div>

          <div className="text-center flex flex-col items-center justify-start space-y-4 font-mono">
            <h1 className="bg-gradient-to-br from-green-400 to-cyan-500 text-transparent bg-clip-text text-2xl">
              Let's connect!
            </h1>
            
            <div className="flex justify-center items-center space-x-6">
              <a href="https://github.com/nate-dem" className="text-white/80 hover:text-cyan-300 transition-colors">
                <LuGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/nathaniel-demchak-4340b326b/" className="text-white/80 hover:text-cyan-300 transition-colors">
                <LuLinkedin size={28} />
              </a>
              <a href="mailto:natedemchak35@gmail.com" className="text-white/80 hover:text-cyan-300 transition-colors">
                <LuMail size={28} />
              </a>
            </div>
          </div>
        </div>

        <footer className="animate-bounce mb-8">
          <h1 className="text-xl text-gray-300 font-bold font-mono group-hover:text-white transition-colors">
            Scroll Below
          </h1>
        </footer>
      </section>
      {/* About Me */}
      <section id="about" className='h-screen snap-start bg-gray-800 '>
        <div className='grid grid-rows-[20fr,80fr] grid-cols-[60fr,40fr] h-full'>
          <div></div>
          <div></div>
          <div className='flex items-start justify-center'>
            <div className='flex flex-col items-start justify-center space-y-10'>
              <h1 className='text-white text-3xl font-mono'>
                About Me:
              </h1>
              <p className='text-gray-300 text-xl'>

              </p>
            </div>      
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;