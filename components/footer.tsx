import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="https://www.hunehar.org/wp-content/uploads/2020/05/cropped-10380131_310573749097898_1415088628236221935_o-203x72.jpg"
                alt="Hunehar Logo"
                width={180}
                height={52}
                priority
              />
            </Link>

            <p className="text-gray-400 text-[0.85rem] leading-relaxed max-w-xs">
              Eradicating illiteracy, one step at a time.
            </p>

            <div className="flex space-x-4 text-gray-400 mt-2 justify-center md:justify-start">
              <Link
                href="https://www.linkedin.com/company/huneharpk/posts/?feedView=all"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/hunehar/"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/hunehar"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/hunehar_"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="http://www.youtube.com/@huneharwelfareschool6752"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-2 gap-6 md:block space-y-4">
            <div>
              <span className="text-gray-200 font-medium text-[0.9rem]">
                Call:
              </span>
              <p className="text-gray-400 text-[0.85rem] leading-relaxed">
                0341 0510902 <br /> 0336 5426276
              </p>
            </div>
            <div>
              <span className="text-gray-200 font-medium text-[0.9rem]">
                Email:
              </span>
              <p className="text-gray-400 text-[0.85rem] leading-relaxed">
                info@hunehar.org
              </p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-gray-200 font-medium text-[0.9rem]">
                Address:
              </span>
              <p className="text-gray-400 text-[0.85rem] leading-relaxed">
                Hunehar Welfare School, Merabadi <br />
                Islamabad, Pakistan-44000
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-200 font-semibold uppercase mb-4 text-[0.95rem]">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
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
                    className="text-gray-400 hover:text-white text-[0.85rem]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-200 font-semibold uppercase mb-4 text-[0.95rem]">
              Support
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {["Donate", "Volunteer", "Sponsor a Child", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${
                        item === "Donate"
                          ? "donate"
                          : item === "Volunteer"
                          ? "get-involved/volunteer"
                          : item === "Contact Us"
                          ? "contact"
                          : "#"
                      }`}
                      className="text-gray-400 hover:text-white text-[0.85rem]"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <p className="text-gray-400 text-[0.8rem]">
              Built with Love 💙 © Hunehar {new Date().getFullYear()}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-[0.8rem]">
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
      </div>
    </footer>
  );
}
