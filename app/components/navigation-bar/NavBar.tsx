import ThemeController from "./ThemeController";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@/app/images/HutaoIcon.png";
import Carousel from "./Carousel";

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-base-200 h-20">
        <div className="navbar-start space-x-2">
          <Link href="/">
            <Image
              src={HomeIcon}
              alt="Home"
              className="h-20 w-20 hover:opacity-80"
            />
          </Link>
          <ThemeController />
        </div>
        <div className="navbar-center h-20 w-60">
          <Carousel />
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal">
            {/* <li>
              <Link href="/placeholder">Placeholder</Link>
            </li> */}
            <li>
              <Link href="/resources">Resources</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
