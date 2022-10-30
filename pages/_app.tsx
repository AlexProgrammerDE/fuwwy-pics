import "styles/globals.css";
import type {AppProps} from "next/app";
import {NextComponentType} from "next";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Head from "next/head";

if (!global._hasSetTime) {
  TimeAgo.addDefaultLocale(en);
  global._hasSetTime = true;
}

type CustomAppProps = AppProps & {
  Component: NextComponentType & { auth?: boolean }; // add auth type
};

// noinspection JSUnusedGlobalSymbols
export default function App({
                              Component,
                              pageProps: {session, ...pageProps}
                            }: CustomAppProps) {
  // noinspection HtmlRequiredTitleElement
  return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Component {...pageProps} />
      </>
  );
}
