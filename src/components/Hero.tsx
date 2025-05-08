'use client'

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Waves } from './ui/Waves';

const Hero = () => {
  return (
    <section className="min-h-screen bg-dark flex items-center relative overflow-hidden">
      {/* Interactive Wave Background */}
      <Waves 
        className="z-0"
        strokeColor="rgba(255, 215, 0, 0.15)"  // Primary color with low opacity
        backgroundColor="#111111"  // Dark background
        pointerSize={0.75}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol Kolon - Ana Başlık ve CTA */}
          <div className="max-w-2xl">
            <h1 className="hero-title mb-8 animate-fadeIn">
              Hayal Et
              <br />
              <span className="text-primary">Biz Gerçeğe Dönüştürelim.</span>
            </h1>
            
            <p className="text-body-large text-gray-300 mb-12 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Tasarım, strateji ve dijitali sizin için yeniden kurguluyoruz.
            </p>

            <div className="flex flex-wrap gap-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <a href="#work" className="btn-primary">
                Projelerimizi İncele
              </a>
              <a href="#contact" className="text-light border-2 border-light px-8 py-3 font-semibold hover:bg-light hover:text-dark transition-all duration-200">
                Bizimle İletişime Geç
              </a>
            </div>
          </div>

          {/* Sağ Kolon - Yaratıcı Görsel Elementler */}
          <div className="relative h-[600px] animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            {/* Üst Katman - Floating Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Merkez Daire */}
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute inset-0 border-2 border-primary rounded-full animate-spin-slow"></div>
                
                {/* Floating Keywords */}
                <div className="absolute -top-16 -left-20 bg-dark/80 backdrop-blur-sm px-8 py-3 rounded-full border border-primary/20 animate-float-1">
                  <span className="text-primary text-xl font-semibold">Sosyal Medya</span>
                </div>
                <div className="absolute top-0 -right-32 bg-dark/80 backdrop-blur-sm px-8 py-3 rounded-full border border-primary/20 animate-float-2">
                  <span className="text-primary text-xl font-semibold">Grafik Tasarım</span>
                </div>
                <div className="absolute -bottom-16 -left-20 bg-dark/80 backdrop-blur-sm px-8 py-3 rounded-full border border-primary/20 animate-float-3">
                  <span className="text-primary text-xl font-semibold">Web Tasarım</span>
                </div>
                <div className="absolute bottom-0 -right-20 bg-dark/80 backdrop-blur-sm px-8 py-3 rounded-full border border-primary/20 animate-float-1" style={{ animationDelay: '2s' }}>
                  <span className="text-primary text-xl font-semibold">QR Menü</span>
                </div>
                <div className="absolute top-1/3 -left-40 bg-dark/80 backdrop-blur-sm px-8 py-3 rounded-full border border-primary/20 animate-float-2" style={{ animationDelay: '1s' }}>
                  <span className="text-primary text-xl font-semibold">Video İçerikleri</span>
                </div>
              </div>
            </div>

            {/* Arka Plan Elementleri */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            {/* İnteraktif Noktalar */}
            <div className="absolute inset-0">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;