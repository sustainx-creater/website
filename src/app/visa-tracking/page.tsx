'use client'

import { useState } from 'react'
import Link from 'next/link'

interface VisaStatus {
  application_number: string
  decision: string
  last_updated: string
}

export default function VisaTracking() {
  const [applicationNumber, setApplicationNumber] = useState('')
  const [country, setCountry] = useState('India')
  const [status, setStatus] = useState<VisaStatus | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [errorSuggestion, setErrorSuggestion] = useState('')

  const getTimeAgo = (dateString: string) => {
    const now = new Date()
    const updatedDate = new Date(dateString)
    const diffInMinutes = Math.floor((now.getTime() - updatedDate.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 1) return 'Just now'
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hour${Math.floor(diffInMinutes / 60) > 1 ? 's' : ''} ago`
    return `${Math.floor(diffInMinutes / 1440)} day${Math.floor(diffInMinutes / 1440) > 1 ? 's' : ''} ago`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!applicationNumber.trim()) {
      setError('Please enter your application number')
      return
    }

    setLoading(true)
    setError('')
    setErrorSuggestion('')
    setStatus(null)

    try {
      const response = await fetch('/api/visa-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          application_number: applicationNumber.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to fetch visa status')
        if (data.suggestion) {
          setErrorSuggestion(data.suggestion)
        }
        return
      }

      if (data.status) {
        setStatus(data.status)
      } else {
        setError('No record found for this application number')
        setErrorSuggestion('Please check your application number and try again')
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
      setErrorSuggestion('')
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (decision: string) => {
    switch (decision.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'refused':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (decision: string) => {
    switch (decision.toLowerCase()) {
      case 'approved':
        return <span className="text-green-600">✅</span>
      case 'refused':
        return <span className="text-red-600">❌</span>
      case 'pending':
        return <span className="text-yellow-600">⏳</span>
      default:
        return <span className="text-gray-600">❓</span>
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Irish Visa Status Tracker
            </h1>
            <p className="text-lg text-slate-600 mb-4">
              Track your Irish visa application status in real-time
            </p>
            
            {/* Important Disclaimer */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 text-left">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Important:</strong> This service tracks Irish visa applications only. 
                    Always rely on the official Irish Government website (
                    <a href="https://www.irishimmigration.ie" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-800">
                      irishimmigration.ie
                    </a>
                    ) for final confirmation and official updates. This is an unofficial tracking service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {!status ? (
            /* Search Form */
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Country Dropdown */}
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-slate-800 mb-2">
                    Country of Application
                  </label>
                  <select
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors text-slate-800 bg-white"
                  >
                    <option value="India">India</option>
                    <option value="other" disabled>Other countries - Coming Soon</option>
                  </select>
                </div>

                {/* Application Number */}
                <div>
                  <label htmlFor="applicationNumber" className="block text-sm font-medium text-slate-800 mb-2">
                    Application Number
                  </label>
                  <input
                    type="text"
                    id="applicationNumber"
                    value={applicationNumber}
                    onChange={(e) => setApplicationNumber(e.target.value)}
                    placeholder="Enter your application number (e.g., 57268902 or IRL57268902)"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors text-slate-800 placeholder-gray-400"
                    required
                  />
                  <p className="mt-2 text-xs text-slate-600">
                    You can enter your full reference (IRL57268902) or just the numbers (57268902)
                  </p>
                </div>

                {(error || errorSuggestion) && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">{error}</p>
                    {errorSuggestion && (
                      <p className="text-red-700 text-sm mt-1">{errorSuggestion}</p>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Tracking Application...
                    </div>
                  ) : (
                    'Track Application'
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Results */
            <div className="space-y-6">
              {/* Back Button */}
              <button
                onClick={() => {
                  setStatus(null)
                  setApplicationNumber('')
                  setError('')
                  setErrorSuggestion('')
                }}
                className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                ← Track Another Application
              </button>

              {/* Status Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">
                    Application Status
                  </h2>
                  <p className="text-slate-600">Application Number: <span className="font-medium text-slate-800">{status.application_number}</span></p>
                </div>

                {/* Status Badge */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 ${getStatusColor(status.decision)}`}>
                    {getStatusIcon(status.decision)}
                    {status.decision.toUpperCase()}
                  </div>
                  <p className="text-sm text-slate-600 mt-3">
                    Data last updated: <span className="font-medium text-slate-800">{getTimeAgo(status.last_updated)}</span>
                  </p>
                </div>

                {/* Refused Status Encouragement */}
                {status.decision.toLowerCase() === 'refused' && (
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-sm text-blue-700">
                          <strong>Don't give up!</strong> A visa refusal doesn't mean the end of your journey. 
                          Many successful applicants faced initial setbacks. Learn from the feedback, 
                          strengthen your application, and consider reapplying. Success often comes to those who persist! 💪
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Download App for Approved Visas */}
                {status.decision.toLowerCase() === 'approved' && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-sm text-green-700 mb-3">
                          <strong>Congratulations!</strong> Your visa has been approved! Download our app to connect with other approved visa holders and get help with your move to Ireland.
                        </p>
                        <Link 
                          href="/download"
                          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                          📱 Download EZmove App
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
  )
}