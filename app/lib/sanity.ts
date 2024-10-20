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

export async function getPage(path: string) {
  const client = getClient();
  const page = await client.fetch(`*[_type == "page" && path == $param][0]`, {
    param: path,
  });
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
