'use client'

const partners = [
  'Girl Effect', 'UNICEF', 'UN Women', 'USAID', 'Save the Children',
  'World Vision Ethiopia', 'Jhepiego', 'Helvetas Swiss', 'Samaritan Purse',
  'British Council', 'IRC', 'Plan International'
]

export default function TrustedBy() {
  return (
    <section className="py-16 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 text-sm font-medium mb-8 uppercase tracking-widest">
          Trusted by Global Organizations
        </p>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-xl md:text-2xl font-bold text-white/30 hover:text-white transition-colors duration-300 cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
