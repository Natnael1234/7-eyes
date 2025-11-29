'use client'

import Link from 'next/link'
import Image from 'next/image'
import heroImg from '@/app/Images/hero.jpg'
import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay for readability */}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-8 leading-tight">
          Empowering <span className="text-gradient">Stories</span>,<br />
          Empowering <span className="text-gradient">Community</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          Impactful Experiences, Meaningful Change.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            href="#contact"
            className="px-8 py-4 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-brand-primary/25"
          >
            Partner With Us
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold transition-all hover:scale-105 backdrop-blur-sm"
          >
            Explore Services
          </Link>
        </div>

        {/* Stats or Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/10 pt-10">
          <StatCard number={10} suffix="+" label="Years Experience" />
          <StatCard number={15} suffix="+" label="Global Partners" />
          <StatCard number={100} suffix="%" label="Impact Driven" />
          <StatCard number={24} suffix="/7" label="Creative Passion" />
        </div>
      </div>
    </section>
  )
}

function StatCard({ number, suffix, label }: { number: number, suffix: string, label: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const end = number
    const duration = 2000
    const incrementTime = Math.floor(duration / end)

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [isVisible, number])

  return (
    <div ref={ref} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group">
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-yellow-brand transition-colors">
        {count}{suffix}
      </h3>
      <p className="text-gray-400 text-sm font-medium uppercase tracking-wider group-hover:text-white transition-colors">
        {label}
      </p>
    </div>
  )
}
