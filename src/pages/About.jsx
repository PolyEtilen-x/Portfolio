import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-white text-black px-6 md:px-16 py-20" id="about">
      <div className="flex flex-col md:flex-row gap-10 items-start md:items-start">
        
        {/* Left Title */}
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl font-bold uppercase tracking-wide">About Me</h2>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 space-y-6">
          <h3 className="text-lg md:text-xl font-semibold">
            I am a front-end developer based in Sydney. <br />
            Has Mechanical Engineering background.
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background.
            Likes to focus on accessibility when developing. Passionate and curious about solving problems.
            Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I’m not programming, I enjoy playing football, photography and playing Valorant.
            Learning more to improve skill.
          </p>

          <section className="mb-12">
          <h3 className="text-lg font-bold mb-4">My Capabilities</h3>
          <p className="text-sm text-gray-500 mb-4">
            I am always looking to add more skills. More updates means new talents! Lorem ipsum dolor sit amet.
          </p>
          <div className="flex flex-wrap gap-2">
            {['HTML', 'CSS', 'JAVASCRIPT', 'JQUERY', 'ACCESSIBILITY', 'FIGMA', 'TAILWIND CSS'].map((skill) => (
              <span key={skill} className="bg-slate-800 text-white font-bold px-3 py-1 rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
