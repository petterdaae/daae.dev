import { createClient } from "@sanity/client";
import type { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

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

export const siteQuery = `
  *[_type == "page" && path == "/"]`;

export async function getPage() {
  const client = getClient();
  const page = (await client.fetch(siteQuery))[0];
  const pageWithImageUrls = {
    ...page,
    content: page.content.map((element) => {
      if (element._type === "experience") {
        return { ...element, imageUrl: imageUrl(element.image) };
      }
      return element;
    }),
  };
  return pageWithImageUrls;
}

export function imageUrl(image: SanityImageSource): string {
  const client = getClient();
  const builder = imageUrlBuilder(client);
  return builder.image(image).url();
}
