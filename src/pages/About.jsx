import React from 'react';
import {
  FaReact,
  FaGitAlt,
  FaTerminal,
  FaNetworkWired,
  FaAws,
  FaDocker,
  FaCloudflare
} from 'react-icons/fa6';
import {
  SiTailwindcss,
  SiPostman,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiTypescript,
  SiExpo,
  SiRedis,
  SiAngular,
  SiFlutter,
  SiDart
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-cyan-400 animate-spin-slow" /> },
  { name: 'React Native', icon: <FaReact className="text-sky-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'NestJS', icon: <SiNestjs className="text-red-500" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
  { name: 'Prisma', icon: <SiPrisma className="text-sky-300" /> },
  { name: 'Redis', icon: <SiRedis className="text-rose-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Angular', icon: <SiAngular className="text-red-600" /> },
  { name: 'Flutter', icon: <SiFlutter className="text-sky-400" /> },
  { name: 'Dart', icon: <SiDart className="text-teal-400" /> },
  { name: 'Socket.IO', icon: <FaNetworkWired className="text-indigo-400" /> }
];

const tools = [
  { name: 'Docker', icon: <FaDocker className="text-sky-500" /> },
  { name: 'AWS EC2', icon: <FaAws className="text-orange-400" /> },
  { name: 'Cloudflare', icon: <FaCloudflare className="text-orange-500" /> },
  { name: 'Expo', icon: <SiExpo className="text-white" /> },
  { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
  { name: 'VS Code', icon: <FaTerminal className="text-blue-400" /> }
];

const AboutMe = () => {
  return (
    <section className="px-6 md:px-16 py-28 relative overflow-hidden" id="about">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-950/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

        {/* Left Column: Heading */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
            About Me
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mt-4 rounded"></div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-2/3 space-y-12">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-zinc-100 leading-snug">
              I am a Software Technology student focused on crafting interactive, user-centric web applications and robust full-stack systems.
            </h3>
            <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
              Currently, I'm pursuing my final-year studies in software technologies and developing high-fidelity web and mobile experiences.
              I have hands-on experience building complex multi-service applications involving real-time voice synthesis, transcription pipelines, and cross-platform native environments.
            </p>
            <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
              When I'm not programming, you'll find me exploring new UI designs, reviewing technology blogs, or testing out the latest web protocols.
              I am constantly learning and adapting to stay at the cutting edge of full-stack and AI-driven development.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-10 pt-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional Skillset</h3>
              <p className="text-sm text-zinc-500 mb-6">
                These are the core languages, frameworks, and database tools I use to build production-grade applications:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glow-card rounded-xl p-5 flex flex-col items-center justify-center gap-3 text-center group"
                  >
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Tools I Use</h3>
              <p className="text-sm text-zinc-500 mb-6">
                Software tools and workflows that power my development environment:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="glow-card rounded-xl p-5 flex flex-col items-center justify-center gap-3 text-center group"
                  >
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition duration-300">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
