'use client'

import React from 'react';

const ProjectShowcase = () => {
  // 12 adet görsel için array
  const images = Array(12).fill({
    src: '/images/ornek1.jpg',
    alt: 'Proje görseli'
  });

  return (
    <section className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 [&>*]:border-0 gap-0">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden group w-full cursor-pointer"
            style={{ aspectRatio: '3/4' }}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase; 