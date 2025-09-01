'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Linkedin, Twitter, Github, MapPin, Globe } from 'lucide-react'

const teamMembers = [
  {
    name: 'Aditya Pandey',
    role: 'Team Lead',
    location: 'Dublin, Ireland',
    bio: 'Team lead who overlooks all development and other activities, conducts code reviews, handles some dev work plus ML app and data analysis.',
    image: '/assets/images/aditya.jpg',
    linkedin: 'https://linkedin.com/in/aditya-pa',
    website: 'https://aditya-pandey.me/'
  },
  {
    name: 'Lohit Uchil',
    role: 'Developer',
    location: 'Dublin, Ireland',
    bio: 'Developer mainly focused on security, authentication and tech advancement.',
    image: '/assets/images/lohit.jpg',
    linkedin: 'https://www.linkedin.com/in/lohit-uchil/'
  },
  {
    name: 'Georgii Korenkov',
    role: 'Developer',
    location: 'Dublin, Ireland',
    bio: 'Developer focused on housing part with ML model on housing side, plus some stakeholder communication.',
    image: '/assets/images/georgii.png',
    linkedin: 'https://www.linkedin.com/in/georgii-korenkov/'
  },
  {
    name: 'Shivansh Bhatnagar',
    role: 'Developer',
    location: 'Dublin, Ireland',
    bio: 'Developer who takes care of community part plus representation of EZMove at platforms.',
    image: '/assets/images/shivansh.jpg',
    linkedin: 'https://linkedin.com/in/shivanshbhatnagar'
  }
]

const advisors = [
  {
    name: 'Suvendu Chatterjee',
    role: 'UI/UX Expert',
    company: 'Citi',
    bio: 'UI/UX expert with deep experience in user-centered design and product development.'
  },
  {
    name: 'Kirti Dhemre',
    role: 'Mentor',
    company: 'Citi',
    bio: 'Strategic advisor with expertise in product development and market expansion.'
  },
  {
    name: 'Tom Cullen',
    role: 'Technical Senior Manager',
    company: 'Citi',
    bio: 'Technical senior manager with extensive experience in technology leadership and innovation.'
  },
  {
    name: 'Halima Chukur',
    role: 'GDPR Expert',
    company: 'Citi',
    bio: 'Expert in GDPR compliance and data protection, ensuring regulatory adherence.'
  },
  {
    name: 'Sean Heeney',
    role: 'Professor & Cloud Expert',
    company: 'National College of Ireland',
    bio: 'Professor at NCI specializing in cloud technologies and advanced computing systems.'
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
            A passionate team of developers building EZMove through the Citi Upstart Initiative in Ireland
          </p>
        </motion.div>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Profile Image */}
                <div className="w-24 h-24 rounded-2xl mx-auto mb-6 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl mx-auto hidden items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>

                <div className="text-center mb-4 flex-grow">
                  <h4 className="text-lg font-bold text-slate-800 mb-1">{member.name}</h4>
                  <p className="text-emerald-600 font-semibold mb-2">{member.role}</p>
                  <div className="flex items-center justify-center text-slate-500 text-sm mb-3">
                    <MapPin className="w-3 h-3 mr-1" />
                    {member.location}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>

                {/* Social Links - Fixed at bottom */}
                <div className="flex justify-center space-x-4 mt-auto pt-4">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.website && (
                    <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors">
                      <Globe className="w-5 h-5" />
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
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Mentors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-lg font-bold text-teal-600">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-center flex-grow">
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
            We&apos;re always looking for passionate individuals who want to make a real impact on people&apos;s lives. 
            Join us in revolutionizing the relocation experience.
          </p>
          <div className="flex items-center justify-center mb-8">
            <a 
              href="https://www.linkedin.com/company/ezmoveai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span>Follow us on LinkedIn</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-emerald-100">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-emerald-100">Mentors</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-emerald-100">Built in Ireland</div>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/careers"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              View Open Positions
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
