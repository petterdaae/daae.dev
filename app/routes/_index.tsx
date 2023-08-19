import { useLoaderData } from "@remix-run/react";
import Experience from "~/components/Experience";
import SplitHeader from "~/components/SplitHeader";
import {
  aboutQuery,
  experiencesQuery,
  getClient,
  togglesQuery,
} from "~/lib/sanity";

export const loader = async () => {
  const abouts = await getClient().fetch(aboutQuery);
  const experiences = await getClient().fetch(experiencesQuery);
  const toggles = await getClient().fetch(togglesQuery);
  return { about: abouts[0], experiences, toggle: toggles[0] };
};

export default function Index() {
  const { about, experiences, toggle } = useLoaderData();
  return (
    <div className="p-8 md:p-32">
      <SplitHeader left="daae" right=".dev" />
      <p className="pt-8 pb-8">{about.description}</p>
      {toggle.toggle && <Experience experiences={experiences} />}
    </div>
  );
}
