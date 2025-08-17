'use client'

import { motion, useMotionValue, useSpring, animate, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function StudentStories() {
  const reels = Array.from({ length: 13 }, (_, i) => ({
    id: i,
    src: 'https://videos.pexels.com/video-files/6010489/6010489-uhd_1440_2560_25fps.mp4',
    alt: `Student Story ${i + 1}`,
  }))

  const duplicatedReels = [...reels, ...reels]

  const videoRefs = useRef([])
  const [hoveredVideoIndex, setHoveredVideoIndex] = useState(null)
  const [selectedReel, setSelectedReel] = useState(null)

  const reelWidth = 300
  const reelGap = 24
  const totalWidthOfOneSet = reels.length * (reelWidth + reelGap)

  const x = useMotionValue(0)
  const xSpring = useSpring(x, {
    stiffness: 150,
    damping: 25,
    mass: 0.5,
  })

  const animationControls = useRef(null)

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, duplicatedReels.length)

    const animation = animate(x, -totalWidthOfOneSet, {
      ease: 'linear',
      duration: 60,
      repeat: Infinity,
    })

    animationControls.current = animation

    return () => {
      animationControls.current?.stop()
    }
  }, [x, totalWidthOfOneSet, duplicatedReels.length])

  useEffect(() => {
    if (selectedReel) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedReel])

  const handleContainerHoverStart = () => {
    if (!selectedReel) {
      animationControls.current?.pause()
    }
  }

  const handleContainerHoverEnd = () => {
    if (!selectedReel) {
      animationControls.current?.resume()
    }
  }

  const handleVideoHoverStart = (index) => {
    setHoveredVideoIndex(index)
    const videoElement = videoRefs.current[index]
    if (videoElement) {
      videoElement.play().catch((error) => console.log('Video play error:', error))
    }
  }

  const handleVideoHoverEnd = (index) => {
    setHoveredVideoIndex(null)
    const videoElement = videoRefs.current[index]
    if (videoElement) {
      videoElement.pause()
    }
  }

  const handleReelClick = (reel) => {
    animationControls.current?.pause()
    setSelectedReel(reel)
  }

  const handleCloseModal = () => {
    setSelectedReel(null)
    animationControls.current?.resume()
  }

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-gray-900 text-center mb-16"
        >
          Student Stories
        </motion.h2>

        <div
          className="w-full overflow-hidden"
          onMouseEnter={handleContainerHoverStart}
          onMouseLeave={handleContainerHoverEnd}
        >
          <motion.div className="flex gap-6" style={{ x: xSpring }}>
            {duplicatedReels.map((reel, index) => (
              <motion.div
                key={`${reel.id}-${index}`}
                onClick={() => handleReelClick(reel)}
                // whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative flex-shrink-0 w-[300px] h-[480px] rounded-2xl shadow-lg overflow-hidden bg-black cursor-pointer"
                onMouseEnter={() => handleVideoHoverStart(index)}
                onMouseLeave={() => handleVideoHoverEnd(index)}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={reel.src}
                  loop
                  muted
                  playsInline
                  controls={hoveredVideoIndex === index}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedReel && (
          <motion.div
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors text-5xl z-50"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              &times;
            </motion.button>

            <motion.div
              layoutId={`reel-card-${selectedReel.id}`}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[360px] h-auto max-h-[90vh] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                src={selectedReel.src}
                autoPlay
                controls
                loop
                playsInline
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}