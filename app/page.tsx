import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhoWeAre from '@/components/WhoWeAre'
import TrustedBy from '@/components/TrustedBy'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-0">
        <Hero />
      </div>
      <WhoWeAre />
      <TrustedBy />
      <Contact />
      <Footer />
    </main>
  )
}
