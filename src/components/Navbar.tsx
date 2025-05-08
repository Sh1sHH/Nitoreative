import { useState, useEffect } from 'react';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/logos/logo.png" 
              alt="Nitoreative Logo" 
              className="h-20 w-auto object-contain transition-all duration-300 hover:opacity-80 transform hover:scale-105" 
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="nav-link">İşlerimiz</a>
            <a href="#about" className="nav-link">Hakkımızda</a>
            <a href="#services" className="nav-link">Hizmetlerimiz</a>
            <a href="#contact" className="btn-primary">Bize Ulaşın</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-light hover:text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 