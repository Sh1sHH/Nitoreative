import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MarqueeLogos from './components/MarqueeLogos';
import AboutServices from './components/AboutServices';
import ProjectShowcase from './components/ProjectShowcase';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Creative Agency';
  }, []);

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <MarqueeLogos direction="left" />
        <AboutServices />
        <MarqueeLogos direction="right" />
        <ProjectShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;