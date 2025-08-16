import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EZMove - Immigration Made Simple",
  description: "Streamline your immigration process with EZMove. Professional visa assistance, document management, and expert guidance for your journey to a new country.",
  icons: {
    // Prefer app icon files; fall back to public JPG
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', rel: 'icon' },
      { url: '/assets/favicon/EZmove.jpg', type: 'image/jpeg' },
    ],
    shortcut: ['/favicon.ico', '/assets/favicon/EZmove.jpg'],
    apple: ['/apple-touch-icon.png', '/assets/favicon/EZmove.jpg'],
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
        {children}
      </body>
    </html>
  );
}
