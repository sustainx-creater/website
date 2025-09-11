'use client'

import Link from 'next/link'

export default function AccountDeletion() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Account Deletion</h1>
          <p className="text-xl text-gray-600">
            We're sorry to see you go. Here's everything you need to know about deleting your EZMove account.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          {/* How to Delete Your Account */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Delete Your Account</h2>
            <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6">
              <h3 className="font-semibold text-emerald-800 mb-3 text-lg">Contact Support to Delete Your Account</h3>
              <p className="text-emerald-700 mb-4">
                To delete your EZMove account, please email our support team with the following information:
              </p>
              <div className="bg-white rounded-lg p-4 border border-emerald-200">
                <p className="font-semibold text-emerald-800 mb-2">Send an email to:</p>
                <a 
                  href="mailto:support@ez-move.app?subject=Account%20Deletion%20Request" 
                  className="text-emerald-600 hover:text-emerald-700 text-lg font-semibold underline"
                >
                  support@ez-move.app
                </a>
                <p className="text-sm text-emerald-600 mt-2">Subject: Account Deletion Request</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-emerald-800 mb-2">Include in your email:</p>
                <ul className="list-disc list-inside space-y-1 text-emerald-700">
                  <li>Your registered email address</li>
                  <li>Your full name as registered in the app</li>
                  <li>Phone number (if provided during registration)</li>
                  <li>Reason for deletion (optional but appreciated)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prerequisites */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Before You Delete Your Account</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-800">Important Steps to Complete First:</h3>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-yellow-700">
                    <li>Cancel any active premium subscriptions</li>
                    <li>Download any data you want to keep (moving history, saved locations)</li>
                    <li>Settle any outstanding payments or refunds</li>
                    <li>Save contact information of service providers you've worked with</li>
                    <li>Consider temporarily deactivating your account instead</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* What Gets Deleted */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Data Will Be Deleted</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-3">Data That Will Be Permanently Deleted:</h3>
                <ul className="space-y-1 text-red-700">
                  <li>• Personal profile information</li>
                  <li>• Moving history and quotes</li>
                  <li>• Saved locations and preferences</li>
                  <li>• Photos and documents uploaded</li>
                  <li>• Communication history with service providers</li>
                  <li>• Account settings and preferences</li>
                  <li>• Payment methods and billing history</li>
                  <li>• Reviews and ratings you've left</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Data That May Be Retained:</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Transaction records (for legal/tax purposes)</li>
                  <li>• Anonymized usage analytics</li>
                  <li>• Records required by law (up to 7 years)</li>
                  <li>• Data in system backups (deleted within 30 days)</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  * Retained data cannot be used to identify you personally
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Deletion Timeline</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div className="ml-4">
                    <p className="font-semibold">Immediate (0-24 hours)</p>
                    <p className="text-sm text-gray-600">Account deactivated, login disabled, profile hidden from other users</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div className="ml-4">
                    <p className="font-semibold">Within 7 days</p>
                    <p className="text-sm text-gray-600">Personal data permanently deleted from active systems</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div className="ml-4">
                    <p className="font-semibold">Within 30 days</p>
                    <p className="text-sm text-gray-600">Data removed from all backups and temporary storage systems</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <div className="ml-4">
                    <p className="font-semibold">Completion Notification</p>
                    <p className="text-sm text-gray-600">Email confirmation sent to your registered email address</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help or Have Questions?</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Contact Information:</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Email:</span> <a href="mailto:support@ez-move.app" className="text-emerald-600 hover:text-emerald-700 underline">support@ez-move.app</a></p>
                    <p><span className="font-medium">Hours:</span> Monday-Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Response Times:</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Account deletion requests: Within 1 business day</p>
                    <p>• General inquiries: Within 2 business days</p>
                    <p>• Email support: Same day during business hours</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="bg-white border border-gray-300 rounded-lg p-4 hover:border-emerald-300 transition-colors">
                <summary className="font-semibold cursor-pointer text-gray-900 hover:text-emerald-600 transition-colors">Can I temporarily deactivate my account instead?</summary>
                <p className="mt-2 text-gray-800">
                  Yes! Contact our support team at <a href="mailto:support@ez-move.app" className="text-emerald-600 hover:text-emerald-700 underline font-medium">support@ez-move.app</a> to request account deactivation. 
                  This will hide your profile and pause notifications while keeping your data safe for when you return.
                </p>
              </details>
              
              <details className="bg-white border border-gray-300 rounded-lg p-4 hover:border-emerald-300 transition-colors">
                <summary className="font-semibold cursor-pointer text-gray-900 hover:text-emerald-600 transition-colors">Can I recover my account after deletion?</summary>
                <p className="mt-2 text-gray-800">
                  No, account deletion is permanent and cannot be reversed. All data will be permanently removed from our systems.
                </p>
              </details>
              
              <details className="bg-white border border-gray-300 rounded-lg p-4 hover:border-emerald-300 transition-colors">
                <summary className="font-semibold cursor-pointer text-gray-900 hover:text-emerald-600 transition-colors">What happens to my reviews and ratings?</summary>
                <p className="mt-2 text-gray-800">
                  Your reviews will be anonymized (name removed) but may remain visible to help other users. The content of reviews may be retained for community benefit.
                </p>
              </details>
              
              <details className="bg-white border border-gray-300 rounded-lg p-4 hover:border-emerald-300 transition-colors">
                <summary className="font-semibold cursor-pointer text-gray-900 hover:text-emerald-600 transition-colors">Will I get a refund for my subscription?</summary>
                <p className="mt-2 text-gray-800">
                  Refunds depend on when you cancel. Please cancel your subscription first, then contact support for refund eligibility. 
                  Active subscriptions should be cancelled before account deletion.
                </p>
              </details>
              
              <details className="bg-white border border-gray-300 rounded-lg p-4 hover:border-emerald-300 transition-colors">
                <summary className="font-semibold cursor-pointer text-gray-900 hover:text-emerald-600 transition-colors">How will I be notified when the deletion is complete?</summary>
                <p className="mt-2 text-gray-800">
                  We'll send a final confirmation email to your registered email address when the deletion process is fully complete (within 30 days).
                </p>
              </details>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            This page complies with Google Play Store account deletion requirements. 
            Last updated: {new Date().toLocaleDateString()}
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
