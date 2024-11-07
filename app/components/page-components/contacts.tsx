import Link from "next/link";

export default function Contacts() {
  return (
    <>
      <p>You can find me on these thingies:</p>
      <p>Discord</p> // embed? check discord docs
      <Link href="">Spotify</Link>
      <Link href="">
        MyAnimeList
        <br />
        (WIP, migrating from proxer.me)
      </Link>
    </>
  );
}
