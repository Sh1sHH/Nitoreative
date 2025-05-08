'use client'

import React from 'react';
import { Globe, Palette, Video, QrCode, Share2, ArrowRight } from 'lucide-react';

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
    <div className="relative bg-dark overflow-hidden">
      {/* Background SVG for entire component */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          version="1.1" 
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%" 
          height="100%" 
          preserveAspectRatio="none" 
          viewBox="0 0 1440 1120"
        >
          <g mask="url(#SvgjsMask1009)" fill="none">
              <rect width="1440" height="1120" x="0" y="0" fill="rgba(21, 21, 21, 1)"></rect>
              <path d="M24 2L23 422" stroke-width="8" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M593 77L592 657" stroke-width="8" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M108 213L107 725" stroke-width="10" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M905 110L904 541" stroke-width="6" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M1372 119L1371 -122" stroke-width="10" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M10 22L9 -451" stroke-width="10" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M1170 149L1169 -146" stroke-width="10" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M1327 523L1326 248" stroke-width="6" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M541 117L540 -419" stroke-width="10" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M803 243L802 811" stroke-width="10" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M1415 172L1414 -401" stroke-width="8" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M209 334L208 904" stroke-width="8" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M1355 344L1354 127" stroke-width="6" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M92 346L91 98" stroke-width="6" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M1003 423L1002 914" stroke-width="6" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M377 257L376 831" stroke-width="10" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M1424 308L1423 871" stroke-width="6" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M653 294L652 72" stroke-width="8" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M617 462L616 98" stroke-width="6" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M649 301L648 143" stroke-width="8" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M1257 466L1256 1025" stroke-width="10" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M694 313L693 851" stroke-width="10" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M749 377L748 216" stroke-width="6" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M578 152L577 -395" stroke-width="8" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M598 138L597 -345" stroke-width="10" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M194 263L193 617" stroke-width="6" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M717 505L716 213" stroke-width="10" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M430 294L429 831" stroke-width="6" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M959 391L958 876" stroke-width="8" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M206 227L205 644" stroke-width="10" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M1001 347L1000 900" stroke-width="10" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M180 479L179 1020" stroke-width="8" stroke="url(#SvgjsLinearGradient1011)" stroke-linecap="round" className="Up"></path>
              <path d="M1240 53L1239 441" stroke-width="8" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M1104 492L1103 106" stroke-width="10" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M370 397L369 138" stroke-width="10" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
              <path d="M1038 297L1037 -233" stroke-width="8" stroke="url(#SvgjsLinearGradient1010)" stroke-linecap="round" className="Down"></path>
          </g>
          <defs>
              <mask id="SvgjsMask1009">
                  <rect width="1440" height="1120" fill="#ffffff"></rect>
              </mask>
              <linearGradient x1="0%" y1="0%" x2="0%" y2="100%" id="SvgjsLinearGradient1010">
                  <stop stop-color="rgba(251, 249, 0, 0)" offset="0"></stop>
                  <stop stop-color="rgba(251, 249, 0, 0.15)" offset="0.5"></stop>
                  <stop stop-color="rgba(251, 249, 0, 0.05)" offset="0.8"></stop>
                  <stop stop-color="rgba(251, 249, 0, 0)" offset="1"></stop>
              </linearGradient>
              <linearGradient x1="0%" y1="100%" x2="0%" y2="0%" id="SvgjsLinearGradient1011">
                  <stop stop-color="rgba(251, 249, 0, 0)" offset="0"></stop>
                  <stop stop-color="rgba(251, 249, 0, 0.15)" offset="0.5"></stop>
                  <stop stop-color="rgba(251, 249, 0, 0.05)" offset="0.8"></stop>
                  <stop stop-color="rgba(251, 249, 0, 0)" offset="1"></stop>
              </linearGradient>
          </defs>
        </svg>
      </div>

      {/* About Section */}
      <section className="relative py-24" id="about">
        <div className="container mx-auto px-4 relative" style={{ zIndex: 1 }}>
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <h2 className="text-5xl md:text-6xl font-semibold text-center mb-16">
              <span className="text-primary">Biz</span>
              <span className="text-light"> Kimiz?</span>
            </h2>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Image & Stats */}
              <div className="space-y-12">
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl bg-light/5 p-4">
                  <img 
                    src="/logos/logo2.png" 
                    alt="Nitoreative Team" 
                    className="w-full h-auto"
                  />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center group">
                    <p className="text-4xl font-semibold text-primary mb-2 transition-transform duration-300 group-hover:scale-110">150+</p>
                    <p className="text-light/60">Mutlu Müşteri</p>
                  </div>
                  <div className="text-center group">
                    <p className="text-4xl font-semibold text-primary mb-2 transition-transform duration-300 group-hover:scale-110">200+</p>
                    <p className="text-light/60">Proje</p>
                  </div>
                  <div className="text-center group">
                    <p className="text-4xl font-semibold text-primary mb-2 transition-transform duration-300 group-hover:scale-110">5+</p>
                    <p className="text-light/60">Yıl Deneyim</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-2xl text-light/90 leading-relaxed">
                    Nitoreative olarak, <span className="text-primary">yaratıcı çözümlerimizle</span> markaların dijital dünyada öne çıkmasını sağlıyoruz.
                  </p>
                  <p className="text-xl text-light/70 leading-relaxed">
                    Her projede yenilikçi bakış açımızı ve teknik uzmanlığımızı bir araya getirerek, benzersiz deneyimler yaratıyoruz.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-light/5 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold text-primary mb-2">Vizyonumuz</h3>
                    <p className="text-light/70">
                      Dijital dünyada markaların benzersiz hikayelerini anlatmak ve onları geleceğe taşımak.
                    </p>
                  </div>
                  <div className="bg-light/5 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold text-primary mb-2">Misyonumuz</h3>
                    <p className="text-light/70">
                      Her projede yenilikçi bakış açımızı ve teknik uzmanlığımızı bir araya getirerek, benzersiz deneyimler yaratmak.
                    </p>
                  </div>
                </div>

                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 text-light hover:text-primary transition-colors duration-300 group"
                >
                  <span>Daha Fazla Bilgi</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24" id="services">
        <div className="container mx-auto px-4 relative" style={{ zIndex: 1 }}>
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-semibold">
                <span className="text-light">Hizmet</span>
                <span className="text-primary">lerimiz</span>
              </h2>
              <p className="text-xl text-light/60 mt-6 max-w-2xl mx-auto">
                Dijital dünyada markanızı öne çıkaracak çözümler
              </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.id}
                    className="group p-8 rounded-2xl transition-all duration-300 hover:bg-light/5"
                  >
                    <Icon className="w-12 h-12 text-primary mb-6" />
                    
                    <h3 className="text-2xl font-semibold text-light mb-4">
                      {service.title}
                    </h3>
                    <p className="text-light/60 mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li 
                          key={i}
                          className="flex items-center gap-2 text-light/50"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-light hover:text-primary transition-colors duration-300 group"
              >
                <span>Detaylı Bilgi Alın</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutServices; 