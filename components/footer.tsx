import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-2xl font-bold">Hunehar</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              Empowering communities through education and creating lasting change for a better tomorrow. Together, we
              build hope and opportunity for every child around the world.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                  Impact Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                  Corporate Sponsorship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Subscribe to Newsletter</h3>
            <p className="text-gray-400 mb-6 text-lg">
              Stay updated with our latest news, impact stories, and ways to get involved in our mission.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 py-3 px-4 rounded-md outline-none focus:border-blue-500 transition-colors"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-6 md:mb-0 text-lg">
              © 2024 Hunehar. All rights reserved. Making a difference, one child at a time.
            </p>
            <div className="flex space-x-8">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Transparency Report
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
