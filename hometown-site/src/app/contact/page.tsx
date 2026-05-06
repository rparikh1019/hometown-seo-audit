import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { communities } from "@/data/communities";

export const metadata: Metadata = {
  title: "Contact Us | Hometown Communities",
  description: "Get in touch with Hometown Communities. Send us a message or contact your community manager directly for assistance.",
  openGraph: {
    title: "Contact Us | Hometown Communities",
    description: "Have questions? Contact Hometown Communities today.",
  },
  alternates: {
    canonical: "https://hometowncommunities.com/contact",
  },
};

const contactReasons = [
  "General Inquiry",
  "Schedule a Tour",
  "Maintenance Request",
  "Billing Question",
  "Application Status",
  "Other",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero with Background Image */}
      <section className="relative min-h-[300px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/contact-hero.jpg"
            alt="Contact Hometown Communities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-dark/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl">
            Have some questions for us? Send us a quick message or contact your community
            manager for more information.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a quick message!</h2>
              <p className="text-gray-600 mb-6">
                We&apos;re here to help you with any of your questions. You can contact us by submitting
                your information on the contact form below. One of our team members will respond to
                your inquiry promptly.
              </p>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                    Reason for Contact *
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary"
                  >
                    <option value="">Select a reason</option>
                    {contactReasons.map((reason) => (
                      <option key={reason} value={reason.toLowerCase().replace(/\s+/g, "-")}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="community" className="block text-sm font-medium text-gray-700 mb-1">
                    Select Your Community
                  </label>
                  <select
                    id="community"
                    name="community"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary"
                  >
                    <option value="">Select a community</option>
                    {communities.map((community) => (
                      <option key={community.id} value={community.id}>
                        {community.name} - {community.location.city}, {community.location.state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message * <span className="text-gray-400">(200 character limit)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={200}
                    required
                    placeholder="Please let us know how we can assist you today."
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary"
                  />
                  <p className="text-xs text-gray-400 mt-1">0 / 200</p>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-accent px-6 py-4 font-semibold text-gray-900 hover:bg-orange-400 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* FAQ Search Section */}
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h3>
                <p className="text-gray-600 text-sm mb-4">
                  View our most frequently asked questions from new and existing residents.
                </p>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-3 focus:border-primary focus:ring-primary"
                  />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <Link href="/faq" className="inline-block mt-4 text-primary-dark hover:underline font-medium">
                  View All FAQs &rarr;
                </Link>
              </div>

              {/* Ask Your Community Manager */}
              <div className="bg-primary/5 rounded-lg border border-primary/20 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ask Your Community Manager</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Does your question pertain to a certain community? Contact a community manager first.
                </p>
                <Link
                  href="/communities"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-gray-900 hover:bg-orange-400 transition-colors"
                >
                  Find My Community
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              {/* Follow Us */}
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/hometowncommunities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/hometown-communities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Resources */}
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Resources</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.communityresport.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-dark hover:underline"
                  >
                    <span className="mr-2">&rarr;</span> Pay Rent Online
                  </a>
                  <a
                    href="https://screen.boompay.app/units?token=eOfROgah7PR3MWll3GUm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-dark hover:underline"
                  >
                    <span className="mr-2">&rarr;</span> Apply Now
                  </a>
                  <Link href="/faq" className="flex items-center text-primary-dark hover:underline">
                    <span className="mr-2">&rarr;</span> Frequently Asked Questions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Contacts */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Community Contacts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {communities.map((community) => (
              <div key={community.id} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900">{community.name}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  {community.location.city}, {community.location.state}
                </p>
                <div className="space-y-2 text-sm">
                  <a
                    href={`tel:${community.contact.phone}`}
                    className="flex items-center text-primary-dark hover:underline"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {community.contact.phone}
                  </a>
                  <a
                    href={`mailto:${community.contact.email}`}
                    className="flex items-center text-primary-dark hover:underline"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Email
                  </a>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Office: {community.contact.officeHours}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
