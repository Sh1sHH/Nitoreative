import React from 'react';

const logos = [
  { id: 1, name: 'Sehri Kahvaltı', image: '/logos/VK-Logo-renk.webp' },
  { id: 2, name: 'Tarihi Köftecisi', image: '/logos/gozegir.webp' },
  { id: 2, name: 'Tarihi Köftecisi', image: '/logos/ethem.webp' },
  { id: 4, name: 'Tepsiet', image: '/logos/juanvaldez.webp' },
  { id: 5, name: 'V Break', image: '/logos/kizilsakal.webp' },
  { id: 6, name: 'Eyefali', image: '/logos/komsukahve.webp' },
  { id: 7, name: 'Krispy Krem', image: '/logos/krispykreme.webp' },
];

const LogoItem: React.FC<{ logo: typeof logos[0]; itemKey: string }> = ({ logo, itemKey }) => (
  <div key={itemKey} className="relative mx-8 group w-[120px] h-[72px] flex-shrink-0">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full h-full">
        <img
          src={logo.image}
          alt={logo.name}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
);

interface MarqueeProps {
  direction?: 'left' | 'right';
  className?: string;
}

const MarqueeTrack: React.FC<MarqueeProps> = ({ direction = 'left', className }) => {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className={`bg-white overflow-hidden relative py-4 ${className || ''}`}>
      <div className={`flex whitespace-nowrap ${animationClass}`}>
        {logos.map((logo, idx) => (
          <LogoItem key={`set1-${logo.id}-${idx}`} logo={logo} itemKey={`set1-${logo.id}-${idx}`} />
        ))}
        {logos.map((logo, idx) => (
          <LogoItem key={`set2-${logo.id}-${idx}`} logo={logo} itemKey={`set2-${logo.id}-${idx}`} />
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
};

const MarqueeLogosSimple = () => {
  return (
    <div className="relative">
      <MarqueeTrack />
    </div>
  );
};

export const MarqueeLogosWithTitle = () => {
  return (
    <div className="relative">
      <MarqueeTrack direction="right" />
    </div>
  );
};

export default MarqueeLogosSimple; 