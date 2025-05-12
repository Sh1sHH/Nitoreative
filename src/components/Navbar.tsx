'use client'

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-dark/90 backdrop-blur-md' : 'py-8'}`}>
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          {/* Logo */}
          <a href="/" className="flex items-center justify-center">
            <img 
              src="/logos/logo.webp" 
              alt="Nitoreative Logo" 
              className="h-24 w-auto object-contain transition-all duration-300 hover:opacity-80" 
            />
          </a>

          {/* Navigation Links */}
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="font-aclonica text-xl md:text-2xl text-white hover:text-[#FFD700] transition-colors duration-300 cursor-pointer text-center"
          >
            About
          </ScrollLink>

          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="font-aclonica text-xl md:text-2xl text-white hover:text-[#FFD700] transition-colors duration-300 cursor-pointer text-center"
          >
            Services
          </ScrollLink>

          <ScrollLink
            to="work"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="font-aclonica text-xl md:text-2xl text-white hover:text-[#FFD700] transition-colors duration-300 cursor-pointer text-center"
          >
            Work
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 