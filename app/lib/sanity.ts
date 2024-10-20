import { createClient } from "@sanity/client";
import type { SanityClient, SanityDocument } from "@sanity/client";

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

export async function getPage(path: string): Promise<SanityDocument> {
  const client = getClient();
  return await client.fetch(
    `
      *[_type == "page" && path == $param]{
        content[]{
          ...,
          _type == "experience" => {
            ...,
            "imageUrl": image.asset->url
          },
          _type == "altImage" => {
            ...,
            "imageUrl": image.asset->url
          }
        }
      }[0]
    `,
    {
      param: path,
    }
  );
}
