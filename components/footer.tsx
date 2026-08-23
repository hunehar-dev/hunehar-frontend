import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our School", href: "/school" },
  { label: "Our Impact", href: "/impact" },
  { label: "Stories & Reports", href: "/stories" },
];

const SUPPORT_LINKS = [
  { label: "Donate", href: "/get-involved/donate" },
  { label: "Volunteer", href: "/get-involved/volunteer" },
  { label: "Sponsor a Child", href: "/get-involved/donate" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/huneharpk/posts/?feedView=all",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hunehar/",
    Icon: Instagram,
  },
  { label: "Facebook", href: "https://www.facebook.com/hunehar", Icon: Facebook },
  { label: "Twitter", href: "https://x.com/hunehar_", Icon: Twitter },
  {
    label: "YouTube",
    href: "http://www.youtube.com/@huneharwelfareschool6752",
    Icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border">
      <div className="container-brand section-y">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <Link href="/" className="flex-none">
              <Image
                src="/images/logopng.png"
                alt="Hunehar"
                width={130}
                height={44}
                className="w-[130px] h-auto"
              />
            </Link>

            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
              Eradicating illiteracy, one step at a time.
            </p>

            <div className="flex space-x-4 text-brand-muted mt-2 justify-center md:justify-start">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="hover:text-brand-blue transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-2 gap-6 md:block space-y-4">
            <div>
              <span className="text-brand-navy font-medium text-sm">Call:</span>
              <p className="text-brand-muted text-sm leading-relaxed">
                0341 0510902 <br /> 0336 5426276
              </p>
            </div>
            <div>
              <span className="text-brand-navy font-medium text-sm">Email:</span>
              <p className="text-brand-muted text-sm leading-relaxed">
                info@hunehar.org
              </p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-brand-navy font-medium text-sm">
                Address:
              </span>
              <p className="text-brand-muted text-sm leading-relaxed">
                Hunehar Welfare School, Merabadi <br />
                Islamabad, Pakistan-44000
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-navy font-semibold uppercase mb-4 text-sm tracking-wide">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-brand-muted hover:text-brand-blue text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-brand-navy font-semibold uppercase mb-4 text-sm tracking-wide">
              Support
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {SUPPORT_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-brand-muted hover:text-brand-blue text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-border pt-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <p className="text-brand-muted text-xs">
              Built with Love 💙 © Hunehar {new Date().getFullYear()}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              {[
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-brand-muted hover:text-brand-blue transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
