import {
  ReactNode,
  useState
} from "react";
import NavBar from "./NavBar";
import Drawer from "./Drawer";
import { HealthResponse } from "lib/responses";
import Footer from "./Footer";
import useSWR from "swr";
import { Montserrat } from '@next/font/google';

/**
 * Layout component that represents the overall layout structure of the application.
 * 
 * Props:
 * - children: ReactNode - The content to be rendered within the layout.
 * 
 * This component acts as the top-level container for the application's layout. It includes a drawer,
 * a navigation bar (NavBar), the main content (children), and a footer. The layout uses the Montserrat
 * font from the '@next/font/google' package, applying it to the entire document using 'min-w-screen',
 * 'min-h-screen', and the 'Montserrat' font class name.
 * 
 * The Drawer component wraps the NavBar, the main content (children), and the Footer, providing a
 * consistent layout structure across different pages. The NavBar and Footer components are responsible
 * for rendering the navigation menu and the footer section of the application respectively.
 *
*/



const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin", "latin-ext"],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
      <div className={`min-w-screen min-h-screen ${montserrat.className}`}>
        <Drawer>
          <NavBar />
          {children}
          <Footer />
        </Drawer>
      </div>
  );
}
