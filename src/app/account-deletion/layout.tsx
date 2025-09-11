import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delete Your Account | EZMove',
  description: 'Delete your EZMove account and all associated data. Learn about our data deletion process, timeline, and how to permanently remove your account.',
  robots: 'noindex, nofollow',
}

export default function AccountDeletionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
