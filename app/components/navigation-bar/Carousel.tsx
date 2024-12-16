"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Carousel() {
  const Images = ["image1.jpg", "image2.png", "image3.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 7000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [Images.length]); // Dependency array

  return (
    <div className="relative w-40 h-full">
      {Images.map((image, index) => (
        <Image
          key={index}
          src={"/NavBarCarousel/" + image}
          alt="Navigation-Bar Image"
          className={`absolute w-full h-full object-cover transition-opacity  ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          width={200}
          height={150}
        />
      ))}
    </div>
  );
}
