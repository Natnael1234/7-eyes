'use server'

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()
const bcrypt = require('bcryptjs')

export async function registerAdmin(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
        throw new Error('Email and password are required')
    }

    const existing = await prisma.admin.findUnique({ where: { email } })
    if (existing) {
        throw new Error('User already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.admin.create({
        data: {
            email,
            password: hashedPassword,
        }
    })

    // No revalidation needed for sign up specifically, but redirect happens on client
}

export async function updateSiteConfig(formData: FormData) {
    const heroTitle = formData.get('heroTitle') as string
    const heroSubtitle = formData.get('heroSubtitle') as string
    const aboutText = formData.get('aboutText') as string
    const mission = formData.get('mission') as string
    const vision = formData.get('vision') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const address = formData.get('address') as string
    const heroImage = formData.get('heroImage') as string
    const aboutImage = formData.get('aboutImage') as string
    const facebook = formData.get('facebook') as string
    const instagram = formData.get('instagram') as string
    const linkedin = formData.get('linkedin') as string
    const experienceYears = Number(formData.get('experienceYears')) || 0
    const partnersCount = Number(formData.get('partnersCount')) || 0

    await prisma.siteConfig.update({
        where: { id: 'config' },
        data: {
            heroTitle,
            heroSubtitle,
            aboutText,
            mission,
            vision,
            email,
            phone,
            address,
            heroImage,
            aboutImage,
            facebook,
            instagram,
            linkedin,
            experienceYears,
            partnersCount
        },
    })

    revalidatePath('/')
    revalidatePath('/admin/general')
}

export async function getSiteConfig() {
    return await prisma.siteConfig.findUnique({
        where: { id: 'config' }
    })
}

export async function incrementVisits() {
    // Upsert to ensure config exists
    await prisma.siteConfig.upsert({
        where: { id: 'config' },
        create: { visits: 1 },
        update: { visits: { increment: 1 } }
    })
}
