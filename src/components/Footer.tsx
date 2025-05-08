'use client'

import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-dark pt-16 pb-8">
      

      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8">
          {/* Logo & Description */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">N</span>
              </div>
              <div>
                <h3 className="text-light font-bold">Nitoreative</h3>
                <p className="text-light/60 text-sm">Creative Agency</p>
              </div>
            </div>
            <p className="text-light/60 text-sm leading-relaxed">
              Dijital dünyada markanızı öne çıkaracak minimal ve etkili çözümler sunuyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-light font-medium mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="text-light/60 hover:text-primary text-sm transition-colors duration-300">
                  İşlerimiz
                </a>
              </li>
              <li>
                <a href="#about" className="text-light/60 hover:text-primary text-sm transition-colors duration-300">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#services" className="text-light/60 hover:text-primary text-sm transition-colors duration-300">
                  Hizmetlerimiz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-light font-medium mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-light/60 text-sm">
                  İstiklal, Mithatpaşa Cd. No:13 Kat:2 Daire:2, 34762 Ümraniye/İstanbul
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+905495932012" className="text-light/60 hover:text-primary text-sm transition-colors duration-300">
                  +90 (549) 593 20 12
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@nitoreative.com" className="text-light/60 hover:text-primary text-sm transition-colors duration-300">
                  hello@nitoreative.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2">
            <h4 className="text-light font-medium mb-4">Sosyal Medya</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-light/5">
          <p className="text-center text-light/40 text-sm">
            © {new Date().getFullYear()} Nitoreative Creative Agency. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;