import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhoWeAre from '@/components/WhoWeAre'
import TrustedBy from '@/components/TrustedBy'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function getSiteData() {
  const config = await prisma.siteConfig.findUnique({
    where: { id: 'config' }
  })
  const partners = await prisma.partner.findMany({ orderBy: { createdAt: 'desc' } })
  return { config, partners }
}

export default async function Home() {
  const { config, partners } = await getSiteData()

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero
        title={config?.heroTitle}
        subtitle={config?.heroSubtitle}
        experienceYears={config?.experienceYears}
        partnersCount={config?.partnersCount}
        heroImage={config?.heroImage ?? undefined}
      />
      <WhoWeAre
        aboutText={config?.aboutText ?? undefined}
        mission={config?.mission ?? undefined}
        vision={config?.vision ?? undefined}
        aboutImage={config?.aboutImage ?? undefined}
      />
      <Services />
      <TrustedBy initialPartners={partners} />
      <Contact
        email={config?.email ?? undefined}
        phone={config?.phone ?? undefined}
        address={config?.address ?? undefined}
      />
      <Footer
        email={config?.email ?? undefined}
        phone={config?.phone ?? undefined}
        address={config?.address ?? undefined}
        facebook={config?.facebook ?? undefined}
        instagram={config?.instagram ?? undefined}
        linkedin={config?.linkedin ?? undefined}
      />
    </main>
  )
}
