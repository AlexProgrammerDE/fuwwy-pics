import { GlobalHead } from "components/GlobalHead";
import Layout from "components/Layout";


/**
 * Custom404 component that represents the page displayed for 404 (Not Found) errors.
 *
 * This component renders the layout structure using the Layout component and includes the GlobalHead component
 * to set the global meta tags for the page. It displays a centered content area with a large "404" heading
 * and a descriptive text for the "Not Found" message.
 *
 * Note: Ensure that the required components, such as GlobalHead and Layout, are properly imported.
 * The styling classes for the headings and text are provided using Tailwind CSS utility classes.
 */
export default function Custom404() {
  return (
    <>
      <GlobalHead />
      <Layout>
        <main className="flex h-full w-full flex-col justify-center text-center">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="text-xl">Not Found!</p>
        </main>
      </Layout>
    </>
  );
}
