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
