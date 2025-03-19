import React from 'react';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';
const About = () => {
    return (
        <div>

            {/*About Section*/}
            <section id="about" className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        {/* Image on the Left */}
                        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                            <img
                                src="../public/Mohan.png" // Replace with your photo URL
                                alt="Your Name"
                                className="rounded-lg  w-full max-w-md bg-transparent object-cover "
                            />
                        </div>

                        {/* Text on the Right */}
                        <div className="w-full pr-10 md:w-1/2 md:pl-8">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                                About Me
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-4">
                                Hi, I'm <span className="text-blue-600 font-semibold">Mohan Thapa Mashrangi</span>, a passionate developer with a love for building beautiful and functional web applications.
                            </p>
                            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6">
                                With over 1 years of experience, I've worked on a variety of projects, from small personal websites to large-scale applications.
                            </p>
                            <a
                                href="#projects"
                                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                View My Projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;