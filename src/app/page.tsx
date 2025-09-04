import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Screenshots from '@/components/Screenshots'
import About from '@/components/About'
import Team from '@/components/Team'
import Investors from '@/components/Investors'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Screenshots />
      <About />
      <Team />
      <Investors />
      <Contact />
      <Footer />
    </main>
  )
}
