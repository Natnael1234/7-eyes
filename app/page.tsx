import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhoWeAre from '@/components/WhoWeAre'
import TrustedBy from '@/components/TrustedBy'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Services />
      <TrustedBy />
      <Contact />
      <Footer />
    </main>
  )
}
