import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="https://www.hunehar.org/wp-content/uploads/2020/05/cropped-10380131_310573749097898_1415088628236221935_o-203x72.jpg"
                  alt="Hunehar Logo"
                  height={120}
                  width={250}
                  priority
                />
              </Link>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              Eradicating illiteracy, one step at a time.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/hunehar/"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.facebook.com/hunehar"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://x.com/hunehar_"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="http://www.youtube.com/@huneharwelfareschool6752"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <Link href="tel:+923410510902">
              <span className="text-xl text-gray-100 font-bold hover:text-white transition-colors leading-relaxed">
                Call:
              </span>
            </Link>

            <p className="text-gray-400 leading-relaxed text-lg">
              0341 0510902, <br />
              0336 5426276
            </p>
            <Link href="mailto:info@hunehar.org">
              <span className="text-xl font-bold text-gray-100 font-bold hover:text-white transition-colors leading-relaxed">
                Email:
              </span>
            </Link>

            <p className="text-gray-400 leading-relaxed text-lg">
              info@hunehar.org
            </p>

            <div>
              <span className="text-xl font-bold">Address:</span>
              <p className="text-gray-400 leading-relaxed text-lg">
                Hunehar Welfare School, Merabadi <br />
                Islamabad, Pakistan-44000
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/school"
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  Our School
                </Link>
              </li>
              <li>
                <Link
                  href="/impact"
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  Our Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  Stories & Reports
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/donate"
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved/volunteer"
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  Sponsor A Child
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <p className="text-gray-400 text-lg">
              Built with Love 💙 © Hunehar {new Date().getFullYear()}
            </p>
            <div className="flex flex-wrap justify-center space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Service Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
