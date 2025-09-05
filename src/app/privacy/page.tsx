'use client';

import PrivacyPolicy from '@/components/PrivacyPolicy'

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <PrivacyPolicy />
      </div>
    </main>
  )
}
