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
  title: "EZMove - AI-Powered Relocation Platform for Ireland",
  description: "EZMove is the leading AI-powered relocation platform helping international students and professionals move to Ireland. Get verified housing listings, visa assistance, community connections, and local guidance. Download our app for seamless relocation experience.",
  keywords: "relocation Ireland, move to Ireland, housing Ireland, visa assistance Ireland, international students Ireland, Dublin housing, AI housing search, relocation app, Ireland visa, community platform, buddy connect, document tracking, expat Ireland, student accommodation Dublin",
  authors: [{ name: "EZMove" }],
  creator: "EZMove",
  publisher: "EZMove",
  category: "Technology, Relocation Services, Education, Travel",
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
    title: 'EZMove - AI-Powered Relocation Platform for Ireland',
    description: 'The complete relocation solution for moving to Ireland. AI-powered housing search, visa assistance, community connections, and local guidance all in one platform.',
    siteName: 'EZMove',
    images: [
      {
        url: '/assets/images/ez.png',
        width: 1200,
        height: 630,
        alt: 'EZMove - AI-Powered Relocation Platform for Ireland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EZMove - AI-Powered Relocation Platform for Ireland',
    description: 'Complete relocation solution: AI housing search, visa assistance, community connections. Download our app for seamless Ireland relocation experience.',
    images: ['/assets/images/ez.png'],
    creator: '@EZMoveApp',
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
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'application-name': 'EZMove',
    'mobile-web-app-capable': 'yes',
    'application-category': 'Travel, Education, Productivity',
    'target-densitydpi': 'device-dpi',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#10b981',
    'color-scheme': 'light',
    'og:type': 'website',
    'og:locale': 'en_US',
    'article:author': 'EZMove',
    'article:publisher': 'EZMove',
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
