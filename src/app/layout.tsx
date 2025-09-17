import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieConsentProvider } from "@/components/CookieConsent";
import FloatingPrivacyButton from "@/components/FloatingPrivacyButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EZMove - Relocation Made Simple",
  description: "Streamline your relocation process with EZMove. Professional visa assistance, document management, and expert guidance for your journey to a new country.",
  keywords: "relocation, visa assistance, document management, international students, professionals, moving abroad, Ireland, Dublin, housing, community",
  authors: [{ name: "SustainX Technologies Ltd" }],
  creator: "SustainX Technologies Ltd",
  publisher: "SustainX Technologies Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ez-move.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ez-move.app',
    title: 'EZMove - Relocation Made Simple',
    description: 'Streamline your relocation process with EZMove. Professional visa assistance, document management, and expert guidance for your journey to a new country.',
    siteName: 'EZMove',
    images: [
      {
        url: '/assets/images/ez.png',
        width: 1200,
        height: 630,
        alt: 'EZMove - Relocation Made Simple',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EZMove - Relocation Made Simple',
    description: 'Streamline your relocation process with EZMove. Professional visa assistance, document management, and expert guidance for your journey to a new country.',
    images: ['/assets/images/ez.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon-32x32.png'],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Add your Google Search Console verification code here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CookieConsentProvider>
          <GoogleAnalytics />
          <Navbar />
          <div style={{ paddingTop: '80px' }}>
            {children}
          </div>
          <FloatingPrivacyButton />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
