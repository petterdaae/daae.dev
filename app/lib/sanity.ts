import { createClient } from "@sanity/client";
import type { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const projectId = "9ijxh2qg";
export const dataset = "production";
export const apiVersion = "2023-07-01";

export function getClient(): SanityClient {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV !== "development",
    perspective:
      process.env.NODE_ENV == "development" ? "previewDrafts" : "published",
  });
}

export const siteQuery = '*[_type == "page" && path == "/"]';

export async function getPage() {
  const client = getClient();
  const page = (await client.fetch(siteQuery))[0];
  const builder = imageUrlBuilder(client);
  const pageWithImageUrls = {
    ...page,
    blocks: page.blocks.map((block: any) => ({
      ...block,
      imageUrl: block.image ? builder.image(block.image).url() : null,
    })),
  };
  return pageWithImageUrls;
}
