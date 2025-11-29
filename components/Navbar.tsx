'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logoImage from '@/app/Images/logo.png'


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`bg-purple-dark px-4 md:px-6 py-4 fixed w-full top-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'shadow-2xl bg-purple-dark/95 backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
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
              Seven Eyes Multimedia
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-brand focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-wrap gap-6 text-yellow-brand text-base justify-center">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact Us</NavLink>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out flex flex-col items-center gap-4 mt-4`}>
          <NavLink href="#home" mobile onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink href="#about" mobile onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink href="#services" mobile onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink href="#experience" mobile onClick={() => setIsOpen(false)}>Experience</NavLink>
          <NavLink href="#contact" mobile onClick={() => setIsOpen(false)}>Contact Us</NavLink>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children, mobile, onClick }: { href: string, children: React.ReactNode, mobile?: boolean, onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative group hover:text-yellow-300 transition-colors ${mobile ? 'w-full text-center py-2 text-yellow-brand border-b border-white/10' : ''}`}
    >
      {children}
      {!mobile && <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-brand group-hover:w-full transition-all duration-300"></span>}
    </a>
  )
}
