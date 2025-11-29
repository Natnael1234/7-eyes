'use client'

export default function WhoWeAre() {
  return (
    <section className="py-20 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold font-display text-white mb-6">
                Who <span className="text-gradient">We Are</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Seven Eyes Multimedia and Communication PLC is a newly established Multimedia, Communication, Creative production and event management PLC based in Addis Ababa, Ethiopia. Founded in 2025, the company brings together a collective of seasoned professionals with over 10 years of experience in film production, documentary storytelling, behavior change communication (BCC), and event organization.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Though young as an entity, the organization is built upon a solid foundation of individual excellence and proven track records with leading international and local organizations. Together, we form a creative powerhouse dedicated to crafting transformative media and experiences that inspire action and social change.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-gray-400 text-sm">
                  To become Ethiopia’s leading creative and multimedia and film Production Company, delivering world-class storytelling and immersive experiences that promote youth empowerment, gender equality, and social transformation.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-secondary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-gray-400 text-sm">
                  To combine storytelling, technology, and event design to inform, inspire, and engage audience’s especially young people and women in ways that spark awareness, empathy, and behavioral change.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 z-10 mix-blend-overlay" />
              {/* Placeholder for About Image */}
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl mb-4 block">🇪🇹</span>
                  <p className="text-gray-400">Preserving and promoting Ethiopia’s rich heritage through visual storytelling.</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
