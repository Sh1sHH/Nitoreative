import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 bg-gradient-to-b from-purple-200 to-transparent rounded-full w-72 h-72 -mt-20 -mr-20 filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-blue-200 to-transparent rounded-full w-96 h-96 -mb-20 -ml-20 filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-24 md:pt-32 md:pb-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 font-medium text-sm mb-5">
              Innovative Digital Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We Create 
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-orange-500 bg-clip-text text-transparent"> Digital Experiences </span>
              That Matter
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Transform your brand with cutting-edge social media management, captivating content creation, and stunning website development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-purple-300 text-gray-700 hover:text-purple-600 px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative transform transition-all duration-700 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl transform rotate-3 scale-105 opacity-20 animate-pulse"></div>
              <img 
                src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital Agency Team" 
                className="relative rounded-xl shadow-2xl max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;