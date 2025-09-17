import Link from 'next/link'

export default function ChildSafety() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Child Safety Standards</h1>
          <p className="text-xl text-gray-600">
            EZMove's commitment to protecting children and preventing child sexual abuse and exploitation
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          
          {/* Our Commitment */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Child Safety</h2>
            <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 mb-6">
              <p className="text-emerald-800 text-lg font-medium mb-2">
                EZMove is committed to providing a safe environment for all users, with zero tolerance for child sexual abuse and exploitation (CSAE).
              </p>
              <p className="text-emerald-700">
                We maintain strict policies and implement robust safety measures to protect minors and prevent any form of child exploitation on our platform.
              </p>
            </div>
          </section>

          {/* Safety Standards */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Child Sexual Abuse and Exploitation (CSAE) Prevention Standards</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">1. Zero Tolerance Policy</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Absolute prohibition of child sexual abuse material (CSAM)</li>
                  <li>No content depicting, encouraging, or facilitating child exploitation</li>
                  <li>Immediate account termination for violations</li>
                  <li>Cooperation with law enforcement authorities</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">2. Content Monitoring and Detection</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Automated content scanning systems</li>
                  <li>Regular manual review of user-generated content</li>
                  <li>Proactive identification of suspicious activities</li>
                  <li>Machine learning algorithms for pattern detection</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">3. User Verification and Safety Measures</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Age verification for all users during registration</li>
                  <li>Secure identity verification processes</li>
                  <li>Regular security audits and updates</li>
                  <li>Privacy protection for all users, especially minors</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">4. Reporting and Response System</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>24/7 reporting mechanism for users</li>
                  <li>Dedicated safety team for incident response</li>
                  <li>Immediate investigation of all reports</li>
                  <li>Swift action against violating accounts and content</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Reporting Mechanisms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Report Child Safety Concerns</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-red-800">Emergency Situations</h3>
                  <p className="mt-2 text-red-700">
                    If you believe a child is in immediate danger, contact local emergency services (911 in the US) or your local law enforcement immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h3 className="font-semibold text-emerald-800 mb-3">In-App Reporting</h3>
                <ul className="space-y-2 text-emerald-700">
                  <li>• Use the "Report" button on any suspicious content</li>
                  <li>• Access safety center through app settings</li>
                  <li>• Anonymous reporting available</li>
                  <li>• 24/7 immediate review process</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 mb-3">Direct Contact</h3>
                <div className="space-y-2 text-blue-700">
                  <p><strong>Support Team:</strong></p>
                  <p>Email: <a href="mailto:support@ez-move.app" className="underline font-medium">support@ez-move.app</a></p>
                  <p><strong>Developer Contact:</strong></p>
                  <p>Email: <a href="mailto:adityashubhampandey@gmail.com" className="underline font-medium">adityashubhampandey@gmail.com</a></p>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Compliance */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Compliance and Reporting</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-800 mb-3">Compliance with Laws and Regulations</h3>
              <div className="space-y-3 text-yellow-700">
                <p>EZMove complies with all relevant child safety laws and regulations, including:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Children's Online Privacy Protection Act (COPPA)</li>
                  <li>National Center for Missing & Exploited Children (NCMEC) reporting requirements</li>
                  <li>Regional and national authority reporting obligations</li>
                  <li>International child protection standards</li>
                </ul>
                
                <div className="mt-4 p-4 bg-white rounded border border-yellow-300">
                  <p className="font-medium text-yellow-800">Reporting to Authorities:</p>
                  <p className="text-yellow-700 text-sm mt-1">
                    We report all suspected child sexual abuse material (CSAM) and exploitation to the National Center for Missing & Exploited Children (NCMEC) 
                    and cooperate fully with law enforcement investigations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Safety Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Safety Education and Resources</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">For Parents and Guardians</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Monitor your child's app usage and online activities</li>
                  <li>Discuss online safety and appropriate behavior</li>
                  <li>Report any concerning interactions immediately</li>
                  <li>Use parental controls and privacy settings</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">For Young Users</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Never share personal information with strangers</li>
                  <li>Report inappropriate messages or behavior</li>
                  <li>Tell a trusted adult about any concerning interactions</li>
                  <li>Use privacy settings to control who can contact you</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Child Safety Designated Contact</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Name:</strong> Aditya Shubham Pandey</p>
                    <p><strong>Title:</strong> Developer & Safety Officer</p>
                    <p><strong>Email:</strong> <a href="mailto:adityashubhampandey@gmail.com" className="text-emerald-600 hover:text-emerald-700 underline">adityashubhampandey@gmail.com</a></p>
                    <p><strong>Company:</strong> SustainX Technologies Ltd</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Support Team</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Support Email:</strong> <a href="mailto:support@ez-move.app" className="text-emerald-600 hover:text-emerald-700 underline">support@ez-move.app</a></p>
                    <p><strong>Response Time:</strong> Within 24 hours</p>
                    <p><strong>Emergency:</strong> Immediate review</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Updates and Transparency */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Transparency and Updates</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Regular Updates</h3>
              <div className="space-y-2 text-blue-700">
                <p>• Safety standards are reviewed and updated quarterly</p>
                <p>• Users are notified of significant policy changes</p>
                <p>• Annual transparency reports on safety measures</p>
                <p>• Continuous improvement based on industry best practices</p>
              </div>
            </div>
          </section>

          {/* External Resources */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Resources</h2>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Child Safety Organizations</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p><strong>National Center for Missing & Exploited Children (NCMEC)</strong></p>
                  <p className="text-sm">Website: <a href="https://www.missingkids.org" className="text-emerald-600 hover:text-emerald-700 underline" target="_blank" rel="noopener noreferrer">www.missingkids.org</a></p>
                  <p className="text-sm">Hotline: 1-800-THE-LOST (1-800-843-5678)</p>
                </div>
                
                <div>
                  <p><strong>Childhelp National Child Abuse Hotline</strong></p>
                  <p className="text-sm">Phone: 1-800-4-A-CHILD (1-800-422-4453)</p>
                </div>
                
                <div>
                  <p><strong>Internet Watch Foundation</strong></p>
                  <p className="text-sm">Website: <a href="https://www.iwf.org.uk" className="text-emerald-600 hover:text-emerald-700 underline" target="_blank" rel="noopener noreferrer">www.iwf.org.uk</a></p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            These child safety standards are part of our commitment to user safety and comply with Google Play Store requirements.
          </p>
          <p className="mt-2">
            Last updated: September 16, 2025 | Version 1.0
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="hover:text-gray-700">Privacy Policy</Link>
            <Link href="/support" className="hover:text-gray-700">Support</Link>
            <Link href="/" className="hover:text-gray-700">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}