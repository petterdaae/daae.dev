import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "react-router";
import "./app.css";
import { useNonce } from "./lib/nonce";

export async function loader() {
  return {
    projectId: process.env.SANITY_PROJECT_ID || null,
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const nonce = useNonce();
  const { projectId } = useLoaderData<typeof loader>();
  const isDaae = projectId === "9ijxh2qg";
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={isDaae ? "font-mono" : ""}>
        {children}
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
