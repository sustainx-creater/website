import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieConsentProvider } from "@/components/CookieConsent";
import FloatingPrivacyButton from "@/components/FloatingPrivacyButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
  icons: {
  // Use app icon and apple touch icon only to avoid conflicts
  icon: [{ url: '/icon.png', type: 'image/png' }],
  apple: ['/apple-touch-icon.png'],
  shortcut: ['/icon.png'],
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
          {children}
          <FloatingPrivacyButton />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
