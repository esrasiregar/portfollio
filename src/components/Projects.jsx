import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project Title',
      description: 'Coming Soon',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Project Title',
      description: 'Coming Soon',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Project Title',
      description: 'Coming Soon',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <section id="projects" className="py-20 text-white">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-black text-center mb-12" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.7)' }}>
          Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm transition duration-300 shadow-[0_0_15px_rgba(0,183,255,0.2)] hover:shadow-[0_0_25px_rgba(0,183,255,0.5)] hover:-translate-y-2"
            >
              <img src={project.image} alt={project.title} loading="lazy" className="w-full h-56 object-cover" />
              <div className="p-5">
                <h4 className="text-lg font-bold text-[#fcff33]" style={{ textShadow: '0 0 6px #fcff33' }}>
                  {project.title}
                </h4>
                <p className="text-gray-300 mt-2">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
