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
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
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

      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5 h-full w-full">
       
        <div className="col-span-1 xl:row-span-3  w-full">
          <div className="kanit-regular w-full">
            

            <div className='w-full'>
              <p className="mb-0  grid-headtext">Hi, I'm Sitong</p>
              <p className="grid-subtext">
                I am a dedicated lifelong learner with a passion for IT. 
                I enjoy question-driven development and love enhancing my skills through real-world project experience. 
                I often find myself filled with creative ideas and looking forward to bringing them to life. </p>
            </div>

            <div>
              <p className="mt-20  grid-headtext">Hover and know me better!</p>
              
            </div>

          </div>
        </div>

        
        <div className="col-span-2 xl:grid xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5">
          <div className='flex justify-center items-center'>
            <div className="infj flex justify-center items-center w-full h-full">
              <Infj />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className="front flex justify-center items-center w-full h-full">
              <Front />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className="back flex justify-center items-center w-full h-full">
              <Back />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className="finisher flex justify-center items-center w-full h-full">
              <Finisher />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className="gamedev flex justify-center items-center w-full h-full">
              <Indie />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className="rpg flex justify-center items-center w-full h-full">
              <Rpg />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className="zelda flex justify-center items-center w-full h-full">
              <Zelda />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className="book flex justify-center items-center w-full h-full">
              <Book />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className="nature flex justify-center items-center w-full h-full">
              <Nature />
            </div>
          </div>
          


        </div>

        <div className="col-span-3 xl:row-span-1 mt-10">
          <div className="grid-container kanit-regular">
            <div>
              <p className="grid-headtext text-center">Tech Stack</p>
              <p className="grid-subtext text-center mb-6">
              I specialise in the MERN stack, applying a variety of frameworks 
              and tools to build dynamic and high-performing web applications
              </p>
            </div>

            <Loader />
          </div>
        </div>

        
        
      </div>
    </section>
  );
};

export default About;
