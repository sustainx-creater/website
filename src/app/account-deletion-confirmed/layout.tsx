import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account Deletion Confirmed | EZMove',
  description: 'Your EZMove account deletion has been confirmed. Learn about the next steps and timeline for complete data removal.',
  robots: 'noindex, nofollow',
}

export default function AccountDeletionConfirmedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
