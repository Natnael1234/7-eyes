const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

const servicesData = [
    {
        name: 'Creative Media & Film Production',
        description: 'Feature films, short films, documentaries, mini-dramas, PSAs, promotional videos, social media videos (TikTok, Instagram, YouTube), and youth-centered storytelling. Includes full production: scripting, filming, editing, motion graphics, voiceovers, and subtitles.',
        icon: 'film'
    },
    {
        name: 'Behavior Change Communication',
        description: 'Design and execution of evidence-based communication campaigns focused on youth and gender. Services include message design, SBCC content, animated explainers, infographics, and social impact storytelling.',
        icon: 'users'
    },
    {
        name: 'Event Planning & Management',
        description: 'End-to-end event delivery: concept design, stage setup, logistics, coordination, branding, décor, sound, lighting, livestream, multi-camera recording, and highlight reels. Covers conferences, exhibitions, outreach events, and stakeholder gatherings.',
        icon: 'calendar'
    },
    {
        name: 'Digital Media & Interactive Experiences',
        description: 'Event branding, posters, backdrops, roll-ups, motion graphics, data visualizations, and digital installations. Also includes templates for partners and digital engagement tools.',
        icon: 'monitor'
    },
    {
        name: 'Photography & Audio Production',
        description: 'Professional event photography, portraits, photo essays, podcast-style interviews, sound bites, Amharic/English voiceovers, and audio production for events and campaigns.',
        icon: 'camera'
    },
    {
        name: 'Media Distribution & Management',
        description: 'Content distribution across social media (Facebook, TikTok, Instagram, YouTube, LinkedIn), TV and radio partnerships, community radio engagement, livestreaming, and digital platform management.',
        icon: 'share'
    }
]

async function main() {
    const email = 'admin@seveneyes.com'
    const password = await bcrypt.hash('admin123', 10)

    // Upsert Admin
    const admin = await prisma.admin.upsert({
        where: { email },
        update: {},
        create: {
            email,
            password,
        },
    })

    console.log({ admin })

    // Initialize Site Config
    const config = await prisma.siteConfig.upsert({
        where: { id: 'config' },
        update: {},
        create: {
            heroTitle: 'Seven Eyes Multimedia',
            heroSubtitle: 'Empowering Stories. Empowering Community.',
            email: 'info@seveneyes.com',
        },
    })

    console.log({ config })

    // Seed Services
    for (const service of servicesData) {
        // Simple check to avoid duplicates based on name, or just create
        const existing = await prisma.service.findFirst({ where: { name: service.name } })
        if (!existing) {
            await prisma.service.create({
                data: service
            })
            console.log(`Created service: ${service.name}`)
        }
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
