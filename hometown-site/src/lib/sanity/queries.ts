import { groq } from "next-sanity";

// Example GROQ queries - customize based on your Sanity schema

export const settingsQuery = groq`
  *[_type == "settings"][0] {
    title,
    description,
    ogImage
  }
`;

export const communityListQuery = groq`
  *[_type == "community"] | order(name asc) {
    _id,
    name,
    slug,
    location,
    description,
    featuredImage
  }
`;

export const communityBySlugQuery = groq`
  *[_type == "community" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    location,
    description,
    featuredImage,
    amenities,
    floorPlans,
    gallery
  }
`;

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    title,
    heroSection,
    featuredCommunities[]-> {
      _id,
      name,
      slug,
      location,
      featuredImage
    },
    contentSections
  }
`;
