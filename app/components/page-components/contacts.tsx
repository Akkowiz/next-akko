import Link from "next/link";
import MyAnimeList from "./my-anime-list";
import GitHubbers from "../git-hubbers";
import DiscordEmbed from "./discord";

export default function Contacts() {
  return (
    <div className="card w-6/12 outline">
      <div className="hero-content">
        <div className="">
          <div className="text-center">
            <h1>You can find me on:</h1>
          </div>

          <ul className="space-y-1">
            <li>
              <Link
                className="opacity-50 hover:opacity-100"
                target="_blank"
                href="https://open.spotify.com/user/mdzexa1bk7k9e12miwmfizv5y"
              >
                <div className="divider divider-neutral">Spotify</div>
              </Link>
            </li>
            <li>
              <Link
                className="opacity-50 hover:opacity-100"
                target="_blank"
                href="https://github.com/QingqueE6"
              >
                <div className="divider divider-neutral">GitHub</div>
                <GitHubbers />
              </Link>
            </li>
            <li>
              <Link
                className="opacity-50 hover:opacity-100"
                target="_blank"
                href="https://myanimelist.net/profile/QingqueE6"
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
