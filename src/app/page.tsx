import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Screenshots from '@/components/Screenshots'
import About from '@/components/About'
import Team from '@/components/Team'
import Investors from '@/components/Investors'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EZMove',
    alternateName: 'EZMove',
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

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is EZMove?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EZMove is a comprehensive relocation platform that helps international students and professionals relocate to Ireland. We provide AI-powered housing search, visa assistance, document management, community connections, and local guidance.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does EZMove help with housing in Ireland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EZMove uses AI-driven technology to match you with verified housing listings in Ireland. Our platform provides detailed insights about neighborhoods, helps you connect with landlords, and offers guidance on rental processes specific to Ireland.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does EZMove assist with visa applications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, EZMove provides visa assistance and document tracking services. We help you understand the visa requirements for Ireland, track your application progress, and ensure you have all necessary documentation for your relocation.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is there a community feature in EZMove?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! EZMove includes a vibrant community forum where you can connect with other relocators, find relocation buddies, ask questions, share experiences, and get advice from people who have successfully relocated to Ireland.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I download the EZMove app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can download the EZMove app from our download page at ez-move.app/download. We offer direct APK download, Google Play Store internal testing access, and you can also scan our QR code for quick download.'
        }
      },
      {
        '@type': 'Question',
        name: 'What services does EZMove provide for relocation to Ireland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EZMove provides comprehensive relocation services including: AI-powered housing search, visa and document assistance, community connections, local event discovery, relocation buddy matching, and guidance on living in Ireland including banking, transport, and cultural integration.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is EZMove free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EZMove offers both free and premium features. Basic community access, housing search, and general guidance are free. Premium features may include advanced matching algorithms, priority support, and enhanced services.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I get support from EZMove?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact our support team at support@ez-move.app for any questions or assistance. We also have a comprehensive help center and community forum where you can get help from other users and our team.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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