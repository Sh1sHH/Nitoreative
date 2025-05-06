import React from 'react';
import { 
  Award, Clock, UserCheck, Zap, BarChart3, Heart 
} from 'lucide-react';

interface ReasonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Reason: React.FC<ReasonProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4 text-purple-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Award size={32} />,
      title: "Award-Winning Expertise",
      description: "Our team has received industry recognition for creative excellence and results-driven strategies.",
    },
    {
      icon: <Clock size={32} />,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and ensure all projects are completed on schedule.",
    },
    {
      icon: <UserCheck size={32} />,
      title: "Dedicated Support",
      description: "Our clients enjoy ongoing support with quick response times and personalized attention.",
    },
    {
      icon: <Zap size={32} />,
      title: "Innovative Approach",
      description: "We stay ahead of digital trends to provide cutting-edge solutions for your business.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Data-Driven Results",
      description: "Our strategies are backed by analytics and research to maximize ROI and performance.",
    },
    {
      icon: <Heart size={32} />,
      title: "Client Satisfaction",
      description: "We prioritize your success and satisfaction, with 95% of clients continuing beyond their initial project.",
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-500/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 font-medium text-sm mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-gray-600">
            We're committed to delivering exceptional digital solutions that drive real results for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Reason key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;