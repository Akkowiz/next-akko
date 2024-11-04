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
      <button
        className="btn w-36 h-24 p-0 flex items-center overflow-hidden opacity-50 hover:opacity-100 rounded-md"
        onClick={handleClick}
      >
        <Image
          className="w-full h-full object-cover"
          src={GnomeIcon}
          alt="Button"
        />
      </button>
    </>
  );
}
