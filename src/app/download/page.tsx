export const metadata = {
  title: 'Download EZMove App',
  description: 'Download the EZMove application to start your relocation journey.',
}

export default function DownloadPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Download EZMove
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with EZMove and streamline your relocation journey. Choose your preferred download method below.
          </p>
        </header>

        {/* Main Download Section */}
        <section className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Download Options */}
            <div className="p-12 bg-gradient-to-br from-emerald-50 to-teal-50">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Download?</h2>
                  <p className="text-gray-600 text-lg">
                    Choose from our available download options and start your relocation journey today.
                  </p>
                </div>

                {/* Download Options */}
                <div className="space-y-6">
                  {/* Beta APK Download */}
                  <div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct APK Download</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Download the latest beta version directly to your Android device.
                        </p>
                        <a
                          href="https://studentncirl-my.sharepoint.com/:u:/g/personal/x23267895_student_ncirl_ie/EQVYu5PAHfVHnZjocXoujXoB0X274n840MUujoW1KBtFPQ?download=1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download APK
                        </a>
                        <p className="text-xs text-emerald-600 mt-2">
                          * Enable "Install from unknown sources" on Android
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Play Store Internal Testing */}
                  <div className="bg-white rounded-2xl p-6 border border-blue-200 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Play Store Internal Testing</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Access our latest version through Google Play Store internal testing program.
                        </p>
                        <a
                          href="https://play.google.com/apps/internaltest/4701551318107611397"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                          </svg>
                          Join Testing
                        </a>
                        <p className="text-xs text-blue-600 mt-2">
                          * Requires Google account and testing access
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Request Access */}
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Want Latest Access?</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        For access to the latest features and testing versions, reach out to our team.
                      </p>
                      <a
                        href="mailto:support@ez-move.app?subject=App Access Request&body=Hi, I would like access to the latest version of the EZMove app."
                        className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Request Access
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - QR Code and Info */}
            <div className="p-12 bg-white">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {/* QR Code */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Scan to Download</h3>
                  <div className="bg-white p-6 rounded-3xl border-4 border-emerald-100 shadow-2xl mx-auto w-fit">
                    <img 
                      src="/assets/images/qrcode.jpeg" 
                      alt="QR Code to download EZMove app" 
                      className="w-64 h-64 object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-4 max-w-xs">
                    Point your phone camera at the QR code to download directly
                  </p>
                </div>

                {/* Features Preview */}
                <div className="w-full max-w-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">What's Included</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">AI-powered housing search</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Community & buddy connect</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Visa & document tracking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Local events & networking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-3xl p-12 border border-gray-200">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Official Play Store Launch Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're preparing for our official Google Play Store launch with enhanced features and improved user experience.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What's Coming:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Enhanced AI recommendations</li>
                    <li>• Improved user interface</li>
                    <li>• Advanced community features</li>
                    <li>• Better performance & stability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Get Notified:</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Be the first to know when we launch officially on the Play Store.
                  </p>
                  <a 
                    href="mailto:support@ez-move.app?subject=Launch Notification Request" 
                    className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Join notification list →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get started with EZMove. Reach out if you have any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@ez-move.app" 
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Support
              </a>
              <a 
                href="/support" 
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Help Center
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
