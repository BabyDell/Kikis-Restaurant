"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAnimations } from "../hooks/useAnimations";

export default function Home() {
  const {
    isLoaded,
    welcomeRef,
    dish1Ref,
    dish2Ref,
    welcomeControls,
    dish1Controls,
    dish2Controls,
  } = useAnimations();

  return (
    <div className="overflow-hidden">
      <section className="relative w-full h-screen md:ml-10">
        <Image
          src="/images/KikisHomePage.webp"
          alt="Kiki's Restaurant Hero Image"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="flex flex-col items-center justify-center relative h-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/KikisLogo.webp"
              alt="Kiki's Logo"
              width={200}
              height={200}
              className="w-36 md:w-40 lg:w-52"
            />
          </motion.div>
          <Link href="#reservation">
            <motion.div
              className="text-sm lg:text-base bg-customYellow text-white font-bold py-3 px-8 rounded-sm mt-10 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Make Your Reservation Today
            </motion.div>
          </Link>
        </div>
      </section>

      <section className="relative w-full bg-[url('/images/KikisBGTexture.jpg')] bg-repeat md:ml-10 ">
        <div className="relative top-0 left-0 w-full h-16 md:h-24 bg-white blur-3xl z-10 " />
        <div className="container mx-auto px-4">
          <motion.article
            ref={welcomeRef}
            className="text-center text-2xl md:text-3xl lg:text-4xl mx-auto max-w-3xl mt-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={welcomeControls}
            transition={{ duration: 0.8 }}
          >
            Welcome to Kiki&apos;s where we pair eccentric design and sincere
            hospitality with delicious Italian flavors and craft cocktails. Come
            see what everyone is talking about.
          </motion.article>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 mx-10 py-16">
            <motion.div
              ref={dish1Ref}
              className="w-full max-w-[450px]"
              initial={{ opacity: 0, x: -20 }}
              animate={dish1Controls}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/KikisDish1.webp"
                className="w-full h-auto rounded-lg shadow-lg"
                height={450}
                width={450}
                alt="Kiki's Signature Dish 1"
              />
            </motion.div>
            <motion.div
              ref={dish2Ref}
              className="w-full max-w-[450px]"
              initial={{ opacity: 0, x: 20 }}
              animate={dish2Controls}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/KikisDish2.webp"
                className="w-full h-auto rounded-lg shadow-lg"
                height={450}
                width={450}
                alt="Kiki's Signature Dish 2"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
