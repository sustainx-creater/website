'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface BetaSignupProps {
  isOpen: boolean
  onClose: () => void
}

export default function BetaSignup({ isOpen, onClose }: BetaSignupProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/xdklryjv', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setIsSubmitted(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl border border-emerald-200 w-full max-w-2xl max-h-[90vh] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {isSubmitted ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to the Beta!</h3>
                                    <p className="text-slate-600 mb-6">
                    You're our first set of users! Help us test and improve EZMove while 
                    getting priority access to all features.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="/download"
                      onClick={handleClose}
                      className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Download App Now
                    </a>
                    <button
                      onClick={handleClose}
                      className="px-6 py-3 rounded-xl border border-gray-300 text-slate-800 font-medium hover:bg-gray-50 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 border-b border-emerald-100">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Join Our Beta Program
                    </h2>
                    <p className="text-slate-600">
                      Get exclusive early access and help shape the future of relocation technology.
                    </p>
                  </div>

                  {/* Form */}
                  <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-slate-800 mb-1">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors text-sm"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-slate-800 mb-1">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors text-sm"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors text-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-800 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors text-sm"
                          placeholder="+353 XX XXX XXXX"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="relocationType" className="block text-sm font-medium text-slate-800 mb-1">
                            Relocation Type *
                          </label>
                          <select
                            id="relocationType"
                            name="relocationType"
                            required
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors text-sm"
                          >
                            <option value="">Select type</option>
                            <option value="student">International Student</option>
                            <option value="professional">Working Professional</option>
                            <option value="family">Family Relocation</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-slate-800 mb-1">
                            Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors text-sm"
                          >
                            <option value="">Select timeline</option>
                            <option value="immediate">Within 1 month</option>
                            <option value="short">1-3 months</option>
                            <option value="medium">3-6 months</option>
                            <option value="long">6+ months</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-800 mb-2">
                          What interests you most? (Optional)
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            'AI Housing Search',
                            'Visa Assistance',
                            'Community Features',
                            'Document Tracking',
                            'Local Events',
                            'Buddy Connect'
                          ].map((interest) => (
                            <label key={interest} className="flex items-center text-sm">
                              <input
                                type="checkbox"
                                name="interests"
                                value={interest}
                                className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 mr-2"
                              />
                              {interest}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-800 mb-1">
                          Additional Comments
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors text-sm"
                          placeholder="Tell us about your relocation plans..."
                        />
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="newsletter"
                          name="newsletter"
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 mr-2"
                        />
                        <label htmlFor="newsletter" className="text-sm text-slate-800">
                          I'd like to receive updates about EZMove
                        </label>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? (
                            <div className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Joining...
                            </div>
                          ) : (
                            'Join Beta Program'
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={handleClose}
                          className="px-6 py-3 rounded-xl border border-gray-300 text-slate-800 font-medium hover:bg-gray-50 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      Your data is protected according to our privacy policy.
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}