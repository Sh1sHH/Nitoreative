import React from 'react';
import styles from './MarqueeLogos.module.css';

const logos = [
  { 
    id: 1, 
    name: 'Sehri Kahvaltı', 
    imageBlack: '/logos/VK-Logo_black.webp',
    imageColor: '/logos/VK-Logo.webp' 
  },
  { 
    id: 2, 
    name: 'Tarihi Köftecisi', 
    imageBlack: '/logos/gozegir_black.webp',
    imageColor: '/logos/gozegir.webp' 
  },
  { 
    id: 3, 
    name: 'Tarihi Köftecisi', 
    imageBlack: '/logos/ethem_black.webp',
    imageColor: '/logos/ethem.webp' 
  },
  { 
    id: 4, 
    name: 'Tepsiet', 
    imageBlack: '/logos/juanvaldez_black.webp',
    imageColor: '/logos/juanvaldez.webp' 
  },
  { 
    id: 5, 
    name: 'V Break', 
    imageBlack: '/logos/kizilsakal_black.webp',
    imageColor: '/logos/kizilsakal.webp' 
  },
  { 
    id: 6, 
    name: 'Eyefali', 
    imageBlack: '/logos/komsukahve_black.webp',
    imageColor: '/logos/komsukahve.webp' 
  },
  { 
    id: 7, 
    name: 'Krispy Krem', 
    imageBlack: '/logos/krispykreme_black.webp',
    imageColor: '/logos/krispykreme.webp' 
  },
];

interface MarqueeLogosProps {
  direction?: 'left' | 'right';
}

export default function MarqueeLogos({ direction = 'left' }: MarqueeLogosProps) {
  return (
    <div className={styles.container}>
      <div className={styles.marquee}>
        <ul className={`${styles.marquee__content} ${direction === 'right' ? styles.reverse : ''}`}>
          {logos.map((logo) => (
            <div key={logo.id} className={styles.marquee__item}>
              <div className="relative group">
                <img
                  src={logo.imageBlack}
                  alt={`${logo.name} - Black Version`}
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src={logo.imageColor}
                  alt={`${logo.name} - Color Version`}
                  className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </ul>

        <ul aria-hidden="true" className={`${styles.marquee__content} ${direction === 'right' ? styles.reverse : ''}`}>
          {logos.map((logo) => (
            <div key={`${logo.id}-clone`} className={styles.marquee__item}>
              <div className="relative group">
                <img
                  src={logo.imageBlack}
                  alt={`${logo.name} - Black Version`}
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src={logo.imageColor}
                  alt={`${logo.name} - Color Version`}
                  className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
} 