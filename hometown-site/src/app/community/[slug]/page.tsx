import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { communities, getCommunityBySlug, getAllCommunitySlugs } from "@/data/communities";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all communities
export async function generateStaticParams() {
  return getAllCommunitySlugs().map((slug) => ({ slug }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) {
    return {
      title: "Community Not Found",
    };
  }

  const title = `${community.name} | ${community.location.city}, ${community.location.state} Manufactured Home Community`;
  const description = `${community.description.slice(0, 150)}... Homes from ${community.homePrices.range}. ${community.ageRestrictions} community with ${community.amenities.slice(0, 3).join(", ")}.`;

  return {
    title,
    description,
    keywords: [
      `${community.location.city} manufactured homes`,
      `${community.location.city} mobile home park`,
      `${community.location.state} manufactured home community`,
      `affordable homes ${community.location.city}`,
      community.ageRestrictions === "55+ community" ? "55+ community" : "all ages community",
      "manufactured homes for sale",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://hometowncommunities.com/community/${community.slug}`,
      images: [
        {
          url: community.images[0] || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${community.name} - ${community.location.city}, ${community.location.state}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://hometowncommunities.com/community/${community.slug}`,
    },
  };
}

export default async function CommunityPage({ params }: Props) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) {
    notFound();
  }

  // JSON-LD LocalBusiness Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://hometowncommunities.com/community/${community.slug}`,
    name: community.name,
    alternateName: community.alternateName,
    description: community.description,
    url: `https://hometowncommunities.com/community/${community.slug}`,
    telephone: community.contact.phone,
    email: community.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: community.location.address,
      addressLocality: community.location.city,
      addressRegion: community.location.state,
      postalCode: community.location.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: community.homePrices.range,
    amenityFeature: community.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
    })),
    petsAllowed: community.petPolicy.allowed,
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-primary-dark">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/communities" className="text-gray-500 hover:text-primary-dark">
                Communities
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{community.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-primary-dark text-white py-16 overflow-hidden">
        {community.heroBackground && (
          <div className="absolute inset-0">
            <Image
              src={community.heroBackground}
              alt=""
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
        )}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light text-sm font-medium uppercase tracking-wider">
              {community.tagline}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              {community.name}
            </h1>
            <p className="mt-4 text-xl text-blue-100">{community.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${community.contact.phone}`}
                className="rounded-md bg-accent px-6 py-3 text-lg font-semibold text-gray-900 hover:bg-orange-400 transition-colors"
              >
                Call {community.contact.phone}
              </a>
              <a
                href="https://screen.boompay.app/units?token=eOfROgah7PR3MWll3GUm"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border-2 border-white px-6 py-3 text-lg font-semibold text-white hover:bg-white hover:text-primary-dark transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ownership Benefits Banner */}
      <section className="py-8 bg-accent/10 border-y border-accent/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <div className="text-left">
                <p className="font-bold text-gray-900">You OWN Your Home</p>
                <p className="text-sm text-gray-600">Build equity, not rent receipts</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-left">
                <p className="font-bold text-gray-900">48-Hour Approval</p>
                <p className="text-sm text-gray-600">Fast, simple process</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <div className="text-left">
                <p className="font-bold text-gray-900">Fixed Payments</p>
                <p className="text-sm text-gray-600">Home payments never change</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Home Prices
              </h3>
              <p className="mt-2 text-2xl font-bold text-primary-dark">
                {community.homePrices.range}
              </p>
              {community.homePrices.typicalSpecs && (
                <p className="mt-1 text-sm text-gray-600">{community.homePrices.typicalSpecs}</p>
              )}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Lot Rent
              </h3>
              <p className="mt-2 text-2xl font-bold text-primary-dark">
                {community.lotRent.amount || "Contact for pricing"}
              </p>
              {community.lotRent.notes && (
                <p className="mt-1 text-sm text-gray-600">{community.lotRent.notes}</p>
              )}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Community Type
              </h3>
              <p className="mt-2 text-2xl font-bold text-primary-dark">
                {community.ageRestrictions}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                {community.petPolicy.allowed ? "Pet Friendly" : "No Pets"}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Office Hours
              </h3>
              <p className="mt-2 text-lg font-semibold text-primary-dark">
                {community.contact.officeHours}
              </p>
              <p className="mt-1 text-sm text-gray-600">On-site management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Location */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Location</h2>
                <address className="mt-4 not-italic text-gray-600">
                  <p className="font-semibold">{community.name}</p>
                  <p>{community.location.address}</p>
                  <p>
                    {community.location.city}, {community.location.state} {community.location.zip}
                  </p>
                </address>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Amenities</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {community.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 text-green-500 mr-3 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Utilities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Utilities</h2>
                <dl className="mt-4 space-y-3">
                  {Object.entries(community.utilities).map(([key, value]) => (
                    <div key={key} className="flex">
                      <dt className="w-24 flex-shrink-0 text-gray-500 capitalize">{key}:</dt>
                      <dd className="text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Pet Policy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Pet Policy</h2>
                <div className="mt-4 bg-gray-50 rounded-lg p-6">
                  {community.petPolicy.allowed ? (
                    <>
                      <p className="text-green-700 font-semibold flex items-center">
                        <svg
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        Pets Welcome
                      </p>
                      <ul className="mt-3 text-gray-600 space-y-1">
                        <li>Maximum {community.petPolicy.maxPets} pets per home</li>
                        <li>Weight limit: {community.petPolicy.weightLimit}</li>
                        <li>
                          Restricted breeds: {community.petPolicy.restrictedBreeds.join(", ")}
                        </li>
                      </ul>
                    </>
                  ) : (
                    <p className="text-gray-600">No pets allowed at this community.</p>
                  )}
                </div>
              </div>

              {/* Nearby Services */}
              {community.nearbyServices && community.nearbyServices.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Nearby Services</h2>
                  <ul className="mt-4 space-y-2">
                    {community.nearbyServices.map((service, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column - Contact Card */}
            <div className="mt-12 lg:mt-0">
              <div className="sticky top-8 bg-white rounded-lg shadow-card-hover p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
                <div className="mt-6 space-y-4">
                  <a
                    href={`tel:${community.contact.phone}`}
                    className="flex items-center text-gray-600 hover:text-primary-dark"
                  >
                    <svg
                      className="h-5 w-5 mr-3 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    {community.contact.phone}
                  </a>
                  <a
                    href={`mailto:${community.contact.email}`}
                    className="flex items-center text-gray-600 hover:text-primary-dark"
                  >
                    <svg
                      className="h-5 w-5 mr-3 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    Email Us
                  </a>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href="https://screen.boompay.app/units?token=eOfROgah7PR3MWll3GUm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-md bg-accent px-4 py-3 text-center font-semibold text-gray-900 hover:bg-orange-400 transition-colors"
                  >
                    Apply Now
                  </a>
                  <Link
                    href={`/search-results?community=${community.id}`}
                    className="block w-full rounded-md bg-primary-dark px-4 py-3 text-center font-semibold text-white hover:bg-primary transition-colors"
                  >
                    View Available Homes
                  </Link>
                </div>

                <p className="mt-6 text-sm text-gray-500 text-center">
                  Office Hours: {community.contact.officeHours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Communities */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Other Communities</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communities
              .filter((c) => c.id !== community.id)
              .slice(0, 3)
              .map((c) => (
                <Link
                  key={c.id}
                  href={`/community/${c.slug}`}
                  className="block bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{c.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {c.location.city}, {c.location.state}
                  </p>
                  <p className="mt-2 text-sm text-primary-dark font-medium">
                    Homes from {c.homePrices.range}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
