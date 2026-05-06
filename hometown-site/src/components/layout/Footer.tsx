import Image from "next/image";
import Link from "next/link";
import { communities } from "@/data/communities";

const footerNavigation = {
  search: [
    { name: "Communities", href: "/communities" },
    { name: "Search Homes", href: "/search-results" },
    { name: "Rent-To-Own", href: "/search-results?status=rent-to-own" },
  ],
  quickLinks: [
    { name: "Home Improvements", href: "/home-improvement-request" },
    { name: "Future Residents", href: "/future-residents" },
    { name: "Current Residents", href: "/current-residents" },
  ],
  payments: [
    { name: "Resident Login", href: "https://www.communityresport.com/", external: true },
    { name: "Pay Rent", href: "https://www.communityresport.com/", external: true },
    { name: "Resident Application", href: "https://screen.boompay.app/units?token=eOfROgah7PR3MWll3GUm", external: true },
  ],
  company: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="col-span-2">
            <Link href="/">
              <Image
                src="/images/logo-light.svg"
                alt="Hometown Communities"
                width={180}
                height={45}
              />
            </Link>
            <p className="mt-4 text-primary-light text-sm max-w-xs">
              We understand the importance of finding a place to call home. We strive to provide
              a welcoming and secure environment where our residents can relax and enjoy their
              living space.
            </p>
            {/* Equal Housing & Accessibility Icons */}
            <div className="mt-6 flex items-center gap-4">
              <Image
                src="/images/icons/equal-housing.svg"
                alt="Equal Housing Opportunity"
                width={40}
                height={40}
                className="opacity-80"
              />
              <Image
                src="/images/icons/handicap.svg"
                alt="Handicap Accessible"
                width={32}
                height={32}
                className="opacity-80"
              />
            </div>
          </div>

          {/* Search */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Search
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.search.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-light hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-light hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payments & Apps */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Payments & Apps
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.payments.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-light hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-light hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-primary pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-primary-light text-sm">
            &copy; {currentYear} Hometown Communities
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <span className="text-primary-light text-xs">
              Designed By:
            </span>
            <a
              href="https://parkweb.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white text-sm font-medium"
            >
              parkweb
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
