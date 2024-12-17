"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Carousel() {
  const Images = [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [Images.length]);

  return (
    <div className="relative w-full h-full">
      {Images.map((image, index) => (
        <Image
          key={index}
          src={"/NavBarCarousel/" + image}
          alt="Navigation-Bar Image"
          fill
          sizes="600px"
          className={`transition-opacity  object-cover w-full h-full ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
