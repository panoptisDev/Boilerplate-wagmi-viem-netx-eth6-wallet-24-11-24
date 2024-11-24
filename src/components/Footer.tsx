"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ScrollRevealFooterProps {
  companyName?: string;
  year?: number;
  threshold?: number;
  className?: string;
}

const ScrollRevealFooter: React.FC<ScrollRevealFooterProps> = ({
  companyName = 'panoptisDev',
  year = new Date().getFullYear(),
  threshold = 100,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      if (documentHeight - (scrollTop + windowHeight) < threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 bg-black text-white p-4 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      } ${className}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {year} {companyName}. All rights reserved.</p>
        <nav>
          <Link href="/" className="mx-2 hover:text-gray-300">
            Home
          </Link>
          <a href="https://github.com/panoptisDev" className="mx-2 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            Developer
          </a>
          {/*<Link href="#" className="mx-2 hover:text-gray-300">Contact</Link>*/}
        </nav>
      </div>
    </footer>
  );
};

export default ScrollRevealFooter;