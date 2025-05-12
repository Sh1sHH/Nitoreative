'use client'

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Waves } from './ui/Waves';

const FloatingTag = ({ 
  text, 
  className,
  style 
}: { 
  text: string; 
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div 
    className={`bg-gradient-to-r from-[#1a1a1a]/90 to-[#1a1a1a]/70 backdrop-blur-md px-4 py-2 rounded-xl border-l-2 border-primary/30 shadow-lg shadow-primary/5 group hover:bg-[#1a1a1a]/80 transition-all duration-300 ${className}`}
    style={style}
  >
    <span className="text-primary text-sm md:text-base font-medium group-hover:text-primary/90 whitespace-nowrap">{text}</span>
  </div>
);

const Hero = () => {
  return (
    <section className="min-h-screen bg-dark flex flex-col lg:flex-row">
      {/* Sol Taraf - İçerik */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end px-6 lg:pr-20 lg:pl-4 py-20 lg:py-0 relative z-20">
        {/* Texture Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/texture.jpg" 
            alt="Background Texture" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/70"></div>
        </div>

        {/* Content */}
        <div className="max-w-2xl relative z-10">
          <div className="flex flex-wrap gap-3 mb-8 lg:mb-12 justify-center lg:justify-start">
            <span className="px-4 py-2 bg-[#395d64] text-black rounded-full text-sm font-medium hover:bg-[#FFD700]/90 transition-all duration-300 cursor-pointer">branding</span>
            <span className="px-4 py-2 bg-[#395d64] text-black rounded-full text-sm font-medium hover:bg-[#FFD700]/90 transition-all duration-300 cursor-pointer">graphic design</span>
            <span className="px-4 py-2 bg-[#395d64] text-black rounded-full text-sm font-medium hover:bg-[#FFD700]/90 transition-all duration-300 cursor-pointer">social media</span>
            <span className="px-4 py-2 bg-[#395d64] text-black rounded-full text-sm font-medium hover:bg-[#FFD700]/90 transition-all duration-300 cursor-pointer">production</span>
          </div>

          <h1 className="font-aclonica text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 lg:mb-8 text-center lg:text-left">
            "Good ideas need<br />
            <span className="text-[#395d64]">Good People."</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 mb-8 lg:mb-12 leading-relaxed text-center lg:text-left">
            Markanızı sıradanlıktan çıkarıp, hikayenize iz bırakacak bir deneyim...
            Stratejiyle estetiği buluşturur, markanızın her temas
            noktasında fark yaratırız. Dijitalden geleneksele,
            sınırları olmayan bir ajans. Hayallerinizi şekillendirmek için buradayız.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="px-8 py-4 bg-[#395d64] text-black rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-all duration-300 text-lg">
              WATCH VIDEO
            </button>
          </div>
        </div>
      </div>

      {/* Sağ Taraf - Görsel */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative order-first lg:order-last">
        <img 
          src="/images/hero2.png" 
          alt="Hero Image" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;