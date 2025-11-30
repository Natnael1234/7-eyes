'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logoImage from '@/app/Images/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className={`container mx-auto px-3 md:px-6 transition-all duration-500 ${scrolled ? 'max-w-7xl' : 'max-w-full'}`}>
        <div className={`
          relative flex flex-col md:flex-row items-center justify-between 
          px-3 md:px-6 py-3 rounded-2xl transition-all duration-500
          ${scrolled
            ? 'bg-purple-dark/80 backdrop-blur-md shadow-2xl border border-white/10'
            : 'bg-transparent'
          }
        `}>

          {/* Logo Section */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-brand to-orange-500 flex items-center justify-center rounded-xl flex-shrink-0 hover-lift shadow-lg shadow-yellow-brand/20 cursor-pointer overflow-hidden group">
                <Image
                  src={logoImage}
                  alt="Seven Eyes Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
              <h1 className={`text-sm md:text-lg font-bold tracking-wide transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`}>
                <span className="text-yellow-brand">Seven</span> Eyes
              </h1>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-yellow-brand focus:outline-none p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-1 p-1 rounded-full transition-all duration-500 ${scrolled ? 'bg-white/5 border border-white/5' : ''}`}>
            <NavLink href="#home" scrolled={scrolled}>Home</NavLink>
            <NavLink href="#about" scrolled={scrolled}>About</NavLink>
            <NavLink href="#services" scrolled={scrolled}>Services</NavLink>
            <NavLink href="#experience" scrolled={scrolled}>Experience</NavLink>
            <NavLink href="#contact" scrolled={scrolled} isButton>Contact Us</NavLink>
          </div>

          {/* Mobile Menu */}
          <div className={`
            absolute top-full left-0 right-0 mt-4 mx-4 p-4 rounded-2xl bg-purple-dark/95 backdrop-blur-xl border border-white/10 shadow-2xl
            transform transition-all duration-300 origin-top
            ${isOpen ? 'scale-y-100 opacity-100 translate-y-0' : 'scale-y-0 opacity-0 -translate-y-4 pointer-events-none'}
            md:hidden flex flex-col gap-2
          `}>
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)} highlight>Contact Us</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children, scrolled, isButton }: { href: string, children: React.ReactNode, scrolled: boolean, isButton?: boolean }) {
  if (isButton) {
    return (
      <a
        href={href}
        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-brand to-orange-500 text-purple-dark font-bold text-sm hover:shadow-lg hover:shadow-yellow-brand/25 hover:scale-105 transition-all duration-300 ml-2"
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href={href}
      className={`
        relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
        hover:text-white group
        ${scrolled ? 'text-gray-300' : 'text-gray-200'}
      `}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center" />
    </a>
  )
}

function MobileNavLink({ href, children, onClick, highlight }: { href: string, children: React.ReactNode, onClick: () => void, highlight?: boolean }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        block w-full px-4 py-3 rounded-xl text-center font-medium transition-all duration-300
        ${highlight
          ? 'bg-gradient-to-r from-yellow-brand to-orange-500 text-purple-dark font-bold shadow-lg shadow-yellow-brand/20'
          : 'text-gray-300 hover:bg-white/5 hover:text-white'
        }
      `}
    >
      {children}
    </a>
  )
}
