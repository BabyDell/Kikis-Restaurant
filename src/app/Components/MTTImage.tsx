"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageHoverEffectProps {
  src: string;
  alt: string;
  hoverText: string;
  className?: string;
}

export function MTTImage({
  src,
  alt,
  hoverText,
  className = "",
}: ImageHoverEffectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="relative w-fit">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="object-contain"
          style={{ width: "auto", height: "auto" }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="text-white text-xl font-bold text-center px-2">
            {hoverText}
          </p>
        </div>
      </div>
    </div>
  );
}
