import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Screenshots from '@/components/Screenshots'
import About from '@/components/About'
import Team from '@/components/Team'
import Investors from '@/components/Investors'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EZMove',
    alternateName: 'SustainX Technologies Ltd',
    url: 'https://ez-move.app',
    logo: 'https://ez-move.app/assets/images/ez.png',
    description: 'Streamline your relocation process with EZMove. Professional visa assistance, document management, and expert guidance for your journey to a new country.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dublin',
      addressRegion: 'Dublin',
      postalCode: 'D01 V5C5',
      streetAddress: 'Mayor Square, IFSC',
      addressCountry: 'IE'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+353',
      contactType: 'customer service',
      email: 'support@ez-move.app',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://ez-move.app'
    ],
    founder: {
      '@type': 'Person',
      name: 'Aditya Shubham Pandey'
    },
    foundingDate: '2024',
    industry: 'Technology, Relocation Services',
    numberOfEmployees: '1-10',
    serviceArea: {
      '@type': 'Place',
      name: 'Ireland'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  )
}