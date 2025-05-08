import React from 'react';

const portfolioItems = [
  {
    id: 1,
    image: '/images/nike.png',
  },
  {
    id: 2,
    image: '/images/nike.png',
  },
  {
    id: 3,
    image: '/images/nike.png',
  },
  {
    id: 4,
    image: '/images/nike.png',
  },
  {
    id: 5,
    image: '/images/nike.png',
  },
  {
    id: 6,
    image: '/images/nike.png',
  }
];

const Portfolio = () => {
  return (
    <div className="bg-black w-full">
      <div className="grid grid-cols-3 w-full">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="relative aspect-[4/3]"
          >
            <img
              src={item.image}
              alt="Portfolio item"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;