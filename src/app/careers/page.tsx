'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, Users } from 'lucide-react'

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            href="/"
            className="inline-flex items-center text-slate-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Join Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Help us build the future of relocation technology in Ireland
          </p>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-12 shadow-lg mb-16 text-center"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Users className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">We're Not Hiring Right Now</h2>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            We're currently in our closed beta testing phase, focusing on building and refining our product with our core team of 4 developers and 5 mentors.
          </p>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6">
            <p className="text-slate-700 font-medium">
              But we'd love to hear from talented individuals who are passionate about relocation technology and helping people settle in Ireland!
            </p>
          </div>
        </motion.div>

        {/* Future Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Future Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Frontend Developer",
                type: "Full-time",
                location: "Dublin, Ireland",
                description: "React/Next.js expert to build beautiful user experiences"
              },
              {
                title: "Backend Developer", 
                type: "Full-time",
                location: "Dublin, Ireland",
                description: "Node.js/Python developer for scalable backend systems"
              },
              {
                title: "Mobile Developer",
                type: "Full-time", 
                location: "Dublin, Ireland",
                description: "Flutter/React Native developer for cross-platform apps"
              },
              {
                title: "Product Designer",
                type: "Full-time",
                location: "Dublin, Ireland", 
                description: "UX/UI designer passionate about relocation solutions"
              }
            ].map((job, index) => (
              <div key={job.title} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <h4 className="text-xl font-bold text-slate-800 mb-2">{job.title}</h4>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{job.description}</p>
                <div className="bg-slate-100 text-slate-500 px-4 py-2 rounded-lg text-sm text-center">
                  Coming Soon
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Interested in Joining Us?</h3>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Send us your CV and a note about why you're passionate about helping people relocate to Ireland.
          </p>
          <a
            href="mailto:careers@ez-move.app?subject=Career Interest - EZMove"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  )
}
