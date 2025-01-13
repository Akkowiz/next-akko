import Link from "next/link";
import MyAnimeList from "./my-anime-list";
import GitHubbers from "../git-hubbers";
import DiscordEmbed from "./discord";

const SpotifyUser = `https://open.spotify.com/user/` + process.env.SPOTIFY_USER;

export default function Contacts() {
  return (
    <div className="card w-10/12 lg:w-6/12 py-2 outline justify-center items-center">
      <div className="hero-content">
        <div className="w-10/12 lg:w-full">
          <div className="text-center content-center">
            <h1>You can find me on:</h1>
          </div>
          <ul className="space-y-1">
            <li className="">
              <Link
                className="lg:opacity-60 hover:opacity-100"
                target="_blank"
                href={SpotifyUser}
              >
                <div className="divider divider-neutral">Spotify</div>
              </Link>
            </li>
            <li>
              <Link
                className="lg:opacity-60 hover:opacity-100"
                target="_blank"
                href="https://github.com/QingqueE6"
              >
                <div className="divider divider-neutral">GitHub</div>
                <GitHubbers />
              </Link>
            </li>
            <li>
              <Link
                className="lg:opacity-60 hover:opacity-100"
                target="_blank"
                href="https://myanimelist.net/profile/Akkowiz"
              >
                <div className="divider divider-neutral">MyAnimeList</div>
                <MyAnimeList />
              </Link>
            </li>
            <li>
              <div className="divider divider-neutral">Discord</div>
              <DiscordEmbed />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
