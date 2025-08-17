'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Heart, ChevronDown } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  {
    label: 'About',
    href: '/about',
    sublinks: [
      { href: '/about/mission', label: 'Our Mission & Vision' },
      { href: '/about/team', label: 'Our Team' },
      { href: '/about/history', label: 'Our History' },
    ],
  },
  { href: '/school', label: 'Our School' },
  { href: '/impact', label: 'Our Impact' },
  {
    label: 'Get Involved',
    href: '/get-involved',
    sublinks: [
      { href: '/get-involved/volunteer', label: 'Volunteer' },
      { href: '/get-involved/partner', label: 'Partner with Us' },
      { href: '/get-involved/careers', label: 'Careers' },
    ],
  },
  { href: '/stories', label: 'Stories & Reports' },
  { href: '/learn', label: 'Learn More' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const pathname = usePathname()

  const handleMobileDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <header className="bg-white/80 shadow-sm border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
            <Image src="https://www.hunehar.org/wp-content/uploads/2020/05/cropped-10380131_310573749097898_1415088628236221935_o-203x72.jpg" alt="Hunehar Logo" height={130} width={180} priority />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center space-x-1 text-gray-600 hover:text-blue-700 transition-colors duration-300 font-medium pb-1 ${
                    pathname.startsWith(link.href) && link.href !== '/' || pathname === link.href ? 'text-blue-700' : ''
                  }`}
                >
                  <span>{link.label}</span>
                  {link.sublinks && <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />}
                </Link>
                {link.sublinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="py-2">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition-colors"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/donate" className="hidden md:inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <Heart className="h-4 w-4" />
              <span>Donate Now</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-screen py-4 border-t border-gray-200' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.sublinks ? (
                  <>
                    <button
                      onClick={() => handleMobileDropdown(link.label)}
                      className="w-full flex justify-between items-center text-left py-3 px-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          openDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 ${
                        openDropdown === link.label ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="flex flex-col space-y-1 py-2 border-l border-gray-200">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link href="/donate" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                <Heart className="h-5 w-5 mr-2" />
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}