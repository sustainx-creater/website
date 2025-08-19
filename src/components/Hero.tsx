'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Globe, Users } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useAnalytics } from './useUserDataCollection'
import { useGoogleAnalytics } from './GoogleAnalytics'

export default function Hero() {
  const { trackPageView, trackEvent } = useAnalytics()
  const { trackPageView: trackGAPageView, trackEvent: trackGAEvent } = useGoogleAnalytics()
  
  useEffect(() => {
    // Track page view for internal analytics (only if user consented)
    trackPageView('/home')
    
    // Track page view for Google Analytics (only if user consented)
    trackGAPageView('/home')
    
    // Load particles.js from HTTPS CDN with local fallback (fixes Netlify mixed-content blocking)
    const particlesScript = document.createElement('script');
    particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    particlesScript.async = true;
    
    // Fallback to local copy if CDN fails
    particlesScript.onerror = () => {
      const fallbackScript = document.createElement('script');
      fallbackScript.src = '/particles.js-master/particles.min.js';
      fallbackScript.async = true;
      fallbackScript.onload = initParticles;
      document.head.appendChild(fallbackScript);
    };
    
    const initParticles = () => {
      // Initialize particles with your exact configuration
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          "particles": {
            "number": {
              "value": 87,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffb400"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 144.30708547789706,
              "color": "#ffcb25",
              "opacity": 0.15232414578222467,
              "width": 1.2827296486924182
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
      }
    };

    particlesScript.onload = initParticles;
    document.head.appendChild(particlesScript);

    // Cleanup
    return () => {
      if (document.head.contains(particlesScript)) {
        document.head.removeChild(particlesScript);
      }
    };
  }, [trackPageView, trackGAPageView]); // Add missing dependencies

  return (
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Particles.js container */}
      <div 
        id="particles-js" 
        className="absolute inset-0 z-0"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#f5faf7'
        }}
      ></div>

      {/* Logo in top left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-4 left-4 md:top-8 md:left-8 z-20"
      >
        <div className="flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-lg rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-3 shadow-2xl border border-white/30">
          <img src="/assets/images/ez.png" alt="EZMove Logo" className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain" />
          <span className="text-lg md:text-2xl lg:text-3xl font-bold text-amber-600">EZMove</span>
        </div>
      </motion.div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-30"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-16 md:pt-0">
        {/* Main content with advanced 3D effects */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            ease: [0.6, 0.05, 0.01, 0.9]
          }}
          className="mb-12"
          style={{ perspective: '1000px' }}
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-slate-900 mb-6 tracking-tight relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="relative inline-block">
              <motion.span 
                className="text-amber-500 relative z-10"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(245, 158, 11, 0)",
                    "0 0 20px rgba(245, 158, 11, 0.3)",
                    "0 0 0px rgba(245, 158, 11, 0)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                EZMove
              </motion.span>
              <motion.span
                className="absolute inset-0 text-amber-300 blur-sm opacity-30"
                animate={{ 
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                EZMove
              </motion.span>
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Simplifying immigration to Ireland
          </motion.p>
        </motion.div>

        {/* Enhanced CTA Section with magnetic hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateY: 5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="#contact"
                onClick={() => {
                  trackEvent('cta_click', { button: 'get_started', location: 'hero' })
                  trackGAEvent('cta_click', { 
                    button_name: 'get_started',
                    location: 'hero',
                    event_category: 'engagement',
                    event_label: 'hero_get_started'
                  })
                }}
                className="group relative bg-amber-500 text-white px-12 py-5 rounded-full font-semibold text-lg flex items-center gap-3 shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 hover:bg-amber-600 overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
                  whileHover={{ 
                    scale: 1.1,
                    background: "linear-gradient(45deg, #F59E0B, #D97706, #B45309)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)"
                  }}
                />
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateY: -5 
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="#screenshots"
                onClick={() => {
                  trackEvent('cta_click', { button: 'view_demo', location: 'hero' })
                  trackGAEvent('cta_click', { 
                    button_name: 'view_demo',
                    location: 'hero',
                    event_category: 'engagement',
                    event_label: 'hero_view_demo'
                  })
                }}
                className="group bg-white/90 backdrop-blur-lg text-slate-700 px-12 py-5 rounded-full font-semibold text-lg border-2 border-slate-200/50 hover:border-amber-400 hover:text-amber-600 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
              >
                <span className="relative z-10">View Demo</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-50 to-emerald-50 opacity-0 group-hover:opacity-100 rounded-full"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-full"
                  style={{
                    background: "radial-gradient(circle at center, rgba(245,158,11,0.1) 0%, transparent 70%)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Premium Stats Section with advanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { icon: Users, value: "10K+", label: "Users", color: "amber", delay: 0 },
            { icon: Globe, value: "50+", label: "Countries", color: "emerald", delay: 0.1 },
            { icon: Smartphone, value: "99%", label: "Success", color: "amber", delay: 0.2 }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                rotateY: index === 1 ? 5 : index === 0 ? -5 : 5
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.5 + stat.delay,
                type: "spring",
                stiffness: 200
              }}
            >
              <div className="flex flex-col items-center">
                <motion.div 
                  className={`p-3 ${stat.color === 'amber' ? 'bg-amber-500/20' : 'bg-emerald-500/20'} rounded-2xl mb-3 group-hover:${stat.color === 'amber' ? 'bg-amber-500/30' : 'bg-emerald-500/30'} transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0] 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color === 'amber' ? 'text-amber-600' : 'text-emerald-600'}`} />
                </motion.div>
                <motion.h3 
                  className={`text-2xl font-bold ${stat.color === 'amber' ? 'text-amber-600' : 'text-emerald-600'} mb-1`}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fixed scroll indicator - moved to very bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div 
            className="w-6 h-10 border-2 border-amber-400/60 rounded-full p-1 bg-white/60 backdrop-blur-md shadow-xl"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-3 bg-amber-500 rounded-full mx-auto"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
