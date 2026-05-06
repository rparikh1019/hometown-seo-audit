import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

// Define a flexible type for Sanity image sources
type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
