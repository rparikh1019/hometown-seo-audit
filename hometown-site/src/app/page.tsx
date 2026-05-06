import Image from "next/image";
import Link from "next/link";
import { communities } from "@/data/communities";

const faqCategories = [
  { name: "General", icon: "/images/icons/general.svg", count: 26, href: "/faq#general" },
  { name: "Billing", icon: "/images/icons/billing.svg", count: 15, href: "/faq#billing" },
  { name: "Financing", icon: "/images/icons/financing.svg", count: 4, href: "/faq#financing" },
  { name: "Maintenance", icon: "/images/icons/maintenance.svg", count: 6, href: "/faq#maintenance" },
  { name: "Pet Restrictions", icon: "/images/icons/pet-restrictions.svg", count: 3, href: "/faq#pets" },
];

const testimonials = [
  { name: "Shawn B.", community: "Plaza MHP", initials: "SB" },
  { name: "Janet", community: "Towne North", initials: "J" },
  { name: "Barbara", community: "Plaza MHP", initials: "B" },
  { name: "Chris M.", community: "Jackson MHP", initials: "CM" },
];

export default function Home() {
  return (
    <>
      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Hometown Communities",
            url: "https://hometowncommunities.com",
            logo: "https://hometowncommunities.com/images/logo-dark.svg",
            description: "Quality manufactured home communities with affordable, comfortable living in desirable locations across Texas, Ohio, and Michigan.",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              availableLanguage: ["English", "Spanish"]
            }
          })
        }}
      />

      {/* Hero Section - Matching their exact design */}
      <section className="relative min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/homepage-woman.jpg"
            alt="Welcome to Hometown Communities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Welcome to Hometown Communities!
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              There&apos;s no place like home. See why residents across our communities love living at Hometown today.
            </p>

            {/* Search Form */}
            <div className="mt-8 bg-white rounded-lg shadow-lg p-4">
              <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="city" className="sr-only">City</label>
                  <select
                    id="city"
                    name="city"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary"
                  >
                    <option value="">City</option>
                    <option value="ada">Ada, OH</option>
                    <option value="harlingen">Harlingen, TX</option>
                    <option value="jackson">Jackson, MI</option>
                    <option value="kilgore">Kilgore, TX</option>
                    <option value="laredo">Laredo, TX</option>
                    <option value="lima">Lima, OH</option>
                    <option value="tiffin">Tiffin, OH</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label htmlFor="state" className="sr-only">State</label>
                  <select
                    id="state"
                    name="state"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary"
                  >
                    <option value="">State</option>
                    <option value="mi">Michigan</option>
                    <option value="oh">Ohio</option>
                    <option value="tx">Texas</option>
                  </select>
                </div>
                <Link
                  href="/communities"
                  className="rounded-md bg-primary px-8 py-3 text-center font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Search
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Find A Home Near You - Map Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Find A Home Near You
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Community Cards by Location */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {communities.map((community) => (
                <Link
                  key={community.id}
                  href={`/community/${community.slug}`}
                  className="group relative aspect-square rounded-lg overflow-hidden"
                >
                  <Image
                    src={community.heroBackground || community.images[0]}
                    alt={`${community.location.city}, ${community.location.state}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <p className="font-semibold text-sm">{community.location.city}</p>
                    <p className="text-xs opacity-90">{community.location.state}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Static Map Placeholder */}
            <div className="bg-gray-100 rounded-lg aspect-square lg:aspect-auto lg:h-full min-h-[400px] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="mx-auto h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="font-medium">Interactive Map</p>
                <p className="text-sm">7 Communities across 3 States</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Manufactured Homes */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Available Manufactured Homes
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Browse our selection of quality manufactured homes available for purchase or rent across all communities.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {communities.slice(0, 4).map((community) => (
              <article key={community.id} className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-card-hover transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={community.images[0]}
                    alt={`Homes at ${community.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-accent text-gray-900 text-xs font-bold px-2 py-1 rounded">
                    {community.homePrices.range.split('-')[0]}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{community.name}</h3>
                  <p className="text-sm text-gray-500">{community.location.city}, {community.location.state}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {community.homePrices.typicalSpecs || "Multiple floor plans"}
                    </span>
                    <Link
                      href={`/community/${community.slug}`}
                      className="text-primary-dark text-sm font-medium hover:underline"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/search-results"
              className="inline-block rounded-md bg-primary-dark px-8 py-3 font-semibold text-white hover:bg-primary transition-colors"
            >
              View All Available Homes
            </Link>
          </div>
        </div>
      </section>

      {/* Purchasing Options / Financing */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Purchasing Options</h2>
              <p className="mt-4 text-gray-600">
                Our focus is to offer affordable housing options to both current and future residents.
                If you&apos;re interested in purchasing a home, we provide financing options for manufactured
                homes within our communities.
              </p>
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold text-primary-dark">We Finance Manufactured Homes</h3>
                <p className="mt-2 text-gray-600">
                  Find your dream home in one of our communities today with financing available.
                </p>
                <Link
                  href="/search-results?financing=yes"
                  className="mt-4 inline-block rounded-md bg-accent px-6 py-2 font-semibold text-gray-900 hover:bg-orange-400 transition-colors"
                >
                  Available Homes
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/communities/danville.jpg"
                alt="Purchase a manufactured home with financing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We aim to provide convenient accessibility for payments, maintenance requests,
            important documents, pet policies, and general information.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {faqCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="bg-white rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="mx-auto w-16 h-16 mb-4 relative">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{category.count} questions</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-block rounded-md border-2 border-primary-dark px-8 py-3 font-semibold text-primary-dark hover:bg-primary-dark hover:text-white transition-colors"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Residents Say
          </h2>

          <div className="flex justify-center gap-6 flex-wrap">
            {testimonials.map((person) => (
              <div key={person.name} className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center border-4 border-primary/30">
                  <span className="text-2xl font-bold text-primary-dark">{person.initials}</span>
                </div>
                <p className="mt-3 font-medium text-gray-900">{person.name}</p>
                <p className="text-sm text-gray-500">{person.community}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-dark py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Find Your New Home?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Contact us today to schedule a tour of our communities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-accent px-8 py-4 text-lg font-semibold text-gray-900 shadow-sm hover:bg-orange-400 transition-colors"
            >
              Schedule a Tour
            </Link>
            <a
              href="https://screen.boompay.app/units?token=eOfROgah7PR3MWll3GUm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-primary-dark transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
