import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-4">
              <Image
                src="https://www.hunehar.org/wp-content/uploads/2020/05/cropped-10380131_310573749097898_1415088628236221935_o-203x72.jpg"
                alt="Hunehar Logo"
                width={180}
                height={52}
                priority
              />
            </Link>

            <p className="text-gray-400 text-[0.9rem] leading-relaxed mb-4 max-w-xs">
              Eradicating illiteracy, one step at a time.
            </p>

            <div className="flex space-x-4 text-gray-400">
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/hunehar/"
                target="_blank"
                className="hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/hunehar"
                target="_blank"
                className="hover:text-white"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/hunehar_"
                target="_blank"
                className="hover:text-white"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="http://www.youtube.com/@huneharwelfareschool6752"
                target="_blank"
                className="hover:text-white"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-200">
              Contact
            </h3>

            <p className="text-gray-400 text-[0.9rem] leading-relaxed">
              <span className="font-medium text-gray-200">Call:</span>
              <br />
              0341 0510902
              <br />
              0336 5426276
            </p>

            <p className="text-gray-400 text-[0.9rem]">
              <span className="font-medium text-gray-200">Email:</span>
              <br />
              info@hunehar.org
            </p>

            <p className="text-gray-400 text-[0.9rem] leading-relaxed">
              <span className="font-medium text-gray-200">Address:</span>
              <br />
              Hunehar Welfare School, Merabadi
              <br />
              Islamabad, Pakistan
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About Us",
                "Our School",
                "Our Impact",
                "Stories & Reports",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${
                      item === "Home"
                        ? ""
                        : item.toLowerCase().replace(/ /g, "-")
                    }`}
                    className="text-gray-400 hover:text-white text-[0.9rem]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/donate"
                  className="text-gray-400 hover:text-white text-[0.9rem]"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved/volunteer"
                  className="text-gray-400 hover:text-white text-[0.9rem]"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-[0.9rem]"
                >
                  Sponsor a Child
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white text-[0.9rem]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 text-center space-y-3">
          <p className="text-gray-400 text-[0.85rem]">
            Built with Love 💙 © Hunehar {new Date().getFullYear()}
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-[0.85rem]">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Service Policy",
              "Zakat Policy",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-gray-400 hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
