import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaReact, 
  FaGithub, 
  FaCircleCheck,
  FaBug,
  FaLightbulb
} from 'react-icons/fa6';
import { SiFirebase, SiTailwindcss, SiVite } from 'react-icons/si';
import prj2 from '../assets/prj2.png';

const LearnityProject = () => {
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
            ReactJS \& Firebase Community Web App
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Learnity — Community Learning \& Collaboration Platform
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            A social academic network helping students connect, publish assignments, hold live chat rooms, and exchange questions using real-time database synchronizations.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://github.com/PolyEtilen-x/Learnity_Reactjs"
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
            src={prj2} 
            alt="Learnity Cover" 
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Meta Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-900">
          <div>
            <span className="text-zinc-500 text-xs uppercase font-semibold block mb-1">Role</span>
            <span className="text-zinc-200 font-medium">Frontend \& Firebase Dev</span>
          </div>
          <div>
            <span className="text-zinc-500 text-xs uppercase font-semibold block mb-1">Year</span>
            <span className="text-zinc-200 font-medium">2025</span>
          </div>
          <div>
            <span className="text-zinc-500 text-xs uppercase font-semibold block mb-1">Stack</span>
            <span className="text-zinc-200 font-medium">ReactJS, Tailwind CSS</span>
          </div>
          <div>
            <span className="text-zinc-500 text-xs uppercase font-semibold block mb-1">Database</span>
            <span className="text-zinc-200 font-medium">Firestore DB (Firebase)</span>
          </div>
        </div>

        {/* Section: Architecture Overview */}
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Application Overview & Structure</h2>
          <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
            Learnity is designed to offer zero-latency academic collaboration, utilizing a robust serverless architecture powered by Firebase to support real-time user engagement.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: React UI */}
            <div className="glow-card rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-cyan-950/60 border border-cyan-800/40 rounded-xl flex items-center justify-center text-cyan-400 text-2xl">
                <FaReact />
              </div>
              <h3 className="text-xl font-bold text-zinc-100">ReactJS Frontend</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A modern single-page UI built with Vite, utilizing Zustand for local state management and styled with utility-first Tailwind CSS.
              </p>
            </div>

            {/* Card 2: Firestore DB */}
            <div className="glow-card rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-amber-950/60 border border-amber-850/40 rounded-xl flex items-center justify-center text-amber-500 text-2xl">
                <SiFirebase />
              </div>
              <h3 className="text-xl font-bold text-zinc-100">Cloud Firestore</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                NoSQL document database managing posts, threads, user bookmarks, and messages synced in real-time across active connections.
              </p>
            </div>

            {/* Card 3: Firebase Auth */}
            <div className="glow-card rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-850/40 rounded-xl flex items-center justify-center text-orange-500 text-2xl">
                <SiFirebase />
              </div>
              <h3 className="text-xl font-bold text-zinc-100">Firebase Auth & Security</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Handles secure user signup, Google OAuth logins, and strict Firestore Security Rules to protect private messages and study documents.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Technical Challenges Solved */}
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Engineering Challenges & Solutions</h2>
          <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
            Below are the primary development challenges tackled while establishing the real-time social feed and chat client:
          </p>

          <div className="space-y-6">
            
            {/* Challenge 1 */}
            <div className="bg-zinc-950/50 border border-zinc-900 rounded-xl p-5 md:p-6 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <FaBug /> <span>1. Preventing Memory Leaks on Real-time Listeners</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                <strong>Problem:</strong> Subscribing to Firestore collection queries (like feed posts or private messages) without proper cleanup functions caused multiple listener instances to pile up as users navigated pages, draining RAM and spiking database read counts.
              </p>
              <div className="flex items-start gap-2 text-sm text-emerald-400/90 bg-emerald-950/20 border border-emerald-950 p-3 rounded-lg">
                <FaLightbulb className="mt-1 flex-shrink-0" />
                <span><strong>Solution:</strong> Wrapped subscriptions inside React's `useEffect` hook, capturing and returning the `onSnapshot` unsubscribe callback function to shut down listeners instantly upon component unmounting.</span>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="bg-zinc-950/50 border border-zinc-900 rounded-xl p-5 md:p-6 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <FaBug /> <span>2. Rendering Lag in Dynamic Comment Trees</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                <strong>Problem:</strong> In deep post threads, reloading the full comment list every time a new reply arrived caused noticeable visual lag and typing stutter inside input areas.
              </p>
              <div className="flex items-start gap-2 text-sm text-emerald-400/90 bg-emerald-950/20 border border-emerald-950 p-3 rounded-lg">
                <FaLightbulb className="mt-1 flex-shrink-0" />
                <span><strong>Solution:</strong> Structured comments as a flat map in state stores, memoized individual comment elements with `React.memo`, and isolated the comment input text field from parent re-renders.</span>
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
                <h4 className="font-bold text-zinc-200">Real-time Forum Feeds</h4>
                <p className="text-sm text-zinc-400">Post creation, editing, and subject filtering updating instantly across all connected screens.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <FaCircleCheck className="text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-zinc-200">Live Chat Messaging</h4>
                <p className="text-sm text-zinc-400">Low-latency private messaging with typing indicator status powered by Firestore observers.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <FaCircleCheck className="text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-zinc-200">OAuth User Sign-In</h4>
                <p className="text-sm text-zinc-400">Instant registration and identity verification using Google OAuth credentials.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <FaCircleCheck className="text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-zinc-200">Global State Stores</h4>
                <p className="text-sm text-zinc-400">Synchronized client credentials, offline drafts, and theme preferences managed via Zustand stores.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LearnityProject;
