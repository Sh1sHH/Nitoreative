'use client'

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Categories matching your services
const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'web', name: 'Web Tasarım' },
  { id: 'graphic', name: 'Grafik Tasarım' },
  { id: 'video', name: 'Video İçerikleri' },
  { id: 'qr', name: 'QR Menü' },
  { id: 'social', name: 'Sosyal Medya' },
];

// Sample projects with categories
const projects = [
  {
    id: 1,
    title: 'Modern E-ticaret Sitesi',
    category: 'web',
    image: '/images/ornek2_webp.webp',
    description: 'Responsive ve kullanıcı dostu e-ticaret platformu',
  },
  {
    id: 2,
    title: 'Kurumsal Kimlik Tasarımı',
    category: 'graphic',
    image: '/images/ornek2_webp.webp',
    description: 'Marka kimliği ve görsel tasarım elemanları',
  },
  {
    id: 3,
    title: 'Tanıtım Videosu',
    category: 'video',
    image: '/images/ornek2_webp.webp',
    description: 'Profesyonel şirket tanıtım videosu',
  },
  {
    id: 4,
    title: 'Restoran QR Menü',
    category: 'qr',
    image: '/images/ornek2_webp.webp',
    description: 'Dijital menü sistemi tasarımı',
  },
  {
    id: 5,
    title: 'Sosyal Medya Kampanyası',
    category: 'social',
    image: '/images/ornek2_webp.webp',
    description: 'Instagram ve Facebook kampanya yönetimi',
  },
  {
    id: 6,
    title: 'E-ticaret Web Sitesi',
    category: 'web',
    image: '/images/ornek2_webp.webp',
    description: 'Online alışveriş platformu',
  },
  {
    id: 7,
    title: 'Logo Tasarımı',
    category: 'graphic',
    image: '/images/ornek2_webp.webp',
    description: 'Minimalist logo ve marka tasarımı',
  },
  {
    id: 8,
    title: 'Ürün Videosu',
    category: 'video',
    image: '/images/ornek2_webp.webp',
    description: 'Ürün tanıtım ve pazarlama videosu',
  },
  {
    id: 9,
    title: 'Kafe QR Menü',
    category: 'qr',
    image: '/images/ornek2_webp.webp',
    description: 'Digital kafe menüsü uygulaması',
  },
  {
    id: 10,
    title: 'Sosyal Medya İçerikleri',
    category: 'social',
    image: '/images/ornek2_webp.webp',
    description: 'Günlük sosyal medya içerik üretimi',
  },
  {
    id: 11,
    title: 'Portfolyo Web Sitesi',
    category: 'web',
    image: '/images/ornek2_webp.webp',
    description: 'Kişisel portfolyo web sitesi',
  },
  {
    id: 12,
    title: 'Ambalaj Tasarımı',
    category: 'graphic',
    image: '/images/ornek2_webp.webp',
    description: 'Ürün ambalaj ve etiket tasarımı',
  },
];

const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = useCallback(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="work" className="w-full py-20 relative">
      {/* Texture Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/texture_webp.webp" 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/10 to-dark/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-aclonica text-5xl md:text-6xl font-semibold mb-6">
            <span className="text-light">Proje</span>
            <span className="text-[#5AECF6]">lerimiz</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${selectedCategory === category.id
                  ? 'bg-[#5AECF6] text-dark'
                  : 'bg-light/5 text-light hover:bg-light/10'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredProjects().map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative overflow-hidden group cursor-pointer"
                style={{ aspectRatio: '3/4' }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay with Project Details */}
                <div className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-6 transition-all duration-300
                  ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}
                >
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {project.description}
                  </p>
                  <div className="absolute top-4 right-4 bg-primary/20 px-3 py-1 rounded-full">
                    <span className="text-white text-sm">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 