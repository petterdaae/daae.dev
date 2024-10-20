import { useLoaderData } from "@remix-run/react";
import Experience from "~/components/Experience";
import SplitHeader from "~/components/SplitHeader";
import { getPage } from "~/lib/sanity";

export const loader = async () => {
  return await getPage();
};

export default function Index() {
  const page = useLoaderData();
  return (
    <div className="p-8 md:p-32">
      {page.blocks.map((block: any) => (
        <div key={block._key}>
          {block._type == "splitHeader" && (
            <SplitHeader left={block.left} right={block.right} />
          )}
          {block._type == "plainText" && (
            <p className="pt-8 pb-8">{block.value}</p>
          )}
          {block._type == "header" && (
            <h3 className="text-2xl">{block.value}</h3>
          )}
          {block._type == "experience" && <Experience experience={block} />}
        </div>
      ))}
    </div>
  );
}
