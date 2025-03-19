import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 pl-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Me</h3>
                        <p className="text-gray-400">
                            I'm a passionate developer who loves building web applications with React and Tailwind CSS.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://github.com/ThapaMohan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/mohan-thapa-mashrangi-522900245/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/mashrangi.kanchha.3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Mohan Thapa Mashrangi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;