export const metadata = {
  title: 'Download EZMove App',
  description: 'Download the EZMove application to start your relocation journey.',
}

export default function DownloadPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Download EZMove App</h1>
          <p className="mt-4 text-black text-lg">Get the EZMove application and accelerate your relocation journey.</p>
        </header>

        {/* Current Beta Download Section */}
        <section className="p-8 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-emerald-800 mb-2">Beta Version Available Now!</h2>
            <p className="text-emerald-700">Try our current beta version while we prepare for the official Play Store release.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-emerald-200">
                <h3 className="text-lg font-semibold text-emerald-800 mb-3">Download Beta APK</h3>
                <p className="text-sm text-emerald-700 mb-4">
                  Access the latest beta version of EZMove with all the newest features and improvements.
                </p>
                <a
                  href="https://studentncirl-my.sharepoint.com/:u:/g/personal/x23267895_student_ncirl_ie/EQVYu5PAHfVHnZjocXoujXoB0X274n840MUujoW1KBtFPQ?download=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Beta APK
                </a>
                <p className="text-xs text-emerald-600 mt-2">
                  * You may need to enable "Install from unknown sources" on Android
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-xl border-2 border-emerald-200 shadow-lg">
                <img 
                  src="/assets/images/qrcode.jpeg" 
                  alt="QR Code to download EZMove app" 
                  className="w-48 h-48 object-contain"
                />
              </div>
              <p className="text-sm text-emerald-700 mt-3 text-center">
                Scan QR code to download directly on your phone
              </p>
            </div>
          </div>
        </section>

        {/* App Information Section */}
        <section className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">About EZMove</h2>
              <p className="text-black">The EZMove application helps international students and professionals manage relocation tasks: housing discovery, visa planning, community knowledge, events and local onboarding.</p>
              <ul className="text-sm text-black space-y-2 list-disc pl-5">
                <li>AI-driven housing insights & verified listings</li>
                <li>Community forum & buddy connect</li>
                <li>Visa & document tracking (beta)</li>
                <li>Events & local networking</li>
              </ul>
              <div className="text-sm text-black">
                Need help? <a href="mailto:support@ez-move.app" className="text-emerald-600 hover:underline">support@ez-move.app</a>
              </div>
              <div className="text-xs text-black">
                HQ: NCI, Mayor Square, Dublin 1, Ireland
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 flex items-center justify-center border border-emerald-200 shadow-inner">
                <span className="text-emerald-700 font-semibold text-center px-4">App Preview</span>
              </div>
              
              {/* Future Store Links */}
              <div className="space-y-3 w-full">
                <button
                  disabled
                  className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg opacity-70 cursor-not-allowed"
                >
                  Play Store (Coming Soon)
                </button>
                <button
                  disabled
                  className="w-full px-8 py-3 rounded-full bg-slate-200 text-black font-semibold cursor-not-allowed"
                >
                  App Store (Planned)
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
