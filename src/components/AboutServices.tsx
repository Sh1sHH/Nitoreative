'use client'

import React from 'react';
import { Globe, Palette, Video, QrCode, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Add styles for vertical text
const verticalTextStyles = `
  .vertical-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    white-space: nowrap;
    letter-spacing: 0.2em;
  }
`;

// Add style tag to head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = verticalTextStyles;
  document.head.appendChild(style);
}

const services = [
  {
    id: 1,
    title: 'Web Tasarım',
    description: 'Modern ve kullanıcı dostu web siteleri.',
    icon: Globe,
    features: ['Responsive Tasarım', 'SEO Optimizasyonu', 'Hızlı Yüklenme', 'Modern Arayüz']
  },
  {
    id: 2,
    title: 'Grafik Tasarım',
    description: 'Özgün ve etkileyici görsel tasarımlar.',
    icon: Palette,
    features: ['Logo Tasarımı', 'Kurumsal Kimlik', 'Sosyal Medya Görselleri', 'Ambalaj Tasarımı']
  },
  {
    id: 3,
    title: 'Video İçerikleri',
    description: 'Profesyonel video prodüksiyon hizmetleri.',
    icon: Video,
    features: ['Reklam Filmleri', 'Tanıtım Videoları', 'Motion Graphics', 'Post Prodüksiyon']
  },
  {
    id: 4,
    title: 'QR Menü',
    description: 'Dijital menü sistemleri ve çözümleri.',
    icon: QrCode,
    features: ['Kolay Güncelleme', 'Çoklu Dil Desteği', 'Özelleştirilebilir Tasarım', 'Analitik']
  },
  {
    id: 5,
    title: 'Sosyal Medya',
    description: 'Etkili sosyal medya yönetimi.',
    icon: Share2,
    features: ['Strateji Geliştirme', 'İçerik Üretimi', 'Topluluk Yönetimi', 'Reklam Yönetimi']
  }
];

const AboutServices = () => {
  return (
    <div className="relative">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/aboutustexture_webp.webp" 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/10 to-dark/5"></div>
      </div>

      {/* About Section */}
      <section className="relative py-24 z-10" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* About Content */}
            <div className="grid grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column - Image & Title */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="col-span-12 lg:col-span-5 space-y-6"
              >
                <div className="relative aspect-[3/6] overflow-hidden rounded-2xl">
                  <img 
                    src="/images/aboutus_webp.webp" 
                    alt="About Us" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="flex flex-col items-center">
                      <h2 className="vertical-text font-aclonica text-7xl md:text-8xl font-bold text-white opacity-90 mb-4">
                        ABOUT
                      </h2>
                      <p className="vertical-text font-aclonica text-2xl md:text-4xl text-primary opacity-90">
                        US
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - Description */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-12 lg:col-span-7 flex flex-col justify-center lg:pl-12"
              >
                {/* Main Content */}
                <div className="space-y-12">
                  {/* Highlight Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="font-aclonica text-4xl md:text-5xl text-light/90 leading-relaxed mb-8">
                      eleven olarak,
                      <br />
                      <span className="text-primary">yaratıcı </span> çözümlerimizle
                      <br />
                      markaların dijital dünyada öne çıkmasını sağlıyoruz.
                    </h3>
                    <p className="text-light/70 text-lg leading-relaxed">
                      Yenilikçi bakış açımız ve uzman ekibimizle, markanızın benzersiz kimliğini dijital dünyada en iyi şekilde yansıtıyoruz.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 z-10" id="services">
        {/* Services Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/servicestexture_webp.webp" 
            alt="Services Background Texture" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/10 to-dark/5"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Services Content */}
            <div className="grid grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-12 order-2 lg:order-1"
              >
                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group p-6 rounded-2xl bg-light/5 backdrop-blur-sm hover:bg-light/10 transition-all duration-300 border border-transparent hover:border-primary/20"
                      >
                        <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        
                        <h3 className="text-xl font-semibold text-light mb-3 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-light/60 text-sm mb-4">
                          {service.description}
                        </p>

                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li 
                              key={i}
                              className="flex items-center gap-2 text-light/50 text-sm group-hover:text-light/70 transition-colors duration-300"
                            >
                              <div className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right Column - Image & Title */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-12 lg:col-span-5 space-y-6 order-1 lg:order-2"
              >
                <div className="relative aspect-[3/6] overflow-hidden rounded-2xl">
                  <img 
                    src="/images/services_webp.webp" 
                    alt="Our Services" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="flex flex-col items-center">
                      <h2 className="vertical-text font-aclonica text-7xl md:text-8xl font-bold text-white opacity-90 mb-4">
                        SERVICES
                      </h2>
                      <p className="vertical-text font-aclonica text-2xl md:text-4xl text-primary opacity-90">
                        OUR
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutServices; 