import React from 'react';
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import Navigation from '../components/Navigation';

const Portfolio = () => {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Nav bar to move through portfolio */}
      <Navigation />

      {/* Landing Page */}
      <section id="landingPage" className="h-screen snap-start flex flex-col items-center bg-gray-800 px-4">
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
          <div className='flex items-start justify-center px-12'>
            <div className='flex flex-col items-start justify-center space-y-10 text-gray-300'>
              <h1 className='text-3xl font-mono'>
                About Me:
              </h1>
              <p className='text-xl'>
                After graduating high school in 2021, I began my journey at CUNY Macaulay Honors College at Baruch, focusing on biology and computer science. During my time there, I was fortunate to explore diverse interests and experiences:
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
          <div className="flex items-start justify-center px-12 mt-20">
            <div className="w-128 h-144 rounded-xl overflow-hidden">
              <img 
                src="../components/about_me_img.png" 
                alt="Nate Demchak"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className='h-screen snap-start'>
        <div>
          <h1>
            hi
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;