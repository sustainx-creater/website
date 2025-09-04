'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Globe, Shield, Target, Award, Mail, Phone, Calendar } from 'lucide-react'

export default function Investors() {
  const stats = [
    { icon: Users, value: "1000+", label: "Users Projected", color: "emerald" },
    { icon: Globe, value: "Ireland", label: "Primary Market", color: "blue" },
    { icon: Target, value: "€500K", label: "Funding Goal", color: "purple" },
    { icon: Award, value: "Citi Backed", label: "Innovation Program", color: "amber" }
  ]

  const investmentHighlights = [
    {
      icon: Shield,
      title: "Market Validation",
      description: "Backed by Citi's Upstart Initiative with real user feedback and market research."
    },
    {
      icon: TrendingUp,
      title: "Growing Market",
      description: "Ireland's immigration market continues to grow with increasing demand for relocation services."
    },
    {
      icon: Target,
      title: "Clear Revenue Model",
      description: "Multiple revenue streams including premium features, partnerships, and service fees."
    },
    {
      icon: Globe,
      title: "Expansion Ready",
      description: "Scalable platform ready for European market expansion beyond Ireland."
    }
  ]

  return (
    <section id="investors" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Investment <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Opportunity</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join us in revolutionizing the relocation experience for thousands of people moving to Ireland
          </p>
        </motion.div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                stat.color === 'emerald' ? 'bg-emerald-100' : 
                stat.color === 'blue' ? 'bg-emerald-100' : 
                stat.color === 'purple' ? 'bg-teal-100' : 'bg-amber-100'
              }`}>
                <stat.icon className={`w-6 h-6 ${
                  stat.color === 'emerald' ? 'text-emerald-600' : 
                  stat.color === 'blue' ? 'text-emerald-600' : 
                  stat.color === 'purple' ? 'text-teal-600' : 'text-amber-600'
                }`} />
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Investment Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {investmentHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl">
                  <highlight.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{highlight.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-4xl font-bold mb-6">Ready to Invest?</h3>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
            Get in touch with our team to learn more about investment opportunities and our business model.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="mailto:investors@ez-move.app"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              investors@ez-move.app
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Meeting
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
