import ThemeController from "./ThemeController";

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-base-200">
        <div className="navbar-start">

          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
        {/* todo: some cool animeme */}
        </div>
        <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
            <li>
              <a>Placeholder</a>
            </li>
            <li>
              <a>Resources</a>
            </li>
          </ul>
          <ThemeController />
        </div>
      </div>
    </>
  );
}
