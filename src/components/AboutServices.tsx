import React, { useState } from 'react';
import { Globe, Palette, Video, QrCode, Share2 } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  detailedInfo: {
    title: string;
    description: string;
    features: string[];
  };
  icon: React.ElementType;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Web Tasarım',
    description: 'Modern ve kullanıcı dostu web siteleri.',
    detailedInfo: {
      title: 'Modern Web Tasarım Çözümleri',
      description: 'Markanızı en iyi şekilde yansıtan, kullanıcı dostu ve modern web siteleri tasarlıyoruz. Responsive tasarım, hızlı yüklenme süreleri ve SEO uyumlu yapı ile web sitenizi öne çıkarıyoruz.',
      features: [
        'Responsive Tasarım',
        'SEO Optimizasyonu',
        'Hızlı Yüklenme',
        'Modern Arayüz',
        'Kullanıcı Dostu Deneyim'
      ]
    },
    icon: Globe
  },
  {
    id: 2,
    title: 'Grafik Tasarım',
    description: 'Özgün ve etkileyici görsel tasarımlar.',
    detailedInfo: {
      title: 'Profesyonel Grafik Tasarım',
      description: 'Markanızın kimliğini yansıtan özgün ve etkileyici tasarımlar oluşturuyoruz. Logo tasarımından kurumsal kimliğe kadar tüm görsel ihtiyaçlarınız için yaratıcı çözümler sunuyoruz.',
      features: [
        'Logo Tasarımı',
        'Kurumsal Kimlik',
        'Basılı Materyal',
        'Ambalaj Tasarımı',
        'Sosyal Medya Görselleri'
      ]
    },
    icon: Palette
  },
  {
    id: 3,
    title: 'Video İçerikleri',
    description: 'Profesyonel video prodüksiyon hizmetleri.',
    detailedInfo: {
      title: 'Etkileyici Video Prodüksiyon',
      description: 'Markanızın hikayesini en etkileyici şekilde anlatan profesyonel video içerikleri üretiyoruz. Reklam filmlerinden sosyal medya içeriklerine kadar geniş bir yelpazede hizmet veriyoruz.',
      features: [
        'Reklam Filmleri',
        'Tanıtım Videoları',
        'Sosyal Medya İçerikleri',
        'Motion Graphics',
        'Post Prodüksiyon'
      ]
    },
    icon: Video
  },
  {
    id: 4,
    title: 'QR Menü',
    description: 'Dijital menü sistemleri ve çözümleri.',
    detailedInfo: {
      title: 'Dijital QR Menü Sistemleri',
      description: 'İşletmeniz için modern ve kullanıcı dostu dijital menü sistemleri geliştiriyoruz. Kolay güncelleme, çoklu dil desteği ve özelleştirilebilir tasarım ile menülerinizi dijitale taşıyoruz.',
      features: [
        'Kolay Güncelleme',
        'Çoklu Dil Desteği',
        'Özelleştirilebilir Tasarım',
        'Kategori Yönetimi',
        'Analitik Raporlama'
      ]
    },
    icon: QrCode
  },
  {
    id: 5,
    title: 'Sosyal Medya',
    description: 'Etkili sosyal medya yönetimi.',
    detailedInfo: {
      title: 'Profesyonel Sosyal Medya Yönetimi',
      description: 'Markanızın sosyal medya varlığını güçlendiriyor, etkileşimi artırıyor ve hedef kitlenizle güçlü bağlar kuruyoruz. Strateji geliştirmeden içerik üretimine kapsamlı hizmet sunuyoruz.',
      features: [
        'Strateji Geliştirme',
        'İçerik Üretimi',
        'Topluluk Yönetimi',
        'Reklam Yönetimi',
        'Performans Analizi'
      ]
    },
    icon: Share2
  }
];

