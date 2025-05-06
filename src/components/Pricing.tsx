import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: Array<{
    text: string;
    included: boolean;
  }>;
  isPopular?: boolean;
  buttonText: string;
  gradient: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$899",
    description: "Perfect for small businesses just getting started with digital marketing.",
    features: [
      { text: "Social Media Management (2 platforms)", included: true },
      { text: "Basic Content Creation (5 posts/mo)", included: true },
      { text: "Simple Website (5 pages)", included: true },
      { text: "Monthly Performance Report", included: true },
      { text: "Email Support", included: true },
      { text: "Advanced SEO Optimization", included: false },
      { text: "Custom Graphics & Video Creation", included: false },
      { text: "Dedicated Account Manager", included: false },
    ],
    buttonText: "Get Started",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    name: "Professional",
    price: "$1,799",
    description: "Ideal for growing businesses looking to expand their digital presence.",
    features: [
      { text: "Social Media Management (4 platforms)", included: true },
      { text: "Enhanced Content Creation (10 posts/mo)", included: true },
      { text: "Custom Website (up to 10 pages)", included: true },
      { text: "Bi-weekly Performance Reports", included: true },
      { text: "Priority Email & Phone Support", included: true },
      { text: "Advanced SEO Optimization", included: true },
      { text: "Custom Graphics & Video Creation", included: true },
      { text: "Dedicated Account Manager", included: false },
    ],
    isPopular: true,
    buttonText: "Get Started",
    gradient: "from-purple-600 to-blue-500"
  },
  {
    name: "Enterprise",
    price: "$3,499",
    description: "Comprehensive solution for established businesses with complex digital needs.",
    features: [
      { text: "Social Media Management (all platforms)", included: true },
      { text: "Premium Content Creation (20 posts/mo)", included: true },
      { text: "Advanced Website & App Development", included: true },
      { text: "Weekly Performance Reports", included: true },
      { text: "24/7 Priority Support", included: true },
      { text: "Advanced SEO Optimization", included: true },
      { text: "Custom Graphics & Video Creation", included: true },
      { text: "Dedicated Account Manager", included: true },
    ],
    buttonText: "Contact Us",
    gradient: "from-orange-500 to-pink-500"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 font-medium text-sm mb-3">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent Pricing for Your Digital Needs
          </h2>
          <p className="text-gray-600">
            Choose the perfect plan for your business goals. All plans include ongoing support and monthly consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden ${
                tier.isPopular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                
                <a 
                  href="#contact" 
                  className={`block text-center py-3 px-6 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg mb-8 text-white bg-gradient-to-r ${tier.gradient}`}
                >
                  {tier.buttonText}
                </a>
                
                <div className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <Check size={14} className="text-green-600" />
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3">
                          <X size={14} className="text-red-600" />
                        </span>
                      )}
                      <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We offer tailored packages to meet your specific requirements.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
          >
            Contact us for a custom quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;