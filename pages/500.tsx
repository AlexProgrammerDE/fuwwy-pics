import { GlobalHead } from "components/GlobalHead";
import Layout from "components/Layout";

/**
 * Custom500 component that represents the page displayed for 500 (Server-side Error) errors.
 *
 * This component renders the layout structure using the Layout component and includes the GlobalHead component
 * to set the global meta tags for the page. It displays a centered content area with a large "500" heading
 * and a descriptive text for the "Server-side error occurred" message.
 *
 * Note: Ensure that the required components, such as GlobalHead and Layout, are properly imported.
 * The styling classes for the headings and text are provided using Tailwind CSS utility classes.
 */
export default function Custom500() {
  return (
    <>
      <GlobalHead />
      <Layout>
        <main className="flex h-full w-full flex-col justify-center text-center">
          <h1 className="text-5xl font-bold">500</h1>
          <p className="text-lg">Server-side error occurred</p>
        </main>
      </Layout>
    </>
  );
}
