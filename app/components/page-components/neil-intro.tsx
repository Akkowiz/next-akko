"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import getRealGnomeAudio from "@/app/utils/realGnomeUtils";
import getTheRealShit from "@/app/utils/getTheRealShit";
import GnomeImage from "@/app/components/page-components/gnome-image";
import Freddie from "@/app/images/freddie.png";

export default function NeilIntro() {
    const [visibleGnome, toggleGnome] = useState(true);

    function handleClick() {
        const song = getTheRealShit();
        song.play();
        // const getgnomed = getRealGnomeAudio();
        // getgnomed.play();
        toggleGnome(false);
    }

    if (visibleGnome) {
        return (
            <>
                <div className="col-span-6 py-4">
                    <span className="line-through">Step</span> Click on me please
                </div>
                <button
                    className="btn w-36 h-24 p-0 border-0 rounded-md overflow-hidden opacity-60 hover:opacity-100"
                    onClick={handleClick}
                >
                    <GnomeImage />
                </button>
            </>
        );
    } else {
        return (
            <>
                <div
                    className="relative max-w-[1920px] w-full max-h-[calc(100vh-64px)] lg:max-h-[calc(100vh-80px)] bg-black flex justify-center items-center"
                    style={{ aspectRatio: "16 / 9" }}
                >
                    <Image
                        src={Freddie}
                        alt="Freddie"
                        width={1920}
                        height={1080}
                        className="fade-in max-w-full max-h-full object-contain"
                    />
                    <div className="absolute top-4 left-1/2 text-xl text-white font-serif italic fade-in">
                        See you, space cowboy... <br />
                        and happy belated birthday 🕯️
                    </div>
                </div>
            </>
        );
    }
}
