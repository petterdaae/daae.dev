import { useLoaderData } from "@remix-run/react";
import { experiencesQuery, getClient } from "~/lib/sanity";

export const loader = async () => {
  const experiences = await getClient().fetch(experiencesQuery);
  return { experiences };
};

export default function Index() {
  const { experiences } = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome to daae.dev!</h1>
      <h2>Experience</h2>
      <ul>
        {experiences.map((experience: any) => (
          <li key={experience._id}>{experience.company}</li>
        ))}
      </ul>
    </div>
  );
}
