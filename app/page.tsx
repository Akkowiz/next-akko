import Contacts from "./components/page-components/contacts";
import Gnome from "./components/page-components/gnome";
import Hero from "./components/page-components/hero";

export default function Home() {
  return (
    <div className="lg:my-0 lg:p-20 py-4 space-y-4 flex flex-col items-center justify-center ">
      <Hero />
      <Contacts />
      <Gnome />
    </div>
  );
}
