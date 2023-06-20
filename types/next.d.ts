import type { NextComponentType, NextPageContext } from "next";
import type { Session } from "next-auth";
import type { Router } from "next/router";

/**
 * Declaration for the "next/app" module.
 * This module defines the type "AppProps" for the props that can be passed to the main component of a Next.js application.
 */
declare module "next/app" {

   /**
   * Type definition for the props passed to the main component of a Next.js application.
   * @template P - Additional custom props that can be defined.
   */
  type AppProps<P = Record<string, unknown>> = {

     /**
     * The main component of the application.
     * @type NextComponentType - A generic type representing the Next.js page context and the component's props.
     */
    Component: NextComponentType<NextPageContext, any, P>;

    /**
     * The Next.js router object.
     * @type Router
     */
    router: Router;

    /**
     * Optional boolean indicating if the page is statically generated (SSG).
     */
    __N_SSG?: boolean;

     /**
     * Optional boolean indicating if the page is server-side rendered (SSR).
     */
    __N_SSP?: boolean;

    /**
     * The props passed to the main component, including additional custom props.
     * @type P - Additional custom props defined by the user.
     */
    pageProps: P & {
        /**
       * Initial session passed in from `getServerSideProps` or `getInitialProps`.
       * @type Session - An optional object representing the initial session.
       */
      session?: Session;
    };
  };
}
