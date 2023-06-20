import type {NextPage} from "next";
import {GlobalHead} from "components/GlobalHead";
import Layout from "components/Layout";
import LoadingView from "components/LoadingView";
import Masonry from "react-masonry-css";
import {breakpointColumnsObj} from "lib/shared";
import Image from "next/image";
import {PostResponse} from "../lib/responses";
import useSWR from "swr";

/**
 * Home component representing the main page of the application.
 *
 * This component is a Next.js NextPage component, which serves as the main entry point for the home page.
 * It imports necessary components such as GlobalHead, Layout, LoadingView, and Masonry.
 * The home page displays a masonry layout of furry posts' images fetched from the backend API.
 *
 * The component uses the useSWR hook from the swr library to fetch data from the specified API endpoint ("/backend/tag/furry/all").
 * It sets the refreshInterval to 20 seconds and defines a custom fetcher function to handle the data fetching.
 *
 * The fetched data is filtered to include only posts of type "IMAGES" and with a specific authorData id.
 * The filtered data is then used to render a masonry layout using the Masonry component.
 *
 * Note: Ensure that the required components and dependencies, such as GlobalHead, Layout, LoadingView,
 * Masonry, Image, and useSWR, are properly imported.
 * The backend API endpoint and the filtering criteria may need to be adjusted based on the specific requirements.
 */


const Home: NextPage = () => {
  const {data, error} = useSWR<PostResponse[]>("/backend/tag/furry/all", {
    refreshInterval: 20000,
    fetcher: async (url) => {
      const res = await fetch(url);
      return await res.json();
    }
  })
  const filteredData = data?.filter((post) => post.type === "IMAGES").filter(post => post.authorData.id === "62596f1b1902fb977e3c980b");

  if (data && filteredData) {
    return (
        <>
          <GlobalHead/>
          <Layout>
            <div className="container flex flex-grow flex-col p-1 md:p-6">
              <h1 className="mx-2 text-2xl font-bold">Furry posts... ({filteredData.map(post => post.images ? post.images.length : 0).reduce((accumulator, current) => {
                return accumulator + current;
              }, 0)} images)</h1>
              <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid h-full w-full"
                  columnClassName="my-masonry-grid_column"
              >
                {filteredData.map((post, index) =>
                    post.images!.map((image) => (
                        <div
                            key={image.id}
                            style={{maxHeight: "60rem"}}
                            className="m-1 max-w-sm overflow-hidden"
                        >
                          <Image
                              alt={`Image from ${post.authorData.name}`}
                              className="rounded-box"
                              src={`/backend/static/images/${image.id}.${image.extension}`}
                              width={image.width}
                              height={image.height}
                          />
                        </div>
                    ))
                )}
              </Masonry>
            </div>
          </Layout>
        </>
    );
  } else {
    return <LoadingView/>;
  }
};

// noinspection JSUnusedGlobalSymbols
export default Home;
