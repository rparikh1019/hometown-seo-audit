// Sanity document types - customize based on your schema

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Slug {
  _type: "slug";
  current: string;
}

export interface Settings {
  _type: "settings";
  title: string;
  description: string;
  ogImage?: SanityImage;
}

export interface Community {
  _id: string;
  _type: "community";
  name: string;
  slug: Slug;
  location: string;
  description?: string;
  featuredImage?: SanityImage;
  amenities?: string[];
  floorPlans?: FloorPlan[];
  gallery?: SanityImage[];
}

export interface FloorPlan {
  _key: string;
  name: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  price?: string;
  image?: SanityImage;
}

export interface HeroSection {
  headline: string;
  subheadline?: string;
  backgroundImage?: SanityImage;
  ctaText?: string;
  ctaLink?: string;
}

export interface HomePage {
  _type: "homePage";
  title: string;
  heroSection?: HeroSection;
  featuredCommunities?: Community[];
  contentSections?: ContentSection[];
}

export interface ContentSection {
  _key: string;
  _type: string;
  title?: string;
  content?: unknown[]; // Portable Text blocks
}
