import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

async function createExperience(formData: FormData) {
    'use server'
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const imageUrl = formData.get('imageUrl') as string

    await prisma.experience.create({
        data: {
            title,
            description,
            imageUrl,
        }
    })
    revalidatePath('/admin/experiences')
    revalidatePath('/experience')
}

async function deleteExperience(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    await prisma.experience.delete({ where: { id } })
    revalidatePath('/admin/experiences')
    revalidatePath('/experience')
}

export default async function ExperiencesPage() {
    const experiences = await prisma.experience.findMany({ orderBy: { createdAt: 'desc' } })

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Manage Experiences</h1>

            {/* Create Form */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-12">
                <h2 className="text-xl font-semibold text-yellow-brand mb-6">Add New Experience</h2>
                <form action={createExperience} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Title</label>
                        <input type="text" name="title" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" placeholder="Project Name" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Description</label>
                        <textarea name="description" required rows={3} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" placeholder="Project details..." />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Image URL (For now, paste a link)</label>
                        <input type="text" name="imageUrl" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" placeholder="https://..." />
                    </div>
                    <button type="submit" className="bg-yellow-brand text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-brand/90 transition-colors">
                        Add Experience
                    </button>
                </form>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((exp) => (
                    <div key={exp.id} className="bg-white/5 border border-white/10 p-6 rounded-xl relative group">
                        {exp.imageUrl && (
                            <img src={exp.imageUrl} alt={exp.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                        )}
                        <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{exp.description}</p>

                        <form action={deleteExperience} className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <input type="hidden" name="id" value={exp.id} />
                            <button type="submit" className="bg-red-500 text-white p-2 rounded-lg text-sm hover:bg-red-600">Delete</button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    )
}
