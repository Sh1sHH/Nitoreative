import React from 'react';
import styles from './MarqueeLogos.module.css';

const logos = [
  { id: 1, name: 'Sehri Kahvaltı', image: '/logos/VK-Logo.webp' },
  { id: 2, name: 'Tarihi Köftecisi', image: '/logos/gozegir.webp' },
  { id: 3, name: 'Tarihi Köftecisi', image: '/logos/ethem.webp' },
  { id: 4, name: 'Tepsiet', image: '/logos/juanvaldez.webp' },
  { id: 5, name: 'V Break', image: '/logos/kizilsakal.webp' },
  { id: 6, name: 'Eyefali', image: '/logos/komsukahve.webp' },
  { id: 7, name: 'Krispy Krem', image: '/logos/krispykreme.webp' },
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
              <img
                src={logo.image}
                alt={logo.name}
              />
            </div>
          ))}
        </ul>

        <ul aria-hidden="true" className={`${styles.marquee__content} ${direction === 'right' ? styles.reverse : ''}`}>
          {logos.map((logo) => (
            <div key={`${logo.id}-clone`} className={styles.marquee__item}>
              <img
                src={logo.image}
                alt={logo.name}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
} 