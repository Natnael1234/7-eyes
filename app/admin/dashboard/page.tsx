import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function DashboardPage() {
    const session = await getServerSession()

    if (!session) {
        redirect('/admin/login')
    }

    const experienceCount = await prisma.experience.count()
    // Services are static (4), but we can check if there are any in DB just in case, or just show 4
    // User requested "let it be static", so hardcoding 4 is accurate to what's shown. 
    // BUT user asked for "quick informations" and "count the people".
    const partnersCount = await prisma.partner.count()
    const config = await prisma.siteConfig.findUnique({ where: { id: 'config' } })
    const visits = config?.visits || 0

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h3 className="text-gray-400 mb-2">Total Visits</h3>
                    <p className="text-3xl font-bold text-green-500">{visits}</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h3 className="text-gray-400 mb-2">Experiences</h3>
                    <p className="text-3xl font-bold text-yellow-brand">{experienceCount}</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h3 className="text-gray-400 mb-2">Services (Active)</h3>
                    <p className="text-3xl font-bold text-orange-light">4</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h3 className="text-gray-400 mb-2">Partners</h3>
                    <p className="text-3xl font-bold text-white">{partnersCount}</p>
                </div>
            </div>
        </div>
    )
}
