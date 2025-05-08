'use client'

import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-dark py-12 mt-16 relative">
      {/* Diagonal cut effect */}
      <div className="absolute -top-16 left-0 right-0 h-16 bg-dark overflow-hidden">
        <div className="w-full h-32 bg-primary -rotate-3 origin-top-left transform translate-y-16"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        {/* Logo Section - Left */}
        <div className="md:w-1/4">
          <div className="flex items-center">
            <div className="bg-dark rounded-full w-16 h-16 flex items-center justify-center mr-4">
              <span className="text-primary text-2xl font-bold">N</span>
            </div>
            <div>
              <h3 className="text-dark font-bold uppercase text-xl">Nitoreative</h3>
              <p className="text-dark/80 text-sm uppercase">CREATIVE AGENCY</p>
            </div>
          </div>
        </div>

        {/* Menu and Address Section with FOLLOW - Middle Left */}
        <div className="md:w-1/5 flex flex-col">
          <nav className="mb-6">
            <ul className="space-y-1">
              <li><a href="#" className="text-dark font-semibold uppercase">WHAT WE DO</a></li>
              <li><a href="#" className="text-dark font-semibold uppercase">WORKS</a></li>
              <li><a href="#" className="text-dark font-semibold uppercase">ABOUT</a></li>
              <li><a href="#" className="text-dark font-semibold uppercase">CONTACT</a></li>
              <li><a href="#" className="text-dark font-semibold uppercase">CAREER</a></li>
            </ul>
          </nav>

          <div className="space-y-1 mt-6">
            <p className="text-dark font-normal">
              <strong>A:</strong> İstiklal, Mithatpaşa Cd. No:13 Kat:2 Daire:2, 34762 Ümraniye/İstanbul
            </p>
            <p className="text-dark font-normal">
              <strong>P:</strong> +90 (549) 593 20 12
            </p>
            <p className="text-dark font-normal">
              <strong>P:</strong> +90 (507) 226 16 32
            </p>
            <p className="text-dark font-normal">
              <strong>E:</strong> hello@nitoreative.com
            </p>
          </div>
          
          {/* FOLLOW Section - Below Contact Info */}
          <div className="mt-8">
            <h3 className="text-dark font-bold text-xl uppercase mb-3">FOLLOW</h3>
            <div className="h-1 w-16 bg-dark mb-3"></div>
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-dark hover:text-dark/70 transition-colors bg-primary/30 w-12 h-12 rounded-full flex items-center justify-center">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-dark hover:text-dark/70 transition-colors bg-primary/30 w-12 h-12 rounded-full flex items-center justify-center">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-dark hover:text-dark/70 transition-colors bg-primary/30 w-12 h-12 rounded-full flex items-center justify-center">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Phone Mockup - Right */}
        <div className="md:w-5/12 flex items-center">
          <div className="relative h-[550px] -ml-4 md:-ml-2">
            <img 
              src="/images/phoneIg.webp" 
              alt="Telefon mockup" 
              className="w-auto h-[550px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 md:px-8 mt-8 text-center">
        <p className="text-dark/80 text-sm">2025 Nitoreative Creative Agency | Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;