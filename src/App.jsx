import React from 'react';
import { LuGithub, LuLinkedin, LuMail, LuBookOpen } from "react-icons/lu";

const Portfolio = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="h-screen overflow-y-auto">

      {/* <Navigation /> */}
      <nav className="fixed w-full bg-gray-800/80 backdrop-blur-sm shadow-sm z-50">
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

      {/* Landing Page */}
      <section id="landingPage" className="min-h-screen flex flex-col items-center bg-gray-800 px-4">
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
              <a href="mailto:natedem@stanford.edu" className="text-white/80 hover:text-cyan-300 transition-colors">
                <LuMail size={28} onClick={() => {
                  navigator.clipboard.writeText('natedem@stanford.edu');
                  alert('Email copied to clipboard!');
                }}/>
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
      <section id="about" className='min-h-screen bg-gray-800 py-24'>
        <div className='grid grid-cols-[55fr,45fr] gap-4 h-full'>
          <div className='flex items-center justify-center px-12'>
            <div className='flex flex-col items-start justify-center space-y-10 text-gray-300'>
              <h1 className='text-3xl font-mono bg-gradient-to-br from-green-400 to-cyan-500 text-transparent bg-clip-text'>
                About Me:
              </h1>
              <p className='text-xl'>
                After graduating high school in 2021, I began my journey at CUNY Macaulay Honors College at Baruch, focusing on biology and computer science. During my time there, I explored diverse interests:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-lg">Served as an EMT responding to emergency calls across Long Island, Manhattan, and the Bronx.</li>
                <li className="text-lg">Balanced academics with athletics as captain of the varsity baseball team.</li>
                <li className='text-lg'>Led our team to win the 2022 CUNYAC Championship and earned 2023 CUNYAC Pitcher of the Year.</li>
                <li className="text-lg">Conducted research on gene expression patterns in complex anatomical structures in mammals.</li>
              </ul>
              <p className='text-xl'>
                While initially pursing the pre-med track with hopes of attending medical school, my plans changed after becoming fascinated with the intersection of technology and healthcare. I transferred to Stanford University in 2023 to study computer science and computational biology. This past summer, I interned at an AI startup where I researched bias assessment in large language models. Currently, I'm working on a collaborative project between the Stanford School of Medicine and the Palo Alto VA Medical Center, integrating healthcare wearables with augmented-reality tools to improve psychiatric assessments. This summer, I will be interning at Amazon as a Software Development Engineer.
              </p>
            </div>      
          </div>
          <div className="flex items-center justify-center px-12">
            <div className="w-full rounded-xl overflow-hidden" style={{ maxHeight: '80vh' }}>
              <img 
                src="../src/assets/about_me_update.png" 
                alt="Nate Demchak"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects" className="min-h-screen bg-gray-800">
        <div className="flex flex-col h-full text-gray-300">
          <div className="flex flex-col gap-8 justify-center items-center mt-20">
            <div className="w-full max-w-4xl px-6 space-y-8">
              <a 
                href="https://arxiv.org/pdf/2409.11149v1" 
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-gray-900/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <LuBookOpen className="text-green-400" size={20} />
                          <span className="text-sm font-mono text-green-400">PUBLICATION • COLING 2025</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r from-green-400 to-cyan-500 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                          SAGED: A Holistic Bias-Benchmarking Pipeline for Language Models with Customisable Fairness Calibration
                        </h2>
                        <div className='flex flex-col space-y-4'>
                          <p>
                            Xin Guan, <strong>Nathaniel Demchak</strong>, Saloni Gupta, Ze Wang, Ediz Ertekin Jr., Adriano Koshiyama, Emre Kazim, Zekun Wu (2024). "SAGED: A Holistic Bias-Benchmarking Pipeline for Language Models with Customisable Fairness Calibration." Accepted to COLING 2025. 
                          </p>
                          <p>
                            This paper presents a novel bias benchmarking pipeline for bias detection in large language models.
                          </p>
                          <span className="font-mono space-x-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">View on arXiv</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a 
                href="https://github.com/nate-dem/rare-pa-backend" 
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-gray-900/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <LuBookOpen className="text-green-400" size={20} />
                          <span className="text-sm font-mono text-green-400">PROJECT • STANFORD MEDICINE/PALO ALTO VA</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r from-green-400 to-cyan-500 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                          Healthcare Wearables with AR Tools for Psychiatric Assessments
                        </h2>
                        <div className='flex flex-col space-y-4'>
                          <p>
                            This ongoing project allows psychiatrists to observe a patient's vitals in real-time using healthcare wearables and augmented reality tools.
                          </p>
                          <span className="font-mono space-x-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">View Project</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a 
                href="https://arxiv.org/pdf/2410.11059v1" 
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-gray-900/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <LuBookOpen className="text-green-400" size={20} />
                          <span className="text-sm font-mono text-green-400">PUBLICATION • EVALEVAL AT NEURIPS 2024</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r from-green-400 to-cyan-500 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                          Assessing Bias in Metric Models for LLM Open-Ended Generation Bias Benchmarks
                        </h2>
                        <div className='flex flex-col space-y-4'>
                          <p>
                            <strong>Nathaniel Demchak</strong>, Xin Guan, Zekun Wu, Ziyi Xu, Adriano Koshiyama, Emre Kazim (2024). "Assessing Bias in Metric Models for LLM Open-Ended Generation Bias Benchmarks." Accepted to EVALEVAL at NeurIPS 2024.
                          </p>
                          <p>
                            This paper assesses biases in classifier models used to evaluate bias in large language models.
                          </p>
                          <span className="font-mono space-x-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">View on arXiv</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className='min-h-screen bg-gray-800 grid grid-rows-[10fr,50fr,40fr]'>
        <div></div>
        <div className='flex flex-col justify-center items-center gap-4 space-y-6'>
          <h1 className='text-4xl bg-gradient-to-br from-green-400 to-cyan-500 text-transparent bg-clip-text'>
            Let's Work Together!
          </h1>
          <div className='border border-gray-400 rounded-md px-4 py-2 hover:border-cyan-400 transition-colors'>
            <p className='cursor-pointer text-xl text-gray-300 hover:text-cyan-400' onClick={() => {
                navigator.clipboard.writeText('natedem@stanford.edu');
                alert('Email copied to clipboard!');
              }}>
              Natedem@stanford.edu
            </p>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Portfolio;