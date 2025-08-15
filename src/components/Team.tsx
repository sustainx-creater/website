'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, MapPin } from 'lucide-react'

const teamMembers = [
  {
    name: 'Aditya Pandey',
    role: 'Founder & CEO',
    location: 'Dublin, Ireland',
    bio: 'Former software engineer with 8 years experience at Google and Meta. Passionate about solving immigration challenges through technology.',
    image: '/team/aditya.jpg',
    linkedin: '#',
    twitter: '#',
    github: '#'
  },
  {
    name: 'Sarah Chen',
    role: 'Co-Founder & CTO',
    location: 'Dublin, Ireland',
    bio: 'Ex-Amazon senior engineer with expertise in AI/ML and mobile development. Led teams building scalable applications for millions of users.',
    image: '/team/sarah.jpg',
    linkedin: '#',
    twitter: '#',
    github: '#'
  },
  {
    name: 'David Murphy',
    role: 'Head of Legal & Compliance',
    location: 'Cork, Ireland',
    bio: 'Immigration lawyer with 15 years experience. Former advisor to the Irish Department of Justice on immigration policy.',
    image: '/team/david.jpg',
    linkedin: '#'
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Product',
    location: 'Galway, Ireland',
    bio: 'Product management veteran from Airbnb and Uber. Expert in user experience design and international expansion.',
    image: '/team/priya.jpg',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Growth',
    location: 'Dublin, Ireland',
    bio: 'Growth marketing expert who scaled fintech startups from seed to Series C. Former VP Marketing at Revolut.',
    image: '/team/marcus.jpg',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Customer Success',
    location: 'Dublin, Ireland',
    bio: 'Customer experience specialist with background in immigration services. Fluent in 5 languages.',
    image: '/team/elena.jpg',
    linkedin: '#'
  }
]

const advisors = [
  {
    name: 'Dr. James O\'Sullivan',
    role: 'Strategic Advisor',
    company: 'Former CEO, Enterprise Ireland',
    bio: 'Leading expert in Irish business ecosystem and international trade.'
  },
  {
    name: 'Maria Santos',
    role: 'Product Advisor',
    company: 'VP Product, Stripe',
    bio: 'Expert in building global payment and identity verification systems.'
  },
  {
    name: 'Robert Kim',
    role: 'Technology Advisor',
    company: 'Principal Engineer, Meta',
    bio: 'AI/ML expert with 15+ years building large-scale consumer applications.'
  }
]

export default function Team() {
  return (
    <section id="team" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A world-class team combining deep technical expertise with immigration domain knowledge
          </p>
        </motion.div>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h4>
                  <p className="text-emerald-600 font-semibold mb-2">{member.role}</p>
                  <div className="flex items-center justify-center text-slate-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {member.location}
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {member.linkedin && (
                    <a href={member.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} className="text-slate-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} className="text-slate-400 hover:text-slate-800 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Advisory Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-lg font-bold text-teal-600">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-slate-800 mb-1">{advisor.name}</h4>
                  <p className="text-emerald-600 font-semibold text-sm mb-1">{advisor.role}</p>
                  <p className="text-slate-500 text-sm mb-3">{advisor.company}</p>
                  <p className="text-slate-600 text-sm">{advisor.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Culture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-4xl font-bold mb-6">Join Our Mission</h3>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            We're always looking for passionate individuals who want to make a real impact on people's lives. 
            Join us in revolutionizing the immigration experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-emerald-100">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-emerald-100">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-emerald-100">Remote Friendly</div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
          >
            View Open Positions
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
