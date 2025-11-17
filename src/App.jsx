import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Navigation from './components/Navigation'

function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white/60 backdrop-blur">
      <div className="container mx-auto px-6 py-10 text-center text-gray-600">
        <p>Designed with care — playful yet professional. © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <div id="skills">
        <Skills />
      </div>
      <Footer />
    </div>
  )
}

export default App
