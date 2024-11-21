import Link from "next/link";

export default function Contacts() {
  return (
    <div className="card w-192">
      <div className="hero-content">
        <div className="">
          <div className="text-center">
            <h1>You can find me on these thingies:</h1>
          </div>

          <ul>
            <li>
              <p>Discord</p>
            </li>
            <li>
              <Link href="">Spotify</Link>
            </li>
            <li>
              <Link href="">GitHub</Link>
            </li>
            <li>
              <Link href="">MyAnimeList (WIP)</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
