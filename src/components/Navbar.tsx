import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/90 backdrop-blur-md py-2' : 'bg-transparent py-3'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/logos/logo.png" 
              alt="Nitoreative Logo" 
              className="h-12 w-auto object-contain transition-all duration-300 hover:opacity-80" 
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#work" className="nav-link text-sm">İşlerimiz</a>
            <a href="#about" className="nav-link text-sm">Hakkımızda</a>
            <a href="#services" className="nav-link text-sm">Hizmetlerimiz</a>
            <a href="#contact" className="text-sm px-4 py-2 bg-primary/90 hover:bg-primary text-dark rounded-lg transition-colors duration-300">
              Bize Ulaşın
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden w-8 h-8 flex items-center justify-center text-light hover:text-primary transition-colors duration-300"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-x-0 top-[60px] transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        } ${!isMobileMenuOpen && 'pointer-events-none'}`}>
          <div className="mx-4">
            <div className="flex flex-col divide-y divide-light/5 bg-dark/80 backdrop-blur-lg rounded-xl overflow-hidden">
              <a 
                href="#work" 
                className="px-6 py-3 text-sm text-light/80 hover:text-light hover:bg-light/5 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                İşlerimiz
              </a>
              <a 
                href="#about" 
                className="px-6 py-3 text-sm text-light/80 hover:text-light hover:bg-light/5 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hakkımızda
              </a>
              <a 
                href="#services" 
                className="px-6 py-3 text-sm text-light/80 hover:text-light hover:bg-light/5 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hizmetlerimiz
              </a>
              <div className="p-3">
                <a 
                  href="#contact" 
                  className="block py-2.5 text-sm text-center bg-primary/90 hover:bg-primary text-dark rounded-lg transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bize Ulaşın
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 