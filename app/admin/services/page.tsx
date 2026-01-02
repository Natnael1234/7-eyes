import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

async function createService(formData: FormData) {
    'use server'
    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const imageUrl = formData.get('imageUrl') as string
    const icon = formData.get('icon') as string

    await prisma.service.create({
        data: {
            name,
            description,
            imageUrl,
            icon,
        }
    })
    revalidatePath('/admin/services')
    revalidatePath('/')
}

async function deleteService(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    await prisma.service.delete({ where: { id } })
    revalidatePath('/admin/services')
    revalidatePath('/')
}

export default async function ServicesPage() {
    const services = await prisma.service.findMany({ orderBy: { createdAt: 'desc' } })

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Manage Services</h1>

            {/* Create Form */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-12">
                <h2 className="text-xl font-semibold text-yellow-brand mb-6">Add New Service</h2>
                <form action={createService} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Service Name</label>
                            <input type="text" name="name" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" placeholder="Media Production" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Icon Name (or SVG)</label>
                            <input type="text" name="icon" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" placeholder="camera" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Description</label>
                        <textarea name="description" required rows={3} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" placeholder="Service details..." />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Image URL</label>
                        <input type="text" name="imageUrl" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" placeholder="https://..." />
                    </div>
                    <button type="submit" className="bg-orange-light text-black font-bold py-2 px-6 rounded-lg hover:bg-orange-light/90 transition-colors">
                        Add Service
                    </button>
                </form>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div key={service.id} className="bg-white/5 border border-white/10 p-6 rounded-xl relative group">
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>

                        <form action={deleteService} className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <input type="hidden" name="id" value={service.id} />
                            <button type="submit" className="bg-red-500 text-white p-2 rounded-lg text-sm hover:bg-red-600">Delete</button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    )
}
