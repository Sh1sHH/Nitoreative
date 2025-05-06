import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '',
  onClick
}) => {
  const baseClasses = "font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
      
      if (onClick) {
        onClick();
      }
    }
  };
  
  return (
    <a 
      href={href} 
      className={combinedClasses}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};