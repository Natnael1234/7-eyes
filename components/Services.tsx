'use client'


import { useState } from 'react'
import Image from 'next/image'
import img1 from '@/app/Images/Services/1.png'
import img2 from '@/app/Images/Services/2.png'
import img3 from '@/app/Images/Services/3.png'
import img4 from '@/app/Images/Services/4.png'
import img5 from '@/app/Images/Services/5.png'
import img6 from '@/app/Images/Services/6.png'

const services = [
    {
        id: 1,
        title: 'Creative Media & Film Production',
        description: 'Feature films, short films, documentaries, mini-dramas, PSAs, promotional videos, social media videos (TikTok, Instagram, YouTube), and youth-centered storytelling. Includes full production: scripting, filming, editing, motion graphics, voiceovers, and subtitles.',
        image: img1,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        id: 2,
        title: 'Behavior Change Communication',
        description: 'Design and execution of evidence-based communication campaigns focused on youth and gender. Services include message design, SBCC content, animated explainers, infographics, and social impact storytelling.',
        image: img2,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    },
    {
        id: 3,
        title: 'Event Planning & Management',
        description: 'End-to-end event delivery: concept design, stage setup, logistics, coordination, branding, décor, sound, lighting, livestream, multi-camera recording, and highlight reels. Covers conferences, exhibitions, outreach events, and stakeholder gatherings.',
        image: img3,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        id: 4,
        title: 'Digital Media & Interactive Experiences',
        description: 'Event branding, posters, backdrops, roll-ups, motion graphics, data visualizations, and digital installations (QR stations, touchscreen exhibits, gallery walk designs). Also includes templates for partners and digital engagement tools.',
        image: img4,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        id: 5,
        title: 'Photography & Audio Production',
        description: 'Professional event photography, portraits, photo essays, podcast-style interviews, sound bites, Amharic/English voiceovers, and audio production for events and campaigns.',
        image: img5,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        )
    },
    {
        id: 6,
        title: 'Media Distribution & Management',
        description: 'Content distribution across social media (Facebook, TikTok, Instagram, YouTube, LinkedIn), TV and radio partnerships, community radio engagement, livestreaming, and digital platform management.',
        image: img6,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
        )
    },
]

export default function Services() {
    const [activeService, setActiveService] = useState(0)

    return (
        <section id="services" className="py-24 bg-purple-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 text-center lg:text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-brand/30 bg-yellow-brand/10 mb-6">
                        <span className="text-yellow-brand font-medium tracking-wide text-sm uppercase">
                            Our Expertise
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                        Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-brand to-orange-light">Media Solutions</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-[800px] lg:h-[600px]">
                    {/* Service List */}
                    <div className="flex flex-col justify-between gap-3 h-full pr-2">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                onMouseEnter={() => setActiveService(index)}
                                className={`group p-5 rounded-2xl cursor-pointer transition-all duration-300 border relative overflow-hidden ${activeService === index
                                    ? 'bg-gradient-to-r from-white/10 to-white/5 border-yellow-brand/50 shadow-lg shadow-yellow-brand/5 scale-[1.02]'
                                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                                    }`}
                            >
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className={`p-3 rounded-xl transition-colors duration-300 ${activeService === index ? 'bg-yellow-brand text-purple-dark' : 'bg-white/10 text-white group-hover:bg-white/20'
                                        }`}>
                                        {service.icon}
                                    </div>
                                    <h3 className={`text-lg font-bold transition-colors ${activeService === index ? 'text-white' : 'text-white/70 group-hover:text-white'
                                        }`}>
                                        {service.title}
                                    </h3>
                                </div>
                                {/* Active Indicator */}
                                {activeService === index && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-brand" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                        <Image
                            src={services[activeService].image}
                            alt={services[activeService].title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-dark via-purple-dark/80 to-transparent opacity-90" />

                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col justify-end h-full">
                            <div className="transform transition-all duration-500 translate-y-0 opacity-100">
                                <div className="w-16 h-16 rounded-2xl bg-yellow-brand/20 flex items-center justify-center mb-6 text-yellow-brand backdrop-blur-sm border border-yellow-brand/30">
                                    {services[activeService].icon}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                    {services[activeService].title}
                                </h3>
                                <p className="text-purple-light/90 text-lg leading-relaxed max-w-xl">
                                    {services[activeService].description}
                                </p>

                                <button className="mt-8 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all flex items-center gap-2 group/btn">
                                    Learn More
                                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
