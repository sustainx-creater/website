'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
                SustainX
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                Revolutionizing the relocation experience through technology. Making the journey to Ireland simple, transparent, and stress-free.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="text-slate-300">Mayor Street Lower, International Financial Services Centre, Dublin 1</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="text-slate-300">teamsustainx@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#screenshots" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  App Demo
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Investors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Investors</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:teamsustainx@gmail.com" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Investment Opportunities
                </a>
              </li>
              <li>
                <Link href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Pitch Deck
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Leadership Team
                </Link>
              </li>
              <li>
                <a href="mailto:teamsustainx@gmail.com" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Due Diligence
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Links & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <span className="text-slate-300 font-semibold">Follow Us:</span>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/ezmoveai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/ezmoveai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/ezmoveai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Invest Now
              </Link>
              <a
                href="mailto:teamsustainx@gmail.com"
                className="border border-emerald-400 text-emerald-400 px-6 py-3 rounded-full font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Updates
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2025 SustainX Technologies Ltd. All rights reserved.
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-slate-500 text-sm">
              SustainX is committed to making relocation accessible for everyone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
