'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-10 mt-24 border-t border-white/10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-yellow-brand to-orange-light mb-6">Seven Eyes</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Empowering Stories, Empowering Community. Impactful Experiences, Meaningful Change. We are dedicated to crafting transformative media experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:scale-110 transition-all duration-300 group">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 text-blue-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-secondary hover:scale-110 transition-all duration-300 group">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 text-pink-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.36-.2 6.78-2.618 6.98-6.98.058-1.28-.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.36-2.618-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 group">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5 text-blue-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-yellow-brand border-b border-yellow-brand/20 pb-2 inline-block">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-yellow-brand hover:translate-x-1 transition-all inline-block">Media Production</Link></li>
              <li><Link href="#" className="hover:text-yellow-brand hover:translate-x-1 transition-all inline-block">Event Management</Link></li>
              <li><Link href="#" className="hover:text-yellow-brand hover:translate-x-1 transition-all inline-block">Digital Marketing</Link></li>
              <li><Link href="#" className="hover:text-yellow-brand hover:translate-x-1 transition-all inline-block">Consultancy</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-orange-light border-b border-orange-light/20 pb-2 inline-block">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#about" className="hover:text-orange-light hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link href="#services" className="hover:text-orange-light hover:translate-x-1 transition-all inline-block">Our Services </Link></li>
              <li><Link href="#contact" className="hover:text-orange-light hover:translate-x-1 transition-all inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Visit Us</h4>
            <div className="space-y-4 mb-6 text-gray-400">
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Megenagna, Addis Ababa, Ethiopia</span>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>info@seveneyes.com</span>
              </p>
            </div>
            {/* Google Map */}
            <div className="rounded-xl overflow-hidden h-48 border border-white/10 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5397444738456!2d38.7995!3d9.0145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850000000001%3A0x0!2sMegenagna%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1635789012345!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Seven Eyes Multimedia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
