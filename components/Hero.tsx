'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="text-brand-accent font-medium tracking-wide text-sm uppercase">
            Est. 2025 • Addis Ababa, Ethiopia
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-8 leading-tight">
          Empowering <span className="text-gradient">Stories</span>,<br />
          Empowering <span className="text-gradient">Community</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          Impactful Experiences, Meaningful Change. We are a creative powerhouse dedicated to crafting transformative media that inspires action.
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
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">10+</h3>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">15+</h3>
            <p className="text-gray-400 text-sm">Global Partners</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">100%</h3>
            <p className="text-gray-400 text-sm">Impact Driven</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">24/7</h3>
            <p className="text-gray-400 text-sm">Creative Passion</p>
          </div>
        </div>
      </div>
    </section>
  )
}
