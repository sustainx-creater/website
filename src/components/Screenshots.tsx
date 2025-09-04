'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const screenshots = [
  {
    src: '/assets/screenshots/1.png',
    title: 'Dashboard Overview',
    description: 'Your complete relocation journey at a glance'
  },
  {
    src: '/assets/screenshots/2.png',
    title: 'Visa Tracker',
    description: 'Real-time visa application status updates'
  },
  {
    src: '/assets/screenshots/3.png',
    title: 'AI Assistant',
    description: 'Get instant answers to your relocation questions'
  },
  {
    src: '/assets/screenshots/4.png',
    title: 'Housing Finder',
    description: 'Discover verified accommodations with insights'
  },
  {
    src: '/assets/screenshots/5.png',
    title: 'Community Hub',
    description: 'Connect with fellow immigrants and locals'
  }
]

export default function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const updateCarousel = (newIndex: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    
    const validIndex = (newIndex + screenshots.length) % screenshots.length
    setCurrentIndex(validIndex)
    
    setTimeout(() => {
      setIsAnimating(false)
    }, 800)
  }

  const goToPrevious = () => updateCarousel(currentIndex - 1)
  const goToNext = () => updateCarousel(currentIndex + 1)

  const getCardClass = (index: number) => {
    const offset = (index - currentIndex + screenshots.length) % screenshots.length
    
    if (offset === 0) return 'center'
    if (offset === 1) return 'right-1'
    if (offset === 2) return 'right-2'
    if (offset === screenshots.length - 1) return 'left-1'
    if (offset === screenshots.length - 2) return 'left-2'
    return 'hidden'
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  return (
    <>
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center">
          {/* Background Title */}
          <h1 className="about-title">APP SCREENSHOTS</h1>

          {/* Carousel - Centered Container */}
          <div className="carousel-container">
            <button className="nav-arrow left" onClick={goToPrevious}>‹</button>
            <div className="carousel-track">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`card ${getCardClass(index)}`}
                  data-index={index}
                  onClick={() => updateCarousel(index)}
                >
                  <img src={screenshot.src} alt={screenshot.title} />
                </div>
              ))}
            </div>
            <button className="nav-arrow right" onClick={goToNext}>›</button>
          </div>

          {/* Screenshot Info */}
          <div className="member-info">
            <h2 className="member-name">{screenshots[currentIndex].title}</h2>
            <p className="member-role">{screenshots[currentIndex].description}</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .about-title {
          font-size: 7.5rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          position: relative;
          top: 0;
          left: 0;
          transform: none;
          pointer-events: none;
          white-space: nowrap;
          font-family: "Arial Black", "Arial Bold", Arial, sans-serif;
          background: linear-gradient(
            to bottom,
            rgb(16 185 129 / 35%) 30%,
            rgb(255 255 255 / 0%) 76%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-align: center;
          margin-bottom: 40px;
        }

        .carousel-container {
          width: 1200px;
          height: 450px;
          position: relative;
          perspective: 1000px;
          margin: 0 auto;
          left: 0;
        }

        .carousel-track {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .card {
          position: absolute;
          width: 280px;
          height: 380px;
          background: none;
          border-radius: 0;
          overflow: visible;
          box-shadow: none;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          left: 50%;
          top: 50%;
          transform-origin: center center;
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .card.center {
          z-index: 10;
          transform: translate(-50%, -50%) scale(1.1) translateZ(0);
        }

        .card.center img {
          filter: none;
        }

        .card.left-2 {
          z-index: 1;
          transform: translate(-50%, -50%) translateX(-400px) scale(0.8) translateZ(-300px);
          opacity: 0.7;
        }

        .card.left-2 img {
          filter: grayscale(100%);
        }

        .card.left-1 {
          z-index: 5;
          transform: translate(-50%, -50%) translateX(-200px) scale(0.9) translateZ(-100px);
          opacity: 0.9;
        }

        .card.left-1 img {
          filter: grayscale(100%);
        }

        .card.right-1 {
          z-index: 5;
          transform: translate(-50%, -50%) translateX(200px) scale(0.9) translateZ(-100px);
          opacity: 0.9;
        }

        .card.right-1 img {
          filter: grayscale(100%);
        }

        .card.right-2 {
          z-index: 1;
          transform: translate(-50%, -50%) translateX(400px) scale(0.8) translateZ(-300px);
          opacity: 0.7;
        }

        .card.right-2 img {
          filter: grayscale(100%);
        }

        .card.hidden {
          opacity: 0;
          pointer-events: none;
        }

        .member-info {
          text-align: center;
          margin-top: 40px;
          transition: all 0.5s ease-out;
        }

        .member-name {
          color: rgb(16, 185, 129);
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          position: relative;
          display: inline-block;
        }

        .member-name::before,
        .member-name::after {
          content: "";
          position: absolute;
          top: 100%;
          width: 100px;
          height: 2px;
          background: rgb(16, 185, 129);
        }

        .member-name::before {
          left: -120px;
        }

        .member-name::after {
          right: -120px;
        }

        .member-role {
          color: #848696;
          font-size: 1.5rem;
          font-weight: 500;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 10px 0;
          margin-top: -15px;
          position: relative;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(16, 185, 129, 0.6);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          transition: all 0.3s ease;
          font-size: 1.5rem;
          border: none;
          outline: none;
          padding-bottom: 4px;
        }

        .nav-arrow:hover {
          background: rgba(16, 185, 129, 0.8);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-arrow.left {
          left: 20px;
          padding-right: 3px;
        }

        .nav-arrow.right {
          right: 20px;
          padding-left: 3px;
        }

        @media (max-width: 768px) {
          .about-title {
            font-size: 4.5rem;
          }

          .carousel-container {
            width: 100%;
            left: 0;
            transform: none;
          }

          .card {
            width: 200px;
            height: 280px;
          }

          .card.left-2 {
            transform: translate(-50%, -50%) translateX(-250px) scale(0.8) translateZ(-300px);
          }

          .card.left-1 {
            transform: translate(-50%, -50%) translateX(-120px) scale(0.9) translateZ(-100px);
          }

          .card.center {
            transform: translate(-50%, -50%) scale(1.1) translateZ(0);
          }

          .card.right-1 {
            transform: translate(-50%, -50%) translateX(120px) scale(0.9) translateZ(-100px);
          }

          .card.right-2 {
            transform: translate(-50%, -50%) translateX(250px) scale(0.8) translateZ(-300px);
          }

          .member-name {
            font-size: 2rem;
          }

          .member-role {
            font-size: 1.2rem;
          }

          .member-name::before,
          .member-name::after {
            width: 50px;
          }

          .member-name::before {
            left: -70px;
          }

          .member-name::after {
            right: -70px;
          }
        }
      `}</style>
    </>
  )
}
