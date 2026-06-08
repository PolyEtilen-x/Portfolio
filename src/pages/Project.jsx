import React from 'react';
import { Link } from 'react-router-dom';
import prj1 from '../assets/prj1.png';
import prj2 from '../assets/prj2.png';

const projects = [
  {
    title: 'BandBuilder — IELTS Speaking AI Assessment Platform',
    description:
      'A comprehensive, full-stack IELTS Speaking practice ecosystem. Consists of a responsive Web Client with 16kHz audio downsampling and VAD (Voice Activity Detection), a cross-platform Mobile App with local vocabulary decks sync, and a FastAPI & NestJS AI backend microservice integrated with faster-whisper speech-to-text and Microsoft Edge Neural TTS voice generators.',
    image: prj1,
    tags: ['Full Stack & AI', 'React & React Native', 'NestJS & FastAPI'],
    projectInfo: {
      role: 'Full Stack Developer',
      year: '2026',
      team: 'Full-Stack Team',
    },
    links: {
      live: 'https://bandbuilder.site',
      source: 'https://github.com/PolyEtilen-x/BandBuilder_FE',
      details: '/project/bandbuilder'
    },
  },
  {
    title: 'Learnity — Community Learning & Collaboration Platform',
    description:
      'A community learning application enabling students to share assignments, participate in academic discussions, and study collaboratively. Integrates OAuth2 secure sign-in, Firestore-based real-time data sync for questions and messages, Firebase Cloud Messaging (FCM) push notifications, and live voice/video calls via ZegoCloud SDK.',
    image: prj2,
    tags: ['ReactJS', 'FireStoreDB', 'Mobile Development', 'Flutter & NestJS', 'Real-time Web'],
    projectInfo: {
      role: 'Full Stack Developer',
      year: '2025',
      team: '4-member Team',
    },
    links: {
      source: 'https://github.com/PolyEtilen-x/Learnity_Reactjs',
      details: '/project/learnity'
    },
  }
];

const FeaturedProjects = () => {
  return (
    <section className="px-6 md:px-16 py-28 relative overflow-hidden" id="projects">
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-950/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-cyan-500 rounded"></div>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl pt-2">
            Here are some of the selected projects that showcase my passion for design and development.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glow-card flex flex-col md:flex-row gap-8 rounded-2xl p-6 md:p-8 hover:border-cyan-500/40"
            >
              {/* Image Container */}
              <div className="flex-shrink-0 w-full md:w-[350px] bg-zinc-950/50 rounded-xl border border-zinc-800/60 overflow-hidden flex items-center justify-center p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-lg object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-block px-3 py-1 bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                  <p className="text-zinc-400 text-base leading-relaxed">{project.description}</p>
                </div>

                {/* Project Metadata Table */}
                <div className="text-sm text-zinc-400 bg-zinc-900/30 p-4 rounded-xl border border-zinc-800/40">
                  <div className="font-semibold text-zinc-300 tracking-wide mb-3 uppercase text-xs">
                    Project Info
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 text-zinc-300">
                    <div className="text-zinc-500">Role</div>
                    <div className="text-right font-medium">{project.projectInfo.role}</div>
                    <hr className="col-span-2 border-zinc-800/60" />
                    <div className="text-zinc-500">Year</div>
                    <div className="text-right font-medium">{project.projectInfo.year}</div>
                    <hr className="col-span-2 border-zinc-800/60" />
                    <div className="text-zinc-500">Team</div>
                    <div className="text-right font-medium">{project.projectInfo.team}</div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-6 text-sm font-semibold pt-2">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition duration-300"
                    >
                      LIVE DEMO <span className="text-xs">↗</span>
                    </a>
                  )}
                  {project.links.details && project.links.details !== '#' && (
                    <Link
                      to={project.links.details}
                      className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition duration-300"
                    >
                      CASE STUDY / DETAILS <span className="text-xs">↗</span>
                    </Link>
                  )}
                  {project.links.source && (
                    <a
                      href={project.links.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition duration-300"
                    >
                      SEE ON GITHUB <span className="text-xs">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
