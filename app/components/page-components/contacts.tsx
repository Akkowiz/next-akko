import Link from "next/link";
import MyAnimeList from "./my-anime-list";
import GitHubbers from "../git-hubbers";
import DiscordEmbed from "./discord";

export default function Contacts() {
  return (
    <div className="card w-8/12">
      <div className="hero-content">
        <div className="">
          <div className="text-center">
            <h1>You can find me on these thingies:</h1>
          </div>

          <ul className="space-y-1">
            <li>
              <Link
                className="opacity-60 hover:opacity-100"
                target="_blank"
                href="https://open.spotify.com/user/mdzexa1bk7k9e12miwmfizv5y"
              >
                Spotify
              </Link>
            </li>
            <li>
              <Link
                className="opacity-60 hover:opacity-100"
                target="_blank"
                href="https://github.com/QingqueE6"
              >
                GitHub
                <GitHubbers />
              </Link>
            </li>
            <li>
              <Link
                className="opacity-60 hover:opacity-100"
                target="_blank"
                href="https://myanimelist.net/profile/QingqueE6"
              >
                MyAnimeList (Work in Progress!)
                <MyAnimeList />
              </Link>
            </li>
            <li>
              Discord
              <DiscordEmbed />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
