import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PortableText } from "@portabletext/react";
import Experience from "~/components/Experience";
import SplitHeader from "~/components/SplitHeader";
import { getPage } from "~/lib/sanity.server";
import AltImage from "~/components/AltImage";
import Event from "~/components/Event";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const page = await getPage(url.pathname);
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
            event: Event
          },
          block: {
            h2: ({ children }) => <h2 className="text-2xl font-bold pt-4 pb-4">{children}</h2>,
            h1: ({ children }) => <h1 className="text-3xl lg:text-6xl font-bold pt-8 pb-8">{children}</h1>,
            normal: ({ children }) => <p className="pb-2">{children}</p>,
          }
        }}
      />
    </div>
  );
}
