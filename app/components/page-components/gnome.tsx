"use client";
import Image from "next/image";
import getGnomeAudio from "@/app/utils/gnomeUtils";
import GnomeImage from "@/app/components/page-components/gnome-image";

export default function Gnome() {
  function handleClick() {
    const getgnomed = getGnomeAudio(); // Get a random audio file
    getgnomed.play();
  }

  return (
    <>
      <button
        className="btn w-36 h-24 p-0 overflow-hidden rounded-md opacity-60 hover:opacity-100"
        onClick={handleClick}
      >
        <GnomeImage />
      </button>
    </>
  );
}
