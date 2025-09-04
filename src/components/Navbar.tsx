"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Mail, Users, Phone, TrendingUp } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmailsOpen, setIsEmailsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg border-b border-slate-200 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center gap-3">
              <Image 
                src="/assets/images/ez.png" 
                alt="EZMove Logo" 
                width={48} 
                height={48} 
                className="rounded-2xl transition-all duration-300" 
              />
              <div className="flex flex-col">
                <span className="font-black text-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">
                  EZMove
                </span>
                <span className="text-xs text-slate-500 font-medium -mt-1">Relocation Simplified</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link href="#features" className="group relative px-4 py-2 rounded-lg hover:bg-emerald-50 transition-all duration-300">
                <span className="font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors">Features</span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
              <Link href="#team" className="group relative px-4 py-2 rounded-lg hover:bg-emerald-50 transition-all duration-300">
                <span className="font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors">Team</span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
              <Link href="#investors" className="group relative px-4 py-2 rounded-lg hover:bg-emerald-50 transition-all duration-300">
                <span className="font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors">Investors</span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
              <Link href="/careers" className="group relative px-4 py-2 rounded-lg hover:bg-emerald-50 transition-all duration-300">
                <span className="font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors">Careers</span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
              <Link href="#contact" className="group relative px-4 py-2 rounded-lg hover:bg-emerald-50 transition-all duration-300">
                <span className="font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors">Contact</span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            </div>

            {/* Contact Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsEmailsOpen(!isEmailsOpen)}
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-4 h-4" />
                <span className="font-semibold">Contact Us</span>
                <div className={`transform transition-transform duration-300 ${isEmailsOpen ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {isEmailsOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="p-6">
                    {/* General Contact */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                        <div className="p-2 bg-blue-100 rounded-xl">
                          <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">General Inquiries</p>
                          <a href="mailto:hello@ez-move.app" className="text-blue-700 font-mono text-sm hover:text-blue-800 transition-colors">
                            hello@ez-move.app
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300">
                        <div className="p-2 bg-green-100 rounded-xl">
                          <Phone className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">Application Support</p>
                          <a href="mailto:support@ez-move.app" className="text-green-700 font-mono text-sm hover:text-green-800 transition-colors">
                            support@ez-move.app
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Team Emails */}
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-2 mb-4">
                        <Users className="w-5 h-5 text-emerald-600" />
                        <h4 className="font-bold text-slate-800">Meet Our Team</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                          <p className="font-semibold text-slate-700 text-sm">Lohit</p>
                          <a href="mailto:lohit@ez-move.app" className="text-emerald-700 font-mono text-xs hover:text-emerald-800">
                            lohit@ez-move.app
                          </a>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                          <p className="font-semibold text-slate-700 text-sm">Shivansh</p>
                          <a href="mailto:shivansh@ez-move.app" className="text-emerald-700 font-mono text-xs hover:text-emerald-800">
                            shivansh@ez-move.app
                          </a>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                          <p className="font-semibold text-slate-700 text-sm">Georgii</p>
                          <a href="mailto:Georgii@ez-move.app" className="text-emerald-700 font-mono text-xs hover:text-emerald-800">
                            Georgii@ez-move.app
                          </a>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                          <p className="font-semibold text-slate-700 text-sm">Aditya</p>
                          <a href="mailto:aditya@ez-move.app" className="text-emerald-700 font-mono text-xs hover:text-emerald-800">
                            aditya@ez-move.app
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 p-6 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20">
            <div className="space-y-4">
              <Link href="#features" className="block p-3 rounded-xl hover:bg-emerald-50 font-semibold text-slate-700 hover:text-emerald-700 transition-colors">
                Features
              </Link>
              <Link href="#team" className="block p-3 rounded-xl hover:bg-emerald-50 font-semibold text-slate-700 hover:text-emerald-700 transition-colors">
                Team
              </Link>
              <Link href="#investors" className="block p-3 rounded-xl hover:bg-emerald-50 font-semibold text-slate-700 hover:text-emerald-700 transition-colors">
                Investors
              </Link>
              <Link href="/careers" className="block p-3 rounded-xl hover:bg-emerald-50 font-semibold text-slate-700 hover:text-emerald-700 transition-colors">
                Careers
              </Link>
              <Link href="#contact" className="block p-3 rounded-xl hover:bg-emerald-50 font-semibold text-slate-700 hover:text-emerald-700 transition-colors">
                Contact
              </Link>
              <div className="pt-4 border-t border-slate-200">
                <p className="font-semibold text-slate-800 mb-3">Contact Us</p>
                <div className="space-y-2 text-sm">
                  <a href="mailto:hello@ez-move.app" className="block text-emerald-700 font-mono">hello@ez-move.app</a>
                  <a href="mailto:support@ez-move.app" className="block text-emerald-700 font-mono">support@ez-move.app</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
