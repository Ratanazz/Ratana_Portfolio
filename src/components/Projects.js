import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import schoolsystemimg from '../assets/img/schoolsystem.png';
import movierating from '../assets/img/movierating.jpg';
import pcstore from '../assets/img/pcstore.jpg';
import petadoption from '../assets/img/petadopt.png';
import moviebooking from '../assets/img/moviebooking2.jpg';
const Projects = () => {
  const projects = [
    {
      title: 'PC Store',
      description: 'A responsive static website for a PC hardware store built with React and Bootstrap. Showcases products, pricing, and store information with a clean, user-friendly layout.',
      image: pcstore,
      tech: ['React', 'Bootstrap'],
      github: 'https://github.com/Ratanazz/CatHouse',
      live: '',
    },
    {
      title: 'Pet Adoption Platform',
      description: 'A full-stack application built with React, Laravel, and MySQL. It features user role authentication, an admin dashboard, and a seamless experience for adopting cats.',
      image: petadoption,
      tech: ['React', 'Laravel', 'MySQL'],
      github: 'https://github.com/Ratanazz/CatHouse',
      live: '',
    },
    {
      title: 'Movie Booking',
      description: 'A full-stack movie booking system developed with React, Laravel, and MySQL. Features include user authentication, real-time seat selection, and an admin dashboard for managing movies and bookings.',
      image: moviebooking,
      tech: ['React', 'Laravel', 'MySQL'],
      github: 'https://github.com',
      live: '',
    },
    {
      title: 'Movie Rating ',
      description: 'A full-stack Built with React, Laravel, and MySQL, this platform allows users to view movie ratings and post comments, providing an interactive community experience.',
      image: movierating,
      tech: ['React', 'Laravel', 'MySQL'],
      github: 'https://github.com/Ratanazz/WCT_S2_MovieRating/tree/master',
      live: 'https://movie-ratingkh.netlify.app/',
    },
    {
      title: 'School System and ClassScheduling',
      description: 'A full-stack school management system built with React, Laravel, and MySQL. Features include student and teacher management, attendance tracking, and role-based authentication.',
      image: schoolsystemimg,
      tech: ['React', 'Laravel', 'MySQL', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://youtu.be/WMMTPSbPN3U?si=PQq4ACOr7yqixlQM',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Projects</span></h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="p-2 bg-white rounded-full hover:bg-slate-100 transition-colors duration-300"
                    >
                      <Github size={20} className="text-slate-600" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="p-2 bg-white rounded-full hover:bg-slate-100 transition-colors duration-300"
                    >
                      <ExternalLink size={20} className="text-slate-600" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;