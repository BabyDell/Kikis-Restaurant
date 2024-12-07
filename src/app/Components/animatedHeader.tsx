'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface HeaderSectionProps {
  imageSrc: string;
  altText: string;
  headerText: string;
}

const AnimatedHeader: React.FC<HeaderSectionProps> = ({ imageSrc, altText, headerText }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setIsExpanded(true);
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => {
      clearTimeout(textTimer);
    };
  }, [headerText]);

  return (
      <header
        className={`relative overflow-hidden transition-all duration-1000 ease-in-out ${
          isExpanded ? "h-64" : "h-10"
        }`}
        aria-label="Menu header"
      >
        <Image
          src={imageSrc}
          alt={altText}
          width={1024}
          height={256}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center mt-8 md:mt-0">
          <h1
            className={`text-4xl font-bold text-white transition-opacity duration-500 ${
              showText ? "opacity-100" : "opacity-0"
            }`}
          >
            {headerText}
          </h1>
        </div>
      </header>
  );
};

export default AnimatedHeader;