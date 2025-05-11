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
    <section id="hero" className="min-h-screen bg-dark flex items-center justify-center relative overflow-hidden">
      {/* Interactive Wave Background */}
      <Waves 
        className="absolute inset-0 z-0"
        strokeColor="rgba(255, 215, 0, 0.15)"
        backgroundColor="rgba(15, 23, 29, 0.74)"
        pointerSize={0.5}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Ana Container */}
          <div className="relative w-full max-w-6xl min-h-[500px] flex items-center justify-center">
            {/* Floating Keywords - Desktop */}
            <div className="absolute inset-0 hidden md:block">
              <FloatingTag text="Sosyal Medya" className="absolute top-10 left-20 animate-float-1" />
              <FloatingTag text="Grafik Tasarım" className="absolute top-20 right-20 animate-float-2" />
              <FloatingTag text="Video İçerikleri" className="absolute top-1/3 left-0 -translate-y-1/2 animate-float-2" style={{ animationDelay: '1s' }} />
              <FloatingTag text="Web Tasarım" className="absolute bottom-10 left-32 animate-float-3" />
              <FloatingTag text="QR Menü" className="absolute bottom-20 right-32 animate-float-1" style={{ animationDelay: '2s' }} />
            </div>

            {/* Floating Keywords - Mobile */}
            <div className="md:hidden absolute -bottom-20 left-0 right-0 flex flex-wrap justify-center gap-4 p-6">
              <FloatingTag 
                text="Sosyal Medya" 
                className="animate-float-1"
                style={{ animationDuration: '6s' }}
              />
              <FloatingTag 
                text="Grafik Tasarım" 
                className="animate-float-2"
                style={{ animationDuration: '8s', animationDelay: '0.5s' }}
              />
              <FloatingTag 
                text="Video İçerikleri" 
                className="animate-float-3"
                style={{ animationDuration: '7s', animationDelay: '0.2s' }}
              />
              <FloatingTag 
                text="Web Tasarım" 
                className="animate-float-2"
                style={{ animationDuration: '9s', animationDelay: '0.7s' }}
              />
              <FloatingTag 
                text="QR Menü" 
                className="animate-float-1"
                style={{ animationDuration: '7.6s', animationDelay: '0.3s' }}
              />
            </div>

            {/* Arka Plan Elementleri */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            {/* İnteraktif Noktalar */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full animate-twinkle"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>

            {/* Ana Başlık ve CTA */}
            <div className="relative z-20 text-center px-4 mb-24 md:mb-0">
              <h1 className="hero-title mb-8 animate-fadeIn text-5xl md:text-6xl lg:text-8xl font-bold text-light">
                Hayal Et
                <br />
                Biz <span className="text-primary">Gerçeğe</span><br /> Dönüştürelim.
              </h1>
              
              <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                Tasarım, strateji ve dijitali sizin için yeniden kurguluyoruz.
              </p>

              <div className="flex justify-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <a 
                  href="#work" 
                  className="group relative px-4 sm:px-6 md:px-12 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold overflow-hidden bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 rounded-md sm:rounded-lg md:rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <span className="relative z-10 flex items-center gap-1 sm:gap-1.5 md:gap-4 text-dark">
                    Projelerimizi İncele
                  </span>
                  <div className="absolute inset-0 bg-primary/20 blur-sm sm:blur-md md:blur-lg group-hover:blur-xl transition-all duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;