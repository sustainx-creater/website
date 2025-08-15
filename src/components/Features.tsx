'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  MessageCircle, 
  Home, 
  Users, 
  BookOpen, 
  Shield, 
  Clock, 
  Award 
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Visa Application Tracker',
    description: 'Track your visa application status in real-time with detailed progress updates and notifications.',
    color: 'emerald'
  },
  {
    icon: MessageCircle,
    title: 'AI-Powered Chatbot',
    description: 'Get instant answers to immigration questions with our intelligent RAG-enabled assistant.',
    color: 'teal'
  },
  {
    icon: Home,
    title: 'Housing Solutions',
    description: 'Find verified accommodation with detailed neighborhood insights and virtual tours.',
    color: 'cyan'
  },
  {
    icon: Users,
    title: 'Community Platform',
    description: 'Connect with fellow immigrants, join local groups, and build your network in Ireland.',
    color: 'blue'
  },
  {
    icon: BookOpen,
    title: 'Resource Library',
    description: 'Access comprehensive guides, articles, and resources about living and working in Ireland.',
    color: 'purple'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your personal data is protected with enterprise-grade security and privacy measures.',
    color: 'green'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance through multiple channels including chat, email, and phone.',
    color: 'orange'
  },
  {
    icon: Award,
    title: 'Expert Verified',
    description: 'All information and guidance is verified by immigration experts and legal professionals.',
    color: 'pink'
  }
]

const colorClasses = {
  emerald: 'bg-emerald-100 text-emerald-600',
  teal: 'bg-teal-100 text-teal-600',
  cyan: 'bg-cyan-100 text-cyan-600',
  blue: 'bg-blue-100 text-blue-600',
  purple: 'bg-purple-100 text-purple-600',
  green: 'bg-green-100 text-green-600',
  orange: 'bg-orange-100 text-orange-600',
  pink: 'bg-pink-100 text-pink-600'
}

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Powerful <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to make your immigration journey smooth, informed, and successful
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              <div className={`w-16 h-16 rounded-2xl ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Ready to Transform Immigration?
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful immigrants who've made their journey easier with EZMove
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              Get Early Access
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
