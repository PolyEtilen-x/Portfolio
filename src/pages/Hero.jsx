import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-white text-black flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-10"
    >
 
      <div className="flex-1 text-left mt-10 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          HI, I AM <br /> NGUYEN HONG TON.
        </h1>
        <p className="text-gray-500 mb-6 max-w-md">
          Passionate final-year student focused on Software Technology. 
          I have hands-on experience building projects
        </p>
        <div className="flex justify-start items-center gap-4">
          <a
            href="#contact"
            className="bg-slate-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-slate-400 transition"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="bg-white text-black border-2 border-slate-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-400 transition"
          >
            My CV
          </a>
          <a
            href="https://www.linkedin.com/in/nguy%E1%BB%85n-h%E1%BB%93ng-t%E1%BB%93n-390b55313/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-400 rounded-full p-2 hover:bg-gray-800"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/PolyEtilen-x"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-400 rounded-full p-2 hover:bg-gray-800"
          >
            <FaGithub />
          </a>
        </div>
      </div>


      <div className="flex-1">
        <img
          src={profileImg}
          alt="PolyEtilen picture"
          className="rounded-lg w-2/3 mx-auto md:mx-0"
        />
      </div>
    </section>
  );
};

export default Hero;
