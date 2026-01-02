import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function ExperiencePage() {
    const experiences = await prisma.experience.findMany({ orderBy: { createdAt: 'desc' } })

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-yellow-brand to-orange-light mb-6">
                        Our Experience
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Showcasing our journey in creative media, film production, events, and digital innovation.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-brand/50 transition-all duration-500">
                                {/* Image */}
                                <div className="aspect-video overflow-hidden">
                                    {exp.imageUrl ? (
                                        <img
                                            src={exp.imageUrl}
                                            alt={exp.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600">
                                            No Image
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-brand transition-colors">
                                        {exp.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {experiences.length === 0 && (
                            <div className="col-span-full text-center py-20 text-gray-500">
                                <p>No experiences added yet. Check back soon!</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
