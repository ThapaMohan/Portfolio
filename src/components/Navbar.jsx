import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Navigation items with both route and section ID information
const NAVIGATION_ITEMS = [
    { path: '/', label: 'Home', sectionId: 'home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { path: '/about', label: 'About', sectionId: 'about', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { path: '/projects', label: 'Projects', sectionId: 'projects', icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' },
    { path: '/contact', label: 'Contact', sectionId: 'contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const navigate = useNavigate();
    const observers = useRef([]);
    const navbarRef = useRef(null);

    // Initialize observers and set up section detection
    useEffect(() => {
        // Set default active section based on URL hash or default to home
        const hash = location.hash.replace('#', '');
        if (hash && document.getElementById(hash)) {
            setActiveSection(hash);
            // Small delay to allow rendering before scrolling
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 80;
                    window.scrollTo({
                        top: element.offsetTop - navbarHeight,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        } else if (window.scrollY < 100) {
            // If at top of page and no hash, assume home
            setActiveSection('home');
        }

        // Disconnect existing observers
        observers.current.forEach(observer => observer.disconnect());
        observers.current = [];

        // Create an observer for each section
        NAVIGATION_ITEMS.forEach(({ sectionId }) => {
            const section = document.getElementById(sectionId);
            if (!section) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                            setActiveSection(sectionId);
                        }
                    });
                },
                {
                    threshold: [0.2],
                    rootMargin: `-${navbarRef.current ? navbarRef.current.offsetHeight : 80}px 0px -20% 0px`
                }
            );

            observer.observe(section);
            observers.current.push(observer);
        });

        return () => {
            // Clean up on unmount
            observers.current.forEach(observer => observer.disconnect());
        };
    }, [location]);

    // Handle scroll for styling
    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 20);

        // Special case for home section - if at top of page, always highlight home
        if (window.scrollY < 50) {
            setActiveSection('home');
        }
    }, []);

    useEffect(() => {
        // Set up scroll event listener with throttling
        let timeoutId;
        const throttledScroll = () => {
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    handleScroll();
                    timeoutId = null;
                }, 100);
            }
        };

        window.addEventListener('scroll', throttledScroll);
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', throttledScroll);
            clearTimeout(timeoutId);
        };
    }, [handleScroll]);

    // Close menu when clicking outside
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (e) => {
            if (isOpen && e.target.closest('nav') === null) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    const scrollToSection = (sectionId, event) => {
        event.preventDefault();
        setIsOpen(false);

        if (sectionId === 'home') {
            // Scroll to the top of the page for the home section
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Scroll to the specific section for other sections
            const element = document.getElementById(sectionId);
            if (element) {
                const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 80;
                window.scrollTo({
                    top: element.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        }

        // Update active section immediately for better feedback
        setActiveSection(sectionId);

        // Update URL hash
        navigate(`#${sectionId}`, { replace: true });
    };

    return (
        <nav
            ref={navbarRef}
            className={`fixed pl-10 pr-10  w-full top-0 z-50 transition-all duration-300 backdrop-blur-sm ${scrolled
                ? 'bg-gray-900/95 shadow-lg py-2'
                : 'bg-gray-800/90 py-3'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={(e) => {
                        e.preventDefault(); // Prevent default navigation behavior
                        scrollToSection('home', e); // Scroll to the home section
                    }}
                    className="text-white text-xl md:text-2xl font-bold flex items-center transition-all hover:text-blue-400"
                    aria-label="My Portfolio"
                >

                    My Portfolio
                </Link>

                {/* Hamburger Menu for Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white md:hidden focus:outline-none p-2 rounded-lg hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-blue-500"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>

                {/* Desktop Navigation Links */}
                <div className="hidden md:block">
                    <ul className="flex space-x-1">
                        {NAVIGATION_ITEMS.map(({ path, label, sectionId, icon }) => (
                            <li key={sectionId} className="my-2 md:my-0">
                                <Link
                                    to={`${path}${sectionId}`}
                                    onClick={(e) => scrollToSection(sectionId, e)}
                                    className={`group flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${activeSection === sectionId
                                        ? 'bg-blue-600 text-white font-medium'
                                        : 'text-gray-200 hover:bg-gray-700'
                                        }`}
                                    aria-current={activeSection === sectionId ? 'page' : undefined}
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
                                    </svg>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen
                    ? 'max-h-96 opacity-100 border-t border-gray-700'
                    : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="flex flex-col p-4">
                    {NAVIGATION_ITEMS.map(({ path, label, sectionId, icon }) => (
                        <li key={sectionId} className="my-2 md:my-0">
                            <Link
                                to={`${path}${sectionId}`}
                                onClick={(e) => scrollToSection(sectionId, e)}
                                className={`group flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${activeSection === sectionId
                                    ? 'bg-blue-600 text-white font-medium'
                                    : 'text-gray-200 hover:bg-gray-700'
                                    }`}
                                aria-current={activeSection === sectionId ? 'page' : undefined}
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
                                </svg>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;