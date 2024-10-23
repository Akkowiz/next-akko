"use client";
import { useRef } from "react";

export default function Gnome() {
  const getgnomed = new Audio("/getgnomed.mp3");

  function handleClick() {
    getgnomed.play();
  }

  return (
    <>
      <button onClick={handleClick}>Ooo</button>
    </>
  );
}
