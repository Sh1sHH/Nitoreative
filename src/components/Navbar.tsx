import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'work', 'about', 'services', 'contact'];
    const observerOptions = {
      rootMargin: '-20% 0px -20% 0px', // Daha geniş bir aralık için değeri düşürdük
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] // Daha hassas takip için threshold değerleri
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // En çok görünür olan section'ı bul
      const visibleSections = entries.filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      } else if (window.scrollY === 0) {
        // Sayfa en üstteyse hero aktif olsun
        setActiveSection('hero');
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop - 100,
          behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const getLinkClasses = (section: string) => {
    if (section === 'hero') return ''; // Hero section için link olmadığından class döndürme
    const baseClasses = "nav-link text-sm transition-colors duration-300";
    return `${baseClasses} ${activeSection === section ? 'text-primary font-medium' : 'text-light/80 hover:text-light'}`;
  };

  const getMobileLinkClasses = (section: string) => {
    if (section === 'hero') return ''; // Hero section için link olmadığından class döndürme
    const baseClasses = "px-6 py-3 text-sm transition-colors duration-300";
    return `${baseClasses} ${activeSection === section ? 'text-primary bg-light/5 font-medium' : 'text-light/80 hover:text-light hover:bg-light/5'}`;
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
            <a href="#about" onClick={handleNavClick} className={getLinkClasses('about')}>Hakkımızda</a>
            <a href="#services" onClick={handleNavClick} className={getLinkClasses('services')}>Hizmetlerimiz</a>
            <a href="#work" onClick={handleNavClick} className={getLinkClasses('work')}>İşlerimiz</a>
            <a 
              href="#contact" 
              onClick={handleNavClick}
              className={`px-4 py-2 bg-primary/90 hover:bg-primary text-dark rounded-lg transition-colors duration-300 ${activeSection === 'contact' ? 'bg-primary' : ''}`}
            >
              Bize Ulaşın
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-light hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
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
                onClick={handleNavClick}
                className={getMobileLinkClasses('work')}
              >
                İşlerimiz
              </a>
              <a 
                href="#about" 
                onClick={handleNavClick}
                className={getMobileLinkClasses('about')}
              >
                Hakkımızda
              </a>
              <a 
                href="#services" 
                onClick={handleNavClick}
                className={getMobileLinkClasses('services')}
              >
                Hizmetlerimiz
              </a>
              <div className="p-3">
                <a 
                  href="#contact" 
                  onClick={handleNavClick}
                  className={`block py-2.5 text-sm text-center rounded-lg transition-colors duration-300 ${
                    activeSection === 'contact' 
                    ? 'bg-primary text-dark' 
                    : 'bg-primary/90 hover:bg-primary text-dark'
                  }`}
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