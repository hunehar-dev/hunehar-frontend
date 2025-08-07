'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Hunehar</span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Programs
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Impact
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
              Donate Now
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Programs
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Impact
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors w-full">
                Donate Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
