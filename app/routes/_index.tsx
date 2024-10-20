import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PortableText } from "@portabletext/react";
import Experience from "~/components/Experience";
import SplitHeader from "~/components/SplitHeader";
import { getPage } from "~/lib/sanity.server";
import AltImage from "~/components/AltImage";

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
    <div className="p-8 md:p-32 xl:p-64 xl:pt-32 xl:pb-32">
      <PortableText
        value={page.content}
        components={{
          types: {
            splitHeader: SplitHeader,
            experience: Experience,
            altImage: AltImage,
          },
          marks: {
            h1: (props: any) => (
              <h1
                className="text-3xl lg:text-6xl font-bold pt-8 pb-8"
                {...props}
              />
            ),
            h2: (props: any) => (
              <h2 className="text-2xl font-bold pt-4 pb-4" {...props} />
            ),
            normal: (props: any) => <p className="pb-2" {...props} />,
            code: (props: any) => (
              <code className="bg-rose-300 rounded-lg pl-1 pr-1" {...props} />
            ),
          }
        }}
      />
    </div>
  );
}
