'use client'

import React from 'react';

const ProjectShowcase = () => {
  return (
    <section className="bg-dark overflow-hidden">
      {/* Modern masonry görünümlü grid - boşluksuz */}
      <div className="flex flex-wrap w-full">
        {/* Büyük kırmızı görsel - Nike benzeri */}
        <div className="w-full md:w-1/2 h-[500px] relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-red-600 flex items-center justify-center p-8">
            <img 
              src="/images/nike.png" 
              alt="Nike Logo" 
              className="w-full h-full object-contain transition-all duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>

        {/* 2x2 Grid - Sağ taraf */}
        <div className="w-full md:w-1/2 flex flex-wrap">
          {/* Sağ üst - küçük görsel */}
          <div className="w-1/2 h-[250px] relative overflow-hidden group cursor-pointer bg-black">
            <img 
              src="/images/nike.png" 
              alt="Proje görseli" 
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* Sağ üst - küçük görsel */}
          <div className="w-1/2 h-[250px] relative overflow-hidden group cursor-pointer bg-gray-800">
            <img 
              src="/images/nike.png" 
              alt="Proje görseli" 
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* Sağ alt - küçük görsel */}
          <div className="w-1/2 h-[250px] relative overflow-hidden group cursor-pointer bg-black">
            <img 
              src="/images/nike.png" 
              alt="Proje görseli" 
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>

        {/* Alt sıra - Üçlü görsel */}
        <div className="w-full flex flex-wrap">
          {/* Alt sol */}
          <div className="w-full md:w-1/3 h-[300px] relative overflow-hidden group cursor-pointer bg-primary">
            <img 
              src="/images/nike.png" 
              alt="Proje görseli" 
              className="w-full h-full object-contain transition-all duration-500 mix-blend-multiply group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* Alt orta */}
          <div className="w-full md:w-1/3 h-[300px] relative overflow-hidden group cursor-pointer bg-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/images/nike.png" 
                alt="Proje görseli" 
                className="w-2/3 h-2/3 object-contain transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>

          {/* Alt sağ */}
          <div className="w-full md:w-1/3 h-[300px] relative overflow-hidden group cursor-pointer bg-white">
            <img 
              src="/images/nike.png" 
              alt="Proje görseli" 
              className="w-full h-full object-cover transition-all duration-500 mix-blend-darken group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>

        {/* 3'lü alt sıra - Farklı yükseklikler */}
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-2/5 h-[400px] relative overflow-hidden group cursor-pointer bg-red-600">
            <img 
              src="/images/nike.png" 
              alt="Proje görseli" 
              className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          <div className="w-full md:w-3/5 h-[400px] relative overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
              <div className="col-span-2 row-span-2 bg-black p-6 flex items-center justify-center relative group cursor-pointer">
                <img 
                  src="/images/nike.png" 
                  alt="Proje görseli" 
                  className="w-2/3 h-2/3 object-contain transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="bg-black p-2 flex items-center justify-center relative group cursor-pointer">
                <img 
                  src="/images/nike.png" 
                  alt="Proje görseli" 
                  className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="bg-primary p-2 flex items-center justify-center relative group cursor-pointer">
                <img 
                  src="/images/nike.png" 
                  alt="Proje görseli" 
                  className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 