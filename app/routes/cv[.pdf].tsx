import jsPDF from "jspdf";
import { useEffect, useRef } from "react";

import { useLoaderData } from "@remix-run/react";
import Experience from "~/components/Experience";
import SplitHeader from "~/components/SplitHeader";
import {
  siteQuery,
  experiencesQuery,
  getClient,
  togglesQuery,
} from "~/lib/sanity";

export const loader = async () => {
  const sites = await getClient().fetch(siteQuery);
  const experiences = await getClient().fetch(experiencesQuery);
  const toggles = await getClient().fetch(togglesQuery);
  return { about: sites[0], experiences, toggle: toggles[0] };
};

export default function () {
  const { about, experiences, toggle } = useLoaderData();
  const ref = useRef(null);

  useEffect(() => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    var pdf = new jsPDF("p", "pt", "letter");

    setTimeout(() => {
      if (ref.current != null) {
        pdf.addHTML(ref.current, function () {
          pdf.save("Test.pdf");
        });
      }
    }, 1000);
  });

  return (
    <div ref={ref}>
      <Experience experiences={experiences} />
    </div>
  );
}
