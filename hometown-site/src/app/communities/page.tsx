import { Metadata } from "next";
import Link from "next/link";
import { communities } from "@/data/communities";

export const metadata: Metadata = {
  title: "All Communities | Manufactured Home Communities in Texas, Ohio & Michigan",
  description:
    "Explore Hometown Communities' 7 manufactured home communities across Texas, Ohio, and Michigan. Find affordable homes starting at $15,000 with lot rent from $350/month. 55+ and all-ages communities available.",
  keywords: [
    "manufactured home communities",
    "mobile home parks",
    "affordable housing Texas",
    "affordable housing Ohio",
    "55+ communities Texas",
    "manufactured homes for sale",
    "mobile home communities near me",
  ],
  openGraph: {
    title: "All Communities | Hometown Communities",
    description:
      "Find your perfect manufactured home community. 7 locations across Texas, Ohio, and Michigan with homes starting at $15,000.",
    url: "https://hometowncommunities.com/communities",
  },
  alternates: {
    canonical: "https://hometowncommunities.com/communities",
  },
};

export default function CommunitiesPage() {
  // Group communities by state
  const byState = communities.reduce(
    (acc, community) => {
      const state = community.location.state;
      if (!acc[state]) acc[state] = [];
      acc[state].push(community);
      return acc;
    },
    {} as Record<string, typeof communities>
  );

  const stateNames: Record<string, string> = {
    TX: "Texas",
    OH: "Ohio",
    MI: "Michigan",
  };

  return (
    <>
      {/* JSON-LD ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Hometown Communities Locations",
            description: "Manufactured home communities across Texas, Ohio, and Michigan",
            numberOfItems: communities.length,
            itemListElement: communities.map((community, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "LocalBusiness",
                name: community.name,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: community.location.address,
                  addressLocality: community.location.city,
                  addressRegion: community.location.state,
                  postalCode: community.location.zip,
                  addressCountry: "US",
                },
                telephone: community.contact.phone,
                url: `https://hometowncommunities.com/community/${community.slug}`,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Communities</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl">
            Discover quality manufactured home communities across Texas, Ohio, and Michigan.
            Affordable homeownership with professional management and modern amenities.
          </p>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary-dark">{communities.length}</p>
              <p className="text-sm text-gray-600">Communities</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-dark">3</p>
              <p className="text-sm text-gray-600">States</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-dark">From $350</p>
              <p className="text-sm text-gray-600">Lot Rent/Month</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-dark">From $15K</p>
              <p className="text-sm text-gray-600">Home Prices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Communities by State */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {Object.entries(byState).map(([state, stateCommunities]) => (
            <div key={state} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b">
                {stateNames[state] || state}
                <span className="ml-3 text-lg font-normal text-gray-500">
                  ({stateCommunities.length} {stateCommunities.length === 1 ? "community" : "communities"})
                </span>
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {stateCommunities.map((community) => (
                  <article
                    key={community.id}
                    className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow overflow-hidden"
                  >
                    <div className="aspect-[16/9] bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium">
                        {community.location.city}, {community.location.state}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900">{community.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{community.tagline}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          {community.ageRestrictions}
                        </span>
                        {community.petPolicy.allowed && (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Pet Friendly
                          </span>
                        )}
                      </div>

                      <dl className="mt-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-gray-500">Home Prices:</dt>
                          <dd className="font-semibold text-gray-900">{community.homePrices.range}</dd>
                        </div>
                        {community.lotRent.amount && (
                          <div className="flex justify-between">
                            <dt className="text-gray-500">Lot Rent:</dt>
                            <dd className="font-semibold text-gray-900">{community.lotRent.amount}</dd>
                          </div>
                        )}
                      </dl>

                      <div className="mt-6 flex gap-3">
                        <Link
                          href={`/community/${community.slug}`}
                          className="flex-1 text-center rounded-md bg-primary-dark px-4 py-2 text-sm font-semibold text-white hover:bg-primary transition-colors"
                        >
                          View Details
                        </Link>
                        <a
                          href={`tel:${community.contact.phone}`}
                          className="flex-1 text-center rounded-md border border-primary-dark px-4 py-2 text-sm font-semibold text-primary-dark hover:bg-primary-dark hover:text-white transition-colors"
                        >
                          Call
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Ready to Find Your New Home?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Apply online in minutes with our 48-hour approval process.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://screen.boompay.app/units?token=eOfROgah7PR3MWll3GUm"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-orange-400 transition-colors"
            >
              Apply Now
            </a>
            <Link
              href="/contact"
              className="rounded-md bg-primary-dark px-8 py-4 text-lg font-semibold text-white hover:bg-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
