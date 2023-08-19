import { createClient } from "@sanity/client";
import type { SanityClient } from "@sanity/client";

export const projectId = "9ijxh2qg";
export const dataset = "production";
export const apiVersion = "2023-07-01";

export function getClient(): SanityClient {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: "published",
  });
}

export const siteQuery = '*[_type == "site"]';
export const experiencesQuery = `
  *[_type == "experience"]{
    company,
    "imageUrl": image.asset->url,
    duration,
    keywords,
    description,
    ordering
  }
  |
  order(ordering asc)
`;
export const togglesQuery = '*[_type == "toggles"]';
