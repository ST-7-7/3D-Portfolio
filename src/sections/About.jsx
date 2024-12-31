import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import { motion } from 'framer-motion';

import Loader from '../components/Loader.jsx';

import Zelda from '../aboutme/Zelda.jsx';
import Infj from '../aboutme/Infj.jsx';
import Finisher from '../aboutme/finisher.jsx';
import Back from '../aboutme/back.jsx';
import Front from '../aboutme/front.jsx';
import Book from '../aboutme/book.jsx';
import Nature from '../aboutme/nature.jsx';
import Indie from '../aboutme/indie.jsx';
import Rpg from '../aboutme/Rpg.jsx';





const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('willowy777@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 mt-30" id="about">

      <div>
        <p className="text-5xl font-semibold mb-8 text-white text-center ">About Me</p>
      </div>

      <div className="grid xl:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] md:grid-cols-1 sm:grid-cols-1 gap-5 h-full w-full">
       
        <div className="w-full kanit-regular">          
              <p className="mb-0  grid-headtext">Hi, I'm Sitong</p>
              <p className="grid-subtext">
                I am a dedicated lifelong learner with a passion for IT. 
                I enjoy question-driven development and love enhancing my skills through real-world project experience. 
                I often find myself filled with creative ideas and looking forward to bringing them to life. 
              </p>
          
              <p className="mt-20  grid-headtext">Hover and know me better!</p>    
        </div>

        
        <div className="w-full grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-5">
          <div className="infj flex justify-center items-center">
            <Infj />
          </div>
          <div className='front flex justify-center items-center'>
            <Front />   
          </div>
          <div className='back flex justify-center items-center'>
            <Back />
          </div>
          <div className='finisher flex justify-center items-center'>
            <Finisher />
          </div>
          <div className='gamedev flex justify-center items-center'>
            <Indie />
          </div>
          <div className='rpg flex justify-center items-center'>
            <Rpg />
          </div>
          <div className='zelda flex justify-center items-center'>
            <Zelda />
          </div>
          <div className='book flex justify-center items-center'>
            <Book />
          </div>
          <div className='nature flex justify-center items-center'>
            <Nature />
          </div>

        </div>

      </div>



      <div className="grid-container mt-10 kanit-regular">   
          <p className="grid-headtext text-center">Tech Stack</p>
          <p className="grid-subtext text-center mb-6">
          I specialise in the MERN stack and utilise various frameworks and tools to build high-performing, 
          user-centric, and interactive web applications.
          </p>
          
          <Loader />
      
      </div>

    </section>
  );
};

export default About;
