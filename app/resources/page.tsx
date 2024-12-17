import Link from "next/link";
import Gnome from "../components/page-components/gnome";

export default function Resources() {
  return (
    <div className="p-20 space-y-4 flex flex-col items-center justify-center">
      <h1>Resources</h1>
      <div className="card w-6/12 outline">
        <div className="hero-content">
          <p>
            Some places, things or people that helped me create this website:
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                className="link"
                href="https://www.w3schools.com/react/default.asp"
              >
                W3Schools React Basics
              </Link>
            </li>
            <li>
              <Link
                className="link"
                href="https://maximilian-schwarzmueller.com/"
              >
                Maximilian Schwarzmüller for his cool next.js course
              </Link>
            </li>
            <li>
              <Link
                className="link"
                href="https://codepen.io/thebabydino/pen/WNVPdJg"
              >
                Ana Tudor on codepen.io for this cool rainbow-glow you see on
                the homepage
              </Link>
            </li>
            <li>
              <Link className="link" href="https://www.neil.games/">
                Neil for being himself
              </Link>
            </li>
            <li>
              <Link className="link" href="https://widgets.vendicated.dev/">
                A very very cool discord embedding tool!
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <Gnome /> */}
    </div>
  );
}
