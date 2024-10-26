import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PortableText } from "@portabletext/react";
import Experience from "~/components/Experience";
import SplitHeader from "~/components/SplitHeader";
import { getPage } from "~/lib/sanity.server";
import AltImage from "~/components/AltImage";
import Event from "~/components/Event";
import TextWithImage from "~/components/TextWithImage";
import callout from "sanity/duolignum.no/schemas/objects/callout";
import Callout from "~/components/Callout";
import H2 from "~/components/H2";
import H1 from "~/components/H1";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const preview = url.searchParams.get("preview") == "true";
  const page = await getPage(url.pathname, preview);
  if (!page) {
    throw new Response(null, { status: 404, statusText: "Not Found" });
  }
  return json(page);
}

export default function Index() {
  const page = useLoaderData<typeof loader>();
  return (
    <div className="m-auto w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 mb-8">
      <PortableText
        value={page.content}
        components={{
          types: {
            splitHeader: SplitHeader,
            experience: Experience,
            altImage: AltImage,
            event: Event,
            textWithImage: TextWithImage,
            callout: Callout
          },
          block: {
            h2: H2,
            // h1: ({ children }) => <h1 className="text-3xl lg:text-6xl font-bold pt-8 pb-8">{children}</h1>,
            h1: H1,
            normal: ({ children }) => <p className="">{children}</p>,
          }
        }}
      />
    </div>
  );
}