const ServiceCard: React.FC<{ 
  service: Service; 
  index: number;
  isSelected: boolean;
  onClick: () => void;
}> = ({ service, index, isSelected, onClick }) => {
  const Icon = service.icon;
  
  return (
    <div 
      onClick={onClick}
      className={`group relative w-[200px] h-[200px] rounded-full border transition-all duration-500 cursor-pointer
        ${isSelected 
          ? 'border-primary bg-dark/60 scale-110 z-20' 
          : 'border-light/10 bg-dark/40 hover:bg-dark/60 hover:border-primary/30'
        }
        flex flex-col items-center justify-center text-center`}
    >
      {/* Service Number */}
      <div className="absolute top-6 right-6 font-mono text-[10px] text-primary/30">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div className="mb-4 relative">
        <div className={`absolute -inset-3 bg-primary/10 rounded-full blur-lg transition-opacity duration-500 
          ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
        <Icon className={`w-8 h-8 transition-colors duration-500 
          ${isSelected ? 'text-primary' : 'text-primary/50 group-hover:text-primary'}`} />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className={`text-base font-bold transition-colors duration-500
          ${isSelected ? 'text-primary' : 'text-light group-hover:text-primary'}`}>
          {service.title}
        </h3>
        <p className={`text-xs transition-colors duration-500 px-2
          ${isSelected ? 'text-light/70' : 'text-light/50 group-hover:text-light/70'}`}>
          {service.description}
        </p>
      </div>

      {/* Circular Border Effect */}
      <div className={`absolute inset-0 rounded-full border-2 transition-all duration-500
        ${isSelected 
          ? 'border-primary scale-105 opacity-100' 
          : 'border-primary/0 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-105'
        }`} />
    </div>
  );
};

const ServiceDetails: React.FC<{
  service: Service;
}> = ({ service }) => {
  return (
    <div className="relative mt-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-1" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-2" />
      </div>

      <div className="bg-dark/40 backdrop-blur-xl rounded-2xl border border-light/10 overflow-hidden">
        {/* Header Section */}
        <div className="relative p-8 md:p-12">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          
          <div className="relative">
            {/* Service Number */}
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4">
              Hizmet {String(service.id).padStart(2, '0')}
            </div>
            
            <h3 className="text-size-1 font-semibold text-primary mb-4 animate-in fade-in slide-in-from-left-4">
              {service.detailedInfo.title}
            </h3>
            
            <p className="text-size-3 text-light/70 max-w-3xl animate-in fade-in slide-in-from-left-4 delay-150">
              {service.detailedInfo.description}
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 md:p-12 bg-dark/40 border-t border-light/5">
          {service.detailedInfo.features.map((feature, index) => (
            <div 
              key={index}
              className="group flex items-center gap-4 p-4 rounded-xl bg-dark/20 border border-light/5 transition-all duration-300 hover:border-primary/20 hover:bg-dark/30 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${150 + index * 50}ms` }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-primary/20 blur group-hover:bg-primary/30 transition-colors duration-300" />
              </div>
              
              <span className="text-size-3 text-light/90 group-hover:text-light transition-colors duration-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="h-1 w-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0" />
      </div>
    </div>
  );
};

