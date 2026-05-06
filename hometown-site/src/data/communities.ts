// Community data extracted from Hometown Communities website
// This will be migrated to Sanity CMS

export interface Community {
  id: string;
  name: string;
  alternateName?: string;
  slug: string;
  tagline: string;
  description: string;
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
    fullAddress: string;
  };
  contact: {
    phone: string;
    email: string;
    officeHours: string;
  };
  lotRent: {
    amount: string | null;
    notes?: string;
  };
  homePrices: {
    range: string;
    typicalSpecs?: string;
  };
  petPolicy: {
    allowed: boolean;
    maxPets: number;
    weightLimit: string;
    restrictedBreeds: string[];
  };
  ageRestrictions: string;
  amenities: string[];
  utilities: Record<string, string>;
  nearbyServices?: string[];
  images: string[];
  heroBackground?: string;
}

export const communities: Community[] = [
  {
    id: "brook-park-mhp-llc",
    name: "Brook Park Estates",
    alternateName: "Brook Park MHP LLC",
    slug: "brook-park-mhp-llc",
    tagline: "Manufactured Home Community — Tiffin, Ohio",
    description: "Located in Tiffin, Ohio, this professionally managed manufactured home community emphasizes relaxed community living with cared-for grounds and easy access to town. The community offers affordable homeownership with fixed monthly lot rent payments, positioning itself as an alternative to traditional renting.",
    location: {
      address: "2400 S Township Road 119",
      city: "Tiffin",
      state: "OH",
      zip: "44883",
      fullAddress: "2400 S Township Road 119, Tiffin, OH 44883"
    },
    contact: {
      phone: "(419) 455-6058",
      email: "brookpark@hometowncommunities.com",
      officeHours: "9AM-5PM, Monday-Friday"
    },
    lotRent: {
      amount: null,
      notes: "Fixed monthly lot rent payments"
    },
    homePrices: {
      range: "$69,000-$72,900",
      typicalSpecs: "3 bedrooms, 2 bathrooms, 1,056-1,216 sq ft"
    },
    petPolicy: {
      allowed: true,
      maxPets: 2,
      weightLimit: "30 lbs per pet",
      restrictedBreeds: ["pit bulls", "rottweilers", "German shepherds", "bulldogs", "mastiffs", "huskies", "dobermans"]
    },
    ageRestrictions: "All ages",
    amenities: [
      "Quiet country setting",
      "Cared-for grounds",
      "Professional management",
      "Fixed monthly payments",
      "48-hour approval process"
    ],
    utilities: {
      water: "Private well water (included)",
      sewer: "Private sewer (included)",
      electric: "Resident arranges",
      gas: "Resident arranges",
      internet: "Resident arranges"
    },
    nearbyServices: [
      "Tiffin University (1.5 miles)",
      "Heidelberg University (2 miles)",
      "Mercy Health - Tiffin Hospital (3 miles)",
      "Walmart Supercenter",
      "Kroger grocery store",
      "Tiffin City Schools"
    ],
    images: [
      "/images/communities/brook-park.jpg"
    ],
    heroBackground: "/images/hero/tiffin-oh.webp"
  },
  {
    id: "danville-mhp-llc",
    name: "Danville MHP",
    slug: "danville-mhp-llc",
    tagline: "Manufactured Home Community — Kilgore, Texas",
    description: "A professionally managed manufactured home community in Kilgore, Texas with 51 home sites. The community emphasizes ownership benefits with fixed monthly payments and 48-hour approval processes.",
    location: {
      address: "1773 Spinks Chapman Road",
      city: "Kilgore",
      state: "TX",
      zip: "75662",
      fullAddress: "1773 Spinks Chapman Road, Kilgore, TX 75662"
    },
    contact: {
      phone: "(903) 615-3150",
      email: "danville@hometowncommunities.com",
      officeHours: "9AM-5PM, Monday-Friday"
    },
    lotRent: {
      amount: "$425-$450/month",
      notes: "Separate from home payment"
    },
    homePrices: {
      range: "$45,900-$72,900",
      typicalSpecs: "2-3 bedrooms, 2 bathrooms, 784-1056 sq ft"
    },
    petPolicy: {
      allowed: true,
      maxPets: 2,
      weightLimit: "30 lbs per pet",
      restrictedBreeds: ["pit bulls", "rottweilers", "German shepherds", "bulldogs"]
    },
    ageRestrictions: "All ages",
    amenities: [
      "Onsite manager",
      "Covered mailboxes",
      "Clean, quiet neighborhood",
      "Professional management",
      "Rural setting with open space"
    ],
    utilities: {
      water: "City water (included)",
      sewer: "City sewer (included)",
      electric: "SWEPCO/AEP (deregulated)",
      gas: "CenterPoint Energy",
      internet: "Multiple providers available"
    },
    nearbyServices: [
      "Kilgore College (3 miles)",
      "CHRISTUS Good Shepherd Medical Center (8 miles)",
      "Brookshire's grocery store",
      "Walmart Supercenter (Longview)",
      "Kilgore Independent School District",
      "East Texas Oil Museum"
    ],
    images: [
      "/images/communities/danville.jpg"
    ],
    heroBackground: "/images/hero/kilgore-tx.webp"
  },
  {
    id: "jackson-mhp",
    name: "Jackson Mobile Home Park",
    slug: "jackson-mhp",
    tagline: "Manufactured Home Community — Jackson, Michigan",
    description: "An all-ages manufactured home community offering a convenient Jackson location with well-managed home sites and a friendly neighborhood. The community emphasizes stability through fixed home payments.",
    location: {
      address: "2240 Brooklyn Road",
      city: "Jackson",
      state: "MI",
      zip: "49203",
      fullAddress: "2240 Brooklyn Road, Jackson, MI 49203"
    },
    contact: {
      phone: "(517) 784-9833",
      email: "jackson@hometowncommunities.com",
      officeHours: "Monday-Friday, 9AM-5PM"
    },
    lotRent: {
      amount: "From $475/month",
      notes: "Subject to annual adjustment"
    },
    homePrices: {
      range: "$72,900",
      typicalSpecs: "3 bed, 2 bath, 1,056 sqft"
    },
    petPolicy: {
      allowed: true,
      maxPets: 2,
      weightLimit: "30 lbs per pet",
      restrictedBreeds: ["pit bulls", "rottweilers", "German shepherds", "bulldogs"]
    },
    ageRestrictions: "All ages",
    amenities: [
      "Children's playground",
      "Community park with open green space",
      "Covered picnic areas",
      "Covered mailbox area",
      "On-site manager (Mon-Fri)",
      "Enforced community standards",
      "Brooklyn Road access to US-127 and I-94"
    ],
    utilities: {
      water: "Billed back through community",
      sewer: "Billed back through community",
      electric: "Consumers Energy",
      gas: "Consumers Energy"
    },
    nearbyServices: [
      "Henry Ford Allegiance Health (3 miles)",
      "Jackson College (4 miles)",
      "Meijer grocery store",
      "Walmart Supercenter",
      "Jackson Public Schools",
      "Cascades Falls Park",
      "Easy access to US-127 and I-94"
    ],
    images: [
      "/images/communities/jackson.jpg"
    ],
    heroBackground: "/images/hero/jackson-mi.webp"
  },
  {
    id: "northland-mhp",
    name: "Northland MHP",
    slug: "northland-mhp",
    tagline: "Manufactured Home Community — Ada, Ohio",
    description: "A manufactured home community in Ada, Ohio offering affordable living in a welcoming Ohio community within Ada village limits.",
    location: {
      address: "746 N. Main Street",
      city: "Ada",
      state: "OH",
      zip: "45810",
      fullAddress: "746 N. Main Street, Ada, OH 45810"
    },
    contact: {
      phone: "(419) 634-9997",
      email: "northland@hometowncommunities.com",
      officeHours: "9AM-5PM, Monday-Friday"
    },
    lotRent: {
      amount: "$395/month",
      notes: "Subject to annual adjustment"
    },
    homePrices: {
      range: "$64,900-$71,900"
    },
    petPolicy: {
      allowed: true,
      maxPets: 2,
      weightLimit: "30 lbs per pet",
      restrictedBreeds: ["pit bulls", "rottweilers", "German shepherds", "bulldogs"]
    },
    ageRestrictions: "All ages",
    amenities: [
      "Professionally managed",
      "Within Ada village limits",
      "City water and sewer",
      "Quiet, residential setting"
    ],
    utilities: {
      water: "Managed by community through Village of Ada",
      sewer: "Managed by community through Village of Ada",
      electric: "AEP Ohio - (800) 672-2231",
      gas: "Enbridge Gas Ohio - (800) 362-7557",
      internet: "Spectrum, T-Mobile Home Internet, or satellite"
    },
    nearbyServices: [
      "War Memorial Park (pool, playground)",
      "Ohio Northern University (0.8 miles)",
      "Community Markets grocery store",
      "Multiple dining options",
      "Lima Memorial Walk-In Care (15 miles)",
      "Ada Exempted Village Schools",
      "Ada Public Library"
    ],
    images: [
      "/images/communities/northland.jpg"
    ],
    heroBackground: "/images/hero/ada-oh.webp"
  },
  {
    id: "plaza-mhp",
    name: "Plaza Mobile Home Park",
    slug: "plaza-mhp",
    tagline: "Manufactured Home Community — Lima, Ohio",
    description: "A professionally managed, all-ages manufactured home community in Lima featuring rules enforced and residents can put down roots. Under new management with a long-term vision for families offering quiet, stable neighborhood living.",
    location: {
      address: "2145 N. Dixie Hwy",
      city: "Lima",
      state: "OH",
      zip: "45801",
      fullAddress: "2145 N. Dixie Hwy, Lima, OH 45801"
    },
    contact: {
      phone: "(567) 289-9030",
      email: "plaza@hometowncommunities.com",
      officeHours: "9 AM - 5 PM, Monday-Friday"
    },
    lotRent: {
      amount: "$395/month",
      notes: "Subject to annual adjustment"
    },
    homePrices: {
      range: "$39,000-$69,000"
    },
    petPolicy: {
      allowed: true,
      maxPets: 2,
      weightLimit: "30 lbs per pet",
      restrictedBreeds: ["Pit Bulls", "Rottweilers", "German Shepherds", "Bulldogs", "Bullmastiffs", "Siberian Huskies", "Doberman Pinschers", "Alaskan Malamutes"]
    },
    ageRestrictions: "All ages",
    amenities: [
      "Fixed home payments",
      "City water/sewer included",
      "On-site management Monday-Friday",
      "48-hour approval process"
    ],
    utilities: {
      electric: "AEP Ohio - (800) 672-2231",
      gas: "Enbridge Gas Ohio - (800) 362-7557",
      water: "Managed through community",
      sewer: "Managed through community",
      internet: "Spectrum, AT&T, T-Mobile, HughesNet, Starlink"
    },
    nearbyServices: [
      "McLean Teddy Bear Park",
      "Marimor Legacy Park (all-abilities facility)",
      "Faurot Park (lakes, splash pad, trails)",
      "Ottawa River Riverwalk (10-mile trail)",
      "Mercy Health - St. Rita's Medical Center (2.8 miles)",
      "Procter & Gamble (2.3 miles)",
      "Lima City Schools",
      "Walmart Supercenter",
      "Kroger grocery store"
    ],
    images: [
      "/images/communities/plaza.jpg"
    ],
    heroBackground: "/images/hero/lima-oh.webp"
  },
  {
    id: "posada-del-sol-mhp-llc",
    name: "Posada Del Sol",
    slug: "posada-del-sol-mhp-llc",
    tagline: "55+ Manufactured Home & RV Community — Harlingen, Texas",
    description: "A 55+ manufactured home and RV community in Harlingen, Texas situated along the Arroyo Colorado. The community emphasizes year-round sunshine (300+ days), warm winters, and fixed home payments with separate lot rent billing.",
    location: {
      address: "28513 Palm Court Drive",
      city: "Harlingen",
      state: "TX",
      zip: "78552",
      fullAddress: "28513 Palm Court Drive, Harlingen, TX 78552"
    },
    contact: {
      phone: "(956) 420-4287",
      email: "posadadelsol@hometowncommunities.com",
      officeHours: "Monday-Friday, 9AM-5PM"
    },
    lotRent: {
      amount: "Starting at $350/month",
      notes: "Subject to annual adjustment"
    },
    homePrices: {
      range: "$15,000 to $72,900"
    },
    petPolicy: {
      allowed: true,
      maxPets: 2,
      weightLimit: "30 lbs maximum per pet",
      restrictedBreeds: ["pit bulls", "rottweilers", "German shepherds", "bulldogs", "huskies", "dobermans", "alaskan malamutes"]
    },
    ageRestrictions: "55+ community",
    amenities: [
      "Three stocked fishing ponds",
      "Heated swimming pool (year-round)",
      "Jacuzzi",
      "Pool tables in rec hall",
      "Recreational hall for events",
      "Guest lodge rooms available",
      "On-site laundry facilities",
      "Community WiFi",
      "Birding areas",
      "Open green space",
      "Full-hookup RV sites (50-amp power)"
    ],
    utilities: {
      electric: "Billed back through community",
      wifi: "Included park-wide"
    },
    nearbyServices: [
      "Valley Baptist Medical Center (4.4 miles)",
      "Harlingen Medical Center (4.8 miles)",
      "South Padre Island (45 minutes)",
      "H-E-B",
      "Walmart",
      "Valley Vista Mall"
    ],
    images: [
      "/images/communities/posada-del-sol.jpg"
    ],
    heroBackground: "/images/hero/harlingen-tx.webp"
  },
  {
    id: "towne-north-mhc",
    name: "Towne North MHC",
    slug: "towne-north-mhc",
    tagline: "Manufactured Home Community — Laredo, Texas",
    description: "The only manufactured home community in the city, offering a way to own your home without paying Laredo's climbing real estate prices. Residents own homes outright with fixed payments.",
    location: {
      address: "301 International Blvd.",
      city: "Laredo",
      state: "TX",
      zip: "78045",
      fullAddress: "301 International Blvd., Laredo, TX 78045"
    },
    contact: {
      phone: "(956) 727-1222",
      email: "townenorth@hometowncommunities.com",
      officeHours: "9AM-5PM, Monday-Friday"
    },
    lotRent: {
      amount: "Starting at $565/month",
      notes: "Subject to annual adjustment"
    },
    homePrices: {
      range: "$60,900-$75,900"
    },
    petPolicy: {
      allowed: true,
      maxPets: 2,
      weightLimit: "30 lbs per pet",
      restrictedBreeds: ["pit bulls", "rottweilers", "German shepherds", "bulldogs", "bullmastiffs", "huskies", "dobermans", "Alaskan malamutes"]
    },
    ageRestrictions: "All ages",
    amenities: [
      "Laundry facility (on-site)",
      "Children's playground",
      "Covered mailbox areas",
      "On-site manager and maintenance (M-F)",
      "Digital application process",
      "RV sites available",
      "Direct International Boulevard access",
      "Proximity to I-35 and Loop 20"
    ],
    utilities: {
      water: "Billed back through community",
      sewer: "Billed back through community"
    },
    nearbyServices: [
      "Laredo Medical Center (5 miles)",
      "Doctors Hospital of Laredo",
      "Mall Del Norte shopping",
      "H-E-B grocery stores",
      "Laredo Independent School District",
      "Texas A&M International University (8 miles)",
      "Lake Casa Blanca International State Park",
      "Direct access to I-35 and Loop 20"
    ],
    images: [
      "/images/communities/towne-north.jpg"
    ],
    heroBackground: "/images/hero/laredo-tx.webp"
  }
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find(c => c.slug === slug);
}

export function getAllCommunitySlugs(): string[] {
  return communities.map(c => c.slug);
}
