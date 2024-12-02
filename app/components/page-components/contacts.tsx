import Link from "next/link";
import MyAnimeList from "./my-anime-list";

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
              <div className="border-white">
                <Link
                  target="_blank"
                  href="https://myanimelist.net/profile/QingqueE6"
                >
                  MyAnimeList <MyAnimeList />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
