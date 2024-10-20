import { useLoaderData } from "@remix-run/react";
import Experience from "~/components/Experience";
import SplitHeader from "~/components/SplitHeader";
import { aboutQuery, experiencesQuery, getClient } from "~/lib/sanity";

export const loader = async () => {
  const abouts = await getClient().fetch(aboutQuery);
  const experiences = await getClient().fetch(experiencesQuery);
  return { about: abouts[0], experiences };
};

export default function Index() {
  const { about, experiences } = useLoaderData();
  console.log(experiences);
  return (
    <div className="p-8 md:p-32">
      <SplitHeader left="daae" right=".dev" />
      <p className="pt-8 pb-8">{about.bio}</p>
      <Experience experiences={experiences} />
    </div>
  );
}
