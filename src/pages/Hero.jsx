import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import profileImg from '../assets/profile.png';
import Typewriter from '../components/Typewriter';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-28 gap-12 relative overflow-hidden"
    >
      {/* Decorative background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse duration-4000"></div>

      {/* Text Content */}
      <div className="flex-1 text-left space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 backdrop-blur text-xs text-zinc-300 font-medium tracking-wide">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping"></span>
          <span>Open for new opportunities</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
          Hi, I am <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400">
            NGUYEN HONG TON
          </span>
        </h1>

        <div className="text-xl md:text-2xl font-medium text-zinc-300 min-h-[40px] flex items-center gap-2">
          <span>I'm a</span>
          <Typewriter
            words={['Software Tech Student', 'Front-End Developer', 'Tech Enthusiast']}
            typingSpeed={80}
            deletingSpeed={40}
            delayBetweenWords={1800}
          />
        </div>

        <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg">
          Passionate final-year Software Technology student. I focus on building accessible,
          highly interactive, and clean user interfaces using React and modern frontend ecosystems.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#contact"
            className="px-8 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition duration-300"
          >
            Contact Me
          </a>
          <Link
            to="/cv"
            className="px-8 py-3 bg-transparent text-zinc-300 border border-zinc-700 font-semibold rounded-full hover:bg-zinc-900/60 hover:text-white hover:border-zinc-500 transition duration-300"
          >
            My CV
          </Link>
          
          <div className="flex items-center gap-3 pl-2">
            <a
              href="https://www.linkedin.com/in/nguy%E1%BB%85n-h%E1%BB%93ng-t%E1%BB%93n-390b55313/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-950/20 transition duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://github.com/PolyEtilen-x"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-950/20 transition duration-300"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Image Graphic */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative group">
          {/* Animated decorative ring */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-30 blur group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative bg-zinc-950 p-3 rounded-2xl border border-zinc-800/80">
            <img
              src={profileImg}
              alt="PolyEtilen avatar"
              className="rounded-xl w-64 md:w-80 object-cover transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
