import { useLoaderData } from "@remix-run/react";
import SplitHeader from "~/components/SplitHeader";
import { aboutQuery, getClient } from "~/lib/sanity";

export const loader = async () => {
  const abouts = await getClient().fetch(aboutQuery);
  return { about: abouts[0] };
};

export default function Index() {
  const { about } = useLoaderData();
  return (
    <div className="p-8 md:p-32">
      <SplitHeader left="daae" right=".dev" />
      <p className="pt-8">{about.bio}</p>
    </div>
  );
}
