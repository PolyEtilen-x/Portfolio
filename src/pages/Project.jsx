import React from 'react';

const projects = [
  {
    title: 'Promotional landing page for our favorite show',
    description:
      'This project is a vibrant and animated landing page showcasing the branding of a fictional TV show. It was built with accessibility and responsiveness in mind.',
    image: 'https://res.cloudinary.com/dqqectes0/image/upload/v1747941904/project1_ttzclg.svg',
    tags: ['Creative Work'],
    projectInfo: {
      role: 'Web Design',
      year: '2022',
      team: 'Frontend Developer',
    },
    links: {
      live: '#',
      source: '#',
    },
  },
  {
    title: 'Blog site for World News',
    description:
      'An elegant news blog with categories, images, and responsive layout. Built using React and Tailwind CSS for a modern news experience.',
    image: 'https://res.cloudinary.com/dqqectes0/image/upload/v1747941904/project2_uttsae.svg',
    tags: ['Client Work'],
    projectInfo: {
      role: 'React Dev',
      year: '2023',
      team: 'Frontend Developer',
    },
    links: {
      live: '#',
      source: '#',
    },
  },
  {
    title: 'E-commerce product page',
    description:
      'A responsive e-commerce landing page focusing on product features and cart flow. Built with accessibility in mind.',
    image: 'https://res.cloudinary.com/dqqectes0/image/upload/v1747941904/project3_rnl4gg.svg',
    tags: ['Client Work'],
    projectInfo: {
      role: 'UI/UX Design',
      year: '2022',
      team: 'Frontend Developer',
    },
    links: {
      live: '#',
      source: '#',
    },
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-white text-black px-6 md:px-16 py-20" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">FEATURED PROJECTS</h2>
      <p className="text-gray-500 mb-10 max-w-xl">
        Here are some of the selected projects that showcase my passion for design and development.
      </p>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 border-2 border-slate-800 rounded-xl p-6"
          >
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-[300px] h-auto">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-md"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <span className="text-sm text-slate-800 font-semibold uppercase tracking-wider">
                  {project.tags.join(', ')}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-4">{project.title}</h3>
                <p className="text-gray-500 mb-6">{project.description}</p>
              </div>


              <div className="text-sm text-gray-500 mb-4">
                <div className="mb-2">PROJECT INFO:</div>
                <div className="grid grid-cols-2 gap-y-1">
                  <div>Role</div>
                  <div className="text-right">{project.projectInfo.role}</div>
                  <hr className='col-span-2 w-full my-2' />
                  <div>Year</div>
                  <div className="text-right">{project.projectInfo.year}</div>
                  <hr className='col-span-2 w-full my-2' />
                  <div>Team</div>
                  <div className="text-right">{project.projectInfo.team}</div>
                  <hr className='col-span-2 w-full my-2' />
                </div>
              </div>


              <div className="flex gap-4 text-sm text-slate-800">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  LIVE DEMO ↗
                </a>
                <a
                  href={project.links.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  SEE ON GITHUB ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
