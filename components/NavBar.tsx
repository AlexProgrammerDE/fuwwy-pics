import Logo from "public/logo.webp";
import Image from "next/image";
import Link from "next/link";


/**
 * NavBar component that represents the navigation bar of the application.
 * 
 * This component displays the navigation bar at the top of the screen. It includes a logo, the application name,
 * and a menu toggle button for small screens. The navigation bar is styled using the "navbar" class from the
 * Tailwind CSS framework.
 * 
 * The logo is rendered using the "next/image" component, allowing for optimized image handling. The logo image is
 * imported from the "public" directory. The application name is displayed alongside the logo using the "next/link"
 * component for navigation to the home page ("/").
 */
export default function NavBar() {
  return (
    <div className="navbar w-full bg-base-300">
      <div className="container">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="mx-2 flex-1 px-2">
          <Link href="/" className="btn btn-ghost text-xl normal-case">
            <Image src={Logo} alt="FuwwyPics Logo" width={40} height={40} />
            <p className="my-auto ml-2 text-xl font-bold">FuwwyPics</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
