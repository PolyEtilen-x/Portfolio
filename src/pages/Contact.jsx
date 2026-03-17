import React from 'react';
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section className="bg-white text-black px-6 md:px-16 py-20" id="contact">
      <div className="flex flex-col md:flex-row justify-between gap-12">

        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold uppercase">Let’s Connect</h2>

          <div>
            <p className="text-sm text-gray-600">
              Say hello at <a href="mailto: nguyenhongtonpy2004@gmail.com" className="underline">nguyenhongtonpy2004@gmail.com</a>
            </p>
          </div>

          
          <div className="flex space-x-4 text-lime-400 text-xl mt-4">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

       
        <div className="md:w-1/2">
          <form
            action="https://formspree.io/f/xrbqvajb"  
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="text-sm block mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-gray-200 text-black px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="text-sm block mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-gray-200 text-black px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="text-sm block mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full bg-gray-200 text-black px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="text-sm block mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                className="w-full bg-gray-200 text-black px-4 py-2 rounded"
              />
            </div>

            <button
              type="submit"
              className="bg-slate-800 text-white font-semibold px-6 py-2 rounded text-sm hover:bg-slate-400 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
