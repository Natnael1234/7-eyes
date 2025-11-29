'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logoImage from '@/app/Images/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`bg-purple-dark px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl bg-purple-dark/95 backdrop-blur-sm' : ''}`}>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-brand flex items-center justify-center rounded flex-shrink-0 hover-lift pulse-glow cursor-pointer overflow-hidden">
          <Image
            src={logoImage}
            alt="Seven Eyes Logo"
            width={48}
            height={48}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <h1 className="text-yellow-brand text-sm md:text-lg font-bold hover:scale-105 transition-transform cursor-pointer">
          Seven Eyes Multimedia and Communication
        </h1>
      </div>
      <div className="flex flex-wrap gap-3 md:gap-6 text-yellow-brand text-sm md:text-base justify-center">
        <a
          href="#home"
          className="relative group hover:text-yellow-300 transition-colors"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-brand group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#about"
          className="relative group hover:text-yellow-300 transition-colors"
        >
          About Us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-brand group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#services"
          className="relative group hover:text-yellow-300 transition-colors"
        >
          Services
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-brand group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#experience"
          className="relative group hover:text-yellow-300 transition-colors"
        >
          Experience
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-brand group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#contact"
          className="relative group hover:text-yellow-300 transition-colors"
        >
          Contact Us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-brand group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>
    </nav>
  )
}
