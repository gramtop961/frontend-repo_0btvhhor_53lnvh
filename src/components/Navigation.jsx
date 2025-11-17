import React from 'react'

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-tight text-gray-700">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white font-bold">AJ</span>
          <span className="ml-3 hidden sm:inline">Alex Johnson</span>
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}
