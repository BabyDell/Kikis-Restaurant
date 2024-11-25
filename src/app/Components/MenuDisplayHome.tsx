"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MenuDisplayHome() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const menuItems = [
    {
      src: "/images/KikisDinMenu.webp",
      alt: "Kiki's Dinner Menu",
      title: "Dinner Menu",
      state: "dinner",
    },
    {
      src: "/images/KikisDrinkMenu.webp",
      alt: "Kiki's Drink Menu",
      title: "Drink Menu",
      state: "drink",
    },
    {
      src: "/images/KikisHHMenu.webp",
      alt: "Kiki's Happy Hour Menu",
      title: "Happy Hour Menu",
      state: "happyHour",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[url('/images/KikisBGTexture.jpg')] bg-repeat py-10 md:ml-20"
    >
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center font-semibold text-4xl font-serif mb-8"
      >
        Our Menus
      </motion.header>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {menuItems.map((item, index) => (
            <Link
              href={`/Menu?state=${item.state}`}
              key={index}
              className={`
              w-full
              ${
                index === 2
                  ? "sm:w-1/2 lg:w-full mx-auto sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <motion.div
                className="relative aspect-[1.3878] mx-10 sm:mx-0"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center  text-white hover:text-customYellow transition-all duration-500 text-2xl font-semibold hover:scale-105"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
