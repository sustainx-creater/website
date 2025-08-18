'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Building, DollarSign, Calendar } from 'lucide-react'
import { useUserDataCollection } from './useUserDataCollection'
import { useGoogleAnalytics } from './GoogleAnalytics'

export default function Contact() {
  const { collectFormData, trackInteraction, hasConsent } = useUserDataCollection()
  const { trackEvent: trackGAEvent, trackConversion } = useGoogleAnalytics()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    investmentRange: '',
    message: '',
    meetingPreference: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Track form interaction if analytics consent is given
    trackInteraction('contact_form_submission', {
      formType: 'investment_inquiry',
      hasCompany: !!formData.company,
      investmentRange: formData.investmentRange
    })
    
    // Track Google Analytics event
    trackGAEvent('form_submit', {
      form_name: 'contact_form',
      form_type: 'investment_inquiry',
      event_category: 'lead_generation',
      event_label: 'contact_form_submission'
    })
    
    try {
      const response = await fetch('https://formspree.io/f/mdkdjydb', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          investmentRange: formData.investmentRange,
          message: formData.message,
          meetingPreference: formData.meetingPreference,
          _subject: 'New Investment Inquiry - EZMove',
          // Include consent status for compliance
          consentGiven: hasConsent('necessary'),
          analyticsConsent: hasConsent('analytics'),
          marketingConsent: hasConsent('marketing')
        })
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        
        // Track successful conversion in Google Analytics
        trackConversion('AW-CONVERSION-ID/contact_form_conversion') // Replace with your actual conversion ID
        trackGAEvent('conversion', {
          event_category: 'lead_generation',
          event_label: 'contact_form_success',
          value: 1
        })
        
        // Collect form data based on user consent
        collectFormData({
          formType: 'investment_inquiry',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          investmentRange: formData.investmentRange,
          submissionTime: new Date().toISOString()
        }, 'contact_form')
        
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
    
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-12 shadow-2xl"
          >
            <div className="w-20 h-20 bg-emerald-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Send className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Thank You!</h3>
            <p className="text-xl text-slate-600 mb-8">
              We've received your investment inquiry and will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Let's <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to be part of the immigration revolution? We'd love to hear from potential investors and partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-emerald-100 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Email</h4>
                    <p className="text-slate-600">investors@ezmove.ie</p>
                    <p className="text-slate-600">hello@ezmove.ie</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-teal-100 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Phone</h4>
                    <p className="text-slate-600">+353 1 234 5678</p>
                    <p className="text-slate-600">+353 87 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-cyan-100 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Office</h4>
                    <p className="text-slate-600">Dublin 2, Ireland</p>
                    <p className="text-slate-600">WeWork, 2 Dublin Landings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-slate-800 mb-6">Investment Opportunity</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-slate-700">Series A: €2M - €5M</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-5 h-5 text-teal-600 mr-3" />
                  <span className="text-slate-700">Min Investment: €50K</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-cyan-600 mr-3" />
                  <span className="text-slate-700">Timeline: Q1 2025</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Investment Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-slate-900 placeholder-slate-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-slate-900 placeholder-slate-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company/Fund
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-slate-900 placeholder-slate-500"
                    placeholder="Acme Ventures"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Role/Title
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-slate-900 placeholder-slate-500"
                    placeholder="Managing Partner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Investment Range
                  </label>
                  <select
                    name="investmentRange"
                    value={formData.investmentRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-slate-900"
                  >
                    <option value="">Select range</option>
                    <option value="50k-100k">€50K - €100K</option>
                    <option value="100k-250k">€100K - €250K</option>
                    <option value="250k-500k">€250K - €500K</option>
                    <option value="500k-1m">€500K - €1M</option>
                    <option value="1m+">€1M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Meeting Preference
                  </label>
                  <select
                    name="meetingPreference"
                    value={formData.meetingPreference}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-slate-900"
                  >
                    <option value="">Select preference</option>
                    <option value="video">Video Call</option>
                    <option value="phone">Phone Call</option>
                    <option value="in-person">In Person (Dublin)</option>
                    <option value="email">Email First</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-slate-900 placeholder-slate-500"
                  placeholder="Tell us about your investment thesis and what interests you about EZMove..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Investment Inquiry
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
