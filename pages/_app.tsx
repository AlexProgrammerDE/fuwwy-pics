import "styles/globals.css";
import type {AppProps} from "next/app";
import {NextComponentType} from "next";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Head from "next/head";


/**
 * Custom App component that serves as the entry point for the Next.js application.
 *
 * Props:
 * - Component: NextComponentType & { auth?: boolean } - The main component to be rendered.
 *   - The 'auth' property is optional and can be used to specify authentication-related behavior.
 *
 * This component is responsible for setting up the application's global configuration and layout.
 * It imports and applies the global CSS styles from "styles/globals.css" using the "@import" statement.
 * It also configures the default locale for the "TimeAgo" library to use the English locale.
 *
 * The "App" component receives the following props:
 * - Component: The main component to be rendered, which can optionally include the 'auth' property.
 * - pageProps: The page-specific props passed to the main component.
 *   - The 'session' prop is extracted and the remaining props are spread into the 'pageProps' variable.
 *
 * The rendered JSX includes the "Head" component from "next/head" to set the viewport meta tag,
 * followed by rendering the main component with the spread 'pageProps'.
 */
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
