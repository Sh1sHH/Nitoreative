import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Eco-Friendly App Design",
    category: "UI/UX Design",
    image: "https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A mobile app for eco-conscious consumers to track their carbon footprint and make sustainable choices."
  },
  {
    id: 2,
    title: "Fashion Brand Identity",
    category: "Brand Strategy",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Complete brand identity for a premium sustainable fashion label, including logo, packaging, and guidelines."
  },
  {
    id: 3,
    title: "Tech Startup Website",
    category: "Web Development",
    image: "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Modern, responsive website for a tech startup featuring interactive elements and conversion-focused design."
  },
  {
    id: 4,
    title: "Restaurant Social Campaign",
    category: "Social Media",
    image: "https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Engaging social media campaign that increased restaurant bookings by 45% and follower growth by 78%."
  },
  {
    id: 5,
    title: "Fitness Blog Content",
    category: "Content Creation",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Series of data-driven fitness articles that increased website traffic by 65% and email sign-ups by 32%."
  },
  {
    id: 6,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Custom-built e-commerce solution with integrated payment processing and inventory management."
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 font-medium text-sm mb-3">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Some of Our Best Work
          </h2>
          <p className="text-gray-600">
            Browse through our selected projects that showcase our expertise and creative approach.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`py-2 px-5 m-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/25 text-white text-xs mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-white/80 text-sm mt-2">{item.description}</p>
                  <button className="mt-4 inline-flex items-center text-white hover:underline">
                    View Project <ExternalLink size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;