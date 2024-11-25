'use client'

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu, Home, Users, Images, Contact, Utensils } from 'lucide-react'
import Image from "next/image"
import { useRouter } from 'next/navigation'

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up")

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? "down" : "up"
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [scrollDirection])

  return scrollDirection
}

export default function AnimatedSideNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const scrollDirection = useScrollDirection()
  const router = useRouter()

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  const toggleNav = () => setIsOpen(!isOpen)

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    router.push(href)
  }

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Images, label: "Gallery", href: "/Gallery" },
    { icon: Users, label: "Meet The Team", href: "/MeetTheTeam" },
    { icon: Utensils, label: "Menu", href: "/Menu" },
    { icon: Contact, label: "Contact", href: "/Contact" },
  ]

  const sidebarVariants = {
    closed: {
      width: isMobile ? "100%" : "5rem",
      height: isMobile ? "5rem" : "100%",
      transition: {
        duration: 0.3,
      },
    },
    open: {
      width: isMobile ? "100%" : "25rem",
      height: "100%",
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <motion.nav
      className={`fixed font-Montserrat font-light text-3xl ${
        isMobile ? "top-0 left-0 right-0" : "left-0 top-0 bottom-0"
      } bg-black text-white z-50`}
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      initial="closed"
      style={{
        transform:
          isMobile && !isOpen && scrollDirection === "down"
            ? "translateY(-100%)"
            : "translateY(0)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <nav className={`flex flex-col h-full`}>
        <div
          className={`flex items-center justify-between w-full ${
            isMobile ? "h-20 px-4" : ""
          }`}
        >
          <div className={`flex items-center ${isMobile ? "w-full" : ""}`}>
            {isMobile && (
              <div
                className={`flex-grow flex justify-center items-center ${
                  isOpen ? "opacity-0 mt-3" : "opacity-100 delay-300"
                } transition-opacity  duration-300`}
              >
                <Image
                  src="/images/KikisLogo.webp"
                  className="ml-12"
                  height={40}
                  width={40}
                  alt="Kikis Logo"
                />
              </div>
            )}
            <button
              onClick={toggleNav}
              className={`p-2 focus:outline-none ${
                isMobile ? "" : "mt-8 ml-4"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "open" : "closed"}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <X
                      className={`hover:scale-105 transition duration-500 ${
                        isMobile ? "mt-5" : ""
                      }`}
                      size={30}
                    />
                  ) : (
                    <Menu
                      className="hover:scale-105 transition duration-500"
                      size={30}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col ${
                isMobile ? "min-h-dvh h-96  items-center mt-12" : ""
              }`}
            >
              <Image
                src="/images/KikisLogo.webp"
                className="mx-auto mb-10"
                height={100}
                width={100}
                alt="Kikis Logo"
              />
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-center ${
                    isMobile ? "p-6 text-2xl" : "p-4"
                  }`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="flex items-center hover:text-customYellow transition-colors duration-200"
                  >
                    <item.icon
                      size={isMobile ? 32 : 24}
                      className={isMobile ? "mr-4" : "mr-2"}
                    />
                    <span>{item.label}</span>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.nav>
  )
}