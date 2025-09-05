export const metadata = {
  title: 'Download EZMove App',
  description: 'Download the EZMove application to start your relocation journey.',
}

export default function DownloadPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Download EZMove App</h1>
          <p className="mt-4 text-black text-lg">Get the EZMove application and accelerate your relocation journey.</p>
        </header>

        <section className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <p className="text-black">The EZMove application helps international students and professionals manage relocation tasks: housing discovery, visa planning, community knowledge, events and local onboarding.</p>
              <ul className="text-sm text-black space-y-2 list-disc pl-5">
                <li>AI-driven housing insights & verified listings</li>
                <li>Community forum & buddy connect</li>
                <li>Visa & document tracking (beta)</li>
                <li>Events & local networking</li>
              </ul>
              <div className="rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 p-4">
                <p className="text-sm text-emerald-800"><strong>Status:</strong> Private beta. Mobile versions under development.</p>
              </div>
              <div className="text-sm text-black">
                Need access? <a href="mailto:support@ez-move.app" className="text-emerald-600 hover:underline">support@ez-move.app</a>
              </div>
              <div className="text-xs text-black">
                HQ: NCI, Mayor Square, Dublin 1, Ireland
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 flex items-center justify-center border border-emerald-200 shadow-inner">
                <span className="text-emerald-700 font-semibold text-center px-4">App Preview</span>
              </div>
              <button
                disabled
                className="w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg opacity-70 cursor-not-allowed"
              >
                Play Store (Coming Soon)
              </button>
              <button
                disabled
                className="w-full md:w-auto px-8 py-3 rounded-full bg-slate-200 text-black font-semibold cursor-not-allowed"
              >
                App Store (Planned)
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
