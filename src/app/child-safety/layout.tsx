import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Child Safety Standards | EZMove',
  description: 'EZMove\'s comprehensive child safety standards and policies to prevent child sexual abuse and exploitation (CSAE). Learn about our zero tolerance policy, reporting mechanisms, and compliance with child protection laws.',
  keywords: 'child safety, CSAE prevention, child protection, CSAM reporting, online safety, child abuse prevention',
  robots: 'index, follow',
}

export default function ChildSafetyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}