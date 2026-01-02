'use client'

import Image from 'next/image'
import girlEffect from '@/app/Images/Trusted by/girl effect.jpg'
import unicef from '@/app/Images/Trusted by/unicef.jpg'
import unWomen from '@/app/Images/Trusted by/unwomen.jpg'
import usaid from '@/app/Images/Trusted by/usaid.jpg'
import saveChildren from '@/app/Images/Trusted by/savechildren.jpg'
import jhpiego from '@/app/Images/Trusted by/jhpiego.jpg'
import helvetas from '@/app/Images/Trusted by/helveta.jpg'
import britishCouncil from '@/app/Images/Trusted by/british_council.jpg'
import irc from '@/app/Images/Trusted by/International_rescue.jpg'
import planInternational from '@/app/Images/Trusted by/plan international.jpg'

const partners = [
  { name: 'Girl Effect', logo: girlEffect },
  { name: 'UNICEF', logo: unicef },
  { name: 'UN Women', logo: unWomen },
  { name: 'USAID', logo: usaid },
  { name: 'Save the Children', logo: saveChildren },
  { name: 'Jhepiego', logo: jhpiego },
  { name: 'Helvetas Swiss', logo: helvetas },
  { name: 'British Council', logo: britishCouncil },
  { name: 'IRC', logo: irc },
  { name: 'Plan International', logo: planInternational },
]

export default function TrustedBy({ initialPartners }: { initialPartners?: any[] }) {
  // Use DB partners or fallback to static list
  const displayPartners = initialPartners && initialPartners.length > 0
    ? initialPartners.map(p => ({ name: p.name, logo: p.logoUrl }))
    : partners

  return (
    <section className="py-16 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-purple-dark/80 text-sm font-medium uppercase tracking-widest">
          Trusted by Global Organizations
        </p>
      </div>

      <div className="flex overflow-hidden space-x-16 group">
        <div className="flex space-x-16 animate-marquee min-w-full shrink-0 items-center">
          {displayPartners.map((partner, index) => (
            <div
              key={`p1-${index}`}
              className="relative w-40 h-20 flex-shrink-0 hover:scale-110 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                // Handle external URLs vs static imports
                unoptimized={typeof partner.logo === 'string'}
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-16 animate-marquee min-w-full shrink-0 items-center" aria-hidden="true">
          {displayPartners.map((partner, index) => (
            <div
              key={`p2-${index}`}
              className="relative w-40 h-20 flex-shrink-0 hover:scale-110 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                unoptimized={typeof partner.logo === 'string'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
