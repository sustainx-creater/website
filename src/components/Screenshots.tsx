'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Smartphone, Zap, Palette } from 'lucide-react'
import ThreeBackground from './ThreeBackground'

const screenshots = [
  {
    id: 1,
    title: 'Screenshot 1',
    description: 'App main screen',
    image: '/assets/screenshots/1.png'
  },
  {
    id: 2,
    title: 'Screenshot 2',
    description: 'Feature highlight',
    image: '/assets/screenshots/2.png'
  },
  {
    id: 3,
    title: 'Screenshot 3',
    description: 'User dashboard',
    image: '/assets/screenshots/3.png'
  },
  {
    id: 4,
    title: 'Screenshot 4',
    description: 'Settings page',
    image: '/assets/screenshots/4.png'
  },
  {
    id: 5,
    title: 'Screenshot 5',
    description: 'Community section',
    image: '/assets/screenshots/5.png'
  }
]

export default function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section id="screenshots" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Three.js Background for Screenshots */}
      <ThreeBackground sectionType="screenshots" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            App <span className="text-amber-500">Screenshots</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Explore our intuitive interface
          </p>
          
          {/* Video Demo Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVideoModalOpen(true)}
            className="inline-flex items-center gap-3 bg-amber-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-amber-600"
          >
            <Play className="w-5 h-5" />
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Screenshot Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 z-10 bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white border border-amber-200/50 hover:border-amber-300"
            >
              <ChevronLeft className="w-6 h-6 text-amber-600" />
            </button>

            {/* Screenshot Display */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="mx-auto"
            >
              <div className="flex justify-center">
                {/* Show screenshot only, no extra frame */}
                <img
                  src={screenshots[currentIndex].image}
                  alt={screenshots[currentIndex].title}
                  className="w-64 h-auto object-contain shadow-2xl rounded-2xl border border-amber-200/30"
                />
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 z-10 bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white border border-amber-200/50 hover:border-amber-300"
            >
              <ChevronRight className="w-6 h-6 text-amber-600" />
            </button>
          </div>

          {/* Screenshot Info */}
          <motion.div
            key={`info-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-12"
          >
            <h3 className="text-3xl font-bold text-amber-600 mb-3">
              {screenshots[currentIndex].title}
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              {screenshots[currentIndex].description}
            </p>
          </motion.div>

          {/* Elegant Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-12">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-amber-500 w-10 shadow-lg' 
                    : 'bg-slate-300 hover:bg-amber-300 w-3'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
        >
          <div className="text-center group">
            <div className="bg-white rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 w-20 h-20">
              <Smartphone className="w-10 h-10 text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold text-amber-600 mb-3">Mobile First</h3>
            <p className="text-slate-600 font-light">Intuitive mobile design</p>
          </div>
          <div className="text-center group">
            <div className="bg-white rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 w-20 h-20">
              <Zap className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-600 mb-3">Lightning Fast</h3>
            <p className="text-slate-600 font-light">Instant access to information</p>
          </div>
          <div className="text-center group">
            <div className="bg-white rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 w-20 h-20">
              <Palette className="w-10 h-10 text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold text-amber-600 mb-3">Beautiful Design</h3>
            <p className="text-slate-600 font-light">Clean, modern interface</p>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blurred background overlay */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          {/* Popup modal with only close button and phone frame */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 -right-6 text-white bg-black/60 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-lg"
              aria-label="Close video modal"
              style={{ top: '-3rem', right: '-1.5rem' }}
            >
              ×
            </button>
            <div className="flex items-center justify-center">
              <div className="relative bg-black rounded-xl shadow-lg w-[205px] h-[460px] flex items-center justify-center border border-gray-400">
                {/* Modern punchhole camera */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-2.5 h-2.5 bg-gray-700 rounded-full border border-gray-300 shadow-sm"></div>
                </div>
                {/* Video inside less rounded phone, wider area */}
                <div className="bg-white rounded-lg overflow-hidden w-[192px] h-[440px] flex items-center justify-center">
                  <video controls playsInline autoPlay muted className="w-full h-full object-contain bg-black rounded-xl">
                    <source src="/assets/videos/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
