export const metadata = {
  title: 'EZMove App Support',
  description: 'Get help with the EZMove application and find answers to common questions.',
}

export default function SupportPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">EZMove App Support</h1>
          <p className="mt-4 text-black text-lg">Get help with the EZMove application and manage your relocation journey.</p>
        </header>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <h2 className="font-semibold text-black mb-2">Contact Support</h2>
            <p className="text-sm text-black mb-3">Get help with the EZMove application, account access, or technical issues.</p>
            <ul className="text-sm space-y-1 text-black">
              <li><strong className="text-black">Support:</strong> <a className="text-emerald-600" href="mailto:support@ez-move.app">support@ez-move.app</a></li>
              <li><strong className="text-black">General:</strong> <a className="text-emerald-600" href="mailto:hello@ez-move.app">hello@ez-move.app</a></li>
                <li><strong className="text-black">Data Protection:</strong> <a className="text-emerald-600" href="mailto:support@ez-move.app">support@ez-move.app</a></li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <h2 className="font-semibold text-black mb-2">Location</h2>
            <p className="text-sm text-black mb-3">Our operations hub for product & user support.</p>
            <address className="not-italic text-sm text-black leading-relaxed">
              NCI<br />
              Mayor Square<br />
              Dublin 1<br />
              Ireland
            </address>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <h2 className="font-semibold text-black mb-2">Community Forum</h2>
            <p className="text-sm text-black mb-3">Ask questions, share experiences, and learn from other EZMove app users.</p>
            <p className="text-sm text-black">Coming soon in the app.</p>
          </div>
        </section>

        <section className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
          <h2 className="font-semibold text-black mb-3">App FAQs</h2>
          <div className="space-y-4 text-sm text-black">
            <details className="group">
              <summary className="cursor-pointer font-medium text-black group-open:text-emerald-700">How do I get early access to the app?</summary>
              <p className="mt-2 text-black">Join the waitlist via the signup flow. We're onboarding users in waves.</p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium text-black group-open:text-emerald-700">Will there be a mobile app?</summary>
              <p className="mt-2 text-black">Yes, Android first. iOS will follow after beta feedback.</p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium text-black group-open:text-emerald-700">How is my data protected in the app?</summary>
              <p className="mt-2 text-black">We follow security best practices and minimize data collection. Check our privacy policy for details.</p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium text-black group-open:text-emerald-700">Can I use the app offline?</summary>
              <p className="mt-2 text-black">Basic features work offline. Full functionality requires internet connection.</p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium text-black group-open:text-emerald-700">How do I reset my app password?</summary>
              <p className="mt-2 text-black">Use the 'Forgot Password' link on the login screen, or contact support@ez-move.app.</p>
            </details>
          </div>
        </section>
      </div>
    </main>
  )
}
