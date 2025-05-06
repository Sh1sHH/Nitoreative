import React from 'react';
import { Share2, Pen, Code, TrendingUp, Users, Eye, Database, MessageCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`w-14 h-14 mb-5 rounded-full flex items-center justify-center ${color} text-white`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Share2 size={24} />,
      title: "Social Media Management",
      description: "Strategic content planning, posting, and community engagement to grow your brand's social presence.",
      color: "bg-gradient-to-r from-purple-600 to-indigo-600"
    },
    {
      icon: <Pen size={24} />,
      title: "Content Creation",
      description: "Engaging blog posts, articles, and copywriting tailored to your brand voice and audience.",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      icon: <Code size={24} />,
      title: "Website Development",
      description: "Custom-built responsive websites with modern technology stacks for optimal performance.",
      color: "bg-gradient-to-r from-orange-500 to-pink-500"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Digital Marketing",
      description: "Data-driven campaigns across multiple channels to increase your brand visibility and conversions.",
      color: "bg-gradient-to-r from-green-500 to-teal-500"
    },
    {
      icon: <Users size={24} />,
      title: "Brand Strategy",
      description: "Comprehensive brand development to position your business effectively in the marketplace.",
      color: "bg-gradient-to-r from-yellow-500 to-amber-500"
    },
    {
      icon: <Eye size={24} />,
      title: "UI/UX Design",
      description: "User-centered design approaches that create intuitive and engaging digital experiences.",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 font-medium text-sm mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Digital Presence
          </h2>
          <p className="text-gray-600">
            We offer comprehensive digital solutions tailored to elevate your brand and engage your audience effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;