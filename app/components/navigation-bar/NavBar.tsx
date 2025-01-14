import ThemeController from "./ThemeController";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@/app/images/HutaoIcon.png";
import Carousel from "./Carousel";

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-base-200 h-16 lg:h-20 p-0 outline outline-base-300/80">
        <div className="navbar-start space-x-1">
          <Link href="/">
            <Image
              src={HomeIcon}
              alt="Home"
              className="size-16 lg:size-20 lg:hover:opacity-60"
            />
          </Link>
          <ThemeController />
        </div>
        <div className="navbar-center h-16 lg:h-20 w-40 lg:w-60">
          <Carousel />
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal">
            <li>
              <Link href="/resources">Resources</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
