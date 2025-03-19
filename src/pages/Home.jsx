import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            {/* Home Section with Bubbles Animation */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-black relative overflow-hidden">
                {/* Bubbles Animation */}
                <div className="absolute w-full h-full">
                    {/* Bubble 1 */}
                    <div className="absolute w-8 h-8 bg-white rounded-full opacity-30 animate-ping" style={{ left: '10%', top: '80%' }}></div>
                    {/* Bubble 2 */}
                    <div className="absolute w-12 h-12 bg-white rounded-full opacity-20 animate-bounce animation-delay-2000" style={{ left: '30%', top: '70%' }}></div>
                    {/* Bubble 3 */}
                    <div className="absolute w-6 h-6 bg-white rounded-full opacity-40 animate-bubble animation-delay-4000" style={{ left: '50%', top: '90%' }}></div>
                    {/* Bubble 4 */}
                    <div className="absolute w-10 h-10 bg-white rounded-full opacity-25 animate-bubble animation-delay-3000" style={{ left: '70%', top: '85%' }}></div>
                    {/* Bubble 5 */}
                    <div className="absolute w-14 h-14 bg-white rounded-full opacity-15 animate-bubble animation-delay-5000" style={{ left: '90%', top: '75%' }}></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        {/* Photo Section */}
                        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0 drop-shadow-lg">
                            <img
                                src="../public/Mohan.png" // Replace with your photo URL
                                alt="Mohan"
                                className="rounded-full w-full md:w-60 md:h-60 object-cover scale-120"
                            />
                        </div>

                        {/* Introduction Section */}
                        <div className="w-full md:w-2/3 text-center md:text-left pr-10">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                                Hello, I'm{' '}
                                <span className="text-blue-400">Mohan Thapa Mashrangi</span>
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6">
                                I'm a passionate developer with a love for building beautiful and functional web applications.
                                I specialize in React, Tailwind CSS, and modern web technologies. Let's create something amazing together!
                            </p>
                            <a
                                href="#about"
                                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Learn More About Me
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Sections */}
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;