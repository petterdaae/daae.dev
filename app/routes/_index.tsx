import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import { PortableText } from "@portabletext/react";
import Experience from "~/components/Experience";
import SplitHeader from "~/components/SplitHeader";
import { getPage } from "~/lib/sanity.server";
import AltImage from "~/components/AltImage";
import Event from "~/components/Event";
import TextWithImage from "~/components/TextWithImage";
import Callout from "~/components/Callout";
import H1 from "~/components/H1";
import H2 from "~/components/H2";
import P from "~/components/P";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const preview = url.searchParams.get("preview") == "true";
  const page = await getPage(url.pathname, preview);
  if (!page) {
    throw new Response(null, { status: 404, statusText: "Not Found" });
  }

  return { page };
}

export default function Index() {
  const { page } = useLoaderData<typeof loader>();
  return (
    <div className={`m-auto w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 mb-8`}>
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
            h1: ({ children }) => <H1 className="text-4xl pb-4 pt-16 sm:text-5xl">{children}</H1>,
            h2: ({ children }) => <H2 className="text-2xl sm:text-3xl mt-8">{children}</H2>,
            normal: ({ children }) => <P className="pt-4">{children}</P>,
          },
          marks: {
            center: ({ children }) => <div className="text-center">{children}</div>
          }
        }}
      />
    </div>
  );
}
