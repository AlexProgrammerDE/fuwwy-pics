import Layout from "./Layout";
import { GlobalHead } from "./GlobalHead";


/**
 * LoadingView component that represents a loading state view in the application.
 * 
 * This component displays a loading animation with a spinning circle while the content is being loaded.
 * It includes a global head section (GlobalHead) and utilizes the Layout component to maintain the overall
 * application layout structure. The loading animation is centered on the screen using flexbox utilities.
 * 
 * Note: Ensure that the required components, such as GlobalHead and Layout, are properly imported.
 * The loading animation SVG and associated styles are provided within the component.
 */
export default function LoadingView() {
  return (
    <>
      <GlobalHead />
      <Layout>
        <main className="flex h-full w-full justify-center text-center">
          <div className="m-auto">
            <svg
              className="h-12 w-12 animate-spin"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <title>Loading</title>
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </main>
      </Layout>
    </>
  );
}
