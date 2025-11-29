'use client'

import Image from 'next/image'
import heroImg from '@/app/Images/hero.jpg'

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-100/50 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50 mb-6">
                <span className="text-purple-700 font-medium tracking-wide text-sm uppercase">
                  About Seven Eyes
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6 leading-tight">
                Crafting Stories that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  Ignite Change
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Seven Eyes Multimedia and Communication PLC is a newly established creative powerhouse based in Addis Ababa. We bring together seasoned professionals with over a decade of experience in film, documentary, and behavior change communication.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Although young as an entity, our foundation is built on individual excellence. We are dedicated to crafting transformative media experiences that not only entertain but inspire real social change.
              </p>
            </div>

            {/* Interactive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

              {/* Vision Card */}
              <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">Our Vision</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To become Ethiopia’s leading creative production company, delivering world-class storytelling that promotes youth empowerment and social transformation.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">Our Mission</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To combine storytelling and technology to engage young people and women, sparking awareness, empathy, and positive behavioral change.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Image Side */}
          <div className="relative hidden lg:block h-full min-h-[600px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
              <Image
                src={heroImg}
                alt="About Seven Eyes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/50">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl shadow-sm rounded-full bg-white p-2">🇪🇹</span>
                    <div>
                      <p className="text-gray-900 font-bold text-lg">Rooted in Ethiopia</p>
                      <p className="text-purple-600 text-sm font-medium">Global Standards</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Preserving heritage through modern storytelling.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          </div>

        </div>
      </div>
    </section>
  )
}
