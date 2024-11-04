import Gnome from "./components/page-components/gnome";
import Hero from "./components/page-components/hero";

export default function Home() {
  return (
    <div className="p-4 space-y-4 flex flex-col items-center justify-center">
      <Hero />
      <Gnome />
    </div>
  );
}
