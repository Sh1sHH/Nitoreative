import React from 'react';
import { Share2, Pen, Code, TrendingUp, Users, Eye } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="group p-8 rounded-2xl transition-all duration-300 hover:bg-light/5">
      <div className="text-primary mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-light mb-4">{title}</h3>
      <p className="text-light/60 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li 
            key={index}
            className="flex items-center gap-2 text-light/50"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "Sosyal Medya Yönetimi",
      description: "Markanızın sosyal medya varlığını güçlendirmek için stratejik içerik planlaması ve topluluk yönetimi.",
      features: [
        "İçerik Stratejisi",
        "Topluluk Yönetimi",
        "Performans Analizi",
        "Reklam Yönetimi"
      ]
    },
    {
      icon: <Pen className="w-12 h-12" />,
      title: "İçerik Üretimi",
      description: "Markanızın sesini ve hedef kitlenizi yansıtan özgün içerikler oluşturuyoruz.",
      features: [
        "Blog Yazıları",
        "Sosyal Medya İçerikleri",
        "Kopya Yazarlığı",
        "SEO Uyumlu İçerik"
      ]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Geliştirme",
      description: "Modern teknolojilerle özel, responsive ve performanslı web siteleri geliştiriyoruz.",
      features: [
        "Özel Web Tasarımı",
        "E-ticaret Çözümleri",
        "Web Uygulamaları",
        "Bakım ve Destek"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Dijital Pazarlama",
      description: "Veriye dayalı kampanyalarla markanızın görünürlüğünü ve dönüşümlerini artırıyoruz.",
      features: [
        "SEO Optimizasyonu",
        "Google Ads",
        "Facebook Ads",
        "E-posta Pazarlama"
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Marka Stratejisi",
      description: "Markanızı pazarda etkili bir şekilde konumlandırmak için kapsamlı marka geliştirme.",
      features: [
        "Marka Kimliği",
        "Pazar Araştırması",
        "Konumlandırma",
        "İletişim Stratejisi"
      ]
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "UI/UX Tasarım",
      description: "Kullanıcı odaklı tasarım yaklaşımıyla sezgisel ve etkileyici dijital deneyimler.",
      features: [
        "Kullanıcı Arayüzü",
        "Kullanıcı Deneyimi",
        "Prototipleme",
        "Etkileşim Tasarımı"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-semibold">
              <span className="text-light">Hizmet</span>
              <span className="text-primary">lerimiz</span>
            </h2>
            <p className="text-xl text-light/60 mt-6 max-w-2xl mx-auto">
              Dijital dünyada markanızı öne çıkaracak çözümler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;