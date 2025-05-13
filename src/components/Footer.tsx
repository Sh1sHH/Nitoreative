'use client'

import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative bg-dark/90 backdrop-blur-md py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8">
          {/* Logo & Description */}
          <div className="md:col-span-3 flex items-center md:items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#332D1B] flex items-center justify-center group transition-all duration-300">
              <span className="text-[#5AECF6] font-bold text-lg">E</span>
            </div>
            <div>
              <h3 className="font-aclonica text-xl text-white">eleven</h3>
              <p className="text-gray-400 text-sm">Creative Agency</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-aclonica text-lg text-white mb-3">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-[#5AECF6] text-sm transition-colors duration-300 cursor-pointer"
                >
                  İşlerimiz
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-[#5AECF6] text-sm transition-colors duration-300 cursor-pointer"
                >
                  Hakkımızda
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-[#5AECF6] text-sm transition-colors duration-300 cursor-pointer"
                >
                  Hizmetlerimiz
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="font-aclonica text-lg text-white mb-3">İletişim</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#5AECF6] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  İstiklal, Mithatpaşa Cd. No:13 Kat:2 Daire:2, 34762 Ümraniye/İstanbul
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5AECF6]" />
                <a href="tel:+905495932012" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors duration-300">
                  +90 (549) 593 20 12
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5AECF6]" />
                <a href="mailto:hello@eleven.com" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors duration-300">
                  hello@eleven.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2">
            <h4 className="font-aclonica text-lg text-white mb-3">Sosyal Medya</h4>
            <div className="flex gap-2">
              <a 
                href="#" 
                className="w-8 h-8 rounded-lg bg-[#332D1B] flex items-center justify-center group transition-all duration-300 hover:bg-[#4C684E]/90"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-[#5AECF6]" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-lg bg-[#332D1B] flex items-center justify-center group transition-all duration-300 hover:bg-[#4C684E]/90"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#5AECF6]" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-lg bg-[#332D1B] flex items-center justify-center group transition-all duration-300 hover:bg-[#4C684E]/90"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#5AECF6]" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} eleven Creative Agency. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;