import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section className="px-6 md:px-16 py-28 relative overflow-hidden" id="contact">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-950/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-16">

        {/* Left Column: Context & Socials */}
        <div className="md:w-1/2 space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
              Let's Connect
            </h2>
            <div className="h-1 w-20 bg-cyan-500 rounded"></div>
          </div>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md pt-2">
            Have an exciting opportunity, a project idea, or just want to say hi? Feel free to reach out and drop a message. I'll get back to you as soon as possible!
          </p>

          <div className="pt-2">
            <span className="text-sm text-zinc-500 block mb-2 uppercase tracking-wider font-semibold">Email me at</span>
            <a 
              href="mailto:nguyenhongtonpy2004@gmail.com" 
              className="text-lg md:text-xl font-medium text-cyan-400 hover:text-cyan-300 transition duration-300 underline underline-offset-4"
            >
              nguyenhongtonpy2004@gmail.com
            </a>
          </div>

          <div className="pt-4 space-y-3">
            <span className="text-sm text-zinc-500 block uppercase tracking-wider font-semibold">Follow my profiles</span>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/nguy%E1%BB%85n-h%E1%BB%93ng-t%E1%BB%93n-390b55313/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-950/20 transition duration-300 hover:scale-105"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://github.com/PolyEtilen-x"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-950/20 transition duration-300 hover:scale-105"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-950/20 transition duration-300 hover:scale-105"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:w-1/2 bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 md:p-8 backdrop-blur shadow-xl">
          <form
            action="https://formspree.io/f/xrbqvajb"  
            method="POST"
            className="space-y-5"
          >
            <div>
              <label className="text-sm font-medium text-zinc-300 block mb-1.5">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-zinc-900/60 border border-zinc-800 text-zinc-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-300"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-zinc-300 block mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-zinc-900/60 border border-zinc-800 text-zinc-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-300"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-zinc-300 block mb-1.5">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full bg-zinc-900/60 border border-zinc-800 text-zinc-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-300"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-zinc-300 block mb-1.5">Message</label>
              <textarea
                name="message"
                rows="5"
                className="w-full bg-zinc-900/60 border border-zinc-800 text-zinc-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 text-white font-semibold py-3 rounded-lg hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition duration-300"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
