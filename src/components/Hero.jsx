import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Instagram } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/' },
  { icon: Linkedin, href: 'https://linkedin.com/' },
  { icon: Instagram, href: 'https://instagram.com/' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      {/* dotted background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-white"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* soft gradient light overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(800px 400px at 10% 10%, rgba(99,102,241,0.15), transparent 50%), radial-gradient(800px 400px at 90% 20%, rgba(56,189,248,0.2), transparent 50%)',
        }}
      />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Left: Text */}
        <div className="flex flex-col justify-center py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl font-semibold text-gray-900 tracking-tight mb-4"
            style={{ fontFamily: '\'Shadows Into Light\', cursive' }}
          >
            Alex Johnson
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-xl sm:text-2xl text-gray-700 mb-8"
          >
            Full Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur border border-gray-200 shadow hover:-translate-y-0.5 transition-all"
              >
                <Icon className="h-6 w-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D Spline Scene */}
        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh]">
          <div className="absolute inset-0 rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
