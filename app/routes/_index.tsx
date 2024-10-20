import { useLoaderData } from "@remix-run/react";
import SplitHeader from "~/components/SplitHeader";
import { experiencesQuery, getClient } from "~/lib/sanity";

export const loader = async () => {
  const experiences = await getClient().fetch(experiencesQuery);
  return { experiences };
};

export default function Index() {
  const { experiences } = useLoaderData();
  return (
    <div className="flex justify-center pt-32">
      <SplitHeader left="daae" right=".dev" />
    </div>
  );
}
