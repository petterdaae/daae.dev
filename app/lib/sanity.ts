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

export const experiencesQuery = '*[_type == "experience"]';
export const aboutQuery = '*[_type == "about"]';