const AboutServices = () => {
  // Sosyal Medya hizmetini bul
  const defaultService = services.find(service => service.title === 'Sosyal Medya');
  const [selectedService, setSelectedService] = useState<Service | null>(defaultService || null);

  return (
    <div className="bg-black relative">
      <div className="container mx-auto px-8 py-20">
        <div className="flex flex-col gap-32">
          {/* Biz Kimiz Bölümü */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Sol Taraf - Başlık ve İçerik */}
            <div className="relative order-2 md:order-1">
              <div className="relative z-10">
                {/* Section Title */}
                <div className="flex items-start gap-4 mb-16">
                  <div className="flex flex-col items-center">
                    <div className="w-[2px] h-16 bg-primary/30" />
                    <div className="w-3 h-3 rounded-full bg-primary mt-2" />
                  </div>
                  <div>
                    <h2 className="text-7xl font-bold text-light mb-4">Biz Kimiz</h2>
                    <p className="text-light/50 text-lg max-w-xl">
                      Yaratıcı çözümlerle markaları geleceğe taşıyoruz
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Ana Metin */}
                  <div className="relative pl-6 border-l border-primary/30">
                    <p className="text-light/70 text-lg">
                      Nitoreative olarak, yaratıcı çözümlerimizle markaların dijital dünyada öne çıkmasını sağlıyoruz.
                    </p>
                  </div>

                  {/* Vurgu Metni */}
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-8 h-8 border-l-2 border-t-2 border-primary/30" />
                    <div className="absolute -right-4 bottom-0 w-8 h-8 border-r-2 border-b-2 border-primary/30" />
                    <p className="text-light/90 text-lg px-8 py-6">
                      Her projede yenilikçi bakış açımızı ve teknik uzmanlığımızı bir araya getirerek, 
                      benzersiz dijital deneyimler yaratıyoruz.
                    </p>
                  </div>

                  {/* İstatistikler */}
                  <div className="grid grid-cols-3 gap-px bg-light/10 my-12">
                    <div className="bg-dark/40 p-6 text-center">
                      <h3 className="text-4xl font-bold text-primary mb-2">150+</h3>
                      <p className="text-light/50 text-sm">Mutlu Müşteri</p>
                    </div>
                    <div className="bg-dark/20 p-6 text-center">
                      <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
                      <p className="text-light/50 text-sm">Proje</p>
                    </div>
                    <div className="bg-dark/40 p-6 text-center">
                      <h3 className="text-4xl font-bold text-primary mb-2">5+</h3>
                      <p className="text-light/50 text-sm">Yıl Deneyim</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="group relative px-8 py-4 bg-dark/40 border border-light/10 hover:border-primary/30 transition-all duration-500">
                    <span className="relative z-10 flex items-center gap-2 text-light group-hover:text-primary transition-colors duration-500">
                      Daha Fazla Bilgi
                      <svg 
                        className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - WHO Yazısı ve Görsel */}
            <div className="relative order-1 md:order-2 min-h-[500px]">
              {/* Background Text */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="text-[12rem] font-bold text-primary/5 leading-none select-none">
                  WHO
                </div>
              </div>

              {/* Main Image */}
              <div className="relative z-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                  <img 
                    src="/logos/logo.png" 
                    alt="Creative Team" 
                    className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                  {/* Border Elements */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/30 transition-all duration-500 group-hover:w-24 group-hover:h-24" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/30 transition-all duration-500 group-hover:w-24 group-hover:h-24" />
                </div>
              </div>

              {/* Decorative Lines */}
              <div className="absolute -top-20 right-0 w-px h-40 bg-primary/20" />
              <div className="absolute top-0 right-0 w-40 h-px bg-primary/20" />
              <div className="absolute -bottom-20 left-0 w-px h-40 bg-primary/20" />
              <div className="absolute bottom-0 left-0 w-40 h-px bg-primary/20" />
            </div>
          </div>

          {/* Hizmetlerimiz Bölümü */}
          <div className="relative">
            {/* Section Title */}
            <div className="flex items-start justify-end gap-4 mb-16">
              <div>
                <h2 className="text-7xl font-bold text-light mb-4 text-right">Hizmetlerimiz</h2>
                <p className="text-light/50 text-lg max-w-xl ml-auto text-right">
                  Dijital dünyada markanızı öne çıkaracak minimal ve etkili çözümler
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[2px] h-16 bg-primary/30" />
                <div className="w-3 h-3 rounded-full bg-primary mt-2" />
              </div>
            </div>

            {/* Services Grid */}
            <div className="flex flex-wrap justify-center gap-6 relative">
              {/* Center Circle Decoration */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/10 rounded-full -z-10" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-primary/5 rounded-full -z-10" />
              
              {services.map((service, index) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  index={index}
                  isSelected={selectedService?.id === service.id}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>

            {/* Service Details Section */}
            {selectedService && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <ServiceDetails service={selectedService} />
              </div>
            )}

            {/* Background Elements */}
            <div className="absolute -top-20 left-0 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-20 right-0 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServices; 