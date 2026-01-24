import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Hunehar</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium">
              Donate Now
            </Button>
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
