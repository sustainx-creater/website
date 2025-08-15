'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Heart, TrendingUp, Award, Shield } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            About <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">EZMove</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We're revolutionizing the immigration experience by combining cutting-edge technology with deep understanding of the challenges faced by international students and professionals moving to Ireland.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-emerald-100 rounded-full mr-4">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Our Mission</h3>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              To simplify and streamline the immigration process for everyone, making it accessible, transparent, and stress-free. We believe that moving to a new country should be about opportunities, not obstacles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-100 rounded-full mr-4">
                <Lightbulb className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Our Vision</h3>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              To become the global leader in immigration technology, helping millions of people worldwide achieve their dreams of living, studying, and working in their chosen destinations.
            </p>
          </motion.div>
        </div>

        {/* Key Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-slate-800 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-10 h-10 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">Empathy First</h4>
              <p className="text-slate-600">We understand the emotional journey of immigration and design with compassion at the core.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-10 h-10 text-teal-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">Trust & Security</h4>
              <p className="text-slate-600">Your personal information and documents are protected with the highest security standards.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Award className="w-10 h-10 text-cyan-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">Excellence</h4>
              <p className="text-slate-600">We continuously innovate and improve to provide the best possible user experience.</p>
            </div>
          </div>
        </motion.div>

        {/* Market Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
            <h3 className="text-4xl font-bold mb-6">Market Opportunity</h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The global immigration market is experiencing unprecedented growth, with Ireland becoming one of the top destinations for international talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">€12B</div>
              <div className="text-slate-300">Global Immigration Market</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">150K</div>
              <div className="text-slate-300">Annual Immigrants to Ireland</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">25%</div>
              <div className="text-slate-300">YoY Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-slate-300">User Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Why Invest */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-4xl font-bold text-slate-800 mb-8">Why Invest in EZMove?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="text-6xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">Proven Traction</h4>
              <p className="text-slate-600">10,000+ active users with 40% month-over-month growth</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="text-6xl mb-4">💰</div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">Revenue Growth</h4>
              <p className="text-slate-600">€500K ARR with clear path to €5M+ within 24 months</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="text-6xl mb-4">🌍</div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">Global Expansion</h4>
              <p className="text-slate-600">Ready to scale to UK, Canada, Australia, and beyond</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
