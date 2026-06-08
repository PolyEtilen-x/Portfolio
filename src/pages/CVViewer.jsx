import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaDownload } from 'react-icons/fa6';

const CVViewer = () => {
  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 py-24 px-6 md:px-16 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-4xl space-y-6 relative z-10 flex flex-col h-[85vh]">

        {/* Navigation / Header */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition duration-300"
          >
            <FaArrowLeft /> Back to Home
          </Link>

          <a
            href="/cv.pdf"
            download="Nguyen_Hong_Ton_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm rounded-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition duration-300"
          >
            <FaDownload /> Download CV
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-zinc-950/40 border border-zinc-900 rounded-2xl overflow-hidden shadow-2xl relative">
          <iframe
            src="/cv.pdf#view=FitH"
            title="Nguyen Hong Ton CV"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default CVViewer;
