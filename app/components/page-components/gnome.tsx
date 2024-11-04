"use client";
import Image from "next/image";
import GnomeIcon from "@/app/images/GnomeIcon.jpg";

export default function Gnome() {
  function getGnomeAudio() {
    const rng = Math.floor(Math.random() * 6) + 1;
    return new Audio(`/DE_GnomeSounds/GnomeMaleZanyGreetings0${rng}.ogg`);
  }

  function handleClick() {
    const getgnomed = getGnomeAudio(); // Get a random audio file
    getgnomed.play();
  }

  return (
    <>
      <button onClick={handleClick}>
        <Image src={GnomeIcon} alt="Button" />
      </button>
    </>
  );
}
