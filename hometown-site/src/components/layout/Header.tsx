"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const quickLinks = [
  {
    name: "Pay Rent",
    href: "https://www.communityresport.com/",
    icon: "/images/icons/pay-rent.svg"
  },
  {
    name: "Apply Now",
    href: "https://screen.boompay.app/units?token=eOfROgah7PR3MWll3GUm",
    icon: "/images/icons/apply.svg"
  },
  {
    name: "Reserve RV Spot",
    href: "https://www.campspot.com/book/towne-north",
    icon: "/images/icons/reserve-rv.svg"
  },
];

const communitiesDropdown = [
  { name: "All Communities", href: "/communities" },
  { name: "Ohio Communities", href: "/communities#ohio" },
  { name: "Texas Communities", href: "/communities#texas" },
  { name: "Michigan Communities", href: "/communities#michigan" },
];

const residentsDropdown = [
  { name: "Future Residents", href: "/future-residents" },
  { name: "Current Residents", href: "/current-residents" },
  { name: "Home Improvements", href: "/home-improvement-request" },
];

const availableHomesDropdown = [
  { name: "Search All Homes", href: "/search-results" },
  { name: "Rent-To-Own", href: "/search-results?rent-to-own=yes" },
  { name: "Financing Available", href: "/search-results?financing=yes" },
];

const companyDropdown = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
  { name: "Privacy Policy", href: "/privacy" },
];

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "pt", name: "Português" },
];

function Dropdown({ label, items, isOpen, onToggle }: {
  label: string;
  items: { name: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) onToggle();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-1 text-gray-700 hover:text-primary-dark font-medium transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {label}
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary-dark"
              onClick={onToggle}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Top bar with quick links */}
      <div className="bg-primary-dark text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between">
            <span className="hidden sm:block font-medium">Quick Links</span>
            <div className="flex items-center space-x-6">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Image src={link.icon} alt="" width={16} height={16} className="opacity-90" />
                  <span className="hidden sm:inline">{link.name}</span>
                </a>
              ))}

              {/* Language Selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-1 hover:text-accent transition-colors"
                >
                  {languages.find(l => l.code === currentLang)?.name}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {langMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm ${currentLang === lang.code ? 'bg-primary/10 text-primary-dark' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-dark.svg"
                alt="Hometown Communities"
                width={200}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Dropdown
              label="Communities"
              items={communitiesDropdown}
              isOpen={openDropdown === 'communities'}
              onToggle={() => toggleDropdown('communities')}
            />
            <Dropdown
              label="Residents"
              items={residentsDropdown}
              isOpen={openDropdown === 'residents'}
              onToggle={() => toggleDropdown('residents')}
            />
            <Dropdown
              label="Available Homes"
              items={availableHomesDropdown}
              isOpen={openDropdown === 'homes'}
              onToggle={() => toggleDropdown('homes')}
            />
            <Dropdown
              label="Company"
              items={companyDropdown}
              isOpen={openDropdown === 'company'}
              onToggle={() => toggleDropdown('company')}
            />
            <a
              href="https://www.communityresport.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-dark font-medium transition-colors bg-accent/20 px-3 py-1 rounded"
            >
              Pay Rent
            </a>
          </div>

          {/* Resident Login Button */}
          <div className="hidden lg:block">
            <a
              href="https://www.communityresport.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-400 transition-colors"
            >
              Resident Login
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-dark hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-4">
              {/* Communities */}
              <div>
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Communities</p>
                {communitiesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-primary-dark hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Residents */}
              <div>
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Residents</p>
                {residentsDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-primary-dark hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Available Homes */}
              <div>
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Available Homes</p>
                {availableHomesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-primary-dark hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Company */}
              <div>
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Company</p>
                {companyDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-primary-dark hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Quick Links */}
              <div className="border-t pt-4">
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Quick Links</p>
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-primary-dark hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image src={link.icon} alt="" width={16} height={16} />
                    {link.name}
                  </a>
                ))}
              </div>

              <a
                href="https://www.communityresport.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 mt-4 text-center rounded-md bg-accent px-4 py-3 font-semibold text-gray-900 shadow-sm hover:bg-orange-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resident Login
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
