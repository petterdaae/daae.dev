import { createClient } from "@sanity/client";
import type { SanityDocument } from "@sanity/client";

function getClient(useCdn: boolean) {
  return createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-07-01",
    useCdn: useCdn,
    perspective: "published",
  });
}

export async function getPage(path: string, previewDrafts: boolean): Promise<SanityDocument> {
  const client = getClient(!previewDrafts);
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
          },
          _type == "textWithImage" => {
            ...,
            "imageUrl": image.asset->url
          }
        }
      }[0]
    `,
    {
      param: path,
    },
    previewDrafts ? { token: process.env.SANITY_API_READ_TOKEN, perspective: 'previewDrafts' } : {}
  );
}
