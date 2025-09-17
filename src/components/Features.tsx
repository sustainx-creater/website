'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import BetaSignup from './BetaSignup'

const features = [
  {
    lottieFile: 'visa.json',
    title: 'Visa Application Tracker',
    description: 'Track your visa application status in real-time with detailed progress updates and notifications.',
    color: 'emerald'
  },
  {
    lottieFile: 'chatbot.json',
    title: 'AI-Powered Chatbot',
    description: 'Get instant answers to relocation questions with our intelligent RAG-enabled assistant.',
    color: 'teal'
  },
  {
    lottieFile: 'House.json',
    title: 'Housing Solutions',
    description: 'Find verified accommodation with detailed neighborhood insights and virtual tours.',
    color: 'cyan'
  },
  {
    lottieFile: 'community.json',
    title: 'Community Platform',
    description: 'Connect with fellow immigrants, join local groups, and build your network in Ireland.',
    color: 'blue'
  },
  {
    lottieFile: 'Library.json',
    title: 'Resource Library',
    description: 'Access comprehensive guides, articles, and resources about living and working in Ireland.',
    color: 'teal'
  },
  {
    lottieFile: 'secure.json',
    title: 'Secure & Private',
    description: 'Your personal data is protected with enterprise-grade security and privacy measures.',
    color: 'green'
  }
]

function Features() {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [lottieAnimations, setLottieAnimations] = useState<{[key: string]: any}>({});

  useEffect(() => {
    // Load all Lottie files
    const loadLottieFiles = async () => {
      try {
        const lottieFiles = ['visa.json', 'chatbot.json', 'House.json', 'community.json', 'Library.json', 'secure.json'];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const loadedAnimations: {[key: string]: any} = {};

        for (const file of lottieFiles) {
          const response = await fetch(`/assets/lottiefiles/${file}`);
          const animationData = await response.json();
          loadedAnimations[file] = animationData;
        }

        setLottieAnimations(loadedAnimations);
      } catch (error) {
        console.error('Error loading Lottie files:', error);
      }
    };

    loadLottieFiles();
  }, []);

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
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-justify">
            Everything you need to make your relocation journey smooth, informed, and successful
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="flex justify-center mb-6">
                {lottieAnimations[feature.lottieFile] ? (
                  <Lottie 
                    animationData={lottieAnimations[feature.lottieFile]} 
                    style={{ width: 140, height: 140 }}
                    loop={true}
                  />
                ) : (
                  <div className="w-36 h-36 bg-gray-300 rounded animate-pulse"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-justify">{feature.description}</p>
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
              Ready to Transform Relocation?
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Be part of our closed beta testing in Ireland and help shape the future of relocation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Download Now
              </motion.a>
              <motion.button
                onClick={() => setIsBetaModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300"
              >
                Join Beta Program
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Beta Signup Modal */}
      <BetaSignup 
        isOpen={isBetaModalOpen} 
        onClose={() => setIsBetaModalOpen(false)} 
      />
    </section>
  )
}

export default Features
