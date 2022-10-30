import type {NextPage} from "next";
import {GlobalHead} from "components/GlobalHead";
import Layout from "components/Layout";
import LoadingView from "components/LoadingView";
import Masonry from "react-masonry-css";
import {breakpointColumnsObj} from "lib/shared";
import Image from "next/image";
import {PostResponse} from "../lib/responses";
import useSWR from "swr";

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
              <h1 className="mx-2 text-2xl font-bold">Furry posts...</h1>
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
