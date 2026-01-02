import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

async function createPartner(formData: FormData) {
    'use server'
    const name = formData.get('name') as string
    const logoUrl = formData.get('logoUrl') as string

    await prisma.partner.create({
        data: {
            name,
            logoUrl,
        }
    })
    revalidatePath('/admin/partners')
    revalidatePath('/')
}

async function deletePartner(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    await prisma.partner.delete({ where: { id } })
    revalidatePath('/admin/partners')
    revalidatePath('/')
}

export default async function PartnersPage() {
    const partners = await prisma.partner.findMany({ orderBy: { createdAt: 'desc' } })

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Manage Partners</h1>

            {/* Create Form */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-12">
                <h2 className="text-xl font-semibold text-yellow-brand mb-6">Add New Partner</h2>
                <form action={createPartner} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Partner Name</label>
                        <input type="text" name="name" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" placeholder="Organization Name" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Logo URL</label>
                        <input type="text" name="logoUrl" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" placeholder="https://..." />
                    </div>
                    <button type="submit" className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors">
                        Add Partner
                    </button>
                </form>
            </div>

            {/* List */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {partners.map((partner) => (
                    <div key={partner.id} className="bg-white/5 border border-white/10 p-4 rounded-xl relative group flex flex-col items-center justify-center">
                        {partner.logoUrl && (
                            <img src={partner.logoUrl} alt={partner.name} className="h-16 object-contain mb-2" />
                        )}
                        <h3 className="text-sm font-bold text-white text-center">{partner.name}</h3>

                        <form action={deletePartner} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <input type="hidden" name="id" value={partner.id} />
                            <button type="submit" className="bg-red-500 text-white w-6 h-6 rounded flex items-center justify-center text-xs hover:bg-red-600">X</button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    )
}
