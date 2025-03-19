import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'A cool project I built using React and Tailwind CSS.',
            image: 'https://images.pexels.com/photos/10376172/pexels-photo-10376172.jpeg?auto=compress&cs=tinysrgb&w=800', // Replace with your project image
            demoLink: '#',

        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Another awesome project showcasing my skills in web development.',
            image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800', // Replace with your project image
            demoLink: '#',

        },
        {
            id: 3,
            title: 'Project 3',
            description: 'A full-stack application with a modern design and functionality.',
            image: 'https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=800', // Replace with your project image
            demoLink: '#',

        },
    ];

    return (
        <>

            {/* Projects Section*/}
            <section id="projects" className="py-16 bg-white-100 pr-10 pl-10 ">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                        My Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                            >
                                {/* Project Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover p-4 "
                                />

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>

                                    {/* Buttons */}
                                    <div className="flex space-x-4">
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                                        >
                                            View Projects
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Projects;