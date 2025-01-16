"use client";
import { useState } from "react";
import Gnome from "@/app/components/page-components/gnome";
import getGnomeAudio from "@/app/utils/gnomeUtils";
import GnomeImage from "./components/page-components/gnome-image";
import Image from "next/image";

export default function NotFound() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    const getgnomed = getGnomeAudio(); // Get a random audio file
    getgnomed.play();
    setIsClicked(true);
  };

  return (
    <div className="p-20 space-y-4 flex flex-col items-center justify-center">
      <h1>This page does not exist</h1>
      {isClicked ? (
        <NewComponent />
      ) : (
        <p className="link" onClick={handleClick}>
          Return H O M E
        </p>
      )}
    </div>
  );
}

function NewComponent() {
  return (
    <div>
      <p>Just kidding, this is a gnome</p>
      <GnomeImage />
    </div>
  );
}
