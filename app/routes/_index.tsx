import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PortableText from "react-portable-text";
import Experience from "~/components/Experience";
import SplitHeader from "~/components/SplitHeader";
import { getPage } from "~/lib/sanity";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const page = await getPage(url.pathname);
  if (!page) {
    throw new Response(null, { status: 404, statusText: "Not Found" });
  }
  return page;
};

export default function Index() {
  const page = useLoaderData();
  return (
    <div className="p-8 md:p-32 xl:p-64 xl:pt-32 xl:pb-32">
      <PortableText
        content={page.content}
        serializers={{
          h2: (props: any) => <h3 className="text-2xl pt-8" {...props} />,
          splitHeader: SplitHeader,
          experience: Experience,
        }}
      />
    </div>
  );
}
