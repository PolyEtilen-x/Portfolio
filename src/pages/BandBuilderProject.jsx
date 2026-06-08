import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaGlobe,
  FaCircleCheck,
  FaBug,
  FaLightbulb
} from 'react-icons/fa6';
import { SiExpo, SiFastapi, SiNestjs, SiPrisma, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import prj1 from '../assets/prj1.png';

const BandBuilderProject = () => {
  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-12 relative">

        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition duration-300"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        {/* Hero Header */}
        <div className="space-y-4">
          <span className="inline-block px-3 py-1 bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 rounded-full text-xs font-semibold uppercase tracking-wider">
            Full-Stack & AI Speaking Platform
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            BandBuilder — IELTS Speaking AI Assessment Platform
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            A comprehensive, multi-service ecosystem designed to simulate actual IELTS Speaking exams.
            Features real-time voice streaming over WebSockets, offline speech transcription, and detailed criteria grading.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://bandbuilder.site"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition duration-300"
          >
            <FaGlobe /> Explore Live Demo
          </a>
          <a
            href="https://github.com/PolyEtilen-x/BandBuilder_FE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/60 text-zinc-300 hover:text-white font-semibold rounded-lg transition duration-300"
          >
            <FaGithub /> See Code Repository
          </a>
        </div>

        {/* Cover Image */}
        <div className="w-full bg-zinc-950/50 border border-zinc-900 rounded-2xl p-6 overflow-hidden flex items-center justify-center">
          <img
            src={prj1}
            alt="BandBuilder Cover"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Meta Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-900">
          <div>
            <span className="text-zinc-500 text-xs uppercase font-semibold block mb-1">Role</span>
            <span className="text-zinc-200 font-medium">Full Stack Architect</span>
          </div>
          <div>
            <span className="text-zinc-500 text-xs uppercase font-semibold block mb-1">Year</span>
            <span className="text-zinc-200 font-medium">2026</span>
          </div>
          <div>
            <span className="text-zinc-500 text-xs uppercase font-semibold block mb-1">Technologies</span>
            <span className="text-zinc-200 font-medium">React, Expo, NestJS, FastAPI</span>
          </div>
          <div>
            <span className="text-zinc-500 text-xs uppercase font-semibold block mb-1">Database</span>
            <span className="text-zinc-200 font-medium">PostgreSQL, Prisma</span>
          </div>
        </div>

        {/* Section: Architecture Overview */}
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Project Overview & Architecture</h2>
          <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
            BandBuilder is structured as a modular, high-performance platform dividing user experience, business logic, and speech assessment into specialized microservices.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Web Frontend */}
            <div className="glow-card rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-cyan-950/60 border border-cyan-800/40 rounded-xl flex items-center justify-center text-cyan-400 text-2xl">
                <FaReact />
              </div>
              <h3 className="text-xl font-bold text-zinc-100">Web Client (Vite + React)</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A highly interactive interface that downsamples microphone inputs to 16kHz on-the-fly, pipes audio packages over WebSocket, and displays real-time waveform visualizers and marked transcripts.
              </p>
            </div>

            {/* Card 2: Mobile App */}
            <div className="glow-card rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-sky-950/60 border border-sky-850/40 rounded-xl flex items-center justify-center text-sky-400 text-2xl">
                <SiExpo />
              </div>
              <h3 className="text-xl font-bold text-zinc-100">Mobile Client (Expo Native)</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A native cross-platform application (iOS & Android) hosting full speaking mock tests, Vocabulary flashcards, and local notebooks using Zustand and AsyncStorage persistence.
              </p>
            </div>

            {/* Card 3: Backend Services */}
            <div className="glow-card rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-emerald-950/60 border border-emerald-850/40 rounded-xl flex items-center justify-center text-emerald-400 text-2xl">
                <SiNestjs />
              </div>
              <h3 className="text-xl font-bold text-zinc-100">NestJS & VoiceAI backend</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                NestJS routes standard user metrics and history. Meanwhile, a FastAPI gateway manages live audio Socket.IO connections, faster-whisper transcriptions, and Microsoft Edge Neural voices fallback.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Technical Challenges Solved */}
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Engineering Challenges & Solutions</h2>
          <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
            During the development of the speaking assessment loop, we encountered and resolved several core hardware, performance, and communication obstacles:
          </p>

          <div className="space-y-6">

            {/* Challenge 1 */}
            <div className="bg-zinc-950/50 border border-zinc-900 rounded-xl p-5 md:p-6 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <FaBug /> <span>1. Audio Sample Rate Mismatch (Whisper silence bug)</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                <strong>Problem:</strong> Browsers record audio matching native computer hardware (44.1kHz or 48kHz). However, Python's speech translation Whisper engine only processes 16kHz audio. Sending high-sample-rate audio caused 3x audio distortion, leading to empty transcription results.
              </p>
              <div className="flex items-start gap-2 text-sm text-emerald-400/90 bg-emerald-950/20 border border-emerald-950 p-3 rounded-lg">
                <FaLightbulb className="mt-1 flex-shrink-0" />
                <span><strong>Solution:</strong> Configured client browsers to downsample recordings locally before transmission by initializing `AudioContext` with an explicit sampleRate option set to 16000.</span>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="bg-zinc-950/50 border border-zinc-900 rounded-xl p-5 md:p-6 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <FaBug /> <span>2. Turn-based Audio Feedback Loop</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                <strong>Problem:</strong> When the AI examiner speaks out of the device speaker, the open browser microphone would capture the AI's voice and stream it back, creating a parsing loop.
              </p>
              <div className="flex items-start gap-2 text-sm text-emerald-400/90 bg-emerald-950/20 border border-emerald-950 p-3 rounded-lg">
                <FaLightbulb className="mt-1 flex-shrink-0" />
                <span><strong>Solution:</strong> Integrated an `isTtsPlaying` state lock in the store, automatically disabling/muting the mic while the audio response is playing, and unmuting only on the audio's `onended` event.</span>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="bg-zinc-950/50 border border-zinc-900 rounded-xl p-5 md:p-6 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <FaBug /> <span>3. Dynamic CORS Policies for Expo Tunnel Requests</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                <strong>Problem:</strong> Requests sent from native devices or Expo Tunnel (`exp://*.exp.direct`) would trigger CORS blocks since standard policies only authorized static domain origins.
              </p>
              <div className="flex items-start gap-2 text-sm text-emerald-400/90 bg-emerald-950/20 border border-emerald-950 p-3 rounded-lg">
                <FaLightbulb className="mt-1 flex-shrink-0" />
                <span><strong>Solution:</strong> Wrote a dynamic check callback inside the NestJS CORS gateway, verifying and letting through client requests that contain `exp://` headers or lack `Origin` headers (native applications).</span>
              </div>
            </div>

          </div>
        </div>

        {/* Section: Features Showcase */}
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Core Capabilities</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <FaCircleCheck className="text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-zinc-200">Voice Activity Detection (VAD)</h4>
                <p className="text-sm text-zinc-400">Custom volume thresholds and 700ms silence detection algorithms automatic submit when done speaking.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <FaCircleCheck className="text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-zinc-200">Microsoft Edge TTS backup</h4>
                <p className="text-sm text-zinc-400">Zero-cost high-quality neural voice fallbacks mimicking Ava (US), Ryan (GB), and William (AU).</p>
              </div>
            </div>
            <div className="flex gap-3">
              <FaCircleCheck className="text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-zinc-200">Interactive Pronunciation reviews</h4>
                <p className="text-sm text-zinc-400">Colored highlighting for words scoring under 60% confidence with styled CSS tooltip guides.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <FaCircleCheck className="text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-zinc-200">Local vocabulary persistence</h4>
                <p className="text-sm text-zinc-400">Seamless local bookmark and deck study capabilities integrated through Zustand state management.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BandBuilderProject;
