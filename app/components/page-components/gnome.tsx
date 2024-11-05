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
        className="btn w-36 h-24 p-0 flex items-center overflow-hidden opacity-50 hover:opacity-100 rounded-md"
        onClick={handleClick}
      >
        <GnomeImage />
      </button>
    </>
  );
}
