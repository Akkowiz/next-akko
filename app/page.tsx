import Contacts from "./components/page-components/contacts";
import Gnome from "./components/page-components/gnome";
import Hero from "./components/page-components/hero";
import MyAnimeList from "./components/page-components/my-anime-list";

export default function Home() {
  return (
    <div className="p-20 space-y-4 flex flex-col items-center justify-center">
      <Hero />
      <Contacts />

      <Gnome />
    </div>
  );
}
